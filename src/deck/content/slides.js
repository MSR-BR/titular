function equationAsset(id, alt, caption) {
  return {
    src: `assets/equations/${id}.svg`,
    alt,
    caption,
  };
}

window.MemorialDeckSlides = [
  {
    id: "s01-title",
    layout: "title",
    section: "Abertura",
    eyebrow: "Memorial academico",
    title: "Mario Reis",
    subtitle: "Memorial para Professor Titular | Instituto de Fisica | Universidade Federal Fluminense",
    footerRefs: "MEM p.1",
    sourceRefs: ["E001"],
    notes: "Abrir com a tese da apresentacao: a trajetoria integra pesquisa em materia condensada, formacao de pessoas, construcao institucional e agenda futura."
  },
  {
    id: "s02-thesis",
    layout: "content",
    section: "Abertura",
    eyebrow: "Tese do memorial",
    title: "Uma trajetoria de integracao",
    lead: "O memorial organiza uma carreira em que pesquisa, ensino, orientacao, infraestrutura, internacionalizacao e lideranca editorial se reforcam mutuamente.",
    items: [
      "Formacao: magnetismo experimental no CBPF, doutorado com manganitas e uma fase internacional longa em Aveiro.",
      "UFF: docencia, orientacao, livros, laboratorios e infraestrutura cientifica passam a operar como um sistema.",
      "Resultados: entropia, magnetismo, materiais moleculares, grafeno e termodinamica quantica como eixo tecnico.",
      "Impacto: citacoes, redes internacionais, editoria cientifica, inovacao e agenda futura como professor titular."
    ],
    footerRefs: "MEM pp.6,45-46",
    sourceRefs: ["E002", "E006", "E017", "E027"]
  },
  {
    id: "s03-map",
    layout: "cards",
    section: "Abertura",
    eyebrow: "Indice",
    title: "Estrutura do memorial",
    cards: [
      { label: "Formacao", text: "UFRJ, CBPF, mestrado experimental, doutorado em manganitas e estatistica de Tsallis." },
      { label: "UFF", text: "Ensino, orientacao, livros, Laboratorio de Magnetismo, L3D e construcao institucional." },
      { label: "Resultados", text: "Tsallis, efeito magnetocalorico, complexos metalicos, informacao quantica, grafeno e termodinamica quantica." },
      { label: "Impacto", text: "Indicadores, internacionalizacao, lideranca editorial, inovacao, perspectivas e fechamento." }
    ],
    footerRefs: "Estrutura alinhada aos capitulos do memorial",
    sourceRefs: ["E002", "E030", "E017", "E027"]
  },
  {
    id: "s04-first-steps",
    layout: "timeline",
    section: "Formacao",
    eyebrow: "Formacao | trajetoria inicial",
    title: "Do interesse por exatas ao primeiro laboratorio",
    milestones: [
      { label: "1993", text: "Ingresso no Bacharelado em Fisica da UFRJ." },
      { label: "1996", text: "Inicio da iniciacao cientifica no CBPF." },
      { label: "1997", text: "Conclusao da graduacao em Fisica." },
      { label: "CBPF", text: "Contato sistematico com magnetismo, instrumentacao e pesquisa experimental." }
    ],
    footerRefs: "MEM pp.7-8",
    sourceRefs: ["E003"]
  },
  {
    id: "s05-master",
    layout: "content",
    section: "Formacao",
    eyebrow: "Formacao | CBPF | Mestrado",
    title: "Magnetismo experimental como base",
    lead: "O mestrado consolidou a formacao experimental em compostos intermetalicos RCo3, combinando magnetizacao, RMN e modelos de magnetismo.",
    items: [
      "Sistemas estudados: (Y,Gd)Co3 e Y(Co,Al)3.",
      "Tecnicas: magnetizacao e ressonancia magnetica nuclear.",
      "Problema fisico: instabilidade dos momentos eletronicos 3d.",
      "Resultado formativo: seis publicacoes internacionais a partir do mestrado."
    ],
    footerRefs: "MEM pp.8-9",
    sourceRefs: ["E004"]
  },
  {
    id: "s06-doctorate",
    layout: "technical",
    section: "Formacao",
    eyebrow: "Formacao | CBPF | Doutorado",
    title: "Manganitas, separacao de fases e estatistica de Tsallis",
    lead: "No doutorado, a pesquisa passou a integrar fabricacao de amostras, caracterizacao magnetica e modelagem teorica nao extensiva.",
    items: [
      "Manganitas de valencia mista como sistema central.",
      "Formalismo de Tsallis para descrever sistemas magneticos nao homogeneos.",
      "Reformulacao de modelos classicos de magnetismo, incluindo Brillouin e Langevin.",
      "Conclusao em 2003, em 3,5 anos, com 12 artigos publicados."
    ],
    equations: [
      equationAsset("tsallis-entropy", "Entropia de Tsallis", "formalismo nao extensivo"),
      equationAsset("q-exponential", "q-exponencial", "limite q -> 1 recupera Boltzmann-Gibbs"),
      equationAsset("tsallis-magnetization", "Magnetizacao q", "q como medida efetiva de nao homogeneidade")
    ],
    footerRefs: "MEM pp.8-11; refs. [3-8]",
    sourceRefs: ["E004", "E018"]
  },
  {
    id: "s07-aveiro-sandwich",
    layout: "content",
    section: "Formacao",
    eyebrow: "Formacao internacional | Aveiro I",
    title: "Doutorado sanduiche: manganitas, RMN e modelo",
    lead: "A ida a Aveiro nao foi apenas mobilidade: foi a etapa em que a tese conectou amostras de manganitas, medidas magneticas, RMN e analise teorica.",
    items: [
      "No CBPF, a tese ja articulava fabricacao de amostras, magnetizacao, RMN e estatistica nao extensiva.",
      "Na Universidade de Aveiro, em 2001-2002, o trabalho seguiu no grupo do Prof. Vitor Amaral, com manganitas de valencia mista.",
      "A visita ao laboratorio do Prof. Pierre Panissod, em Estrasburgo, ampliou o conjunto experimental com medidas de RMN.",
      "A experiencia criou a primeira rede internacional estruturada, que continuou apos o doutorado.",
      "O resultado formativo foi um modo de trabalho permanente: experimento quantitativo mais modelo microscopico."
    ],
    footerRefs: "MEM pp.9-11",
    sourceRefs: ["E005", "E030"],
    notes: "Enfatizar que Aveiro aparece como formacao cientifica e nao como viagem: o ponto e a maturacao da integracao experimento-teoria."
  },
  {
    id: "s08-aveiro-postdoc",
    layout: "content",
    section: "Formacao",
    eyebrow: "Formacao internacional | Aveiro II",
    title: "Pos-doutorado: Tsallis em sistemas magneticos reais",
    lead: "Entre 2003 e 2005, o pos-doutorado manteve o foco em manganitas, mas com maior autonomia na interpretacao fisica da nao homogeneidade magnetica.",
    items: [
      "O parametro q passou a ser tratado como descritor efetivo da distribuicao de interacoes e da separacao de fases.",
      "A continuidade experimental permitiu testar o formalismo em curvas de magnetizacao e susceptibilidade.",
      "Conferencias na Franca, Grecia e Italia ampliaram a circulacao internacional dos resultados.",
      "A etapa consolidou uma identidade cientifica pre-UFF: materia condensada, magnetismo e termodinamica estatistica.",
      "Essa base reaparece depois nas linhas de efeito magnetocalorico e materiais moleculares."
    ],
    footerRefs: "MEM pp.11-13",
    sourceRefs: ["E005", "E030"],
    notes: "Usar este slide para explicar a passagem de formacao para autonomia cientifica."
  },
  {
    id: "s09-ciceco",
    layout: "content",
    section: "Formacao",
    eyebrow: "Formacao internacional | Aveiro III",
    title: "CICECO: laboratorio, VSM e complexos metalicos",
    lead: "De 2005 a 2009, o CICECO transformou a experiencia internacional em posicao institucional, responsabilidade experimental e nova agenda de pesquisa.",
    items: [
      "Atuacao na implantacao, organizacao, manutencao e uso cientifico de laboratorio de magnetismo.",
      "Integração de um magnetometro de amostra vibrante (VSM) a protocolos de caracterizacao de materiais.",
      "Transicao gradual das manganitas para complexos metalicos, com enfase em anisotropia, troca magnetica e resposta termodinamica.",
      "Inicio de orientacoes formais: coorientacao de mestrandos e supervisao de pesquisadores em pos-doutorado.",
      "Preparacao direta para a montagem de infraestrutura experimental que viria depois na UFF."
    ],
    footerRefs: "MEM pp.11-13",
    sourceRefs: ["E005", "E030"],
    notes: "Fazer a ponte para UFF: CICECO ensinou gestao de laboratorio, formacao de pessoas e mudanca de linha cientifica."
  },
  {
    id: "s10-uff-entry",
    layout: "section",
    section: "UFF",
    eyebrow: "UFF | desde 2009",
    title: "Da trajetoria individual a construcao institucional",
    subtitle: "O ingresso na UFF em dezembro de 2009 reorganiza a carreira em torno de ensino, pesquisa, orientacao, extensao, infraestrutura e vida institucional.",
    footerRefs: "MEM pp.12,20-21",
    sourceRefs: ["E006", "E016"]
  },
  {
    id: "s11-teaching",
    layout: "cards",
    section: "UFF",
    eyebrow: "Ensino",
    title: "Um portfolio entre teoria, experimento e aplicacao",
    cards: [
      { label: "Teoria", text: "Fisica Moderna, Introducao a Mecanica Quantica, Mecanica Quantica e Termodinamica." },
      { label: "Experimento", text: "Física Experimental e disciplinas de laboratorio ao longo da graduacao." },
      { label: "Pos", text: "Topicos de materia condensada, magnetismo e disciplinas avancadas." },
      { label: "Aplicacao", text: "Automacao e Robotica aplicada a Fisica, com roteiros e projetos proprios." }
    ],
    footerRefs: "MEM pp.12-13,48-50",
    sourceRefs: ["E007"]
  },
  {
    id: "s12-books",
    layout: "cards",
    section: "UFF",
    eyebrow: "Livros",
    title: "Pesquisa, sala de aula e livro-texto",
    lead: "A producao editorial segue uma mesma logica no memorial: pesquisa acumulada alimenta disciplinas, as disciplinas geram material sistematizado, e esse material vira livro.",
    cards: [
      { label: "2010 | ISBN 978-85-7861-079-1", text: "Magnetismo Molecular, Editora Livraria da Fisica, com Antonio Moreira dos Santos; magnetos moleculares, spins, troca e termodinamica." },
      { label: "2013 | ISBN 978-0-12-405545-2", text: "Fundamentals of Magnetism, Elsevier; fundamentos teoricos, magnetismo nao cooperativo, cooperativo e molecular." },
      { label: "2025 | ISBN 978-0-443-32826-8", text: "Quantum Mechanics: Theory and Applications, Elsevier; resultado de 10 anos de material de mecanica quantica." },
      { label: "em redacao", text: "Termodinamica para Estudantes de Fisica, a partir de notas de aula de 2024-2026." }
    ],
    figure: {
      src: "assets/figures/books-academic-covers.png",
      alt: "Capas dos livros academicos publicados",
      caption: "Capas extraidas da Figura 6.1 do memorial."
    },
    footerRefs: "MEM pp.13,37-40; refs. [36,57-59]",
    sourceRefs: ["E008"],
    notes: "Mostrar que os livros nao sao item lateral: eles conectam pesquisa, pos-graduacao e graduacao."
  },
  {
    id: "s13-people",
    layout: "metrics",
    section: "UFF",
    eyebrow: "Formacao de pessoas",
    title: "Orientacao como multiplicacao academica",
    metrics: [
      { value: "25", label: "IC e extensao" },
      { value: "5", label: "monografias" },
      { value: "4", label: "mestrados" },
      { value: "5 + 1", label: "doutorados orientados + coorientacao" },
      { value: "10", label: "pos-doutorados supervisionados" }
    ],
    lead: "Os numeros visiveis usam o memorial como fonte principal, evitando as aproximacoes divergentes da apresentacao exemplo.",
    footerRefs: "MEM pp.13-16,21,97",
    sourceRefs: ["E009", "E010", "E029"]
  },
  {
    id: "s14-former-students",
    layout: "content",
    section: "UFF",
    eyebrow: "Egressos",
    title: "Formacao que se distribui em instituicoes",
    lead: "Ex-orientandos e supervisionados ocupam posicoes em universidades, centros de pesquisa e instituicoes publicas.",
    items: [
      "Universidades: UFRJ, UFOB, USP, UFRB, UERJ, PUC-Rio e UFF Petropolis.",
      "Institutos e setor publico: IF Sudeste de Minas Gerais, Caixa Economica Federal e CBPF.",
      "A formacao atua tambem como interiorizacao e expansao da pesquisa e do ensino superior."
    ],
    footerRefs: "MEM pp.15-16",
    sourceRefs: ["E011"]
  },
  {
    id: "s15-lab-magnetism",
    layout: "cards",
    section: "UFF",
    eyebrow: "Infraestrutura",
    title: "Laboratorio de Magnetismo da UFF",
    cards: [
      { label: "Contexto UFF", text: "Ingresso em um movimento de renovacao experimental do IF, com foco em materia condensada e novas frentes de pesquisa." },
      { label: "Equipamentos", text: "PPMS com acessorios para medidas magneticas e de transporte, liquefatora de helio e operacao em altos campos/baixas temperaturas." },
      { label: "Construcao", text: "Projetos de fomento, apoio institucional, espaco fisico, instalacao, protocolos e manutencao experimental." },
      { label: "Formacao", text: "Equipe com docentes, pos-doutorandos e estudantes; laboratorio destacado em reportagem institucional da FAPERJ." }
    ],
    figure: {
      src: "assets/figures/lab-magnetismo-uff-2014.png",
      alt: "Equipe do Laboratorio de Magnetismo da UFF em 2014",
      caption: "Equipe do Laboratorio de Magnetismo da UFF durante a consolidacao da infraestrutura experimental, fevereiro de 2014."
    },
    footerRefs: "MEM pp.16-17,21",
    sourceRefs: ["E012", "E015"],
    notes: "Ligar com CICECO: experiencia anterior com VSM e protocolos experimentais aparece aqui como capacidade institucional."
  },
  {
    id: "s16-l3d",
    layout: "cards",
    section: "UFF",
    eyebrow: "Infraestrutura e extensao",
    title: "L3D: robotica, automacao e ensino por projeto",
    cards: [
      { label: "2018", text: "Criacao do laboratorio como interface entre ensino, infraestrutura experimental, automacao e desenvolvimento em didatica." },
      { label: "Ferramentas", text: "Arduino, sensores fisicos, estacoes de montagem, impressoras 3D e instrumentacao personalizada." },
      { label: "Curso", text: "Robotica aplicada a Fisica para graduacao e pos-graduacao, com aprendizagem orientada por projetos." },
      { label: "Extensao", text: "Oficinas com o Coluni, cooperacao educacional e desdobramentos com escolas em Portugal." }
    ],
    figure: {
      src: "assets/figures/l3d-robotica-projeto-2019.png",
      alt: "Projeto final do curso de Automacao e Robotica de 2019",
      caption: "Exemplo de projeto final do curso de Automacao e Robotica, 2019.2, com carro montado por estudantes com sensores."
    },
    footerRefs: "MEM pp.17-18,46",
    sourceRefs: ["E013"],
    notes: "Usar o carro com sensores como exemplo concreto: o aluno projeta, monta, mede, controla e explica o fenomeno."
  },
  {
    id: "s17-program-map",
    layout: "cards",
    section: "Resultados",
    eyebrow: "Programa cientifico",
    title: "Um mapa coerente de pesquisa",
    cards: [
      { label: "Magnetismo", text: "Sistemas nao homogeneos, manganitas e estatistica de Tsallis." },
      { label: "Termodinamica", text: "Efeito magnetocalorico, barocalorico e efeitos caloricos em materiais." },
      { label: "Moleculares", text: "Complexos metalicos, Hamiltonianos efetivos e modelagem termodinamica." },
      { label: "Quantico", text: "Informacao quantica, termodinamica quantica e materiais de baixa dimensionalidade." }
    ],
    footerRefs: "MEM pp.22-31",
    sourceRefs: ["E017"]
  },
  {
    id: "s18-physics-bridge",
    layout: "section",
    section: "Resultados",
    eyebrow: "Resultados em fisica",
    title: "Da entropia aos materiais quanticos",
    subtitle: "A parte tecnica do memorial organiza resultados em torno de uma pergunta comum: como propriedades microscopicas de spins, orbitais, redes e espectros geram respostas termodinamicas mensuraveis?",
    footerRefs: "MEM pp.22-31",
    sourceRefs: ["E017"]
  },
  {
    id: "s19-tsallis-problem",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 1 | Tsallis e magnetismo",
    title: "O problema fisico: magnetismo nao homogeneo",
    lead: "Manganitas CMR exibem desvios sistematicos em M(H) e susceptibilidade que nao sao descritos adequadamente por modelos tradicionais de campo medio.",
    items: [
      "Separacao de fases e distribuicao de interacoes magneticas.",
      "Necessidade de um parametro fisico para nao homogeneidade.",
      "Aplicacao de estatistica nao extensiva a sistemas magneticos reais."
    ],
    equations: [
      equationAsset("tsallis-entropy", "Entropia de Tsallis", "entropia q"),
      equationAsset("q-exponential", "q-exponencial", "distribuicao generalizada")
    ],
    footerRefs: "MEM pp.22-23; refs. [2-8]",
    sourceRefs: ["E018"]
  },
  {
    id: "s20-tsallis-equations",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 1 | Formalismo",
    title: "Entropia q e distribuicao generalizada",
    lead: "A reformulacao estatistica altera a funcao particao e, portanto, as propriedades magneticas calculadas.",
    equations: [
      equationAsset("tsallis-entropy", "Entropia q", "S_q"),
      equationAsset("q-exponential", "q-exponencial", "peso estatistico"),
      equationAsset("tsallis-magnetization", "Magnetizacao q", "observavel magnetico")
    ],
    items: [
      "A abordagem recupera Boltzmann-Gibbs no limite q = 1.",
      "O parametro q passa a representar a inhomogeneidade magnetica efetiva."
    ],
    footerRefs: "MEM pp.22-23; refs. [2-4]",
    sourceRefs: ["E018"]
  },
  {
    id: "s21-tsallis-result",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 1 | Resultado",
    title: "M(H) em manganitas: teoria e experimento",
    lead: "A funcao de Langevin generalizada ajusta isotermas de magnetizacao em manganitas acima da temperatura de Curie.",
    items: [
      "Sistema representativo: La0.60Y0.07Ca0.33MnO3.",
      "Ajuste das curvas M(H) entre 175 K e 290 K.",
      "q interpretado como medida macroscópica da nao homogeneidade magnetica.",
      "Sem introduzir distribuicoes artificiais de campo."
    ],
    equations: [
      equationAsset("tsallis-magnetization", "Magnetizacao no formalismo q", "M(H,T) ajustado por funcoes generalizadas")
    ],
    figure: {
      src: "assets/figures/tsallis-manganite-mh.png",
      alt: "Curvas de magnetizacao em manganita ajustadas por funcao de Langevin generalizada",
      caption: "La0.60Y0.07Ca0.33MnO3: M(H) acima de Tc = 150 K; ajuste por abordagem nao extensiva."
    },
    footerRefs: "MEM pp.22-23; refs. [3-8]",
    sourceRefs: ["E018"]
  },
  {
    id: "s22-tsallis-contribution",
    layout: "content",
    section: "Resultados",
    eyebrow: "Linha 1 | Contribuicao",
    title: "O parametro q como observavel fisico",
    lead: "A contribuicao nao e apenas ajustar curvas: e estabelecer uma ponte entre nao homogeneidade, separacao de fases e medidas macroscopicas.",
    items: [
      "Evidencia experimental de nao extensividade em manganitas CMR.",
      "Determinacao experimental direta do parametro q.",
      "Diagrama de fases magnetico nao extensivo.",
      "Extensao do formalismo a sistemas magneticos compostos."
    ],
    footerRefs: "MEM p.23; refs. [4-8]",
    sourceRefs: ["E018"]
  },
  {
    id: "s23-mce-foundation",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 2 | Efeito magnetocalorico",
    title: "O efeito como resposta termodinamica",
    lead: "A variacao de campo magnetico permite observar mudancas de entropia em processo isotermico e mudancas de temperatura em processo adiabatico.",
    equations: [
      equationAsset("mce-entropy", "Variacao isotermica de entropia magnetica", "Delta S_mag"),
      equationAsset("mce-temperature", "Variacao adiabatica de temperatura", "Delta T_ad"),
      equationAsset("heat-capacity-split", "Capacidade termica total", "termos magnetico, rede e eletronico")
    ],
    items: [
      "Base conceitual para refrigeracao magnetica em estado solido.",
      "Relacao direta entre medidas magneticas e resposta calorica."
    ],
    footerRefs: "MEM pp.23-24; refs. [9-11]",
    sourceRefs: ["E019"]
  },
  {
    id: "s24-mce-materials",
    layout: "cards",
    section: "Resultados",
    eyebrow: "Linha 2 | Materiais",
    title: "Classes de materiais e mecanismos",
    cards: [
      { label: "Manganitas", text: "Substituicao quimica, correlacoes e separacao de fases." },
      { label: "Intermetalicos", text: "Transicoes magneticas multiplas e efeitos magnetoestruturais." },
      { label: "Anisotropia", text: "Amplitude e largura termica do efeito dependem da anisotropia magnetocristalina." },
      { label: "Moleculares", text: "Alta degenerescencia magnetica para maximizar entropia disponivel." }
    ],
    footerRefs: "MEM pp.24-25; refs. [12-23]",
    sourceRefs: ["E019"]
  },
  {
    id: "s25-mce-synthesis",
    layout: "content",
    section: "Resultados",
    eyebrow: "Linha 2 | Sintese",
    title: "Do mecanismo microscopico a refrigeracao em estado solido",
    lead: "A linha magnetocalorica combina caracterizacao experimental detalhada e modelagem para otimizar capacidade refrigerante.",
    items: [
      "Estudo de efeitos diretos e inversos.",
      "Uso de anisotropia e transicoes sucessivas para ampliar a regiao util.",
      "Revisao abrangente sobre efeitos magnetocaloricos e barocaloricos em complexos metalicos.",
      "Extensoes para compósitos multiferroicos e materiais relativisticos."
    ],
    footerRefs: "MEM pp.24-25; refs. [16-23]",
    sourceRefs: ["E019"]
  },
  {
    id: "s26-complexes-hamiltonian",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 3 | Complexos metalicos",
    title: "Do Hamiltoniano ao ajuste termodinamico",
    lead: "Complexos metalicos permitem conectar estrutura de spins, interacoes de troca, anisotropia e observaveis magneticas.",
    equations: [
      equationAsset("spin-hamiltonian", "Hamiltoniano efetivo de spins", "troca, anisotropia e Zeeman"),
      equationAsset("partition-observables", "Funcao de particao e observaveis", "Z, F, M e chi")
    ],
    items: [
      "Diagonalizacao fornece o espectro de energias E_n.",
      "A funcao de particao conecta o modelo microscopico a M e chi."
    ],
    footerRefs: "MEM pp.25-26; refs. [24-27]",
    sourceRefs: ["E020"]
  },
  {
    id: "s27-complexes-result",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 3 | Resultado representativo",
    title: "Na2Cu5Si4O14: cadeia dimero-trimero",
    lead: "Um exemplo mostra a metodologia: estrutura cristalina, Hamiltoniano efetivo, parametros de troca e interpretacao fisica.",
    equations: [
      equationAsset("cu5-hamiltonian", "Hamiltoniano dimero-trimero", "Na2Cu5Si4O14"),
      equationAsset("cu5-parameters", "Parametros de troca", "ajuste de susceptibilidade")
    ],
    figure: {
      src: "assets/figures/molecular-chain-na2cu5si4o14.png",
      alt: "Cadeia magnetica em zigue-zague do composto Na2Cu5Si4O14",
      caption: "Estrutura dimero-trimero em cadeia Cu2/Cu3; ponte entre geometria e Hamiltoniano efetivo."
    },
    items: [
      "Cadeia em zigue-zague com unidades Cu2 e Cu3.",
      "Momento liquido ao longo da cadeia: ferrimagnetismo homometalico.",
      "Ajuste quantitativo de susceptibilidade experimental."
    ],
    footerRefs: "MEM pp.26-27; ref. [35]",
    sourceRefs: ["E020"]
  },
  {
    id: "s28-cardamomo",
    layout: "content",
    section: "Resultados",
    figure: {
      src: "assets/figures/molecular-chit-fit-na2cu5si4o14.png",
      alt: "Ajuste de chi T para Na2Cu5Si4O14 e esquema de interacoes de troca",
      caption: "CARDAMOMO: ajuste quantitativo de chi T e interacoes J1, J2, J3 no exemplo Na2Cu5Si4O14."
    },
    eyebrow: "Linha 3 | Ferramenta computacional",
    title: "CARDAMOMO como infraestrutura teorica",
    lead: "O pacote automatiza o ajuste de modelos quanticos e classicos a dados experimentais de susceptibilidade magnetica.",
    items: [
      "Modelos para clusters e cadeias unimetalicas e bimetalicas.",
      "Cadeias regulares e irregulares, alem de modelos de Ising.",
      "Integra modelagem microscopica e dados experimentais em uma ferramenta reprodutivel.",
      "Registrado no memorial como propriedade intelectual/producao computacional."
    ],
    footerRefs: "MEM pp.25,99; refs. [26,27]",
    sourceRefs: ["E020", "E014"]
  },
  {
    id: "s29-quantum-info-concept",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 4 | Informacao quantica",
    title: "Susceptibilidade como testemunha de emaranhamento",
    lead: "A linha conecta materia condensada e informacao quantica usando medidas magneticas macroscopicas para inferir correlacoes quanticas.",
    equations: [
      equationAsset("entanglement-witness", "Testemunha de emaranhamento por susceptibilidade", "W(T) < 0 indica emaranhamento")
    ],
    figure: {
      src: "assets/figures/entanglement-witness.png",
      alt: "Testemunho de emaranhamento em funcao da temperatura",
      caption: "Valores negativos do witness indicam emaranhamento em sistema magnetico molecular."
    },
    items: [
      "Clusters de spin e magnetos moleculares como sistemas reais.",
      "Acesso experimental por tecnicas tradicionais de caracterizacao magnetica.",
      "Ponte entre observaveis termodinamicos e propriedades quanticas microscopicas."
    ],
    footerRefs: "MEM pp.27-28; refs. [37-42]",
    sourceRefs: ["E021"]
  },
  {
    id: "s30-quantum-info-result",
    layout: "content",
    section: "Resultados",
    figure: {
      src: "assets/figures/entanglement-witness.png",
      alt: "Curva de witness de emaranhamento",
      caption: "Figura 4.4 do memorial: emaranhamento termico lido por observavel magnetico macroscopico."
    },
    eyebrow: "Linha 4 | Resultado",
    title: "Correlacoes quanticas em temperaturas elevadas",
    lead: "O memorial destaca resultados de emaranhamento termico, violacao de desigualdades de Bell e persistencia de correlacoes quanticas em sistemas moleculares.",
    items: [
      "Demonstracao experimental de emaranhamento termico por susceptibilidade magnetica.",
      "Sistemas moleculares especificos com emaranhamento e violacao de Bell acima da temperatura ambiente.",
      "Dimeros de ferro com emaranhamento centenas de Kelvin acima da temperatura ambiente.",
      "Aplicacoes em terras raras e carboxilatos metalicos."
    ],
    footerRefs: "MEM pp.28-29; refs. [37-42]",
    sourceRefs: ["E021"]
  },
  {
    id: "s31-graphene-concept",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 5 | Materiais relativisticos",
    title: "Grafeno e efeitos caloricos oscilatorios",
    lead: "Em materiais relativisticos, a quantizacao de Landau e o espectro de Dirac alteram a resposta termodinamica a campos externos.",
    equations: [
      equationAsset("graphene-landau", "Quantizacao de Landau em grafeno", "escala m e niveis relativisticos"),
      equationAsset("graphene-caloric", "Entropia magnetica oscilatoria", "alternancia normal/inverso")
    ],
    figure: {
      src: "assets/figures/graphene-entropy-oscillation.png",
      alt: "Variacao da entropia magnetica em grafeno bidimensional",
      caption: "Entropia magnetica em grafeno bidimensional em funcao de m = N0 Phi0/B."
    },
    items: [
      "Efeito magnetocalorico oscilatorio em grafeno.",
      "Temperaturas caracteristicas da ordem de 100 K, superiores a materiais diamagneticos 3D convencionais.",
      "Extensoes para efeitos eletrocalorico e barocalorico."
    ],
    footerRefs: "MEM pp.29-30; refs. [43-51]",
    sourceRefs: ["E022"]
  },
  {
    id: "s32-graphene-result",
    layout: "content",
    section: "Resultados",
    figure: {
      src: "assets/figures/graphene-entropy-oscillation.png",
      alt: "Oscilacoes de entropia magnetica em grafeno",
      caption: "Oscilacoes por quantizacao de Landau conectam fermions de Dirac a resposta calorica."
    },
    eyebrow: "Linha 5 | Resultado",
    title: "Da fisica de Dirac a uma resposta calorica mensuravel",
    lead: "A contribuicao esta em conectar os fermions de Dirac em sistemas bidimensionais a fenomenos termodinamicos macroscopicos.",
    items: [
      "Oscilacoes da entropia magnetica moduladas por uma funcao envelope dependente da temperatura.",
      "Alternancia entre regimes normal e inverso do efeito magnetocalorico.",
      "Perspectiva para sensores magneticos e estudo termodinamico de sistemas 2D.",
      "Generalizacoes para nanofitas, sistemas multicamadas e pressoes externas."
    ],
    footerRefs: "MEM pp.29-30; refs. [43-51]",
    sourceRefs: ["E022"]
  },
  {
    id: "s33-quantum-thermo-batteries",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 6 | Termodinamica quantica",
    title: "Energia, trabalho e calor em materiais quanticos",
    lead: "Materiais moleculares e sistemas de spin permitem estudar armazenamento e conversao de energia em plataformas fisicas reais.",
    equations: [
      equationAsset("quantum-battery", "Trabalho extraivel em bateria quantica", "ergotropia / energia extraivel")
    ],
    items: [
      "Bateria quantica baseada em correlacoes em complexos metalicos.",
      "Caracterizacao experimental possivel por susceptibilidade magnetica.",
      "Conexao entre materiais magneticos e tecnologias quanticas emergentes."
    ],
    footerRefs: "MEM pp.30-31; ref. [52]",
    sourceRefs: ["E023"]
  },
  {
    id: "s34-quantum-thermo-caloric",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 6 | Maquinas e potenciais caloricos",
    title: "Ciclos quanticos e respostas caloricas gerais",
    lead: "A formulacao recente expressa potenciais caloricos diretamente em termos do Hamiltoniano do sistema.",
    equations: [
      equationAsset("quantum-caloric-potentials", "Potenciais caloricos quanticos", "Delta S_iso e Delta T_ad a partir do Hamiltoniano")
    ],
    items: [
      "Ciclo de Stirling quantico em complexos metalicos dinucleares.",
      "Meios de trabalho baseados em sistemas magneticos moleculares e potenciais efetivos.",
      "Contribuicoes quanticas para respostas caloricas em equilibrio termico."
    ],
    footerRefs: "MEM pp.31-32; refs. [53-56]",
    sourceRefs: ["E023"]
  },
  {
    id: "s35-synthesis",
    layout: "cards",
    section: "Resultados",
    eyebrow: "Sintese cientifica",
    title: "Um programa, varias interfaces",
    cards: [
      { label: "Metodo", text: "Partir de sistemas fisicos reais e construir modelos termodinamicos/magneticos testaveis." },
      { label: "Escala", text: "Conectar Hamiltonianos, espectros e spins a M, chi, ΔS e ΔT." },
      { label: "Materiais", text: "Manganitas, intermetalicos, complexos metalicos, grafeno e sistemas moleculares." },
      { label: "Fronteira", text: "Da refrigeracao magnetica a informacao quantica e termodinamica quantica." }
    ],
    footerRefs: "MEM pp.22-32; refs. [2-56]",
    sourceRefs: ["E017", "E018", "E019", "E020", "E021", "E022", "E023"]
  },
  {
    id: "s36-impact",
    layout: "dashboard",
    section: "Impacto",
    eyebrow: "Impacto cientifico",
    title: "Regularidade, qualidade e lideranca",
    metrics: [
      { value: "3625", label: "citacoes Google Scholar" },
      { value: "h = 33", label: "indice h" },
      { value: "i10 = 88", label: "indice i10" },
      { value: "67%", label: "colaboracao internacional em 10 anos" },
      { value: "70,2%", label: "artigos em periodicos top 25% CiteScore" }
    ],
    lead: "Os indicadores sao tratados como fotografia documentada no memorial, nao como metricas ao vivo.",
    cards: [
      { label: "Crescimento", text: "A serie temporal mostra crescimento acentuado de citacoes apos a consolidacao das linhas UFF." },
      { label: "Qualidade", text: "20,4% dos artigos entre os 25% mais citados mundialmente e 70,2% em periodicos top 25% CiteScore." },
      { label: "Rede", text: "A colaboracao internacional de 67% no periodo 2015-2024 conecta impacto a redes estruturais." },
      { label: "Leitura", text: "A fisica apresentada antes explica estes indicadores; os numeros nao substituem os resultados." }
    ],
    figure: {
      src: "assets/figures/impact-citations-trends.png",
      alt: "Evolucao anual das citacoes segundo Google Scholar e Scopus",
      caption: "Figura 5.1: evolucao anual das citacoes em bases documentadas no memorial."
    },
    footerRefs: "MEM pp.32-36,98-99",
    sourceRefs: ["E024"]
  },
  {
    id: "s37-internationalization",
    layout: "timeline",
    section: "Internacionalizacao",
    eyebrow: "Internacionalizacao",
    title: "Internacionalizacao como estrutura",
    milestones: [
      { label: "2001-2002", text: "Doutorado sanduiche em Aveiro; retorno ao Brasil e defesa no CBPF em 2003." },
      { label: "2003-2009", text: "Pos-doc em Aveiro e Pesquisador Auxiliar no CICECO." },
      { label: "2017-2018", text: "Pesquisador visitante na Universidade de Aveiro." },
      { label: "2022-2023", text: "Distinguished Researcher na Universidad de Sevilla." },
      { label: "Redes", text: "Portugal, Espanha, EUA, Chile, Russia, China e LAFMAT." }
    ],
    footerRefs: "MEM pp.43-44",
    sourceRefs: ["E005", "E026", "E030"]
  },
  {
    id: "s38-editorial",
    layout: "content",
    section: "Internacionalizacao",
    eyebrow: "Lideranca editorial",
    title: "Physica B e responsabilidade cientifica global",
    lead: "A atuacao editorial amplia a dimensao de lideranca para alem do grupo de pesquisa e da universidade.",
    items: [
      "Editor da Physica B: Condensed Matter desde 2016.",
      "Editor-in-Chief registrado no material de 2026 da revista.",
      "Coordenacao de corpo editorial, politica editorial, escopo cientifico e padroes eticos.",
      "Iniciativas como Physica B Award e aproximacao com conferencias e redes cientificas."
    ],
    figure: {
      src: "assets/figures/physica-b-cover-2026.png",
      alt: "Capa da revista Physica B Condensed Matter",
      caption: "Physica B: Condensed Matter, volume de 2026 com Mario Reis como Editor-in-Chief."
    },
    footerRefs: "MEM pp.41-42,93; Fig. 7.1",
    sourceRefs: ["E025"]
  },
  {
    id: "s39-innovation",
    layout: "cards",
    section: "Futuro",
    eyebrow: "Inovacao e extensao",
    title: "Da infraestrutura local a circulacao de conhecimento",
    cards: [
      { label: "L3D", text: "Robotica, automacao, ensino por investigacao e oficinas educacionais." },
      { label: "Sample for Science", text: "Plataforma para compartilhamento de amostras cientificas entre grupos." },
      { label: "Aplicativo", text: "Projeto mobile-first disponibilizado em lojas digitais." },
      { label: "Formacao", text: "Equipe multidisciplinar com fisica, matematica, computacao, marketing e comunicacao audiovisual." }
    ],
    figure: {
      src: "assets/figures/sample-for-science-app.png",
      alt: "Telas do aplicativo Sample for Science",
      caption: "Sample for Science: compartilhamento de amostras com registro de material, resultados previos e contato entre grupos."
    },
    footerRefs: "MEM pp.18-20,46,99",
    sourceRefs: ["E013", "E014", "E027"]
  },
  {
    id: "s40-future",
    layout: "cards",
    section: "Futuro",
    eyebrow: "Perspectivas como titular",
    title: "Agenda futura",
    cards: [
      { label: "Ensino", text: "Consolidar Automacao para Fisicos e concluir Termodinamica para Estudantes de Fisica." },
      { label: "Extensao", text: "Ampliar o L3D como espaco de formacao experimental e divulgacao cientifica." },
      { label: "Pesquisa", text: "Expandir a termodinamica quantica aplicada a novos materiais." },
      { label: "Redes", text: "Fortalecer cooperacoes Sul Global em materia condensada e ciencia dos materiais." }
    ],
    footerRefs: "MEM pp.45-46",
    sourceRefs: ["E027"]
  },
  {
    id: "s41-closing",
    layout: "closing",
    section: "Futuro",
    eyebrow: "Fechamento",
    title: "Titularidade como responsabilidade ampliada",
    subtitle: "A trajetoria apresentada sustenta uma atuacao futura que combina densidade cientifica, formacao de pessoas, construcao institucional e cooperacao internacional.",
    footerRefs: "MEM pp.45-46",
    sourceRefs: ["E002", "E027"],
    notes: "Fechar sem repetir indicadores: a mensagem final deve ser responsabilidade, continuidade e ampliacao de escala."
  }
];
