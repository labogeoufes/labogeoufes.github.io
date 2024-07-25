async function fetchTranslation(page, lang) {
  const response = await fetch(`./translations/${page}/${lang}.json`); 
  const translations = await response.json();
  return translations;
}

function applyTranslations(translations) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[key]) {
      element.innerText = translations[key];
    }
  });
}

async function setLanguage(page, lang) {
  const translations = await fetchTranslation(page, lang);
  let language = document.querySelector(".language-selected");

  if (!page.includes("index")) {
    if (lang == "pt") {
      language.innerHTML = "<span class='fi fi-br'></span> PT";
    } else {
      language.innerHTML = "<span class='fi fi-us'></span> EN";
    }
  }
  applyTranslations(translations);
  localStorage.setItem("language", lang);
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", () => {
  let page = window.location.pathname.split(".")[0];
  let lang = localStorage.getItem("language");
  setLanguage(page, lang);
});
