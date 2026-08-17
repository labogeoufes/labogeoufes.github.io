const papers = [
  {
    year: 2025,
    img: 'assets/images/papers/bandeira_et_al_2025.png',
    link: 'https://www.mdpi.com/2673-964X/5/4/46',
    title: 'Assessment of the Erodibility of Cohesive Sediment with Varied Sand Content',
    authors: 'BANDEIRA, M.D.O.; GRILO, C.F.; OLIVEIRA, K.S.S.; BASTOS, A.C.; QUARESMA, V.D.S.',
    journal: 'COASTS'
  },
  {
    year: 2025,
    img: 'assets/images/papers/falsarella_et_al_2025.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S027277142500410X',
    title: 'Local and climatic drivers of coral growth in Southwestern Atlantic turbid-zone reefs',
    authors: 'FALSARELLA, L.N.; CARDOSO, G.O.; CHIROQUE-SOLANO, P.M.; CARLOS-JÚNIOR, L.A.; CARDOSO, F.C.; KAMPEL, M.; BASTOS, A.C.; MOURA, R.L.',
    journal: 'ESTUARINE COASTAL AND SHELF SCIENCE'
  },
  {
    year: 2025,
    img: 'assets/images/papers/lavagnino_et_al_2025.png',
    link: 'https://www.mdpi.com/2076-3263/15/1/7',
    title: 'Seabed Acoustic Mapping Revealing an Uncharted Habitat of Circular Depressions Along the Southeast Brazilian Outer Shelf',
    authors: 'LAVAGNINO, A.C.; LEITE, M.D.; FRANCO, T.; MENANDRO, P.S.; VIEIRA, F.V.; BONI, G.C.; BASTOS, A.C.',
    journal: 'GEOSCIENCES'
  },
  {
    year: 2025,
    img: 'assets/images/papers/lowe_et_al_2025.png',
    link: 'https://www.nature.com/articles/s41597-025-04491-1',
    title: 'BenthicNet: A global compilation of seafloor images for deep learning applications',
    authors: 'LOWE, S.C.; MISIUK, B.; XU, I.; ABDULAZIZOV, S.; BAROI, A.R.; BASTOS, A.C.; BEST, M.; FERRINI, V.; FRIEDMAN, A.; HART, D.; HOEGH-GULDBERG, O.; IERODIACONOU, D.; MACKIN-MCLAUGHLIN, J.; MARKEY, K.; MENANDRO, P.S.; MONK, J.; NEMANI, S.; O\'BRIEN, J.; OH, E.; RESHITNYK, L.Y.; et.al',
    journal: 'SCIENTIFIC DATA'
  },
  {
    year: 2025,
    img: 'assets/images/papers/menandro_et_al_2025.png',
    link: 'https://www.frontiersin.org/journals/remote-sensing/articles/10.3389/frsen.2025.1546280/full',
    title: 'Multifrequency seafloor acoustic backscatter as a tool for improved biological and geological assessments - updating knowledge, prospects, and challenges',
    authors: 'MENANDRO, P.S.; MISIUK, B.; SCHNEIDER VON DEIMLING, J.; BASTOS, A.C.; BROWN, C.J.',
    journal: 'FRONTIERS IN REMOTE SENSING'
  },
  {
    year: 2025,
    img: 'assets/images/papers/rocha_et_al_2025.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0272771425001799',
    title: 'A novel zooplankton-based environmental monitoring tool for coastal impacted areas: The case of the Doce River dam rupture',
    authors: 'ROCHA, G.M.; SALVADOR, B.; COSTA SANTOS, G.H.; RODRIGUES DA CONCEIÇÃO, L.; TEIXEIRA-AMARAL, P.; DI DOMENICO, M.; DE ARRUDA XAVIER, D.; COSTA, E.S.; CAGNIN, R.C.; ALEXANDRO DA SILVA, C.; BANDEIRA, M.; DE SOUZA MENDES, M.; BRASILEIRO, G.C.; SALVIATO, J.T.; MARTINS PAIVA, T.R.; SALVADOR LÁZARO, G.C.; BARBOZA TENÓRIO, M.M.; LEMOS, K.N.; GHISOLFI, R.D.; QUARESMA, V.D.S.; et.al',
    journal: 'ESTUARINE COASTAL AND SHELF SCIENCE'
  },
  {
    year: 2025,
    img: 'assets/images/papers/rodrigues_et_al_2025.png',
    link: 'https://jm.copernicus.org/articles/44/633/2025/',
    title: 'From river mouth to reef: benthic foraminifera assemblages reveal ecological dynamics in a mixed carbonate-siliciclastic Brazilian continental shelf',
    authors: 'RODRIGUES, A.R.; DE ALMEIDA, F.K.; QUARESMA, V.S.; DE MELLO, R.M.; GRILO, C.F.; JARDIM, K.A.; ROMUALDO, P.P.; BASTOS, A.C.',
    journal: 'JOURNAL OF MICROPALAEONTOLOGY'
  },
  {
    year: 2025,
    img: 'assets/images/papers/santosfilho_et_al_2025.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S092479632500082X',
    title: 'Unveiling the mesophotic South Atlantic reef system (SARS): Mapping, evolution, and implications for Marine Spatial Planning (MSP) in the Western South Atlantic',
    authors: 'SANTOS FILHO, J.R.D.; DIAS, G.T.D.M.; FIGUEIREDO JR., A.G.; CARNEIRO, J.C.; SILVA, C.G.; DIAS, M.S.; BASTOS, A.C.',
    journal: 'JOURNAL OF MARINE SYSTEMS'
  },
  {
    year: 2024,
    img: 'assets/images/papers/paper1_2024.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S2667010024000556',
    title: 'Ex-post impact assessment on a large environmental disaster',
    authors: 'FRANCO, T.; DE ALMEIDA, S.Z.; SÁ, F.; BIANCHINI, A.; DERGAM, J.A.; SANT\'ANNA, E.M.E.; ALBINO, J.; VIEIRA, L.S.; SANTOS, L.G.M.; RIBEIRO, A.P.L.; BASTOS, A.C.',
    journal: 'ENVIRONMENTAL CHALLENGES'
  },
  {
    year: 2024,
    img: 'assets/images/papers/paper2_2024.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0025322724000276',
    title: 'MWP-1C and reef drowning: Morphological evidence along the eastern Brazilian margin',
    authors: 'CETTO, P.H.; BASTOS, A.C.; MENANDRO, P.S.; WEBSTER, J.M',
    journal: 'MARINE GEOLOGY'
  },
  {
    year: 2024,
    img: 'assets/images/papers/carneiro_et_al_2024.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0141113623004324',
    title: 'Precision and accuracy of common coral reef sampling protocols revisited with photogrammetry',
    authors: 'CARNEIRO, I.M.; SÁ, J.A.; CHIROQUE-SOLANO, P.M.; CARDOSO, F.C.; CASTRO, G.M.; SALOMON, P.S.; BASTOS, A.C.; MOURA, R.L.',
    journal: 'MARINE ENVIRONMENTAL RESEARCH'
  },
  {
    year: 2024,
    img: 'assets/images/papers/franco_et_al_2024b.png',
    link: 'https://pubs.geoscienceworld.org/sepm/palaios/article/39/5/161/644837/HIGHLY-BIOERODED-RHODOLITHS-FROM-THE-VITORIA',
    title: 'HIGHLY BIOERODED RHODOLITHS FROM THE VITÓRIA-TRINDADE SEAMOUNT CHAIN (BRAZIL, SOUTHWESTERN ATLANTIC)',
    authors: 'FRANCO, T.; BASTOS, A.C.; BASSI, D.; BRAGA, J.C.',
    journal: 'PALAIOS'
  },
  {
    year: 2024,
    img: 'assets/images/papers/menandro_et_al_2024.png',
    link: 'https://www.frontiersin.org/journals/remote-sensing/articles/10.3389/frsen.2024.1490741/full',
    title: 'Exploring the multispectral acoustic response of reef habitats',
    authors: 'MENANDRO, P.S.; VIEIRA, F.V.; BASTOS, A.C.; BROWN, C.J.',
    journal: 'FRONTIERS IN REMOTE SENSING'
  },
  {
    year: 2024,
    img: 'assets/images/papers/ruschi_et_al_2024.png',
    link: 'https://www.nature.com/articles/s41598-024-75223-5',
    title: 'Pleistocene to early Holocene paleoenvironmental evolution of the Abrolhos depression (Brazil) based on benthic foraminifera',
    authors: 'RUSCHI, A.G.; RODRIGUES, A.R.; CETTO, P.H.; BASTOS, A.C.',
    journal: 'SCIENTIFIC REPORTS'
  },
  {
    year: 2024,
    img: 'assets/images/papers/ximenes_et_al_2024.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0025322724001889',
    title: 'Drowned barriers and valleys: A morphological archive of base level changes in the western South Atlantic',
    authors: 'XIMENES NETO, A.R.; QUARESMA, V.S.; MENANDRO, P.S.; CETTO, P.H.; BASTOS, A.C.',
    journal: 'MARINE GEOLOGY'
  },
  {
    year: 2023,
    img: 'assets/images/papers/paper1_2023.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0278434323000237',
    title: 'Intake of trace contaminants by corals in Abrolhos reef bank (western South Atlantic) during two decades of coastal impacts',
    authors: 'EVANGELISTA, H.; DE PAULA, R.L.M.; MAGALHÃES, N.; DE GOIS, J.S.; LUNA, A.S.; CAGNIN, R.C.; QUARESMA, V.S.; BEZERRA, F.F.; DIA, J.P.; SANTOS, R.V.; PULLEN, A.; CRIVELLARI, S.; CHIESSI, C.M.; BATISTA, D.B.; GONÇALVES, S.J.; DE OLIVEIRA, B.V.X.; BIZELLI, P.A.R.; SODRÉ, E.D.; ANGONESE, M.; OAQUIM, A.B.J.',
    journal: 'CONTINENTAL SHELF RESEARCH'
  },
  {
    year: 2023,
    img: 'assets/images/papers/paper2_2023.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S2352485523001901',
    title: 'Trace metals distribution along sediment profiles from the Doce River Continental Shelf (DRCS) 3 years after the biggest environmental disaster in Brazil, the collapse of the Fundão Dam',
    authors: 'AGUIAR, V.M.C.; BASTOS, A.C.; QUARESMA, V.S.; ORLANDO, M.T.A.; VIEIRA, F.V.; CAVICHINI, A.S.; NETO, J.A.B.',
    journal: 'REGIONAL STUDIES IN MARINE SCIENCE'
  },
  {
    year: 2023,
    img: 'assets/images/papers/paper3_2023.png',
    link: 'https://www.nature.com/articles/s41598-023-46240-7',
    title: 'Multispectral multibeam backscatter response of heterogeneous rhodolith beds',
    authors: 'MENANDRO, P.S.; MISIUK, B.; BROWN, C.J.; BASTOS, A.C.',
    journal: 'SCIENTIFIC REPORTS'
  },
  {
    year: 2023,
    img: 'assets/images/papers/paper4_2023.png',
    link: 'https://www.frontiersin.org/journals/remote-sensing/articles/10.3389/frsen.2023.1111825/full',
    title: 'Geomorphological significance of shelf-incised valleys as mesophotic habitats',
    authors: 'DE OLIVEIRA, N.; LAVAGNINO, A.C.; ROCHA, G.A.; DE MOURA, R.L.; BASTOS, A.C.',
    journal: 'FRONTIERS IN REMOTE SENSING'
  },
  {
    year: 2023,
    img: 'assets/images/papers/castro_et_al_2023.png',
    link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0293259',
    title: 'Incised valleys drive distinctive oceanographic processes and biological assemblages within rhodolith beds',
    authors: 'CASTRO, G.M.; VARGENS, R.P.; CARLOS-JÚNIOR, L.A.; CARDOSO, F.C.; SALOMON, P.S.; TENÓRIO, M.M.B.; BASTOS, A.C.; OLIVEIRA, N.; GHISOLFI, R.D.; CORDEIRO, R.T.S.; MOURA, R.L.',
    journal: 'PLOS ONE'
  },
  {
    year: 2023,
    img: 'assets/images/papers/dealmeida_et_al_2023.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0377839823000117',
    title: 'The influence of submarine canyons-related processes on recent benthic foraminiferal distribution, Espírito Santo Basin, Southeastern Brazil',
    authors: 'DE ALMEIDA, F.K.; DE MELLO, R.M.; BASTOS, A.C.',
    journal: 'MARINE MICROPALEONTOLOGY'
  },
  {
    year: 2023,
    img: 'assets/images/papers/limafilho_et_al_2023.png',
    link: 'https://seer.ufrgs.br/index.php/PesquisasemGeociencias/article/view/123975',
    title: 'Sedimentos Relíquias, Palimpsestos e as alusões Paleoambientais e Eustáticas',
    authors: 'LIMA FILHO, M.D.C.; QUARESMA, V.D.S.; BASTOS, A.C.; DUARTE, R.M.',
    journal: 'PESQUISAS EM GEOCIÊNCIAS'
  },
  {
    year: 2023,
    img: 'assets/images/papers/neves_et_al_2023a.png',
    link: 'https://ojs.aprh.pt/index.php/rgci/article/view/531',
    title: 'Influência da hidrodinâmica e dinâmica sedimentar da baía do Espírito Santo na variabilidade do padrão de assoreamento no porto de Tubarão, Brasil',
    authors: 'NEVES, R.C.; QUARESMA, V.D.S.; BASTOS, A.C.',
    journal: 'REVISTA DE GESTÃO COSTEIRA INTEGRADA'
  },
  {
    year: 2023,
    img: 'assets/images/papers/neves_et_al_2023b.png',
    link: 'https://ojs.aprh.pt/index.php/rgci/article/view/533',
    title: 'Proveniência dos sedimentos finos para o porto de Tubarão, Brasil',
    authors: 'NEVES, R.C.; QUARESMA, V.D.S.; BASTOS, A.C.',
    journal: 'REVISTA DE GESTÃO COSTEIRA INTEGRADA'
  },
  {
    year: 2023,
    img: 'assets/images/papers/vieira_et_al_2023.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0169555X23003379',
    title: 'Submerged reef and inter-reef morphology in the Western South Atlantic, Abrolhos Shelf (Brazil)',
    authors: 'VIEIRA, F.V.; BASTOS, A.C.; QUARESMA, V.S.',
    journal: 'GEOMORPHOLOGY'
  },
  {
    year: 2023,
    img: 'assets/images/papers/vinzon_et_al_2023.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S1001627923000586',
    title: 'The role of waves in the resuspension and transport of fine sediment and mine tailings from the Fundão Dam failure, Doce River, Brazil',
    authors: 'VINZON, S.B.; GALLO, M.N.; GABIOUX, M.; FONSECA, D.L.; ACHETE, F.M.; GHISOLFI, R.D.; MILL, G.N.; RAMOS DA FONSECA, S.A.; QUARESMA, V.D.S.; SANTOS OLIVEIRA, K.S.; BRIGAGÃO, G.; MACHADO, L.G.',
    journal: 'INTERNATIONAL JOURNAL OF SEDIMENT RESEARCH'
  },
  {
    year: 2022,
    img: 'assets/images/papers/paper1_2022.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0025322722001219',
    title: 'Sedimentological and morphological evidences of Meltwater Pulse 1B in the Southwestern Atlantic Margin',
    authors: 'BASTOS, A.C.; D\'AGOSTINI, D.P.; SILVA, A.E.; MENANDRO, P.S.; VIEIRA, F.V.; BONI, G.C.; QUARESMA, V.S.; CETTO, P.H.',
    journal: 'MARINE GEOLOGY'
  },
  {
    year: 2022,
    img: 'assets/images/papers/paper2_2022.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0895981122000529',
    title: 'Sedimentological signatures of river-shelf processes in a wave-dominated delta front',
    authors: 'DOS SANTOS, R.L.; BASTOS, A.C.; QUARESMA, V.S.',
    journal: 'JOURNAL OF SOUTH AMERICAN EARTH SCIENCES'
  },
  {
    year: 2022,
    img: 'assets/images/papers/paper3_2022.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0048969721064214',
    title: 'Iron rich self-assembly micelles on the Doce River continental shelf',
    authors: 'GRILO, C.F.; CAVICHINI, A.S.; ORLANDO, M.T.A.; BASTOS, A.C.; OLIVEIRA, K.S.S.; GARCEZ, L.R.; BANDEIRA, M.; JÚNIOR, A.C.; RUSCHI, A.; FADINI, K.; GARONCE, F.; NEVES, R.C.; D\'AGOSTINI, D.P.; SÁ, F.; QUARESMA, V.S.',
    journal: 'SCIENCE OF THE TOTAL ENVIRONMENT'
  },
  {
    year: 2022,
    img: 'assets/images/papers/paper4_2022.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0967063722000012',
    title: 'Bathymetric and regional benthic foraminiferal distribution on the Espírito Santo Basin slope, Brazil (SW Atlantic)',
    authors: 'DE ALMEIDA, F.K.; DE MELLO, R.M.; RODRIGUES, A.R.; BASTOS, A.C.',
    journal: 'DEEP-SEA RESEARCH PART I-OCEANOGRAPHIC RESEARCH PAPERS'
  },
];
