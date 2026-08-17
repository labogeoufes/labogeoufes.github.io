async function fetchTranslation(page, lang) {
  const path = page.startsWith('equip_')
    ? `./translations/equip/${lang}.json`
    : `./translations/${page}/${lang}.json`;
  const response = await fetch(path);
  const translations = await response.json();
  return translations;
}

function applyTranslations(translations) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}

function formatDates(lang) {
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const fmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  document.querySelectorAll('[data-date]').forEach(el => {
    const d = new Date(el.getAttribute('data-date') + 'T00:00:00');
    el.textContent = fmt.format(d);
  });
}

async function setLanguage(page, lang) {
  const translations = await fetchTranslation(page, lang);
  let language = document.querySelector(".language-selected");

  if (!page.includes("index")) {
    let fi = language.querySelector('.fi');
    if (!fi) {
      fi = document.createElement('span');
      language.appendChild(fi);
    }
    fi.className = lang === 'pt' ? 'fi fi-br' : 'fi fi-gb';
  }
  applyTranslations(translations);
  formatDates(lang);
  localStorage.setItem("language", lang);
  if (typeof onLanguageChange === 'function') onLanguageChange(lang);
  var activeFilterBtn = document.querySelector('#myBtnContainer .btn.active');
  var filterLabel = document.getElementById('filterDropdownLabel');
  if (activeFilterBtn && filterLabel) filterLabel.textContent = activeFilterBtn.textContent;
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", () => {
  let page = window.location.pathname.split(".")[0].replace("/", "");
  let lang = localStorage.getItem("language");
  setLanguage(page, lang);
});
