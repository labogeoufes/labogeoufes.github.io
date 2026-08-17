const projects = [
  // Em andamento
{ status: 'ongoing',
    pt: { title: 'NÚCLEO DE EXCELÊNCIA - GEOMAR GEOCIÊNCIAS MARINHAS', 
      fund: 'Fundo de Amparo a Pesquisa do Espírito Santo', 
      time: '2022 - 20XX', 
      memb: 'Alex Cardoso Bastos (Coordenador), Paulo Henrique Cetto, Fabiana Karla Almeida, Valéria Da Silva Quaresma, Jose Antonio Baptista Neto, Fabian Sá, Marcos Tadeu D\'Azeredo Orlando, Kyssyanne Samihra Santos Oliveira, Caroline Fiório Grilo, Luigi Jovane e André R. Rodrigues'
    },
    en: { title: 'NÚCLEO DE EXCELÊNCIA - GEOMAR GEOCIÊNCIAS MARINHAS',
       fund: 'Fundo de Amparo a Pesquisa do Espírito Santo', 
       time: '2022 - 20XX', 
       memb: 'Alex Cardoso Bastos (PI), Paulo Henrique Cetto, Fabiana Karla Almeida, Valéria Da Silva Quaresma, Jose Antonio Baptista Neto, Fabian Sá, Marcos Tadeu D\'Azeredo Orlando, Kyssyanne Samihra Santos Oliveira, Caroline Fiório Grilo, Luigi Jovane, André R. Rodrigues'
    }
  },
{ status: 'ongoing',
    pt: { title: 'PALEOBAT-ES: CALIBRAÇÃO DAS ZONAS PALEOBATIMÉTRICAS COM O QUATERNÁRIO DA BACIA DO ESPÍRITO SANTO', 
      fund: 'Fundação Espírito Santense de Tecnologia', 
      time: '2022 - 20XX',
      memb: 'Alex Cardoso Bastos (Coordenador), Valéria da Silva Quaresma, Caroline Fiório Grilo, Fabiana Karla de Almeida, André R. Rodrigues'
    },
    en: { title: 'PALEOBAT-ES: CALIBRAÇÃO DAS ZONAS PALEOBATIMÉTRICAS COM O QUATERNÁRIO DA BACIA DO ESPÍRITO SANTO',
      fund: 'Fundação Espírito Santense de Tecnologia',
      time: '2022 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Valéria da Silva Quaresma, Caroline Fiório Grilo, Fabiana Karla de Almeida, André R. Rodrigues'
    }
  },
{ status: 'ongoing',
    pt: { title: 'TRANSPORTE SEDIMENTAR NA PLATAFORMA DO ESPÍRITO SANTO',
      fund: 'Fundação de Amparo à Pesquisa do Espírito Santo',
      time: '2022 - 20XX',
      memb: 'Valéria da Silva Quaresma (Coordenadora), Alex Cardoso Bastos, Kyssyanne S. S. Oliveira, Caroline F. Grilo, Fernanda Vedoato Vieira' },
    en: { title: 'TRANSPORTE SEDIMENTAR NA PLATAFORMA DO ESPÍRITO SANTO',
      fund: 'Fundação de Amparo à Pesquisa do Espírito Santo',
      time: '2022 - 20XX',
      memb: 'Valéria da Silva Quaresma (PI), Alex Cardoso Bastos, Kyssyanne S. S. Oliveira, Caroline F. Grilo, Fernanda Vedoato Vieira'
    }
  },
{ status: 'ongoing',
    pt: { title: 'BECOME - BENTHIC ECOSYSTEM MAPPING FOR SUSTAINABLE OCEAN STEWARDSHIP IN A SHIFTING OCEAN CLIMATE',
      fund: 'N/A',
      time: '2020 - 20XX',
      memb: 'Craig Brown (Coordenador), Alex Cardoso Bastos, Pedro S. Menandro, Ana Carolina Lavagnino, Katleen Robert, Geandre Carlos Boni, Fernanda Vedoato Vieira'
    },
    en: { title: 'BECOME - BENTHIC ECOSYSTEM MAPPING FOR SUSTAINABLE OCEAN STEWARDSHIP IN A SHIFTING OCEAN CLIMATE',
      fund: 'N/A',
      time: '2020 - 20XX',
      memb: 'Craig Brown (PI), Alex Cardoso Bastos, Pedro S. Menandro, Ana Carolina Lavagnino, Katleen Robert, Geandre Carlos Boni, Fernanda Vedoato Vieira'
    }
  },
{ status: 'ongoing',
    pt: { title: 'PMBA PROGRAMA DE MONITORAMENTO DA BIODIVERSIDADE AQUÁTICA - ÁREA AMBIENTAL I',
      fund: 'Fundação Espírito Santense de Tecnologia',
      time: '2018 - 20XX',
      memb: 'Alex Cardoso Bastos (Coordenador), Gilberto Barroso, Camilo Dias, Jacqueline Albino, Rodrigo Leão De Moura, Agnaldo Silva Martins, Leonardo T. Salgado, Leila Longo, Renato D. Ghisolfi, Renato Rodrigues Neto, Valéria Da Silva Quaresma, Paulo S. Salomon, Luiz Fernando Loureiro Fernandes, Fabian Sá, Edmilson Teixeira, Eustaquio Castro, Adalto Bianchini, Jorge Dergam, Ana Paula Cazerta Farro, Leandro Bugoni, Mauricio Hostim, Monica Tognella, Heitor Evangelista'
  },
    en: { title: 'PMBA PROGRAMA DE MONITORAMENTO DA BIODIVERSIDADE AQUÁTICA - ÁREA AMBIENTAL I',
      fund: 'Fundação Espírito Santense de Tecnologia',
      time: '2018 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Gilberto Barroso, Camilo Dias, Jacqueline Albino, Rodrigo Leão De Moura, Agnaldo Silva Martins, Leonardo T. Salgado, Leila Longo, Renato D. Ghisolfi, Renato Rodrigues Neto, Valéria Da Silva Quaresma, Paulo S. Salomon, Luiz Fernando Loureiro Fernandes, Fabian Sá, Edmilson Teixeira, Eustaquio Castro, Adalto Bianchini, Jorge Dergam, Ana Paula Cazerta Farro, Leandro Bugoni, Mauricio Hostim, Monica Tognella, Heitor Evangelista'
    }
  },
{ status: 'ongoing',
    pt: { title: 'IMPACTOS ASSOCIADOS A LAMA DE REJEITO NOS HABITATS MARINHOS E ESTUARINOS DA FOZ DO RIO DOCE: UMA VISÃO GEOLÓGICA, FÍSICA, QUÍMICA E BIOLÓGICA',
      fund: 'N/A',
      time: '2017 - 20XX',
      memb: 'Alex Cardoso Bastos (Coordenador), Valéria Da Silva Quaresma, José Antonio Baptista Neto, Renato Rodrigues Neto, Leila De Lourdes Longo, Susana B. Vinzon, Gilberto Menezes Amado Filho, Rodrigo Leão De Moura'
    },
    en: { title: 'IMPACTOS ASSOCIADOS A LAMA DE REJEITO NOS HABITATS MARINHOS E ESTUARINOS DA FOZ DO RIO DOCE: UMA VISÃO GEOLÓGICA, FÍSICA, QUÍMICA E BIOLÓGICA',
      fund: 'N/A',
      time: '2017 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Valéria Da Silva Quaresma, José Antonio Baptista Neto, Renato Rodrigues Neto, Leila De Lourdes Longo, Susana B. Vinzon, Gilberto Menezes Amado Filho, Rodrigo Leão De Moura'
    }
  },
{ status: 'ongoing',
    pt: { title: 'REMAZON - Mapeamento e Caracterização da Geodiversidade, Biodiversidade e Ecologia dos Sistemas Recifais Mesofóticos da Bacia da Foz do Amazonas',
      fund: 'Centro de Pesquisa e Desenvolvimento Leopoldo Américo Miguêz de Mello / Agência Nacional do Petróleo',
      time: '2025 - 20XX',
      memb: 'Alex Cardoso Bastos (Coordenador), Valeria da Silva Quaresma, Rodrigo Leão de Moura, Valdenira Santos, Debora Pimentel Diniz Santos, Eduardo Tavares Paes'
    },
    en: { title: 'REMAZON - Mapeamento e Caracterização da Geodiversidade, Biodiversidade e Ecologia dos Sistemas Recifais Mesofóticos da Bacia da Foz do Amazonas',
      fund: 'Centro de Pesquisa e Desenvolvimento Leopoldo Américo Miguêz de Mello / Agência Nacional do Petróleo',
      time: '2025 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Valeria da Silva Quaresma, Rodrigo Leão de Moura, Valdenira Santos, Debora Pimentel Diniz Santos, Eduardo Tavares Paes'
    }
  },
{ status: 'ongoing',
    pt: { title: 'Estudo da Paisagem Marinha em Parques Eólicos Offshore (Seascape Wind) - FASE I',
      fund: 'Centro de Pesquisa e Desenvolvimento Leopoldo Américo Miguêz de Mello / Agência Nacional do Petróleo',
      time: '2023 - 20XX',
      memb: 'Alex Cardoso Bastos (Coordenador), Paulo Henrique Cetto, Renato Carrera, Arthur Ayres Neto, Tarcila Franco, Valeria Da Silva Quaresma, Pedro Smith Menandro, Rodrigo Leão De Moura, Jose Antonio Baptista Neto, Mayara Bandeira, Luciano Fonseca, Ana Laura Piol'
    },
    en: { title: 'Estudo da Paisagem Marinha em Parques Eólicos Offshore (Seascape Wind) - FASE I',
      fund: 'Centro de Pesquisa e Desenvolvimento Leopoldo Américo Miguêz de Mello / Agência Nacional do Petróleo',
      time: '2023 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Paulo Henrique Cetto, Renato Carrera, Arthur Ayres Neto, Tarcila Franco, Valeria Da Silva Quaresma, Pedro Smith Menandro, Rodrigo Leão De Moura, Jose Antonio Baptista Neto, Mayara Bandeira, Luciano Fonseca, Ana Laura Piol'
    }
  },
{ status: 'ongoing',
    pt: { title: 'Reconstrução Paleoambiental da Plataforma Continental do ES e Sul da Bahia: registros morfológicos e sedimentológicos da subida do nível do mar nos últimos 20.000 anos',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      time: '2023 - 20XX',
      memb: 'Alex Cardoso Bastos (Coordenador), Valeria Da Silva Quaresma, Tatiana Dadalto, Juliana Pereira Quadros'
    },
    en: { title: 'Reconstrução Paleoambiental da Plataforma Continental do ES e Sul da Bahia: registros morfológicos e sedimentológicos da subida do nível do mar nos últimos 20.000 anos',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      time: '2023 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Valeria Da Silva Quaresma, Tatiana Dadalto, Juliana Pereira Quadros'
    }
  },
{ status: 'ongoing',
    pt: { title: 'Instituto Nacional de Ciência e Tecnologia Atlântico',
       fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)',
        time: '2023 - 20XX',
         memb: 'Alex Cardoso Bastos (Coordenador), Luigi Jovane, Cleverson Guizan Silva, José Antonio Cupertino, Felipe A. L. Toledo, Sidney Luis De Matos Mello, Cristiano Mazur Chiessi, Gerson Fauth, Farid Chemale Junior'
    },
    en: { title: 'Instituto Nacional de Ciência e Tecnologia Atlântico',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)',
      time: '2023 - 20XX',
      memb: 'Alex Cardoso Bastos (PI), Luigi Jovane, Cleverson Guizan Silva, José Antonio Cupertino, Felipe A. L. Toledo, Sidney Luis De Matos Mello, Cristiano Mazur Chiessi, Gerson Fauth, Farid Chemale Junior'
    }
  },
  // Finalizados
{ status: 'terminated',
    pt: { title: 'DINÂMICA SEDIMENTAR EM SISTEMAS PORTUÁRIOS: UMA ABORDAGEM SISTÊMICA E MULTIDISCIPLINAR (SEDPORTOS)',
      fund: 'N/A',
      time: '2016 - 2024',
      memb: 'Alex Cardoso Bastos (Coordenador), Susana Beatriz Vinzón, Josefa Varela Guerra, Marcos Nicolas Gallo, Arthur Ayres Neto, Valéria da Silva Quaresma'
    },
    en: { title: 'DINÂMICA SEDIMENTAR EM SISTEMAS PORTUÁRIOS: UMA ABORDAGEM SISTÊMICA E MULTIDISCIPLINAR (SEDPORTOS)',
      fund: 'N/A',
      time: '2016 - 2024',
      memb: 'Alex Cardoso Bastos (PI), Susana Beatriz Vinzón, Josefa Varela Guerra, Marcos Nicolas Gallo, Arthur Ayres Neto, Valéria da Silva Quaresma'
    }
  },
{ status: 'terminated',
    pt: { title: 'DESVENDANDO A MARGEM EQUATORIAL DA AMAZÔNIA AZUL: ESTRUTURA, DIVERSIDADE E ASPECTOS FUNCIONAIS DOS RECIFES ASSOCIADOS À FOZ DO RIO AMAZONAS',
      fund: 'Agência Nacional do Petróleo',
      time: '2016 - 2020',
      memb: 'Leonardo T. Salgado (Coordenador), Alex Cardoso Bastos, Rodrigo Leão De Moura, Pedro S. Menandro, Paulo S. Salomon, Fernando Coreixas Moraes, Belinda Dechnik, Milton Kampel, Ana Carolina Lavagnino'
    },
    en: { title: 'DESVENDANDO A MARGEM EQUATORIAL DA AMAZÔNIA AZUL: ESTRUTURA, DIVERSIDADE E ASPECTOS FUNCIONAIS DOS RECIFES ASSOCIADOS À FOZ DO RIO AMAZONAS',
      fund: 'Agência Nacional do Petróleo',
      time: '2016 - 2020',
      memb: 'Leonardo T. Salgado (PI), Alex Cardoso Bastos, Rodrigo Leão De Moura, Pedro S. Menandro, Paulo S. Salomon, Fernando Coreixas Moraes, Belinda Dechnik, Milton Kampel, Ana Carolina Lavagnino'
   }
  },
{ status: 'terminated',
    pt: { title: 'MONITORAMENTO AMBIENTAL DO IMPACTO DA LAMA DE REJEITO DA BARRAGEM DE FUNDÃO (MG) NA PLATAFORMA CONTINENTAL DO ESPÍRITO SANTO',
      fund: 'N/A',
      time: '2015 - 2018',
      memb: 'Alex Cardoso Bastos (Coordenador), Valéria Da Silva Quaresma, Renato David Ghisolfi, Renato Rodrigues Neto, Camilo Dias Jr., Luiz Fernando Loureiro, Leila De Lourdes Longo'
    },
    en: { title: 'MONITORAMENTO AMBIENTAL DO IMPACTO DA LAMA DE REJEITO DA BARRAGEM DE FUNDÃO (MG) NA PLATAFORMA CONTINENTAL DO ESPÍRITO SANTO',
      fund: 'N/A',
      time: '2015 - 2018',
      memb: 'Alex Cardoso Bastos (PI), Valéria Da Silva Quaresma, Renato David Ghisolfi, Renato Rodrigues Neto, Camilo Dias Jr., Luiz Fernando Loureiro, Leila De Lourdes Longo'
    }
  },
{ status: 'terminated',
    pt: { title: 'PVE CIÊNCIAS SEM FRONTEIRAS RECIFES AFOGADOS DA PLATAFORMA E QUEBRA DA PLATAFORMA DE ABROLHOS: GEOMORFOLOGIA, EVOLUÇÃO E INDICADORES DE VARIAÇÃO DO NÍVEL DO MAR',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      time: '2014 - 2018',
      memb: 'Alex Cardoso Bastos (Coordenador), Rodrigo Leão de Moura, Gilberto M Amado Filho, Jody Webster, Laura Silveira Vieira'
    },
    en: { title: 'PVE CIÊNCIAS SEM FRONTEIRAS RECIFES AFOGADOS DA PLATAFORMA E QUEBRA DA PLATAFORMA DE ABROLHOS: GEOMORFOLOGIA, EVOLUÇÃO E INDICADORES DE VARIAÇÃO DO NÍVEL DO MAR',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      time: '2014 - 2018',
      memb: 'Alex Cardoso Bastos (PI), Rodrigo Leão de Moura, Gilberto M Amado Filho, Jody Webster, Laura Silveira Vieira'
    }
  },
{ status: 'terminated',
    pt: { title: 'DINÂMICA COMPORTAMENTAL DE SEDIMENTOS COESIVOS EM ÁREAS ESTUARINAS E PORTUÁRIAS',
      fund: 'Fundação de Amparo à Pesquisa do Espírito Santo',
      time: '2007 - 2014',
      memb: 'Alex Cardoso Bastos (Coordenador), Valéria da Silva Quaresma'
    },
    en: { title: 'DINÂMICA COMPORTAMENTAL DE SEDIMENTOS COESIVOS EM ÁREAS ESTUARINAS E PORTUÁRIAS',
      fund: 'Fundação de Amparo à Pesquisa do Espírito Santo',
      time: '2007 - 2014',
      memb: 'Alex Cardoso Bastos (PI), Valéria da Silva Quaresma'
    }
  },
{ status: 'terminated',
    pt: { title: 'SEDIMENTOS FINOS EM ESTUÁRIOS E PC: FORMAÇÃO E DINÂMICA DE DEPÓSITOS LAMOSOS',
      fund: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior',
      time: '2010 - 2014',
      memb: 'Susana Vinzon (Coordenadora), Valeria da Silva Quaresma, Alex Cardoso Bastos, Josefa Varela Guerra'
    },
    en: { title: 'SEDIMENTOS FINOS EM ESTUÁRIOS E PC: FORMAÇÃO E DINÂMICA DE DEPÓSITOS LAMOSOS',
      fund: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior',
      time: '2010 - 2014',
      memb: 'Susana Vinzon (PI), Valeria da Silva Quaresma, Alex Cardoso Bastos, Josefa Varela Guerra'
    }
  },
  { status: 'terminated',
    pt: { title: 'DESVENDANDO A MARGEM EQUATORIAL DA AMAZÔNIA AZUL: ESTRUTURA, DIVERSIDADE E ASPECTOS FUNCIONAIS DOS RECIFES ASSOCIADOS À FOZ DO RIO AMAZONAS',
      fund: 'Agência Nacional do Petróleo',
      time: '2016 - 2020',
      memb: 'Leonardo T. Salgado (Coordenador), Alex Cardoso Bastos, Rodrigo Leão De Moura, Pedro S. Menandro, Paulo S. Salomon, Fernando Coreixas Moraes, Belinda Dechnik, Milton Kampel, Ana Carolina Lavagnino'
    },
    en: { title: 'DESVENDANDO A MARGEM EQUATORIAL DA AMAZÔNIA AZUL: ESTRUTURA, DIVERSIDADE E ASPECTOS FUNCIONAIS DOS RECIFES ASSOCIADOS À FOZ DO RIO AMAZONAS',
      fund: 'Agência Nacional do Petróleo',
      time: '2016 - 2020',
      memb: 'Leonardo T. Salgado (PI), Alex Cardoso Bastos, Rodrigo Leão De Moura, Pedro S. Menandro, Paulo S. Salomon, Fernando Coreixas Moraes, Belinda Dechnik, Milton Kampel, Ana Carolina Lavagnino'
    }
  },
  { status: 'terminated',
    pt: { title: 'CARACTERIZAÇÃO GEOQUÍMICA DO ARSÊNIO EM DEPÓSITOS SEDIMENTARES DAS PLATAFORMAS ADJACENTES DE ABROLHOS (BA) E DO RIO DOCE (ES)',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      time: '2013- 2018',
      memb: 'Valeria da Silva Quaresma (Coordenadora), José Antonio Baptista Neto, Renata Caiado Cagnin'
    },
    en: { title: 'CARACTERIZAÇÃO GEOQUÍMICA DO ARSÊNIO EM DEPÓSITOS SEDIMENTARES DAS PLATAFORMAS ADJACENTES DE ABROLHOS (BA) E DO RIO DOCE (ES)',
      fund: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      time: '2013- 2018',
      memb: 'Valeria da Silva Quaresma (PI), José Antonio Baptista Neto, Renata Caiado Cagnin'
    }
  },
];

const projectLabels = {
  pt: { time: 'Período:', fund: 'Fomento:', memb: 'Integrantes:' },
  en: { time: 'Period:', fund: 'Funding:', memb: 'Members:' }
};
