(function () {
  const sections = [
    {
      number: 1,
      key: "formacao",
      label: "Formação",
      title: "Formação acadêmica e inserção internacional",
      targetId: "s04-first-steps",
      subsections: [
        { number: "1.1", title: "Formação inicial", slides: [
          { id: "s05-master", topic: "Ensino médio, bacharelado e iniciação científica" }
        ] },
        { number: "1.2", title: "Mestrado", slides: [
          { id: "s06-doctorate", topic: "Magnetismo itinerante em sistemas RCo3" }
        ] },
        { number: "1.3", title: "Doutorado e inserção internacional", slides: [
          { id: "s06b-doctorate", topic: "Doutorado no CBPF e na Universidade de Aveiro" },
          { id: "s07-aveiro-sandwich", topic: "Doutorado sanduíche" }
        ] },
        { number: "1.4", title: "Pós-doutorado e atuação internacional", slides: [
          { id: "s08-aveiro-postdoc", topic: "Pós-doc e Pesquisador Auxiliar" }
        ] },
        { number: "1.5", title: "Síntese da trajetória de formação", slides: [
          { id: "s05-formation-timeline", topic: "Da UFRJ ao CICECO" }
        ] }
      ]
    },
    {
      number: 2,
      key: "uff",
      label: "UFF",
      title: "Desenvolvimento acadêmico e consolidação na UFF",
      targetId: "s10-uff-entry",
      subsections: [
        { number: "2.1", title: "Atividade docente", slides: [
          { id: "s11-teaching", topic: "Ensino, robótica e produção didática" }
        ] },
        { number: "2.2", title: "Formação de alunos", slides: [
          { id: "s13-people", topic: "Formação em todos os níveis" },
          { id: "s13b-student-photo", topic: "Comunidade de formação" },
          { id: "s14-former-students", topic: "Inserção profissional e acadêmica dos ex-orientandos" }
        ] },
        { number: "2.3", title: "Montagem de laboratórios", slides: [
          { id: "s15-lab-magnetism", topic: "Laboratório de Magnetismo da UFF" },
          { id: "s15b-lab-report", topic: "Destaque institucional na FAPERJ" },
          { id: "s16-l3d", topic: "L3D: robótica, automação e ensino por projeto" },
          { id: "s16a-l3d-photo", topic: "Projeto de robótica desenvolvido por estudantes" }
        ] },
        { number: "2.4", title: "Projetos de inovação e pesquisa", slides: [
          { id: "s16b-innovation", topic: "Sample for Science" },
          { id: "s16ba-sample-gallery", topic: "Aplicativo Sample for Science" },
          { id: "s16c-research-projects", topic: "Projetos que sustentam pesquisa e formação" }
        ] },
        { number: "2.5", title: "Administração", slides: [
          { id: "s16d-administration", topic: "Administração acadêmica e científica" }
        ] }
      ]
    },
    {
      number: 3,
      key: "resultados",
      label: "Pesquisa",
      title: "Linhas de pesquisa",
      targetId: "s17-program-map",
      subsections: [
        { number: "3.1", title: "Aplicação da Estatística de Tsallis ao Magnetismo", slides: [
          { id: "s19-tsallis-problem", topic: "Problema físico" },
          { id: "s20-tsallis-equations", topic: "Formalismo" },
          { id: "s21-tsallis-result", topic: "Resultado" },
          { id: "s22-tsallis-contribution", topic: "Contribuição" }
        ] },
        { number: "3.2", title: "Efeito magnetocalórico e materiais magnéticos", slides: [
          { id: "s23-mce-foundation", topic: "Fundamentos termodinâmicos" },
          { id: "s24-mce-materials", topic: "Materiais" },
          { id: "s25-mce-synthesis", topic: "Síntese" }
        ] },
        { number: "3.3", title: "Complexos Metálicos, Magnetismo e Modelagem Termodinâmica", slides: [
          { id: "s26-complexes-hamiltonian", topic: "Hamiltoniano e ajuste termodinâmico" },
          { id: "s27-complexes-result", topic: "Resultado representativo" },
          { id: "s28-cardamomo", topic: "Ferramenta computacional CARDAMOMO" }
        ] },
        { number: "3.4", title: "Informação quântica em materiais magnéticos", slides: [
          { id: "s29-quantum-info-concept", topic: "Testemunha de emaranhamento" },
          { id: "s30-quantum-info-result", topic: "Correlações quânticas" }
        ] },
        { number: "3.5", title: "Efeitos calóricos em materiais relativísticos", slides: [
          { id: "s31-graphene-concept", topic: "Grafeno e efeitos calóricos oscilatórios" },
          { id: "s32-graphene-result", topic: "Resposta calórica mensurável" }
        ] },
        { number: "3.6", title: "Termodinâmica quântica aplicada a novos materiais", slides: [
          { id: "s33-quantum-thermo-batteries", topic: "Energia, trabalho e calor" },
          { id: "s34-quantum-thermo-caloric", topic: "Máquinas e potenciais calóricos" },
          { id: "s35-synthesis", topic: "Um programa, várias interfaces" }
        ] }
      ]
    },
    {
      number: 4,
      key: "impacto",
      label: "Impacto",
      title: "Impacto acadêmico",
      targetId: "s36-section-opening",
      subsections: [
        { number: "4.1", title: "Produção Científica em Números", slides: [
          { id: "s36-impact", topic: "Produção Científica em Números" },
          { id: "s36-quality-metrics", topic: "Indicadores e bolsas de mérito" }
        ] },
        { number: "4.2", title: "Livro-texto", slides: [
          { id: "s37-books", topic: "Publicados" },
          { id: "s37-books-continuity", topic: "Em andamento" }
        ] },
        { number: "4.3", title: "Obra literária não-acadêmica", slides: [
          { id: "s37-literary-work", topic: "As viagens de ibn Hakim" }
        ] },
        { number: "4.4", title: "Atividades editoriais e liderança científica", slides: [
          { id: "s38-editorial", topic: "Physica B e liderança editorial" }
        ] },
        { number: "4.5", title: "Internacionalização", slides: [
          { id: "s39-internationalization", topic: "Mobilidade e consolidação internacional" },
          { id: "s39-international-networks", topic: "Redes, colaborações e formação internacional" }
        ] }
      ]
    },
    {
      number: 5,
      key: "futuro",
      label: "Perspectivas",
      title: "Perspectivas futuras",
      targetId: "s39-innovation",
      subsections: [
        { number: "5.1", title: "Inovação e extensão", slides: [
          { id: "s39-innovation", topic: "Circulação de conhecimento", sectionCover: true }
        ] },
        { number: "5.2", title: "Agenda futura", slides: [
          { id: "s40-future", topic: "Perspectivas como titular" }
        ] },
        { number: "5.3", title: "Síntese e compromisso", slides: [
          { id: "s41-closing", topic: "Titularidade como responsabilidade ampliada" }
        ] }
      ]
    }
  ];

  const slideMap = new Map();
  sections.forEach((section) => {
    slideMap.set(section.targetId, { section, isSectionCover: true });
    (section.introSlides || []).forEach((slide, index) => {
      slideMap.set(slide.id, { section, topic: slide.topic, topicNumber: `${section.number}.0.${index + 1}`, isSectionIntro: true, isFirst: index === 0 });
    });
    section.subsections.forEach((subsection) => {
      subsection.slides.forEach((slide, index) => {
        slideMap.set(slide.id, {
          section,
          subsection,
          topic: slide.topic,
          topicNumber: `${subsection.number}.${index + 1}`,
          isSectionCover: Boolean(slide.sectionCover),
          isSubsectionStart: index === 0
        });
      });
    });
  });

  // The prototype deck uses the same hierarchy contract, so every new layout
  // can be reviewed with the exact section/subsection/subtopic formatting used
  // by the memorial instead of relying on one-off eyebrow text.
  [
    ["tpl-03-timeline", 1, "1.5", "1.5.1", "Síntese da trajetória de formação"],
    ["tpl-04-books", 2, "2.1", "2.1.1", "Material didático e livros"],
    ["tpl-05-figure-board", 2, "2.3", "2.3.1", "Laboratório de Magnetismo da UFF"],
    ["tpl-06-technical", 3, "3.1", "3.1.1", "Painel técnico"],
    ["tpl-07-dashboard", 4, "4.1", "4.1.1", "Indicadores de impacto"],
    ["tpl-08-closing", 5, "5.3", "5.3.1", "Síntese e compromisso"]
  ].forEach(([id, sectionNumber, subsectionNumber, topicNumber, topic]) => {
    const section = sections.find((item) => item.number === sectionNumber);
    const subsection = section?.subsections.find((item) => item.number === subsectionNumber);
    if (!section || !subsection) return;
    slideMap.set(id, { section, subsection, topicNumber, topic, isSubsectionStart: true });
  });

  window.MemorialDeckHierarchy = { sections, slideMap };
})();
