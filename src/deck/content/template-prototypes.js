window.MemorialDeckTemplatePrototypes = [
  {
    id: "tpl-01-title",
    layout: "title",
    section: "abertura",
    sectionName: "Abertura",
    eyebrow: "Memorial academico",
    title: "Mario Reis",
    subtitle: "Memorial para Professor Titular | Instituto de Fisica | Universidade Federal Fluminense",
    tags: ["materia condensada", "magnetismo", "termodinamica", "materiais quanticos"],
    cards: [
      { label: "Tese", text: "Pesquisa, ensino, infraestrutura, formacao e lideranca aparecem como uma mesma trajetoria academica." },
      { label: "Metodo", text: "Magnetismo experimental; modelos termodinamicos; materiais reais; leitura fisica de parametros." },
      { label: "Formacao", text: "UFRJ; CBPF; reed magnetometer; RMN; manganitas; Aveiro 2001-2002; defesa CBPF 2003." },
      { label: "Pre-UFF", text: "Pos-doc em Aveiro; pesquisador CICECO; VSM; complexos metalicos; autonomia experimental." },
      { label: "UFF", text: "Ensino; livros; orientacoes; Laboratorio de Magnetismo; L3D; projetos e financiamento." },
      { label: "Resultados", text: "Tsallis; MCE; complexos metalicos; informacao quantica; grafeno; termodinamica quantica." },
      { label: "Impacto", text: "Citacoes; autoria; redes; Physica B; CARDAMOMO; Sample for Science; colaboracao internacional." },
      { label: "Livros", text: "Magnetismo Molecular; Fundamentals of Magnetism; Quantum Mechanics; Termodinamica em redacao." },
      { label: "Infraestrutura", text: "PPMS; helio; magnetometria; L3D; amostras; protocolos; formacao experimental." },
      { label: "Internacional", text: "Aveiro; CICECO; Sevilla; ORNL; redes Sul Global; estudantes; editoria cientifica." },
      { label: "Futuro", text: "Termodinamica quantica; automacao; L3D; Sample for Science; ensino e cooperacao." },
      { label: "Regra visual", text: "Tela cheia de informacao; cards telegraficos; figuras reais; equacoes renderizadas; refs no rodape." }
    ],
    footerRefs: "MEM p.1; arquitetura C8; template C9 redo",
    sourceRefs: ["E001", "E002"]
  },
  {
    id: "tpl-02-index",
    layout: "cards",
    section: "abertura",
    sectionName: "Indice",
    eyebrow: "Roteiro sem tempos visiveis",
    title: "Sequencia logica da defesa",
    lead: "Cada secao muda de funcao narrativa e visual: trajetoria, construcao institucional, fisica, impacto, redes e futuro.",
    cards: [
      { label: "1 | Formacao", text: "UFRJ, CBPF, reed magnetometer, RCo3, RMN, MMM 99, manganitas e Tsallis." },
      { label: "2 | Aveiro/CICECO", text: "Sanduiche 2001-2002; defesa CBPF 2003; pos-doc; VSM; complexos metalicos." },
      { label: "3 | UFF", text: "Retorno em 2009; ensino; cursos; livros; orientacoes; laboratorios; projetos." },
      { label: "4 | Resultados", text: "Paineis tecnicos com problema, equacoes, material, figura, resultado e refs." },
      { label: "5 | Impacto", text: "Metricas, colaboracao, autoria, bolsas, editoria, software e inovacao." },
      { label: "6 | Internacionalizacao", text: "Aveiro, Sevilla, ORNL, estudantes, LAFMAT e Physica B como estruturas." },
      { label: "7 | Futuro", text: "Automacao para Fisicos, Termodinamica, L3D, Sample for Science e redes Sul Global." },
      { label: "Backup", text: "Tabelas de pontuacao, contagens detalhadas, equacoes completas e fontes." },
      { label: "Fala", text: "Os slides carregam informacao telegrafica; a explicacao completa vem oralmente." }
    ],
    footerRefs: "C8 rebuild outline; user review 2026-07-03",
    sourceRefs: ["E002", "E017", "E027"]
  },
  {
    id: "tpl-03-timeline",
    layout: "timeline",
    section: "formacao",
    sectionName: "Formacao",
    eyebrow: "Linha do tempo cientifica",
    title: "Da instrumentacao no CBPF a Aveiro/CICECO",
    lead: "A secao de trajetoria deve mostrar conteudo tecnico, mudanca de escala e construcao de metodo.",
    milestones: [
      { label: "1993-1997", text: "Bacharelado UFRJ; formacao em fisica; aproximacao com materia condensada." },
      { label: "1996-1997", text: "IC no CBPF; Laboratorio de Magnetismo; construcao/calibracao de magnetometro reed." },
      { label: "1998-2000", text: "Mestrado CBPF; RCo3; magnetizacao; RMN; momentos 3d; 6 artigos." },
      { label: "1999-2000", text: "MMM 99; manganitas CMR; contato com Vitor Amaral; projeto CBPF-Aveiro." },
      { label: "2001-2002", text: "Doutorado sanduiche em Aveiro; manganitas; RMN em Estrasburgo; retorno ao Brasil." },
      { label: "2003", text: "Defesa da tese no CBPF; 3,5 anos; 12 artigos; metodo experimento + modelo." },
      { label: "2003-2005", text: "Pós-doc em Aveiro; Tsallis em sistemas reais; conferências na França, Grécia e Itália." },
      { label: "2005-2009", text: "Pesquisador Auxiliar CICECO; VSM; laboratorio; complexos metalicos; orientacoes." },
      { label: "2009", text: "Retorno ao Brasil e entrada na UFF; mudanca de escala para ensino e instituicao." },
      { label: "Ponte", text: "A experiencia pre-UFF vira laboratorio, estudantes e programa de pesquisa na UFF." }
    ],
    footerRefs: "MEM pp.7-13",
    sourceRefs: ["E003", "E004", "E005", "E030"]
  },
  {
    id: "tpl-04-books",
    layout: "cards",
    section: "uff",
    sectionName: "UFF",
    eyebrow: "Livros, ensino e formacao",
    title: "Pesquisa -> aula -> material -> livro",
    lead: "O slide de livros deve ser informativo: capa, ISBN, editora, conteudo e funcao na formacao.",
    cards: [
      { label: "Magnetismo Molecular", meta: "2010 | Livraria da Fisica | ISBN 978-85-7861-079-1", text: "Com Antonio Moreira dos Santos; magnetos moleculares, troca, spins, termodinamica e tecnicas experimentais." },
      { label: "Fundamentals of Magnetism", meta: "2013 | Elsevier | ISBN 978-0-12-405545-2", text: "Fundamentos teoricos, dia/paramagnetismo, magnetismo cooperativo e molecular." },
      { label: "Quantum Mechanics", meta: "2025 | Elsevier | ISBN 9780443328268", text: "10 anos de construcao; fundamentos, momento angular, perturbacao, espalhamento, matriz densidade e Dirac." },
      { label: "Termodinamica", meta: "em redacao | notas 2024-2026", text: "Leis, potenciais, Maxwell, ensembles, gases, paramagnetismo, transicoes e ciclos termicos." },
      { label: "Ibn Hakim", meta: "manter por enquanto", text: "Dimensao cultural da escrita; entra como nota compacta e pode sair depois." },
      { label: "Uso no deck", text: "Capa grande + cards densos; nao apenas uma lista de titulos." }
    ],
    figure: {
      src: "assets/figures/book-covers-memorial.png",
      alt: "Capas dos livros academicos publicados",
      caption: "Capas academicas extraidas da Figura 6.1 do memorial; a obra literaria pode entrar depois se mantida."
    },
    footerRefs: "MEM pp.37-40,60; refs. [36,57-59]",
    sourceRefs: ["E008", "E031"]
  },
  {
    id: "tpl-05-figure-board",
    layout: "figure-board",
    section: "uff",
    sectionName: "Infraestrutura",
    eyebrow: "Laboratorio de Magnetismo",
    title: "Infraestrutura como resultado academico",
    lead: "Figuras entram como evidencia real; os cards seguram contexto, equipamento, financiamento e formacao.",
    figure: {
      src: "assets/figures/lab-magnetismo-uff-2014.png",
      alt: "Equipe do Laboratorio de Magnetismo da UFF em 2014",
      caption: "Equipe do Laboratorio de Magnetismo da UFF durante a fase de consolidacao experimental, fevereiro de 2014."
    },
    cards: [
      { label: "Contexto", text: "Renovacao experimental do IF-UFF; materia condensada e novas frentes de pesquisa." },
      { label: "PPMS", text: "Medidas magneticas e de transporte; altos campos e baixas temperaturas." },
      { label: "Helio", text: "Liquefatora como infraestrutura critica para operacao experimental." },
      { label: "Projetos", text: "FAPERJ, CNPq, FINEP e apoio institucional viabilizando equipamentos e equipe." },
      { label: "Formacao", text: "Docentes, pos-doutorandos e estudantes em protocolos, operacao e analise." },
      { label: "Ponte", text: "A experiencia no CICECO/VSM reaparece como capacidade de montar laboratorio na UFF." }
    ],
    footerRefs: "MEM pp.16-17,21",
    sourceRefs: ["E012", "E015", "E034"]
  },
  {
    id: "tpl-06-technical",
    layout: "technical",
    section: "resultados",
    sectionName: "Resultados",
    eyebrow: "Painel tecnico | Tsallis",
    title: "Manganitas CMR e nao homogeneidade magnetica",
    lead: "O slide tecnico deve parecer quadro de resultado: problema, formalismo renderizado, sistema, figura/parametros e contribuicao.",
    tags: ["problema", "equacoes renderizadas", "sistema", "resultado", "refs no rodape"],
    items: [
      { label: "Problema", text: "Curvas M(H) e susceptibilidade de manganitas CMR apresentam desvios sistematicos de campo medio." },
      { label: "Fisica", text: "Separacao de fases e distribuicao de interacoes exigem um parametro efetivo de nao homogeneidade." },
      { label: "Resultado", text: "Funcoes de Langevin/Brillouin generalizadas ajustam dados e dao significado fisico a q." },
      { label: "Sistema", text: "La0.60Y0.07Ca0.33MnO3; isotermas acima de Tc; q extraido de grandezas macroscopicas." }
    ],
    equations: [
      { html: '<math display="block"><msub><mi>S</mi><mi>q</mi></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mfrac><mrow><mn>1</mn><mo>-</mo><msub><mo>&sum;</mo><mi>i</mi></msub><msubsup><mi>p</mi><mi>i</mi><mi>q</mi></msubsup></mrow><mrow><mi>q</mi><mo>-</mo><mn>1</mn></mrow></mfrac></math>' },
      { html: '<math display="block"><msub><mi>e</mi><mi>q</mi></msub><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>[</mo><mn>1</mn><mo>+</mo><mo>(</mo><mn>1</mn><mo>-</mo><mi>q</mi><mo>)</mo><mi>x</mi><mo>]</mo></mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>-</mo><mi>q</mi></mrow></mfrac></msup></math>' },
      { html: '<math display="block"><msub><mi>M</mi><mi>q</mi></msub><mo>=</mo><mi>N</mi><mi>g</mi><msub><mi>&mu;</mi><mi>B</mi></msub><msub><mrow><mo>&lang;</mo><msub><mi>S</mi><mi>z</mi></msub><mo>&rang;</mo></mrow><mi>q</mi></msub></math>' }
    ],
    cards: [
      { label: "q -> 1", text: "Recupera Boltzmann-Gibbs." },
      { label: "q fisico", text: "Mede nao homogeneidade magnetica efetiva." },
      { label: "Dados", text: "M(H,T) em manganitas acima de Tc." },
      { label: "Contribuicao", text: "Nao extensividade observavel em sistema real." }
    ],
    footerRefs: "MEM pp.22-23; refs. [2-8]",
    sourceRefs: ["E018", "E035"]
  },
  {
    id: "tpl-07-dashboard",
    layout: "dashboard",
    section: "impacto",
    sectionName: "Impacto",
    eyebrow: "Indicadores como fotografia documentada",
    title: "Regularidade, qualidade e lideranca",
    lead: "Metricas devem ocupar a tela como dashboard, junto com interpretacao e fonte.",
    metrics: [
      { value: "3625", label: "citacoes acumuladas Google Scholar" },
      { value: "1312", label: "citacoes desde 2021" },
      { value: "h = 33", label: "indice h documentado" },
      { value: "i10 = 88", label: "publicacoes com 10+ citacoes" },
      { value: "20,4%", label: "top 25% mais citados 2015-2024" },
      { value: "70,2%", label: "top 25% CiteScore" },
      { value: "67%", label: "colaboracao internacional" },
      { value: "57%", label: "ultimo autor em publicacoes recentes" },
      { value: "42%", label: "Fisica e Astronomia" },
      { value: "34%", label: "Ciencia dos Materiais" }
    ],
    cards: [
      { label: "Leitura", text: "Os indicadores entram depois da fisica, como consequencia de um programa coerente." },
      { label: "Reconhecimento", text: "CNPq desde 2011; JCNE/CNE FAPERJ em marcos sucessivos." },
      { label: "Lideranca", text: "Autoria final, editoria Physica B e redes internacionais." },
      { label: "Cuidado", text: "Metricas sao fotografia do memorial, nao consulta ao vivo." }
    ],
    footerRefs: "MEM pp.32-36",
    sourceRefs: ["E024"]
  },
  {
    id: "tpl-08-closing",
    layout: "closing",
    section: "futuro",
    sectionName: "Futuro",
    eyebrow: "Fechamento com agenda",
    title: "Titularidade como responsabilidade ampliada",
    subtitle: "O final precisa carregar compromissos concretos, nao apenas uma frase em uma tela vazia.",
    tags: ["ensino", "L3D", "termodinamica quantica", "Sul Global", "Sample for Science", "Physica B"],
    cards: [
      { label: "Ensino", text: "Consolidar Automacao para Fisicos; concluir Termodinamica; traduzir Quantum Mechanics; formar autonomia tecnica." },
      { label: "Extensao", text: "L3D como espaco de fabricacao, oficinas, professores, estudantes e divulgacao cientifica." },
      { label: "Pesquisa", text: "Termodinamica quantica em materiais, spins, motores, baterias, efeitos caloricos e materia condensada." },
      { label: "Redes", text: "LAFMAT, Sul Global, Africa, Sul/Sudeste Asiatico, Aveiro e cooperacao baseada em projetos." },
      { label: "Editoria", text: "Physica B como plataforma para qualidade, diversidade geografica, temas emergentes e integracao." },
      { label: "Inovacao", text: "Sample for Science como infraestrutura digital para amostras, medidas, colaboracao e rastreabilidade." },
      { label: "Livros", text: "Material didatico como legado: conteudo organizado, ensino recorrente e alcance externo." },
      { label: "Laboratorios", text: "Manter infraestrutura viva: usuarios, manutencao, protocolos, treinamento e projetos." },
      { label: "Pessoas", text: "Orientandos, colaboradores, tecnicos, professores e estudantes como centro do programa." },
      { label: "Gestao", text: "Usar titularidade para ampliar escala institucional sem perder densidade cientifica." },
      { label: "Sintese", text: "Pesquisa, pessoas, infraestrutura, livros, laboratorios e redes como responsabilidade institucional." },
      { label: "Mensagem", text: "A titularidade amplia a escala do que ja foi construido e organiza o proximo ciclo." }
    ],
    footerRefs: "MEM pp.45-46",
    sourceRefs: ["E002", "E027", "E036"]
  }
];
