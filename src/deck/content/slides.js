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
    eyebrow: "MEMORIAL ACADÊMICO",
    title: "Mario Reis",
    affiliations: [
      "Instituto de Física",
      "Universidade Federal Fluminense"
    ],
    footerRefs: "MEM p.1",
    sourceRefs: ["E001"],
    notes: "Abrir com a tese da apresentação: a trajetória integra pesquisa em matéria condensada, formação de pessoas, construção institucional e agenda futura."
  },
  {
    id: "s03-map",
    layout: "cards",
    section: "Roteiro",
    title: "Estrutura da apresentação",
    cards: [
      {
        number: "1",
        href: "#slide-3",
        className: "index-section-formacao",
        label: "Formação acadêmica e inserção internacional",
        html: "<ul><li>UFRJ</li><li>CBPF: mestrado e doutorado</li><li>Universidade de Aveiro: doutorado sanduíche, pós-doc e pesquisador auxiliar</li></ul>"
      },
      {
        number: "2",
        href: "#section-2",
        className: "index-section-uff",
        label: "Desenvolvimento acadêmico e consolidação na UFF",
        html: "<ul><li>Atividades docentes</li><li>Formação de alunos</li><li>Montagem de laboratórios</li><li>Projetos de inovação e pesquisa</li><li>Administração</li></ul>"
      },
      {
        number: "3",
        href: "#section-3",
        className: "index-section-pesquisa",
        label: "Linhas de pesquisa",
        html: "<ul><li>Aplicação da Estatística de Tsallis ao Magnetismo</li><li>Efeito magnetocalórico e materiais magnéticos</li><li>Complexos Metálicos, Magnetismo e Modelagem Termodinâmica</li><li>Efeitos calóricos em materiais relativísticos</li><li>Termodinâmica quântica em materiais magnéticos</li></ul>"
      },
      {
        number: "4",
        href: "#section-4",
        className: "index-section-impacto",
        label: "Impacto acadêmico",
        html: "<ul><li>Produção Científica</li><li>Livro-texto</li><li>Obra literária não-acadêmica</li><li>Atividades editoriais</li><li>Internacionalização</li></ul>"
      },
      {
        number: "5",
        href: "#section-5",
        className: "index-section-futuro",
        label: "Perspectivas futuras",
        html: "<ul><li>Ensino</li><li>Extensão</li><li>Pesquisa</li><li>Inovação</li><li>Rede</li></ul>"
      }
    ],
    footerRefs: "Estrutura alinhada aos capítulos do memorial",
    sourceRefs: ["E002", "E030", "E017", "E027"]
  },
  {
    id: "s04-first-steps",
    layout: "section",
    section: "Formação",
    eyebrow: "Seção 1",
    title: "Formação acadêmica e inserção internacional",
    footerRefs: "MEM cap. 2",
    sourceRefs: ["E003", "E004", "E005"]
  },
  {
    id: "s05-master",
    layout: "cards",
    section: "Formação",
    eyebrow: "Formação inicial",
    title: "Ensino médio, bacharelado e iniciação científica",
    cards: [
      {
        meta: "Ensino fundamental e médio",
        label: "Colégio Marista São José - Tijuca",
        logo: { src: "assets/logos/marista.png", alt: "Marista" },
        html: "<ul><li>Formação escolar em colégios de ordem religiosa.</li><li>Interesse crescente pela área de exatas: matemática e física.</li><li>Vestibulares para Física nas universidades do Rio de Janeiro.</li></ul>"
      },
      {
        meta: "1993-1997",
        label: "Bacharelado em Física - UFRJ",
        logo: { src: "assets/logos/ufrj.png", alt: "UFRJ" },
        html: "<ul><li>Ingresso em 1993, aos 17 anos, no campus da Ilha do Fundão.</li><li>Formação fundamental em Física.</li><li>Aproximação progressiva com a matéria condensada e a prática científica.</li></ul>"
      },
      {
        meta: "1996-1997",
        label: "Iniciação científica - CBPF",
        logo: { src: "assets/logos/cbpf.png", alt: "CBPF" },
        html: "<ul><li>Laboratório de Magnetismo, com o Prof. Armando Takeuchi.</li><li>Construção, calibração e uso de um magnetômetro reed.</li><li>Instrumentação, eletrônica, aquisição de dados e cultura experimental.</li><li>Disciplinas de pós-graduação cursadas ainda durante o bacharelado.</li></ul>"
      }
    ],
    footerRefs: "MEM pp.7-8",
    sourceRefs: ["E003"]
  },
  {
    id: "s06-doctorate",
    layout: "cards",
    section: "Formação",
    eyebrow: "CBPF | 1998-2000",
    title: "Mestrado: magnetismo itinerante em sistemas RCo3",
    lead: "No CBPF, o estudo combinou magnetização e RMN para investigar a coexistência de momentos 3d itinerantes e localizados em compostos intermetálicos.",
    cards: [
      {
        label: "Orientação",
        text: "Prof. Armando Takeuchi, com coorientação do Prof. Ivan Oliveira."
      },
      {
        label: "Sistemas",
        text: "Compostos intermetálicos RCo3, especialmente (Y,Gd)Co3 e Y(Co,Al)3."
      },
      {
        label: "Métodos",
        text: "Medidas sistemáticas de magnetização e estudos por ressonância magnética nuclear."
      },
      {
        label: "Resultados",
        html: "<ul><li>Descrição conjunta de momentos 3d itinerantes e localizados.</li><li>Caracterização da instabilidade magnética nos sistemas RCo3.</li><li>Dissertação concluída em 2000.</li><li>Participação na 44th Annual Conference on Magnetism and Magnetic Materials (MMM 99), em San Jose, Califórnia: encontro com o Prof. Vitor Amaral que nucleou o tema do doutorado e linhas de pesquisa desenvolvidas nos anos seguintes.</li></ul>"
      },
      {
        label: "Produção científica",
        html: `<p>Seis artigos internacionais publicados entre 2000 e 2002.</p>
          <button class="publications-trigger" type="button" data-publications-open="master-publications">6 publicações · abrir lista</button>
          <dialog class="publications-dialog" id="master-publications" aria-labelledby="master-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Mestrado · 2000-2002</p><h2 id="master-publications-title">Publicações associadas</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list" reversed>
              <li><span>2002</span><strong>The localized-itinerant magnetic system Gd1-xYxCo3 described by a statistical distribution mean-field model.</strong><small>A.L. Lima, P.J. Von Ranke, M.S. Reis, A.P. Takeuchi, A.P. Guimarães e I.S. Oliveira.</small><em>Journal of Magnetism and Magnetic Materials 242, 817.</em><a href="https://doi.org/10.1016/S0304-8853(01)01381-6" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2001</span><strong>A review of NMR studies in RCo3 systems presenting d-moment instability.</strong><small>M.S. Reis, I.S. Oliveira, F. Garcia, A.P. Guimarães e A.Y. Takeuchi.</small><em>Hyperfine Interactions 133, 143.</em><a href="https://doi.org/10.1023/A:1012287904495" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2001</span><strong>Itinerant electron magnetism: NMR and magnetization studies in Y(Co1-xAlx)3.</strong><small>M.S. Reis, I.S. Oliveira, F. Garcia, A.P. Guimarães e A.Y. Takeuchi.</small><em>Journal of Magnetism and Magnetic Materials 226, 1184.</em><a href="https://doi.org/10.1016/S0304-8853(00)00733-2" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2000</span><strong>59-Co NMR spectroscopy and relaxation in the metamagnetic system Y1-xGdxCo3.</strong><small>M.S. Reis, I.S. Oliveira, F. Garcia, A.Y. Takeuchi e A.P. Guimarães.</small><em>Journal of Magnetism and Magnetic Materials 217, 49.</em><a href="http://profs.if.uff.br/marior/cv/j3m_217_2000_49.pdf" target="_blank" rel="noopener noreferrer">Abrir PDF ↗</a></li>
              <li><span>2000</span><strong>59-Co nuclear magnetic resonance in the metamagetic system Y1-xGdxCo3.</strong><small>M.S. Reis, I.S. Oliveira, F. Garcia, I. Dubenko, I.Y. Gaidukova, A.Y. Takeuchi e A.P. Guimarães.</small><em>Journal of Applied Physics 87, 4891.</em><a href="https://doi.org/10.1063/1.373193" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2000</span><strong>Evolution of the magnetic behavior of the Co subsystem in YCo3 caused by small variations in stoichiometry and Al substitution.</strong><small>I. Dubenko, I.Y. Gaidukova, A.S. Markosyan, M.S. Reis, M. Leonard e N. Ali.</small><em>Journal of Alloys and Compounds 303, 285.</em><a href="https://doi.org/10.1016/S0925-8388(00)00586-7" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ],
    footerRefs: "MEM pp.8-9",
    sourceRefs: ["E004"]
  },
  {
    id: "s06a-cbpf-magnetism-lab",
    layout: "photo",
    className: "cbpf-magnetism-video-slide",
    section: "Formação",
    title: "",
    figure: {
      src: "assets/figures/laboratorio-magnetismo-cbpf.png",
      alt: "Laboratório de Magnetismo do CBPF em reportagem sobre cientistas brasileiros",
      caption: "Laboratório de Magnetismo · CBPF — abrir vídeo",
      href: "https://youtu.be/DB3PzzIrRTc?si=z8BTqBDIqXuWWz3O"
    },
    footerRefs: "Cientistas Brasileiros: César Lattes e José Leite Lopes",
    sourceRefs: ["E004"]
  },
  {
    id: "s06b-doctorate",
    layout: "cards",
    section: "Formação",
    eyebrow: "CBPF e UA | 2000-2003",
    title: "Doutorado: CBPF e UA",
    lead: "Manganitas, RMN e estatística de Tsallis: entre o CBPF e a Universidade de Aveiro, o trabalho integrou preparação de amostras, caracterização magnética e modelagem não extensiva.",
    cards: [
      {
        label: "Orientação",
        text: "Prof. Ivan Oliveira, no CBPF, e Prof. Vitor Amaral, na Universidade de Aveiro, Portugal."
      },
      {
        label: "Sistema",
        text: "Manganitas de valência mista e magnetorresistência colossal, com respostas marcadas por não homogeneidade."
      },
      {
        label: "Experimento",
        text: "Fabricação de amostras, medidas de magnetização e ressonância magnética nuclear."
      },
      {
        label: "Modelo",
        text: "Estatística não extensiva de Tsallis aplicada à separação de fases e aos desvios dos modelos tradicionais."
      },
      {
        label: "Resultados",
        html: "<ul><li>Conexão experimental entre manganitas e estatística não extensiva.</li><li>Descrição de sistemas magnéticos não homogêneos pelo parâmetro entrópico q.</li><li>Defesa no CBPF em 2003, após três anos e meio.</li><li>Doze artigos publicados até a defesa.</li></ul>"
      },
      {
        label: "Produção científica",
        html: `<p>Doze artigos publicados durante o período do doutorado, entre 2002 e 2004.</p>
          <button class="publications-trigger" type="button" data-publications-open="doctorate-publications">12 publicações · abrir lista</button>
          <dialog class="publications-dialog" id="doctorate-publications" aria-labelledby="doctorate-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Doutorado · 2002-2004</p><h2 id="doctorate-publications-title">Publicações do doutorado</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list">
              <li><span>2004</span><strong>Charge-Ordering and Magnetoelastic Coupling Effects on the Magnetocaloric Properties of Manganites.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.A. Amaral.</small><em>Acta Physica Polonica A 105, 163.</em><a href="http://doi.org/10.12693/APhysPolA.105.163" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Field tuned magnetocaloric effect in metamagnetic manganite system.</strong><small>A.M. Gomes, F. Garcia, A.P. Guimarães, M.S. Reis e V.S. Amaral.</small><em>Applied Physics Letters 85, 4974.</em><a href="http://dx.doi.org/10.1063/1.1827926" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Magnetic nonextensivity in CMR manganites.</strong><small>M.S. Reis, J.P. Araújo, V.S. Amaral e I.S. Oliveira.</small><em>Journal of Magnetism and Magnetic Materials 272, 1011.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.651" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Magnetocaloric Effect in Manganites: Ferromagnetism and Charge-Ordering Effects.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.S. Amaral.</small><em>Materials Science Forum 455, 148.</em><a href="https://doi.org/10.4028/www.scientific.net/MSF.455-456.148" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Magnetocaloric effect of the Pr0.43Gd0.25Ca0.32MnO3.</strong><small>A.M. Gomes, M.S. Reis, A.P. Guimarães, J.P. Araújo, P.B. Tavares e V.S. Amaral.</small><em>Journal of Magnetism and Magnetic Materials 272, 2385.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.1129" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Positive and colossal magnetocaloric effect due to charge ordering in CMR manganites.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.S. Amaral.</small><em>Journal of Magnetism and Magnetic Materials 272, 2393.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.650" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2003</span><strong>Magnetic phase diagram for a non-extensive system: Experimental connection with manganites.</strong><small>M.S. Reis, V.S. Amaral, J.P. Araújo e I.S. Oliveira.</small><em>Physical Review B 68, 014404.</em><a href="https://doi.org/10.1103/PhysRevB.68.014404" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>A depth profile XMCD study of Au/CoO/Co.</strong><small>A.D. Alvarenga, F. Garcia, W.D. Brewer, M. Gruyters, M. Gierlings, M.S. Reis, P. Panissod, L.C. Sampaio e A.P. Guimarães.</small><em>Journal of Magnetism and Magnetic Materials 242, 958.</em><a href="https://doi.org/10.1016/S0304-8853(01)01311-7" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Electric and magnetic properties of Cu-doped La-Sr manganites.</strong><small>M.S. Reis, J.C.C. Freitas, M.T.D. Orlando, A.M. Gomes, A.L. Lima, I.S. Oliveira, A.P. Guimarães e A.Y. Takeuchi.</small><em>Journal of Magnetism and Magnetic Materials 242, 668.</em><a href="https://doi.org/10.1016/S0304-8853(01)01005-8" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Evidences for Tsallis non-extensivity on CMR manganites.</strong><small>M.S. Reis, J.C.C. Freitas, M.T.D. Orlando, E.K. Lenzi e I.S. Oliveira.</small><em>Europhysics Letters 58, 42.</em><a href="https://doi.org/10.1209/epl/i2002-00603-9" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Magnetic behavior of a non-extensive S-spin system: possible connections to manganites.</strong><small>M.S. Reis, J.P. Araújo, V.S. Amaral, E.K. Lenzi e I.S. Oliveira.</small><em>Physical Review B 66, 134417.</em><a href="https://doi.org/10.1103/PhysRevB.66.134417" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Magnetocaloric effect in (Er,Tb)Co2.</strong><small>A.M. Gomes, M.S. Reis, I.S. Oliveira, A.P. Guimarães e A.Y. Takeuchi.</small><em>Journal of Magnetism and Magnetic Materials 242, 870.</em><a href="https://doi.org/10.1016/S0304-8853(01)01327-0" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ],
    footerRefs: "MEM pp.9-11; refs. [3-8]",
    sourceRefs: ["E004", "E018"]
  },
  {
    id: "s07-aveiro-sandwich",
    layout: "flow",
    section: "Formação",
    eyebrow: "Doutorado sanduíche | Brasil > Portugal > França",
    title: "Doutorado sanduíche",
    lead: "A circulação entre o CBPF, a Universidade de Aveiro e Estrasburgo integrou desenvolvimento teórico, atividade experimental e colaboração internacional.",
    steps: [
      {
        meta: "2000-2001",
        label: "Brasil | CBPF",
        text: "Desenvolvimento inicial dos modelos utilizando a estatística de Tsallis."
      },
      {
        meta: "2001-2002",
        label: "Portugal | Aveiro",
        text: "Integração ao grupo do Prof. Vitor Amaral; início das atividades experimentais e continuação das atividades teóricas em manganitas de valência mista."
      },
      {
        meta: "visita científica",
        label: "França | Estrasburgo",
        text: "Medidas de RMN no laboratório do Prof. Pierre Panissod, ampliando o conjunto experimental da tese."
      },
      {
        meta: "2003",
        label: "Brasil | CBPF",
        text: "Retorno e defesa da tese. Primeiras colaborações internacionais estruturadas."
      }
    ],
    footerRefs: "MEM pp.9-11",
    sourceRefs: ["E005", "E030"],
    notes: "Enfatizar que Aveiro aparece como formação científica e não como viagem: o ponto é a maturação da integração experimento-teoria."
  },
  {
    id: "s08-aveiro-postdoc",
    layout: "cards",
    section: "Formação",
    eyebrow: "Aveiro e CICECO | autonomia científica",
    title: "Pós-doc e Pesquisador Auxiliar",
    lead: "A etapa em Aveiro transforma a formação internacional em autonomia científica, gestão de laboratório e início formal de orientações.",
    cards: [
      {
        meta: "2003-2005",
        label: "Pós-doutoramento",
        logo: { src: "assets/logos/universidade-aveiro.png", alt: "Universidade de Aveiro" },
        text: "Continuidade do estudo de manganitas e estatística de Tsallis no grupo do Prof. Vitor Amaral."
      },
      {
        meta: "2004",
        label: "Circulação internacional",
        text: "Participação em conferências na França, Grécia e Itália. Na figura ao lado, apresentação oral em Erice, Itália, sobre complexidade, metaestabilidade e não extensividade."
      },
      {
        meta: "2005-2009",
        label: "Pesquisador Auxiliar | CICECO",
        logo: { src: "assets/logos/ciceco.png", alt: "CICECO - Aveiro Institute of Materials" },
        text: "Implantação, organização e manutenção de laboratório de magnetismo associado a novo VSM."
      },
      {
        meta: "2005-2009",
        label: "Nova agenda",
        html: "<ul><li>Transição gradual para complexos metálicos.</li><li>Modelagem termodinâmica.</li><li>Primeiras atividades formais de orientação.</li></ul>"
      }
    ],
    figure: {
      src: "assets/figures/erice-presentation-2004.jpg",
      alt: "Apresentação oral em Erice, Itália, 2004",
      caption: "Erice, Itália, 2004 — apresentação oral sobre complexidade, metaestabilidade e não extensividade."
    },
    footerRefs: "MEM pp.11-13",
    sourceRefs: ["E005", "E030"],
    notes: "Usar este slide para explicar a passagem de formação para autonomia científica."
  },
  {
    id: "s05-formation-timeline",
    layout: "timeline",
    section: "Formação",
    eyebrow: "Linha do tempo | capítulo 2",
    title: "Da UFRJ ao CICECO",
    milestones: [
      { label: "1993-1997", text: "Bacharelado em Física na UFRJ." },
      { label: "1996-1997", text: "Iniciação científica no CBPF; magnetismo e instrumentação." },
      { label: "1998-2000", text: "Mestrado no CBPF; RCo3, magnetização e RMN." },
      { label: "1999", text: "MMM 99; contato com manganitas e Vitor Amaral." },
      { label: "2000-2001", text: "Início do doutorado no CBPF. Início dos modelos utilizando a Estatística de Tsallis." },
      { label: "2001-2002", text: "Doutorado sanduíche em Aveiro; colaboração com Vitor Amaral. Início da parte experimental." },
      { label: "2003-2005", text: "Pós-doutoramento na Universidade de Aveiro. Continuação do tema de doutorado." },
      { label: "2005-2009", text: "Pesquisador Auxiliar no CICECO; laboratório, VSM e complexos metálicos." }
    ],
    footerRefs: "MEM pp.7-13; resumo cap. 2",
    sourceRefs: ["E003", "E004", "E005"],
    notes: "O memorial registra 2001-2002 no texto narrativo para o período em Aveiro, com defesa no CBPF em 2003."
  },
  {
    id: "s10-uff-entry",
    layout: "section",
    section: "UFF",
    eyebrow: "Seção 2",
    title: "Desenvolvimento acadêmico e consolidação na UFF",
    footerRefs: "MEM pp.12,20-21",
    sourceRefs: ["E006", "E016"]
  },
  {
    id: "s11-teaching",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Atividades docentes",
    title: "Atividades docentes",
    lead: "Atuação contínua e abrangente, distribuída por vários níveis do curso de Física; articulando graduação, pós-graduação, teoria, experimento e aplicações.",
    cards: [
      { label: "Graduação", html: "<ul><li>Física Experimental I e IV</li><li>Física Moderna</li><li>Introdução à Mecânica Quântica</li><li>Mecânica Quântica II</li><li>Termodinâmica</li></ul>" },
      { label: "Pós-graduação", html: "<ul><li>Mecânica Quântica I</li><li>Introdução ao magnetismo</li><li>Magnetismo Molecular</li></ul>" },
      { label: "Robótica e automação", text: "Curso para graduação e pós-graduação com Arduino, sistemas de automação e projetos que integram conceitos e prática experimental. Roteiro próprio. Laboratório montado para este propósito." },
      { label: "Material didático e livros", html: "<p>A experiência docente originou materiais próprios e os livros:</p><ol><li>Magnetismo Molecular (2010)</li><li>Fundamentals of Magnetism (2013)</li><li>Quantum Mechanics (2025)</li><li>Termodinâmica (em redação)</li></ol><p>Serão detalhados mais à frente nesta apresentação.</p>" }
    ],
    footerRefs: "MEM pp.12-13,48-50",
    sourceRefs: ["E007", "E008"]
  },
  {
    id: "s13-people",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Formação de alunos",
    title: "Formação de alunos",
    lead: "Formação em todos os níveis, da iniciação científica ao pós-doutorado, articulando pesquisa experimental, modelagem teórica e colaboração internacional.",
    cards: [
      { label: "25 IC e extensão | 2010–2025", html: "<ul><li>Física</li><li>Engenharia</li><li>Cinema e outras áreas</li><li>Bolsas de IC: FAPERJ, CNPq e UFF</li><li>5 monografias derivadas dos projetos</li></ul>" },
      { label: "4 mestrados", html: "<ul><li>Complexos metálicos</li><li>Ligas Heusler</li><li>Materiais magnetocalóricos e barocalóricos</li></ul><p>Bruno Pimentel recebeu o prêmio de melhor dissertação da UFF em 2018.</p>" },
      { label: "5 doutorados + 2 em curso", html: "<p>Dois eixos:</p><ul><li>Informação quântica e correlações quânticas em complexos metálicos</li><li>Síntese e caracterização de novos materiais magnéticos para efeitos calóricos</li></ul><p><strong>1 coorientação internacional:</strong> tese de Vivian Andrade na Universidade do Porto sobre redução de escala em compostos Gd-Si-Ge e efeitos magnetocalóricos.</p>" },
      { label: "Experiência internacional de doutorandos", html: "<p>Estágios de doutorado de alunos:</p><ul><li>França</li><li>EUA</li><li>Portugal</li></ul>" },
      { label: "10(2) pós-doutorados", html: "<ul><li>PNPD/CAPES</li><li>PPG-Física/UFF</li><li>FAPERJ</li><li>CNPq</li><li>Foco predominante na fabricação e caracterização de materiais para efeitos calóricos</li></ul><p><strong>Projeto PNPD/CAPES:</strong> aproximadamente cinco anos.</p>" }
    ],
    footerRefs: "MEM pp.13-15; Tabelas 10.2, 10.3 e 10.4",
    sourceRefs: ["E009", "E010", "E029"]
  },
  {
    id: "s13b-student-photo",
    layout: "photo",
    section: "UFF",
    eyebrow: "",
    title: "",
    figure: {
      src: "assets/figures/formacao-alunos-2013.jpg",
      alt: "Almoço de final de ano com estudantes do grupo em dezembro de 2013",
      caption: "Almoço de final de ano com estudantes do grupo, dezembro de 2013."
    },
    footerRefs: "MEM p.15; Figura 3.2",
    sourceRefs: ["E010"]
  },
  {
    id: "s14-former-students",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Inserção profissional",
    title: "Inserção profissional e acadêmica dos ex-orientandos",
    cards: [
      { label: "Richard Javier Caraballo-Vivas", meta: "UFRJ | Campus Macaé", logo: { src: "assets/logos/ufrj.png", alt: "UFRJ" } },
      { label: "Clebson dos Santos Cruz", meta: "UFOB", logo: { src: "assets/logos/ufob.png", alt: "UFOB" } },
      { label: "Diogo Pinto", meta: "USP", logo: { src: "assets/logos/usp.png", alt: "USP" } },
      { label: "Cleidson Santos de Castro", meta: "UFRB", logo: { src: "assets/logos/ufrb.png", alt: "UFRB" } },
      { label: "Sandra Pedro\nJulio Tedesco\nVivian Andrade", meta: "UERJ", logo: { src: "assets/logos/uerj.svg", alt: "UERJ" } },
      { label: "Livia Batista Lopes Escobar", meta: "PUC-Rio", logo: { src: "assets/logos/puc-rio.png", alt: "PUC-Rio" } },
      { label: "Vinicius Gomes", meta: "UFF | Campus Petrópolis", logo: { src: "assets/logos/uff.svg", alt: "UFF" } }
    ],
    footerRefs: "MEM pp.15-16",
    sourceRefs: ["E011"]
  },
  {
    id: "s15-lab-magnetism",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Montagem de laboratórios",
    title: "Laboratório de Magnetismo da UFF 2010–2017",
    cards: [
      { label: "Contexto UFF", text: "Ingresso em um movimento de renovação do parque experimental do IF-UFF, com foco em novas frentes de pesquisa." },
      { label: "Equipamentos adquiridos", html: "<ul><li>PPMS com acessórios para medidas magnéticas e de transporte</li><li>Liquefatora de hélio</li><li>SQUID para medidas a baixas temperaturas</li><li>Diversos acessórios</li></ul>" },
      { label: "Construção", html: "<ul><li>Projetos de fomento</li><li>Apoio institucional</li><li>Espaço físico</li></ul>" },
      { label: "Destaque", text: "Laboratório destacado em reportagem institucional da FAPERJ." }
    ],
    figures: [
      { src: "assets/figures/lab-magnetismo-2014-bancadas.jpg", alt: "Bancadas e área de preparação do Laboratório de Magnetismo da UFF em 2014" },
      { src: "assets/figures/lab-magnetismo-2014-equipamentos.jpg", alt: "Equipamentos criogênicos do Laboratório de Magnetismo da UFF em 2014" },
      { src: "assets/figures/lab-magnetismo-2013-visao-geral.jpg", alt: "Visão geral do Laboratório de Magnetismo da UFF em 2013" },
      { src: "assets/figures/lab-magnetismo-2013-bancada.jpg", alt: "Bancada de preparação de amostras do Laboratório de Magnetismo da UFF em 2013" }
    ],
    footerRefs: "MEM pp.16-17,21",
    sourceRefs: ["E012", "E015"],
    notes: "Ligar com CICECO: experiência anterior com VSM e protocolos experimentais aparece aqui como capacidade institucional."
  },
  {
    id: "s15b-lab-report",
    layout: "photo",
    section: "UFF",
    eyebrow: "",
    title: "",
    figure: {
      src: "assets/figures/faperj-nanomagnetismo-reportagem-2014-v2.png",
      alt: "Reportagem da FAPERJ sobre o Laboratório de Magnetismo da UFF",
      caption: "Reportagem institucional da FAPERJ, publicada em 13 de fevereiro de 2014."
    },
    footerRefs: "FAPERJ | O maravilhoso mundo do nanomagnetismo | 13 fev. 2014",
    sourceRefs: ["E012", "E015"]
  },
  {
    id: "s16-l3d",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Montagem de laboratórios",
    title: "L3D: robótica, automação e ensino por projeto 2018–presente",
    cards: [
      { label: "Contexto", text: "Criação do laboratório com foco em ensino." },
      { label: "Equipamentos adquiridos", html: "<ul><li>Arduinos e placas de controle</li><li>Sensores</li><li>Impressoras 3D</li><li>Outros itens para instrumentação</li></ul>" },
      { label: "Curso", html: `
        <p>Robótica aplicada à Física para graduação e pós-graduação, com aprendizagem orientada por projetos.</p>
        <a class="publications-trigger" href="assets/docs/automacao-para-fisicos.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf">Visualizar material do curso ↗</a>` },
      { label: "Atividades de Extensão", html: `
        <p>Oficinas com o Coluni, cooperação educacional e desdobramentos com escolas em Portugal.</p>
        <button class="publications-trigger" type="button" data-publications-open="l3d-products">2 produtos · abrir lista</button>
        <dialog class="publications-dialog" id="l3d-products" aria-labelledby="l3d-products-title">
          <div class="publications-dialog-head">
            <div><p class="publications-kicker">L3D · 2018–presente</p><h2 id="l3d-products-title">Produtos acadêmicos</h2></div>
            <button class="publications-close" type="button" aria-label="Fechar produtos acadêmicos">×</button>
          </div>
          <ol class="publications-list">
            <li><span>2021 · MONOGRAFIA</span><strong>Reflexões e perspectivas acerca do uso da automação e robótica no ensino de Ciências Exatas.</strong><small>Patrick Ribeiro Rodrigues.</small><em>Universidade Federal Fluminense, 2021.</em></li>
            <li><span>2026 · ARTIGO</span><strong>Ensino por investigação e robótica educativa no contexto do Perfil dos Alunos à Saída da Escolaridade Obrigatória em Portugal.</strong><small>P. R. Rodrigues, T. M. C. Reis, D. F. M. de Castro Ferreira, M. Reis e P. H. D. Menezes.</small><em>APEDuC Revista — Investigação e Práticas em Educação em Ciências, Matemática e Tecnologia 7(1), 194–209, 2026.</em></li>
          </ol>
        </dialog>` },
      { label: "Uso atual", html: "<ul><li><a href=\"https://edu.ieee.org/br-uff/lufft/\" target=\"_blank\" rel=\"noopener noreferrer\">Equipe de foguetes LUFFT/UFF</a></li><li>Meninas na Ciência da Casa da Descoberta</li><li>Alunos de monografia</li></ul>" }
    ],
    footerRefs: "MEM pp.17-18,46",
    sourceRefs: ["E013"],
    notes: "Usar o carro com sensores como exemplo concreto: o aluno projeta, monta, mede, controla e explica o fenômeno."
  },
  {
    id: "s16a-l3d-photo",
    layout: "photo",
    section: "UFF",
    eyebrow: "",
    title: "",
    figure: {
      src: "assets/figures/l3d-robotica-projeto-2019.png",
      alt: "Projeto final do curso de Automação e Robótica de 2019",
      caption: "Projeto final do curso de Automação e Robótica, 2019.2: carro construído por estudantes com sensores e sistemas de controle."
    },
    footerRefs: "MEM pp.17-18,46",
    sourceRefs: ["E013"]
  },
  {
    id: "s16b-innovation",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Projetos de inovação e pesquisa",
    title: "Sample for Science: inovação aplicada à ciência",
    lead: "O projeto transforma amostras científicas subutilizadas em recursos compartilháveis por meio de uma plataforma digital de intercâmbio entre grupos de pesquisa.",
    cards: [
      { label: "Problema", text: "Amostras produzidas com alto custo permanecem armazenadas após os estudos iniciais, enquanto outros grupos repetem esforços de síntese." },
      { label: "Solução", text: "Aplicativo mobile-first para cadastro, busca e solicitação de amostras, com DOI, riscos, visibilidade e comunicação entre pesquisadores." },
      { label: "Equipe", text: "Projeto multidisciplinar reunindo Física, Matemática, Computação, Marketing e Comunicação Audiovisual. Parte técnica coordenada pelo STI." },
      { label: "Alcance", html: `<p>Aplicativo publicado nas lojas Apple e Google; proposta madura para retomada quando houver financiamento dedicado.</p>
        <div class="store-links" aria-label="Baixar Sample for Science">
          <a class="store-link" href="https://apps.apple.com/br/app/sample-for-science/id6470819452?l=en-GB" target="_blank" rel="noopener noreferrer"><span class="store-symbol store-symbol-apple" aria-hidden="true"></span><span><small>Disponível na</small>App Store</span></a>
          <a class="store-link" href="https://play.google.com/store/apps/details?id=br.uff.sample&amp;hl=en_SG" target="_blank" rel="noopener noreferrer"><span class="store-symbol store-symbol-play" aria-hidden="true">▶</span><span><small>Disponível no</small>Google Play</span></a>
        </div>` }
    ],
    footerRefs: "MEM pp.18-20; ref. [1]",
    sourceRefs: ["E014"]
  },
  {
    id: "s16ba-sample-gallery",
    layout: "photo",
    section: "UFF",
    eyebrow: "",
    title: "",
    figures: [
      { src: "assets/figures/sample-for-science-store.jpg", alt: "Página do Sample for Science na loja de aplicativos", caption: "Aplicativo publicado nas lojas oficiais." },
      { src: "assets/figures/sample-for-science-login.jpg", alt: "Tela de entrada do aplicativo Sample for Science", caption: "Acesso ao Sample for Science." },
      { src: "assets/figures/sample-for-science-dashboard.png", alt: "Menu e painel do aplicativo Sample for Science", caption: "Navegação e busca de amostras." }
    ],
    footerRefs: "MEM pp.18-20; Figura 3.4; ref. [1]",
    sourceRefs: ["E014"]
  },
  {
    id: "s16c-research-projects",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Projetos de inovação e pesquisa",
    title: "Projetos de pesquisa e formação",
    lead: "Projetos financiados por CNPq, FAPERJ, CAPES, FCT e parceiros institucionais sustentam infraestrutura, recursos humanos, redes e a gestão continuada da pesquisa.",
    cards: [
      { label: "Infraestrutura", text: "Projetos destinados à implantação e à consolidação do Laboratório de Magnetismo e do L3D, incluindo equipamentos, manutenção, adequação de espaços e condições experimentais." },
      { label: "Recursos humanos", text: "Projetos voltados à formação de pessoas, com bolsas de iniciação científica e pós-doutorado integradas às linhas de pesquisa e aos laboratórios." },
      { label: "Redes internacionais", text: "Projetos de colaboração com Portugal e, em 2026, com a América Latina, além de missões científicas, congressos e visitas a centros de pesquisa." },
      { label: "Gestão e administração", text: "Coordenação integral dos projetos: gestão de recursos financeiros, compras, bolsas, missões, relatórios técnicos e prestações de contas — uma dedicação administrativa contínua." },
      { label: "Bolsas de mérito", html: "<ul><li>1 JCNE/FAPERJ</li><li>3 CNE/FAPERJ</li><li>Produtividade CNPq: nível 2 (3 ciclos), nível 1D (1 ciclo) e, atualmente, nível 1C</li></ul><p>Detalhamento na seção Impacto.</p>" },
      { label: "Projetos por agência", className: "agency-summary-card", html: "<div class=\"agency-breakdown\"><p><strong>CNPq</strong><span>8 coord. · 1 part.</span><small>PQ · Universal · INCT · colaboração internacional</small></p><p><strong>FAPERJ</strong><span>9 coord. · 7 part.</span><small>APQ1 · JCNE · CNE · PRONEM · Sediadas</small></p><p><strong>CAPES</strong><span>2 coord. · 2 part.</span><small>Cooperação internacional — Portugal<br>Recursos humanos e mobilidade local</small></p><p><strong>UFF/Proppi</strong><span>3 coordenados</span><small>Infralabpesq · Jovens Pesquisadores · FOPESq</small></p><p><strong>Universidade de Sevilha</strong><span>1 coordenado</span><small>Mobilidade institucional</small></p></div><p class=\"agency-total\"><strong>Total</strong><span>23 coordenados · 10 participações</span></p>" }
    ],
    footerRefs: "MEM p.20; Tabela 12.3",
    sourceRefs: ["E015"]
  },
  {
    id: "s16d-administration",
    layout: "cards",
    section: "UFF",
    eyebrow: "UFF | Administração",
    title: "Administração acadêmica e científica",
    lead: "A atuação administrativa acompanha a construção institucional: colegiados, laboratórios, projetos, editoração e organização científica.",
    cards: [
      { label: "Colegiados", text: "Colegiado da Pós-Graduação em Física (2012-2016), Núcleo Docente Estruturante (2011) e comissão departamental (2013)." },
      { label: "Laboratórios", text: "Participação na coordenação do Laboratório de Magnetismo e concepção, montagem e coordenação do L3D." },
      { label: "Projetos", text: "Gestão financeira e administrativa contínua: recursos, compras, bolsas, equipamentos, missões científicas, relatórios e prestações de contas." },
      { label: "Editoração", text: "Editor-chefe da Physica B: gestão da revista, política editorial e grupo de editores." },
      { label: "Comunidade científica › Organização de conferências", html: `
        <p>Organização de conferências e eventos para circulação do conhecimento e fortalecimento das redes de colaboração.</p>
        <button class="publications-trigger" type="button" data-publications-open="organized-conferences">Conferências organizadas · abrir lista</button>
        <dialog class="publications-dialog conferences-dialog" id="organized-conferences" aria-labelledby="organized-conferences-title">
          <div class="publications-dialog-head">
            <div><p class="publications-kicker">Comunidade científica</p><h2 id="organized-conferences-title">Organização de conferências e eventos</h2></div>
            <button class="publications-close" type="button" aria-label="Fechar lista de conferências">×</button>
          </div>
          <ol class="publications-list conferences-list">
            <li><span>REDE INTERNACIONAL</span><strong>Latin American Network of Condensed Matter (LAFMAT)</strong><small>Comitê organizador.</small><em>Ano e local em definição.</em></li>
            <li><span>2023 · RIO DE JANEIRO</span><strong>III Workshop de Magnetismo do Estado do Rio de Janeiro (iiiWorkMagRJ)</strong><em>Rio de Janeiro, Brasil.</em></li>
            <li><span>2019 · SANTA CATARINA</span><strong>Symposium K: <i>i-Caloric Materials and Applications</i> (SBPMat)</strong><em>Santa Catarina, Brasil.</em></li>
            <li><span>2018 · AVEIRO</span><strong>Workshop <i>How to write a scientific manuscript</i></strong><em>Aveiro, Portugal.</em></li>
            <li><span>2016 · RIO DE JANEIRO</span><strong>II Workshop de Magnetismo do Estado do Rio de Janeiro (iiWorkMagRJ)</strong><em>Rio de Janeiro, Brasil.</em></li>
            <li><span>2015 · RIO DE JANEIRO</span><strong>I Workshop de Magnetismo do Estado do Rio de Janeiro (iWorkMagRJ)</strong><em>Rio de Janeiro, Brasil.</em></li>
            <li><span>2009 · AVEIRO</span><strong>VI Jornadas CICECO</strong><em>Aveiro, Portugal.</em></li>
          </ol>
        </dialog>` }
    ],
    footerRefs: "MEM pp.20-21",
    sourceRefs: ["E016"]
  },
  {
    id: "s17-program-map",
    layout: "cards",
    section: "Resultados",
    eyebrow: "Seção 3",
    title: "Linhas de pesquisa",
    cards: [
      {
        label: "3.1",
        slideTarget: "s19-tsallis-problem",
        className: "research-line-card-tsallis",
        html: `
          <p>Aplicação da Estatística de Tsallis ao Magnetismo</p>
          <p class="research-line-period">2002–2009</p>
          <button class="publications-trigger research-line-publications-trigger" type="button" data-publications-open="tsallis-publications">12 publicações · abrir lista</button>
        `
      },
      {
        label: "3.2",
        slideTarget: "s23-mce-foundation",
        className: "research-line-card-mce",
        html: `
          <p>Efeito magnetocalórico e materiais magnéticos</p>
          <p class="research-line-period">2002–presente</p>
          <button class="publications-trigger research-line-publications-trigger" type="button" data-publications-open="mce-publications">35 publicações · abrir lista</button>
        `
      },
      {
        label: "3.3",
        slideTarget: "s26-complexes-hamiltonian",
        className: "research-line-card-complexes",
        html: `
          <p>Complexos Metálicos, Magnetismo e Modelagem Termodinâmica</p>
          <p class="research-line-period">2006–presente</p>
          <button class="publications-trigger research-line-publications-trigger" type="button" data-publications-open="complexes-publications">18 publicações · abrir lista</button>
        `
      },
      {
        label: "3.5",
        slideTarget: "s31-graphene-concept",
        className: "research-line-card-relativistic",
        html: `
          <p>Efeitos calóricos em grafeno</p>
          <p class="research-line-period">2011–2020</p>
          <button class="publications-trigger research-line-publications-trigger" type="button" data-publications-open="graphene-caloric-publications">22 publicações · abrir lista</button>
        `
      },
      {
        label: "3.6",
        slideTarget: "s33-quantum-thermo-batteries",
        className: "research-line-card-quantum-thermo",
        html: `
          <p>Termodinâmica quântica em materiais magnéticos</p>
          <p class="research-line-period">2008–presente</p>
          <button class="publications-trigger research-line-publications-trigger" type="button" data-publications-open="quantum-thermo-publications">16 publicações · abrir lista</button>
        `
      }
    ],
    footerRefs: "MEM pp.22-31",
    sourceRefs: ["E017"]
  },
  {
    id: "s19-tsallis-problem",
    layout: "cards",
    section: "Resultados",
    eyebrow: "Linha 1 | Tsallis e magnetismo",
    title: "Motivação",
    lead: "Durante o doutorado, o desafio foi compreender desvios sistemáticos nas curvas de magnetização e suscetibilidade de manganitas de magnetorresistência colossal.",
    cards: [
      { label: "Sistema físico", text: "Manganitas CMR magneticamente não homogêneas, marcadas por separação de fases e interações de longo alcance." },
      { label: "Limite dos modelos usuais", text: "Modelos tradicionais de campo médio não reproduziam adequadamente a curvatura das isotermas M(H), a suscetibilidade e a aproximação à saturação." },
      { label: "Hipótese de trabalho", text: "Usar a estatística não extensiva de Tsallis para incorporar a distribuição de interações magnéticas sem introduzir distribuições de campo." }
    ],
    footerRefs: "MEM · Aplicação da Estatística de Tsallis ao Magnetismo",
    sourceRefs: ["E018"]
  },
  {
    id: "s20-tsallis-equations",
    layout: "technical",
    className: "tsallis-theory-slide",
    section: "Resultados",
    eyebrow: "Linha 1 | Modelo não extensivo",
    title: "",
    equations: [
      equationAsset("tsallis-entropy", "Entropia não extensiva de Tsallis", ""),
      equationAsset("tsallis-density-matrix", "Matriz densidade generalizada", ""),
      equationAsset("tsallis-partition-function", "Função de partição generalizada", ""),
      equationAsset("tsallis-langevin-generalized", "Função de Langevin generalizada", ""),
      equationAsset("tsallis-gibbs-free-energy", "Energia livre de Gibbs", ""),
      equationAsset("tsallis-transition-limits", "Limites de metaestabilidade", "")
    ],
    items: [
      "q > 0,5: mínimo único e transição contínua de segunda ordem.",
      "q < 0,5: mínimos degenerados, metaestabilidade, histerese e transição de primeira ordem."
    ],
    figures: [
      {
        src: "assets/figures/tsallis-fig-1-gibbs.png",
        alt: "Energia livre de Gibbs para transições de segunda e primeira ordem",
        caption: ""
      },
      {
        src: "assets/figures/tsallis-fig-2-magnetization.png",
        alt: "Magnetização reduzida em função da temperatura para diferentes valores de q",
        caption: ""
      }
    ],
    footerRefs: "Physical Review B 68, 014404 (2003), Eqs. (1), (7), (9)-(11), Figs. 1-2",
    sourceRefs: ["E018"]
  },
  {
    id: "s21-tsallis-result",
    layout: "technical",
    className: "tsallis-validation-slide",
    section: "Resultados",
    eyebrow: "Linha 1 | Landau e conexão experimental",
    title: "",
    lead: "Colaborações internacionais que estruturaram a pesquisa em materiais quânticos e efeitos calóricos.",
    items: [
      "A expansão da energia livre fornece todos os coeficientes de Landau e conecta a ordem da transição às assinaturas experimentais de La₀.₆₀Y₀.₀₇Ca₀.₃₃MnO₃.",
      "B_q < 0 para q < 0,5: o Arrot plot adquire inclinação negativa e identifica uma transição de primeira ordem.",
      "Os parâmetros ajustados em M(H) reproduzem H/M(T) sem qualquer parâmetro adicional."
    ],
    equations: [
      equationAsset("tsallis-landau-coefficients", "Expansão da energia livre e coeficientes de Landau generalizados", "")
    ],
    figures: [
      {
        src: "assets/figures/tsallis-fig-9-arrot.png",
        alt: "Arrot plots generalizados para diferentes valores do parâmetro q",
        caption: ""
      },
      {
        src: "assets/figures/tsallis-fig-10-mh.png",
        alt: "Curvas experimentais e teóricas de magnetização em função do campo",
        caption: ""
      },
      {
        src: "assets/figures/tsallis-fig-12-hm.png",
        alt: "Curvas experimental e teórica de H sobre M em função da temperatura",
        caption: ""
      }
    ],
    footerRefs: "Reis et al., Physical Review B 68, 014404 (2003), Eqs. (26)-(29), Figs. 9, 10 e 12",
    sourceRefs: ["E018"]
  },
  {
    id: "s22-tsallis-paper",
    layout: "photo",
    className: "tsallis-paper-slide",
    section: "Resultados",
    title: "",
    publicationsDialogId: "tsallis-publications",
    publicationsLabel: "12 publicações · abrir lista",
    figure: {
      src: "assets/figures/tsallis-prb-68-title.png?v=20260826.02",
      alt: "Cabeçalho do artigo Magnetic phase diagram for a nonextensive system: Experimental connection with manganites",
      caption: ""
    },
    footerRefs: "Physical Review B 68, 014404 (2003)",
    sourceRefs: ["E018"]
  },
  {
    id: "s22-tsallis-contribution",
    layout: "modal",
    cards: [
      {
        html: `<dialog class="publications-dialog" id="tsallis-publications" aria-labelledby="tsallis-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Tsallis e magnetismo · 2002–2009</p><h2 id="tsallis-publications-title">Publicações associadas</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list" reversed>
              <li><span>2009</span><strong>Finite-size analysis of a two-dimensional Ising model within a nonextensive approach.</strong><small>N. Crokidakis, D.O. Soares-Pinto, M.S. Reis, A.M. Souza, R.S. Sarthour e I.S. Oliveira.</small><em>Physical Review E 80, 051101.</em><a href="https://doi.org/10.1103/PhysRevE.80.051101" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>Phase diagram of a 2D Ising model within a nonextensive approach.</strong><small>D.O. Soares-Pinto, I.S. Oliveira e M.S. Reis.</small><em>European Physical Journal B 62, 337.</em><a href="https://doi.org/10.1140/epjb/e2008-00170-5" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2007</span><strong>On the nonextensive character of some magnetic systems.</strong><small>D.O. Soares-Pinto, M.S. Reis, R.S. Sarthour e I.S. Oliveira.</small><em>AIP Conference Proceedings 965, 232.</em><a href="https://doi.org/10.1063/1.2828738" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2007</span><strong>Spin-waves in a complex magnetic system: nonextensive approach.</strong><small>D.O. Soares-Pinto, M.S. Reis, R.S. Sarthour e I.S. Oliveira.</small><em>Journal of Statistical Mechanics: Theory and Experiment, P08011.</em><a href="https://doi.org/10.1088/1742-5468/2007/08/P08011" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2006</span><strong>Experimental determination of the non-extensive entropic parameter q.</strong><small>M.S. Reis, V.S. Amaral, R.S. Sarthour e I.S. Oliveira.</small><em>Physical Review B 73, 092401.</em><a href="https://doi.org/10.1103/PhysRevB.73.092401" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2006</span><strong>Physical meaning and measurement of the entropic parameter q in an inhomogeneous magnetic systems.</strong><small>M.S. Reis, V.S. Amaral, R.S. Sarthour e I.S. Oliveira.</small><em>European Physical Journal B 50, 99.</em><a href="https://doi.org/10.1140/epjb/e2006-00065-5" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>A study on composed non-extensive magnetic systems.</strong><small>F.A.R. Navarro, M.S. Reis, E.K. Lenzi e I.S. Oliveira.</small><em>Physica A 343, 499.</em><a href="https://doi.org/10.1016/j.physa.2004.05.074" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Magnetic nonextensivity in CMR manganites.</strong><small>M.S. Reis, J.P. Araújo, V.S. Amaral e I.S. Oliveira.</small><em>Journal of Magnetism and Magnetic Materials 272, 1011.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.651" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Positive and colossal magnetocaloric effect due to charge ordering in CMR manganites.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.S. Amaral.</small><em>Journal of Magnetism and Magnetic Materials 272, 2393.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.650" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2003</span><strong>Magnetic phase diagram for a non-extensive system: Experimental connection with manganites.</strong><small>M.S. Reis, V.S. Amaral, J.P. Araújo e I.S. Oliveira.</small><em>Physical Review B 68, 014404.</em><a href="https://doi.org/10.1103/PhysRevB.68.014404" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Evidences for Tsallis non-extensivity on CMR manganites.</strong><small>M.S. Reis, J.C.C. Freitas, M.T.D. Orlando, E.K. Lenzi e I.S. Oliveira.</small><em>Europhysics Letters 58, 42.</em><a href="https://doi.org/10.1209/epl/i2002-00603-9" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Magnetic behavior of a non-extensive S-spin system: possible connections to manganites.</strong><small>M.S. Reis, J.P. Araújo, V.S. Amaral, E.K. Lenzi e I.S. Oliveira.</small><em>Physical Review B 66, 134417.</em><a href="https://doi.org/10.1103/PhysRevB.66.134417" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ]
  },
  {
    id: "s23-mce-foundation",
    layout: "cards",
    className: "mce-motivation-slide",
    section: "Resultados",
    eyebrow: "Linha 2 | Efeito magnetocalórico",
    title: "Motivação",
    lead: "O efeito magnetocalórico descreve a resposta térmica reversível de um material magnético quando o campo aplicado varia — princípio físico da refrigeração magnética em estado sólido.",
    cards: [
      {
        label: "Efeito magnetocalórico",
        text: "A variação do campo magnético altera a magnetização que, por fim, altera a entropia de spin do material, produzindo troca de calor no processo isotérmico ou mudança de temperatura no processo adiabático."
      },
      {
        label: "Processo isotérmico",
        text: "A temperatura é mantida constante devido ao contato com o reservatório térmico. A variação de campo produz uma mudança de entropia magnética, ΔQ = TΔS."
      },
      {
        label: "Processo adiabático",
        text: "Sem troca de calor com o meio, a entropia total permanece constante. A variação de campo modifica a entropia magnética e, consequentemente, a entropia da rede, levando a uma mudança de temperatura, ΔTₐd."
      },
      {
        label: "Processo isotérmico · vídeo",
        className: "mce-video-card",
        html: `<iframe class="mce-video-frame" src="https://www.youtube-nocookie.com/embed/ANXU2Ml0tms" title="Processo isotérmico: mudança de entropia" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><a class="mce-video-link" href="https://youtu.be/ANXU2Ml0tms?si=nvpNLXrLIlee1gkG" target="_blank" rel="noopener noreferrer">Abrir no YouTube ↗</a>`
      },
      {
        label: "Processo adiabático · vídeo",
        className: "mce-video-card",
        html: `<iframe class="mce-video-frame" src="https://www.youtube-nocookie.com/embed/B7VKhML38JI" title="Processo adiabático: mudança de temperatura" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><a class="mce-video-link" href="https://youtu.be/B7VKhML38JI?si=s-FicFeks2cwz1_n" target="_blank" rel="noopener noreferrer">Abrir no YouTube ↗</a>`
      }
    ],
    footerRefs: "MEM pp.23-24; vídeos demonstrativos fornecidos pelo autor",
    sourceRefs: ["E019"]
  },
  {
    id: "s23c-mce-entropy-figure",
    layout: "photo",
    className: "mce-entropy-slide",
    section: "Resultados",
    title: "",
    figure: {
      src: "assets/figures/mce-entropy-temperature.png",
      alt: "Entropias magnética, de rede e total em função da temperatura, com as variações isotérmica de entropia e adiabática de temperatura",
      caption: "M.S. Reis, Coordination Chemistry Reviews 417 (2020) 213357"
    },
    footerRefs: "Representação termodinâmica dos processos isotérmico e adiabático",
    sourceRefs: ["E019"]
  },
  {
    id: "s23d-mce-equations",
    layout: "technical",
    className: "mce-equations-slide",
    section: "Resultados",
    eyebrow: "Linha 2 | Efeito magnetocalórico",
    title: "",
    lead: "",
    equations: [
      equationAsset("mce-entropy-process", "Processo isotérmico e variação de entropia magnética", ""),
      equationAsset("mce-temperature-process", "Processo adiabático e variação de temperatura", "")
    ],
    items: [],
    footerRefs: "MEM pp.23-24; relações de Maxwell e condição adiabática",
    sourceRefs: ["E019"]
  },
  {
    id: "s23b-mce-publications",
    layout: "modal",
    cards: [
      {
        html: `<dialog class="publications-dialog" id="mce-publications" aria-labelledby="mce-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Efeito magnetocalórico e materiais magnéticos · 2002–presente</p><h2 id="mce-publications-title">35 publicações associadas</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list" reversed>
              <li><span>2025</span><strong>Evidence of the Giant Barocaloric Effect in the PVA-Slime System by Molecular Dynamics Simulations.</strong><small>R.J. Caraballo-Vivas, M. Albuquerque, V. Torres, L.T. Costa, P. Venezuela e M. Reis.</small><em>ACS Omega 10, 39580.</em><a href="https://doi.org/10.1021/acsomega.5c02475" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2025</span><strong>Electrical resistivity and the magnetocaloric effect in Pr,TbAl₂ compounds.</strong><small>J.C.G. Tedesco, V. Jandre, A.M.G. Carvalho, P.O. Ribeiro, B.P. Alho, P.J. von Ranke, M. Reis e H.N. Bordallo.</small><em>Journal of Magnetism and Magnetic Materials 630, 173438.</em><a href="https://doi.org/10.1016/j.jmmm.2025.173438" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2025</span><strong>Quantitative determination of the order phase transitions of multicaloric materials: The validity of n-overshoot.</strong><small>M. Reis, J.Y. Law e V. Franco.</small><em>Results in Physics 75, 108320.</em><a href="https://doi.org/10.1016/j.rinp.2025.108320" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2024</span><strong>Spin crossover transition driven by pressure: Barocaloric applications.</strong><small>M. Reis, Y. Cheng e A.M. dos Santos.</small><em>Physica B 677, 415689.</em><a href="https://doi.org/10.1016/j.physb.2024.415689" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2020</span><strong>Magnetocaloric and barocaloric effects of metal complexes for solid state cooling: Review, trends and perspectives.</strong><small>M.S. Reis.</small><em>Coordination Chemistry Reviews 417, 213357.</em><a href="https://doi.org/10.1016/j.ccr.2020.213357" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2020</span><strong>Large barocaloric effect in spin-crossover complex [CrI₂(depe)₂].</strong><small>P.J. von Ranke, B.P. Alho, P.H.S. da Silva, R.M. Ribas, E.P. Nobrega, V.S.R. de Sousa, M.V. Colaço, L.F. Marques, M.S. Reis, F.M. Scaldini, L.B.L. Escobar e P.O. Ribeiro.</small><em>Journal of Applied Physics 127, 165104.</em><a href="https://doi.org/10.1063/5.0003644" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2019</span><strong>Multicaloric effect in a multiferroic composite of Gd₅(Si,Ge)₄ microparticles embedded into a ferroelectric PVDF matrix.</strong><small>V.M. Andrade, A. Amirov, D. Yusupov, B. Pimentel, N. Barroca, A.L. Pires, J.H. Belo, A.M. Pereira, M.A. Valente, J.P. Araújo e M.S. Reis.</small><em>Scientific Reports 9, 18308.</em><a href="https://doi.org/10.1038/s41598-019-54635-8" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2018</span><strong>Lanthanum Dilution Effects on the Giant Magnetocaloric Gd–Si–Ge Compound.</strong><small>V.M. Andrade, J.H. Belo, M.S. Reis, R.M. Costa, A.M. Pereira e J.P. Araújo.</small><em>Physica Status Solidi B 255, 1800101.</em><a href="https://doi.org/10.1002/pssb.201800101" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2016</span><strong>Magnetic and magnetocaloric properties of La₀.₆Ca₀.₄MnO₃ tunable by particle size and dimensionality.</strong><small>V.M. Andrade, R.J. Caraballo Vivas, S.S. Pedro, J.C.G. Tedesco, A.L. Rossi, A.A. Coelho, D.L. Rocco e M.S. Reis.</small><em>Acta Materialia 102, 49.</em><a href="https://doi.org/10.1016/j.actamat.2015.08.080" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2014</span><strong>Cs₂NaAl₁₋ₓCrₓF₆: A family of compounds presenting magnetocaloric effect.</strong><small>S.S. Pedro, J.C.G. Tedesco, F. Yokaichiya, P. Brandão, A.M. Gomes, S. Landsgesell, M.J.M. Pires, L.P. Sosman, A.M. Mansanares, M.S. Reis e H.N. Bordallo.</small><em>Physical Review B 90, 064407.</em><a href="https://doi.org/10.1103/PhysRevB.90.064407" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2011</span><strong>Fe/Cr substitution in MnAs compound: Increase of the relative cooling power.</strong><small>C. Salazar Mejia, A.M. Gomes, M.S. Reis e D.L. Rocco.</small><em>Applied Physics Letters 98, 102515.</em><a href="https://doi.org/10.1063/1.3560309" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2009</span><strong>Investigation on the magnetocaloric effect in DyNi₂, DyAl₂ and Tb₁₋ₙGdₙAl₂ (n = 0, 0.4, 0.6) compounds.</strong><small>V.S.R. de Sousa, E.J.R. Plaza, M.S. Reis, B.P. Alho, A.M.G. Carvalho, S. Gama, N.A. de Oliveira e P.J. von Ranke.</small><em>Journal of Magnetism and Magnetic Materials 321, 3462.</em><a href="https://doi.org/10.1016/j.jmmm.2009.06.054" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2009</span><strong>High refrigerant capacity of PrNi₅₋ₓCoₓ magnetic compounds exploiting its spin reorientation and magnetic transition over a wide temperature zone.</strong><small>D.L. Rocco, J.S. Amaral, J.V. Leitão, V.S. Amaral, M.S. Reis, S. Das, R.P. Fernandes, J.P. Araújo, A.M. Pereira, P.B. Tavares, N.V. Martins e A.A. Coelho.</small><em>Journal of Physics D: Applied Physics 42, 055002.</em><a href="https://doi.org/10.1088/0022-3727/42/5/055002" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2009</span><strong>A comparative study of the magnetocaloric effect in RNi₂ (R = Nd, Gd, Tb) intermetallic compounds.</strong><small>E.J.R. Plaza, V.S.R. de Sousa, P.J. von Ranke, A.M. Gomes, D.L. Rocco, J.V. Leitão e M.S. Reis.</small><em>Journal of Applied Physics 105, 013903.</em><a href="https://doi.org/10.1063/1.3054178" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2009</span><strong>Influence of the magnetocrystalline anisotropy on the magnetocaloric properties of PrNi₅₋ₓCoₓ: from spin reorientation to percolation processes.</strong><small>D.L. Rocco, J.L. Leitão, M.S. Reis, J.S. Amaral, V.S. Amaral, R.P. Fernandes, J.P. Araújo, P.B. Tavares e A.A. Coelho.</small><em>Physical Review B 79, 014428.</em><a href="https://doi.org/10.1103/PhysRevB.79.014428" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2009</span><strong>Understanding the inverse magnetocaloric effect in antiferro- and ferrimagnetic arrangements.</strong><small>P.J. von Ranke, N.A. de Oliveira, B.P. Alho, E.J.R. Plaza, V.S.R. de Sousa, L. Caron e M.S. Reis.</small><em>Journal of Physics: Condensed Matter 21, 056004.</em><a href="https://doi.org/10.1088/0953-8984/21/5/056004" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>Influence of the magnetic anisotropy on the magnetic entropy change of Ni₂Mn(Ga,Bi) memory shape alloy.</strong><small>J.V. Leitão, D.L. Rocco, J.S. Amaral, M.S. Reis, V.S. Amaral, R.P. Fernandes, N.V. Martins e P.B. Tavares.</small><em>IEEE Transactions on Magnetics 44, 3036.</em><a href="https://doi.org/10.1109/TMAG.2008.2002794" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>The effect of chemical distribution on the magnetocaloric effect: a case study in second-order phase transition manganites.</strong><small>J.S. Amaral, P.B. Tavares, M.S. Reis, J.P. Araújo, T.M. Mendonça, V.S. Amaral e J.M. Vieira.</small><em>Journal of Non-Crystalline Solids 354, 5301.</em><a href="https://doi.org/10.1016/j.jnoncrysol.2008.05.078" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>The giant anisotropic magnetocaloric effect in DyAl₂.</strong><small>P.J. von Ranke, N.A. de Oliveira, E.J.R. Plaza, V.S.R. de Sousa, B.P. Alho, A.M.G. Carvalho, S. Gama e M.S. Reis.</small><em>Journal of Applied Physics 104, 093906.</em><a href="https://doi.org/10.1063/1.3009974" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>Phase separation of La₀.₇₀₋ₓErₓSr₀.₃₀MnO₃ and its effect on magnetic and magnetocaloric properties.</strong><small>J.S. Amaral, M.S. Reis, J.P. Araújo, T.M. Mendonça, P.B. Tavares, V.S. Amaral e J.M. Vieira.</small><em>Materials Science Forum 587–588, 338.</em><a href="https://doi.org/10.4028/www.scientific.net/MSF.587-588.338" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>Theoretical investigation on the anisotropic magnetocaloric effect: Application to DyAl₂.</strong><small>P.J. von Ranke, N.A. de Oliveira, V.S.R. de Sousa, A.M.G. Carvalho, S. Gama e M.S. Reis.</small><em>Journal of Magnetism and Magnetic Materials 320, e143.</em><a href="https://doi.org/10.1016/j.jmmm.2008.02.032" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>Influence of the strong magnetocrystalline anisotropy on the magnetocaloric properties of MnP single crystal.</strong><small>M.S. Reis, R.M. Rubinger, N.A. Sobolev, M.A. Valente, K. Yamada, K. Sato, Y. Todate, A. Bouravleuv, P.J. von Ranke e S. Gama.</small><em>Physical Review B 77, 104439.</em><a href="https://doi.org/10.1103/PhysRevB.77.104439" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2007</span><strong>Magnetocaloric effect due to the spin reorientation process in crystalline electrical field: Application to DyAl₂.</strong><small>P.J. von Ranke, N.A. de Oliveira, D.C. Garcia, V.S.R. de Sousa, V.A. de Souza, A.M.G. Carvalho, S. Gama e M.S. Reis.</small><em>Physical Review B 75, 184420.</em><a href="https://doi.org/10.1103/PhysRevB.75.184420" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2006</span><strong>Tuning of Magnetocaloric Effect in Ferromagnetic La–Sr manganites through Er and Eu doping.</strong><small>J.S. Amaral, M.S. Reis, V.S. Amaral, T.M. Mendonça, J.P. Araújo, P.B. Tavares e J.M. Vieira.</small><em>Materials Science Forum 514–516, 299.</em><a href="https://doi.org/10.4028/www.scientific.net/MSF.514-516.299" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2005</span><strong>A Reinvenção da Geladeira.</strong><small>M.S. Reis.</small><em>Scientific American Brasil 34, 44.</em><a href="http://profs.if.uff.br/marior/cv/SciAm_34_2005_44.pdf" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2005</span><strong>Magnetic entropy change of Pr₁₋ₓCaₓMnO₃ manganites (0.2 &lt; x &lt; 0.95).</strong><small>M.S. Reis, V.S. Amaral, J.P. Araújo, P.B. Tavares, A.M. Gomes e I.S. Oliveira.</small><em>Physical Review B 71, 144413.</em><a href="https://doi.org/10.1103/PhysRevB.71.144413" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2005</span><strong>Charge-Ordering Contribution to the Magnetic Entropy Change of (Pr,Ca)MnO₃ Manganites.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, J.S. Amaral, P.B. Tavares, I.S. Oliveira e V.S. Amaral.</small><em>Journal of Magnetism and Magnetic Materials 290, 697.</em><a href="https://doi.org/10.1016/j.jmmm.2004.11.340" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2005</span><strong>Magnetocaloric effect in Er and Eu-substituted ferromagnetic La–Sr manganites.</strong><small>J.S. Amaral, M.S. Reis, V.S. Amaral, T.M. Mendonça, J.P. Araújo, M.A. Sá, P.B. Tavares e J.M. Vieira.</small><em>Journal of Magnetism and Magnetic Materials 290, 686.</em><a href="https://doi.org/10.1016/j.jmmm.2004.11.337" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2005</span><strong>Magnetocaloric effect of the (Pr,Ca)MnO₃ manganites at low temperatures.</strong><small>A.M. Gomes, F. Garcia, M.S. Reis, V.S. Amaral e A.P. Guimarães.</small><em>Journal of Magnetism and Magnetic Materials 290, 694.</em><a href="https://doi.org/10.1016/j.jmmm.2004.11.339" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Charge-Ordering and Magnetoelastic Coupling Effects on the Magnetocaloric Properties of Manganites.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.A. Amaral.</small><em>Acta Physica Polonica A 105, 163.</em><a href="https://doi.org/10.12693/APhysPolA.105.163" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Field tuned magnetocaloric effect in metamagnetic manganite system.</strong><small>A.M. Gomes, F. Garcia, A.P. Guimarães, M.S. Reis e V.S. Amaral.</small><em>Applied Physics Letters 85, 4974.</em><a href="https://doi.org/10.1063/1.1827926" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Magnetocaloric Effect in Manganites: Ferromagnetism and Charge-Ordering Effects.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.S. Amaral.</small><em>Materials Science Forum 455–456, 148.</em><a href="https://doi.org/10.4028/www.scientific.net/MSF.455-456.148" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Magnetocaloric effect of the Pr₀.₄₃Gd₀.₂₅Ca₀.₃₂MnO₃.</strong><small>A.M. Gomes, M.S. Reis, A.P. Guimarães, J.P. Araújo, P.B. Tavares e V.S. Amaral.</small><em>Journal of Magnetism and Magnetic Materials 272, 2385.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.1129" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2004</span><strong>Positive and colossal magnetocaloric effect due to charge ordering in CMR manganites.</strong><small>M.S. Reis, A.M. Gomes, J.P. Araújo, P.B. Tavares, J.S. Amaral, I.S. Oliveira e V.S. Amaral.</small><em>Journal of Magnetism and Magnetic Materials 272, 2393.</em><a href="https://doi.org/10.1016/j.jmmm.2003.12.650" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2002</span><strong>Magnetocaloric effect in (Er,Tb)Co₂.</strong><small>A.M. Gomes, M.S. Reis, I.S. Oliveira, A.P. Guimarães e A.Y. Takeuchi.</small><em>Journal of Magnetism and Magnetic Materials 242, 870.</em><a href="https://doi.org/10.1016/S0304-8853(01)01327-0" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ]
  },
  {
    id: "s24-mce-materials",
    layout: "cards",
    className: "mce-materials-slide",
    section: "Resultados",
    eyebrow: "Linha 2 | Materiais",
    title: "Classes de materiais e mecanismos",
    lead: "A pesquisa percorreu diferentes famílias de materiais, relacionando composição, estrutura e ordem magnética aos mecanismos que controlam a resposta calórica.",
    cards: [
      { label: "Manganitas e óxidos correlacionados", text: "Ordem de carga, separação de fases, metamagnetismo, dopagem e controle por tamanho de partícula." },
      { label: "Intermetálicos de terras raras", text: "Sistemas RNi₂, RAl₂, PrNi₅₋ₓCoₓ e Gd₅(Si,Ge)₄, com transições sucessivas e reorientação de spin." },
      { label: "Ligas e compostos magnetoestruturais", text: "MnAs, MnP e ligas Ni–Mn–Ga, explorando acoplamento magnetoelástico e anisotropia magnetocristalina." },
      { label: "Complexos metálicos e spin-crossover", text: "Materiais moleculares nos quais campo magnético ou pressão reorganizam estados de spin e entropia." },
      { label: "Fluoretos magnéticos", text: "A família Cs₂NaAl₁₋ₓCrₓF₆ amplia o estudo para redes iônicas com resposta magnetocalórica ajustável." },
      { label: "Compósitos e materiais multicalóricos", text: "Micropartículas magnetocalóricas em matrizes ferroelétricas e sistemas poliméricos integram diferentes estímulos calóricos." }
    ],
    footerRefs: "Publicações associadas à subseção 3.2 · 2002–2025",
    sourceRefs: ["E019"]
  },
  {
    id: "s25-mce-synthesis",
    layout: "photo",
    className: "mce-review-paper-slide",
    section: "Resultados",
    title: "",
    publicationsDialogId: "mce-publications",
    publicationsLabel: "35 publicações · abrir lista",
    figure: {
      src: "assets/figures/mce-coordination-chemistry-reviews-title.png?v=20260826.04",
      alt: "Cabeçalho do artigo Magnetocaloric and barocaloric effects of metal complexes for solid state cooling: Review, trends and perspectives",
      caption: "IF: 25.6 · Citations: 91"
    },
    footerRefs: "M.S. Reis, Coordination Chemistry Reviews 417 (2020) 213357",
    sourceRefs: ["E019"]
  },
  {
    id: "s25-mce-collaboration",
    layout: "cards",
    className: "international-collaboration-slide",
    section: "Resultados",
    eyebrow: "Linha 2 | Colaborações",
    title: "Colaborações",
    cards: [
      { label: "Aveiro · Portugal", text: "Universidade de Aveiro · CICECO", logo: { src: "assets/logos/universidade-aveiro.png", alt: "Universidade de Aveiro" } },
      { label: "Porto · Portugal", text: "Universidade do Porto · IFIMUP", logo: { src: "assets/logos/uporto-mark.svg", alt: "Universidade do Porto" } },
      { label: "Moscou · Rússia", text: "Lomonosov Moscow State University", logo: { src: "assets/logos/lomonosov-msu.jpeg", alt: "Lomonosov Moscow State University" } },
      { label: "Sevilha · Espanha", text: "Universidad de Sevilla", logo: { src: "assets/logos/sevilla-mark.svg", alt: "Universidad de Sevilla" } },
      { label: "Oak Ridge · EUA", text: "Oak Ridge National Laboratory", logo: { src: "assets/logos/oak-ridge-national-laboratory.png", alt: "Oak Ridge National Laboratory" } },
      { label: "Rio de Janeiro · Brasil", text: "Universidade Federal do Rio de Janeiro (UFRJ)", logo: { src: "assets/logos/ufrj.png", alt: "Universidade Federal do Rio de Janeiro" } },
      { label: "Rio de Janeiro · Brasil", text: "Centro Brasileiro de Pesquisas Físicas (CBPF)", logo: { src: "assets/logos/cbpf.png", alt: "Centro Brasileiro de Pesquisas Físicas" } }
    ],
    footerRefs: "Colaborações identificadas nos artigos da subseção 3.2",
    sourceRefs: ["E019"]
  },
  {
    id: "s25b-complexes-publications",
    layout: "modal",
    cards: [
      {
        html: `<dialog class="publications-dialog" id="complexes-publications" aria-labelledby="complexes-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Complexos metálicos e modelagem · 2006–presente</p><h2 id="complexes-publications-title">18 publicações associadas</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list" reversed>
              <li><span>2026</span><strong>Magnetic Anisotropy and Spin Coupling in a Cobalt(II) Dimer with Bioinspired Bridges.</strong><small>A. Almeida, A.C. das Neves, P. Brandão, M. Masmoudi, L. Ghivelder, C. Cruz et al.</small><em>ACS Physical Chemistry Au 6(2), 334.</em><a href="https://scholar.google.com/scholar?q=Magnetic+Anisotropy+and+Spin+Coupling+in+a+Cobalt+II+Dimer+with+Bioinspired+Bridges" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2023</span><strong>Novel Co₅ Cluster Based Triazole Bridged Cobalt-Fluorophosphate: Synthesis, Structure, Magnetic and Heterogeneous Catalytic Epoxidation Studies.</strong><small>R. Sen, S. De, A.M. dos Santos, L.B.L. Escobar, P. Brandão, F. Paz, M.S. Reis e Z. Lin.</small><em>European Journal of Inorganic Chemistry, e202300123.</em><a href="https://scholar.google.com/scholar?q=Novel+Co5+Cluster+Based+Triazole+Bridged+Cobalt-Fluorophosphate" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2023</span><strong>A chiral alkali metal capped Ni₄ cubane complex: Synthesis, structure, magnetic and catalytic bromination studies.</strong><small>R. Sen, K. Mondal, A.M. dos Santos, L.L. Escobar, P. Brandão, M.S. Reis e Z. Lin.</small><em>Journal of Molecular Structure 1274, 134412.</em><a href="https://scholar.google.com/scholar?q=A+chiral+alkali+metal+capped+Ni4+cubane+complex" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2022</span><strong>Synthesis and magnetic properties of two cobalt-coordination polymers containing 1,10-phenanthroline and alkyl dicarboxylates ligands.</strong><small>F.J. Teixeira, L.S. Flores, T. Valverde, L.B.L. Escobar, M.S. Reis e C.C. Corrêa.</small><em>Journal of Molecular Structure 1261, 132820.</em><a href="https://scholar.google.com/scholar?q=two+cobalt-coordination+polymers+1,10-phenanthroline+alkyl+dicarboxylates" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2020</span><strong>A 3D interpenetrated Co(II)-glutarate coordination polymer: Synthesis, crystal structure, magnetic and adsorption properties.</strong><small>F.J. Teixeira, L.S. Flores, L.B.L. Escobar, T.C. Santos, M.I. Yoshida, M.S. Reis, S. Hill, C.M. Ronconi e C.C. Corrêa.</small><em>Inorganica Chimica Acta 511, 119791.</em><a href="https://scholar.google.com/scholar?q=3D+interpenetrated+CoII-glutarate+coordination+polymer" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2018</span><strong>A Co(II) 1D coordination polymer constructed from 1,3-bisbenzyl-2-oxoimidazoline-4,5-dicarboxylic acid: crystal structure and magnetic properties.</strong><small>F.M. Scaldini, M.C.R. Freitas, M.S. Reis, M.I. Yoshida, K. Krambrock e F.C. Machado.</small><em>New Journal of Chemistry 42, 1216.</em><a href="https://scholar.google.com/scholar?q=CoII+1D+coordination+polymer+Scaldini+Reis" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2017</span><strong>A one-dimensional Mn(II)-based metal organic oxide: structure and properties.</strong><small>F.N. Shi, Y.W. Bai, M. Lu, C. Cruz, M.S. Reis e J. Gao.</small><em>Transition Metal Chemistry 42, 605.</em><a href="https://scholar.google.com/scholar?q=one-dimensional+MnII-based+metal+organic+oxide" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2015</span><strong>Heptacopper(II) and dicopper(II)-adenine complexes: synthesis, structural characterization, and magnetic properties.</strong><small>B.J.M. Leite Ferreira, P. Brandão, A.M. Santos, Z. Gai, C. Cruz, M.S. Reis, T.M. Santos e V. Félix.</small><em>Journal of Coordination Chemistry 68, 2770.</em><a href="https://scholar.google.com/scholar?q=HeptacopperII+dicopperII-adenine+complexes" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>New manganese(II) structures derived from 2,6-dichlorobenzoic acid: Syntheses, crystal structures and magnetism.</strong><small>D. Esteves, J.C.G. Tedesco, S.S. Pedro, C. Cruz, M.S. Reis e P. Brandão.</small><em>Materials Chemistry and Physics 147, 611–616.</em><a href="https://scholar.google.com/scholar?q=manganese+structures+2,6-dichlorobenzoic+acid+Reis" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>A new metal organic framework constructed of Co(II) ions six and seven-coordinated: Synthesis, structure and magnetism.</strong><small>S.S. Pedro, P. Brandão, F.N. Shi, J.C.G. Tedesco e M.S. Reis.</small><em>Polyhedron 81, 210.</em><a href="https://scholar.google.com/scholar?q=metal+organic+framework+CoII+six+seven-coordinated" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Mean field magnetization of gapped anisotropic multiplet.</strong><small>L. Paixão e M.S. Reis.</small><em>Physica B 442, 95.</em><a href="https://scholar.google.com/scholar?q=Mean+field+magnetization+of+gapped+anisotropic+multiplet" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Synthesis, characterization and magnetic properties of a manganese(II) silicate containing frustrated S = 5/2 zig-zag ladders.</strong><small>P. Brandão, A.M. Santos, L. Paixão e M.S. Reis.</small><em>Journal of Solid State Chemistry 211, 130.</em><a href="https://scholar.google.com/scholar?q=manganese+silicate+frustrated+zig-zag+ladders" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Magnetic Dimensionality of Metal Formate M[(H₂O)₂(HCOO)₂] Compounds (M = Co(II), Cu(II)).</strong><small>L.L.L. Sousa, G.F. Barbosa, F.L.A. Machado, L.R.S. Araújo, P. Brandão e M.S. Reis.</small><em>IEEE Transactions on Magnetics 49, 5610.</em><a href="https://scholar.google.com/scholar?q=Magnetic+Dimensionality+Metal+Formate+CoII+CuII" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Novel alkaline earth copper germanates with ferro- and antiferromagnetic S = 1/2 chains.</strong><small>P. Brandão, A.M. Santos e M.S. Reis.</small><em>Journal of Solid State Chemistry 198, 39.</em><a href="https://scholar.google.com/scholar?q=alkaline+earth+copper+germanates+ferro+antiferromagnetic+chains" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2010</span><strong>Synthesis, structures and magnetic properties of three metal-organic frameworks containing Mn²⁺.</strong><small>F.N. Shi, M.S. Reis, P. Brandão, A.M. Souza, V. Félix e J. Rocha.</small><em>Transition Metal Chemistry 35, 779.</em><a href="https://scholar.google.com/scholar?q=three+metal-organic+frameworks+containing+Mn2+Shi+Reis" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2007</span><strong>Specific heat of clusterized low-dimensional magnetic systems.</strong><small>M.S. Reis, A.M. dos Santos, V.S. Amaral, P. Brandão, J. Rocha, N. Tristan, R. Klingeler, B. Büchner, A.N. Vassiliev e O. Volkova.</small><em>Journal of Physics: Condensed Matter 19, 446203.</em><a href="https://doi.org/10.1088/0953-8984/19/44/446203" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2007</span><strong>Synthesis, crystal structure and magnetic characterization of Na₂Cu₅(Si₂O₇)₂: An inorganic ferrimagnetic chain.</strong><small>A.M. dos Santos, P. Brandão, A. Fitch, M.S. Reis, V.S. Amaral e J. Rocha.</small><em>Journal of Solid State Chemistry 180, 16.</em><a href="https://scholar.google.com/scholar?q=Na2Cu5+Si2O7+2+inorganic+ferrimagnetic+chain" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2006</span><strong>Homometallic Ferrimagnetism in Zig-Zag Chain Compound Na₂Cu₅Si₄O₁₄.</strong><small>M.S. Reis, A.M. dos Santos, V.S. Amaral, P. Brandão e J. Rocha.</small><em>Physical Review B 73, 214415.</em><a href="https://doi.org/10.1103/PhysRevB.73.214415" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ]
  },
  {
    id: "s26-complexes-hamiltonian",
    layout: "cards",
    className: "complexes-motivation-slide",
    section: "Resultados",
    eyebrow: "Linha 3 | Complexos metálicos",
    title: "Motivação",
    lead: "Compreender o comportamento magnético de materiais de baixa dimensionalidade.",
    figures: [
      {
        src: "assets/figures/complexes-ni4-cubane.jpg",
        alt: "Estrutura do complexo quiral Ni4 em geometria cubano e sistema local de coordenadas",
        caption: "Cluster quiral de Ni₄: [NaNi₄(OAc)₃(H₂O)₃(L)₂(N₃)₂]·7H₂O\nJournal of Molecular Structure 1274 (2023) 134412"
      },
      {
        src: "assets/figures/complexes-co2-dimer.png",
        alt: "Estrutura molecular de um dímero de cobalto II com pontes bioinspiradas",
        caption: "Dímero de Co(II) com pontes de adenina: [Co₂(μ-L¹H)₂(μ-H₂O)₂(H₂O)₄]·4NO₃·2H₂O\nACS Phys. Chem. Au 2026, 6, 334–339"
      }
    ],
    cards: [],
    footerRefs: "Estruturas moleculares representativas da subseção 3.3",
    sourceRefs: ["E020"]
  },
  {
    id: "s26b-complexes-hamiltonians",
    layout: "technical",
    className: "complexes-hamiltonians-slide",
    section: "Resultados",
    eyebrow: "Linha 3 | Complexos metálicos",
    title: "Hamiltonianas",
    publicationsDialogId: "complexes-publications",
    publicationsLabel: "18 publicações · abrir lista",
    equations: [
      equationAsset("heisenberg-hamiltonian", "Interação de troca de Heisenberg", "J > 0: ferro; J < 0: antiferromagnética"),
      equationAsset("dm-hamiltonian", "Interação de Dzyaloshinskii–Moriya", "acoplamento antissimétrico"),
      equationAsset("local-anisotropy-hamiltonian", "Anisotropia magnetocristalina local", "anisotropia magnetocristalina"),
      equationAsset("zeeman-hamiltonian", "Interação de Zeeman", "campo magnético externo")
    ],
    items: [],
    footerRefs: "Modelos microscópicos para troca, interação antissimétrica, anisotropia e campo externo",
    sourceRefs: ["E020"]
  },
  {
    id: "s26c-co-dimer-case",
    layout: "technical",
    className: "co-dimer-case-slide",
    section: "Resultados",
    eyebrow: "Linha 3 | Caso representativo",
    title: "Caso: dímero de Co(II)",
    equations: [
      equationAsset("co2-dimer-hamiltonian", "Hamiltoniana efetiva do dímero de cobalto II", "troca de Heisenberg + anisotropias axial e rômbica + Zeeman")
    ],
    figures: [
      {
        src: "assets/figures/complexes-co2-dimer.png",
        alt: "Estrutura molecular do dímero de cobalto II com pontes de adenina e água",
        caption: "[Co₂(μ-L¹H)₂(μ-H₂O)₂(H₂O)₄]·4NO₃·2H₂O"
      },
      {
        src: "assets/figures/co2-dimer-chit-fit.png",
        alt: "Dados experimentais de chi T e ajuste teórico para o dímero de cobalto II",
        caption: "χT experimental (pontos) e ajuste do Hamiltoniano efetivo (linha vermelha)"
      }
    ],
    metrics: [
      { value: "J = −8,6(8) K", label: "acoplamento antiferromagnético" },
      { value: "D = 89(5) K   E = 23(2) K", label: "anisotropias axial e rômbica" },
      { value: "gₓ = gᵧ = 2,5(1)   g_z = 2,4(1)", label: "plano xy de fácil magnetização" }
    ],
    footerRefs: "A. Almeida et al., ACS Physical Chemistry Au 6 (2026) 334–339",
    sourceRefs: ["E020"]
  },
  {
    id: "s26d-co-dimer-paper",
    layout: "photo",
    className: "co-dimer-paper-slide",
    section: "Resultados",
    title: "",
    figure: {
      src: "assets/figures/co2-dimer-article-title.png?v=20260826.01",
      alt: "Título e autores do artigo Magnetic Anisotropy and Spin Coupling in a Cobalt II Dimer with Bioinspired Bridges",
      caption: "ACS Physical Chemistry Au 6 (2026) 334–339"
    },
    footerRefs: "A. Almeida et al., ACS Physical Chemistry Au 6 (2026) 334–339",
    sourceRefs: ["E020"]
  },
  {
    id: "s27-complexes-result",
    layout: "technical",
    className: "co-dimer-case-slide cu5-case-slide",
    section: "Resultados",
    eyebrow: "Linha 3 | Resultado representativo",
    title: "Na₂Cu₅Si₄O₁₄: cadeia dímero–trímero",
    equations: [
      equationAsset("cu5-hamiltonian", "Hamiltoniano dímero–trímero", "trocas J₁, J₂ e J₃ + interação de Zeeman")
    ],
    figures: [
      {
        src: "assets/figures/molecular-chain-na2cu5si4o14.png",
        alt: "Cadeia magnética em zigue-zague do composto Na₂Cu₅Si₄O₁₄",
        caption: "Estrutura dímero–trímero em cadeia, com unidades Cu₂ e Cu₃"
      },
      {
        src: "assets/figures/molecular-chit-fit-na2cu5si4o14.png",
        alt: "Ajuste de χT para Na₂Cu₅Si₄O₁₄ e esquema das interações de troca",
        caption: "χT experimental (círculos) e ajuste do Hamiltoniano efetivo (linha)"
      }
    ],
    metrics: [
      { value: "J₁ = −224,9 K", label: "interação de troca dominante" },
      { value: "J₂ = −8,01 K", label: "acoplamento entre unidades" },
      { value: "J₃ = 40,22 K", label: "interação ferromagnética" },
      { value: "g = 2,30", label: "fator de Landé" }
    ],
    footerRefs: "MEM pp.26-27; ref. [35]",
    sourceRefs: ["E020"]
  },
  {
    id: "s27b-cu5-paper",
    layout: "photo",
    className: "cu5-paper-slide",
    section: "Resultados",
    title: "",
    figure: {
      src: "assets/figures/na2cu5si4o14-prb-title.png",
      alt: "Título e autores do artigo Homometallic ferrimagnetism in the zig-zag chain compound Na₂Cu₅Si₄O₁₄",
      caption: "Physical Review B 73, 214415 (2006)"
    },
    footerRefs: "M.S. Reis et al., Physical Review B 73, 214415 (2006)",
    sourceRefs: ["E020"]
  },
  {
    id: "s28-cardamomo",
    layout: "content",
    className: "cardamomo-slide",
    section: "Resultados",
    eyebrow: "Linha 3 | Ferramenta computacional",
    title: "cardamomo",
    animateContentBlock: true,
    lead: "O pacote automatiza o ajuste de modelos quânticos e clássicos a dados experimentais de suscetibilidade magnética.",
    items: [
      "Modelos para clusters e cadeias unimetálicas e bimetálicas.",
      "Cadeias regulares e irregulares, além de modelos de Ising.",
      "Integra modelagem microscópica e dados experimentais em uma ferramenta reprodutível.",
      "Registrado no memorial como propriedade intelectual/produção computacional."
    ],
    figures: [
      {
        src: "assets/figures/cardamomo-zero-dimensional-article.png",
        alt: "Página de abertura do artigo Models for zero-dimensional molecular magnets",
        caption: "Computer Physics Communications 182 (2011) 1169–1177"
      },
      {
        src: "assets/figures/cardamomo-one-dimensional-article.png",
        alt: "Página de abertura do artigo Models for one-dimensional molecular magnets",
        caption: "Computer Physics Communications 183 (2012) 99–105"
      }
    ],
    footerRefs: "MEM pp.25,99; refs. [26,27]",
    sourceRefs: ["E020", "E014"]
  },
  {
    id: "s28-complexes-collaboration",
    layout: "cards",
    className: "international-collaboration-slide",
    section: "Resultados",
    eyebrow: "Linha 3 | Colaborações",
    title: "Colaborações",
    cards: [
      { label: "Aveiro · Portugal", text: "Universidade de Aveiro · CICECO", logo: { src: "assets/logos/universidade-aveiro.png", alt: "Universidade de Aveiro" } },
      { label: "Oak Ridge · EUA", text: "Oak Ridge National Laboratory", logo: { src: "assets/logos/oak-ridge-national-laboratory.png", alt: "Oak Ridge National Laboratory" } },
      { label: "Rio de Janeiro · Brasil", text: "Universidade Federal do Rio de Janeiro (UFRJ)", logo: { src: "assets/logos/ufrj.png", alt: "Universidade Federal do Rio de Janeiro" } },
      { label: "Rio de Janeiro · Brasil", text: "Centro Brasileiro de Pesquisas Físicas (CBPF)", logo: { src: "assets/logos/cbpf.png", alt: "Centro Brasileiro de Pesquisas Físicas" } }
    ],
    footerRefs: "Colaborações identificadas nos artigos da subseção 3.3",
    sourceRefs: ["E020"]
  },
  {
    id: "s31-graphene-concept",
    layout: "content",
    className: "graphene-motivation-slide",
    section: "Resultados",
    eyebrow: "Linha 5 | Materiais relativísticos",
    title: "Motivação",
    publicationsDialogId: "graphene-caloric-publications",
    publicationsLabel: "22 publicações · abrir lista",
    lead: "Em campos magnéticos intensos, a quantização em níveis de Landau faz o espectro atravessar sucessivamente o nível de Fermi, originando oscilações termodinâmicas.",
    figure: {
      src: "assets/figures/landau-levels-de-haas-van-alphen.png",
      alt: "Níveis de Landau sob campo magnético forte e efeito de Haas–van Alphen",
      caption: "M.S. Reis, Fundamentals of Magnetism, Elsevier (2013), Fig. 7.3."
    },
    items: [
      "As passagens sucessivas dos níveis pelo nível de Fermi produzem o efeito de Haas–van Alphen.",
      "A mesma quantização modula a entropia e cria respostas magnetocalóricas oscilantes."
    ],
    footerRefs: "MEM pp.29-30; refs. [43-51]",
    sourceRefs: ["E022"]
  },
  {
    id: "s32-graphene-result",
    layout: "content",
    className: "graphene-first-article-slide",
    section: "Resultados",
    figures: [
      {
        src: "assets/figures/graphene-delta-s-oscillation.png",
        alt: "Variação oscilante da entropia magnética em função do parâmetro n",
        caption: "M.S. Reis, Applied Physics Letters 99, 052511 (2011)."
      },
      {
        src: "assets/figures/oscillating-mce-apl-title.png",
        alt: "Título e autor do artigo Oscillating magnetocaloric effect",
        caption: ""
      }
    ],
    eyebrow: "Linha 5 | Resultado",
    title: "Primeiro artigo propondo MCE em diamagnetos",
    lead: "",
    items: [],
    footerRefs: "MEM pp.29-30; refs. [43-51]",
    sourceRefs: ["E022"]
  },
  {
    id: "s32a-gold-graphene",
    layout: "content",
    className: "graphene-gold-comparison-slide",
    section: "Resultados",
    eyebrow: "Linha 5 | Do ouro ao grafeno",
    title: "MCE oscilatório em ouro e grafeno",
    figures: [
      {
        src: "assets/figures/gold-graphene-oscillating-entropy.png",
        alt: "Comparação da entropia magnética oscilante em ouro tridimensional e grafeno bidimensional",
        caption: "M.S. Reis, Applied Physics Letters 101, 222405 (2012)."
      },
      {
        src: "assets/figures/graphene-mce-apl-2012-title.png",
        alt: "Abertura do artigo Oscillating magnetocaloric effect on graphenes",
        caption: ""
      }
    ],
    items: [],
    footerRefs: "MEM pp.29-30; refs. [43-51]",
    sourceRefs: ["E022"]
  },
  {
    id: "s32c-graphene-collaborations",
    layout: "cards",
    className: "graphene-collaboration-slide",
    section: "Resultados",
    eyebrow: "Linha 5 | Desdobramentos",
    title: "Colaborações",
    lead: "",
    publicationsDialogId: "graphene-caloric-publications",
    publicationsLabel: "22 publicações · abrir lista",
    cards: [
      { label: "Makhachkala · Rússia", html: "<strong>Dagestan State University · Z.Z. Alisultanov e colaboradores</strong><br>Grafeno multicamada e bicamada, nanofitas quânticas, campos elétricos, transporte, capacitância e calor específico.", logo: { src: "assets/logos/dagestan-state-university-mark.svg", alt: "Dagestan State University" } },
      { label: "Taiyuan · China", html: "<strong>Taiyuan University of Technology · Ning Ma</strong><br>Efeito barocalórico em grafeno e fônons acústicos anômalos.", logo: { src: "assets/logos/taiyuan-university-technology.png", alt: "Taiyuan University of Technology" } },
    ],
    footerRefs: "Artigos da linha 3.5 e trabalhos que citam o MCE oscilatório em diamagnetos",
    sourceRefs: ["E022"]
  },
  {
    id: "s32b-graphene-caloric-publications",
    layout: "modal",
    cards: [
      {
        html: `<dialog class="publications-dialog" id="graphene-caloric-publications" aria-labelledby="graphene-caloric-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Efeitos calóricos em grafeno · 2011–2020</p><h2 id="graphene-caloric-publications-title">22 publicações associadas</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list" reversed>
              <li><span>2020</span><strong>Caloric effects of quantum materials: An outlook.</strong><small>M.S. Reis e N. Ma.</small><em>Physics Open 4, 100028.</em><a href="https://scholar.google.com/scholar?q=Caloric+effects+of+quantum+materials+An+outlook+Reis+Ma" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2019</span><strong>External mechanisms for valley polarisation and its effect on the magnetisation of graphene: strain and electric field.</strong><small>N. Ma, Z. Alisultanov e M.S. Reis.</small><em>Journal of Magnetism and Magnetic Materials 482, 178.</em><a href="https://scholar.google.com/scholar?q=External+mechanisms+valley+polarisation+magnetisation+graphene+strain+electric+field" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2019</span><strong>Anomalous acoustic phonons as the physical mechanism behind the adiabatic barocaloric effect on graphene.</strong><small>N. Ma e M.S. Reis.</small><em>Scientific Reports 9, 219.</em><a href="https://scholar.google.com/scholar?q=Anomalous+acoustic+phonons+adiabatic+barocaloric+effect+graphene" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2017</span><strong>Barocaloric effect on graphene.</strong><small>N. Ma e M.S. Reis.</small><em>Scientific Reports 7, 13257.</em><a href="https://scholar.google.com/scholar?q=Barocaloric+effect+on+graphene+Ma+Reis" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2016</span><strong>Magnetocaloric Effect of Graphenes.</strong><small>M.S. Reis e L.S. Paixão.</small><em>CRC Graphene Science Handbook: Nanostructure and Atomic Arrangement, cap. 34, p. 541.</em><a href="https://scholar.google.com/scholar?q=Magnetocaloric+Effect+of+Graphenes+Reis+Paixao" target="_blank" rel="noopener noreferrer">Localizar capítulo ↗</a></li>
              <li><span>2016</span><strong>On the quantum magnetic oscillations of electrical and thermal conductivities of graphene.</strong><small>Z.Z. Alisultanov e M.S. Reis.</small><em>Solid State Communications 234, 26.</em><a href="https://scholar.google.com/scholar?q=quantum+magnetic+oscillations+electrical+thermal+conductivities+graphene" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2016</span><strong>Quantum capacitance oscillations in graphene under crossed magnetic and electric fields.</strong><small>Z.Z. Alisultanov e M.S. Reis.</small><em>Europhysics Letters 113, 28004.</em><a href="https://scholar.google.com/scholar?q=Quantum+capacitance+oscillations+graphene+crossed+magnetic+electric+fields" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2016</span><strong>Magneto-oscillations on specific heat of graphene monolayer.</strong><small>Z.Z. Alisultanov e M.S. Reis.</small><em>Physics Letters A 380, 470.</em><a href="https://scholar.google.com/scholar?q=Magneto-oscillations+specific+heat+graphene+monolayer" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2015</span><strong>Magnetocaloric cycle with six stages: Possible application of graphene at low temperature.</strong><small>M.S. Reis.</small><em>Applied Physics Letters 107, 102401.</em><a href="https://scholar.google.com/scholar?q=Magnetocaloric+cycle+six+stages+graphene+low+temperature" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2015</span><strong>Oscillating magneto- and electrocaloric effects on bilayer graphenes.</strong><small>Z.Z. Alisultanov e M.S. Reis.</small><em>Solid State Communications 206, 17.</em><a href="https://scholar.google.com/scholar?q=Oscillating+magneto+electrocaloric+effects+bilayer+graphenes" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Oscillating magnetocaloric effect in quantum nanoribbons.</strong><small>Z.Z. Alisultanov, R.P. Meilanov, L. Paixão e M.S. Reis.</small><em>Physica E 65, 44.</em><a href="https://scholar.google.com/scholar?q=Oscillating+magnetocaloric+effect+quantum+nanoribbons" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Oscillating magnetocaloric effect of a multilayer graphene.</strong><small>Z.Z. Alisultanov, L. Paixão e M.S. Reis.</small><em>Applied Physics Letters 105, 232406.</em><a href="https://scholar.google.com/scholar?q=Oscillating+magnetocaloric+effect+multilayer+graphene" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Oscillating adiabatic temperature change of 2D diamagnetic materials.</strong><small>L. Paixão, Z.Z. Alisultanov e M.S. Reis.</small><em>Journal of Magnetism and Magnetic Materials 368, 374.</em><a href="https://scholar.google.com/scholar?q=Oscillating+adiabatic+temperature+change+2D+diamagnetic+materials" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Mean field magnetization of gapped anisotropic multiplet.</strong><small>L. Paixão e M.S. Reis.</small><em>Physica B 442, 95.</em><a href="https://scholar.google.com/scholar?q=Mean+field+magnetization+gapped+anisotropic+multiplet" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Diamagnetic magnetocaloric effect due to a transversal oscillating magnetic field.</strong><small>M.S. Reis.</small><em>Physics Letters A 378, 1903.</em><a href="https://scholar.google.com/scholar?q=Diamagnetic+magnetocaloric+effect+transversal+oscillating+magnetic+field" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2014</span><strong>Step-like features on caloric effects of graphenes.</strong><small>M.S. Reis.</small><em>Physics Letters A 378, 918.</em><a href="https://scholar.google.com/scholar?q=Step-like+features+caloric+effects+graphenes" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Oscillating magnetocaloric effect of a two dimensional non-relativistic diamagnetic material.</strong><small>M.S. Reis.</small><em>Journal of Applied Physics 113, 243901.</em><a href="https://scholar.google.com/scholar?q=Oscillating+magnetocaloric+effect+two+dimensional+non-relativistic+diamagnetic+material" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Influence of longitudinal electric field on the oscillating magnetocaloric effect of graphenes.</strong><small>M.S. Reis.</small><em>Solid State Communications 161, 19.</em><a href="https://scholar.google.com/scholar?q=Influence+longitudinal+electric+field+oscillating+magnetocaloric+effect+graphenes" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Electrocaloric effect on graphenes.</strong><small>M.S. Reis e S. Soriano.</small><em>Applied Physics Letters 102, 112903.</em><a href="https://scholar.google.com/scholar?q=Electrocaloric+effect+on+graphenes+Reis+Soriano" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2012</span><strong>Oscillating magnetocaloric effect on graphenes.</strong><small>M.S. Reis.</small><em>Applied Physics Letters 101, 222405.</em><a href="https://scholar.google.com/scholar?q=Oscillating+magnetocaloric+effect+on+graphenes" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2012</span><strong>Oscillating adiabatic temperature change of diamagnetic materials.</strong><small>M.S. Reis.</small><em>Solid State Communications 152, 921.</em><a href="https://scholar.google.com/scholar?q=Oscillating+adiabatic+temperature+change+diamagnetic+materials" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2011</span><strong>Oscillating magnetocaloric effect.</strong><small>M.S. Reis.</small><em>Applied Physics Letters 99, 052511.</em><a href="https://scholar.google.com/scholar?q=Oscillating+magnetocaloric+effect+Applied+Physics+Letters+99+052511" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ]
  },
  {
    id: "s33-quantum-thermo-batteries",
    layout: "cards",
    className: "quantum-thermo-materials-slide",
    section: "Resultados",
    eyebrow: "Linha 6 | Termodinâmica quântica",
    title: "Materiais e plataformas quânticas",
    lead: "Motivação: explorar correlações, energia e informação em materiais magnéticos controlados pela temperatura.",
    cards: [
      { label: "Emaranhamento térmico", text: "Dímeros e clusters metálicos: correlações quânticas e temperatura de emaranhamento." },
      { label: "Baterias quânticas", text: "Armazenamento e extração de energia usando ergotropia em complexos metálicos." },
      { label: "Ciclos termodinâmicos quânticos", text: "Máquinas de Stirling e efeitos calóricos em sistemas dinucleares." },
      {
        className: "quantum-publications-action",
        html: "<button class=\"publications-trigger quantum-publications-trigger\" type=\"button\" data-publications-open=\"quantum-thermo-publications\">16 publicações selecionadas · abrir lista</button>"
      }
    ],
    footerRefs: "Temas desenvolvidos nas publicações da subseção 3.6",
    sourceRefs: ["E023"]
  },
  {
    id: "s33a-thermal-entanglement",
    layout: "technical",
    className: "quantum-discord-slide quantum-entanglement-explainer",
    section: "Resultados",
    eyebrow: "Linha 6 | Correlações quânticas",
    title: "Discórdia quântica e emaranhamento térmico",
    lead: "Para um dímero de spins s₁ = s₂ = 1/2, a interação de Heisenberg separa um singleto emaranhado de um tripleto e permite acompanhar o emaranhamento com a temperatura.",
    items: [
      { label: "Hamiltoniana", html: "<span class=\"quantum-main-equation\">H = −J <b>S</b><sub>1</sub> · <b>S</b><sub>2</sub></span><br><span class=\"quantum-model-note\">s₁ = s₂ = 1/2</span>" },
      { label: "Autoestados e energias", html: "<div class=\"quantum-states-grid\"><span class=\"quantum-state-entry\"><span class=\"quantum-ket\">|1,1⟩ = |++⟩</span><em>não emaranhado</em></span><span class=\"quantum-state-entry\"><span class=\"quantum-ket\">|1,0⟩ = (|+−⟩ + |−+⟩)/√2</span><em class=\"is-entangled\">emaranhado</em></span><span class=\"quantum-state-entry\"><span class=\"quantum-ket\">|1,−1⟩ = |−−⟩</span><em>não emaranhado</em></span><span class=\"quantum-state-entry\"><span class=\"quantum-ket\">|0,0⟩ = (|+−⟩ − |−+⟩)/√2</span><em class=\"is-entangled\">emaranhado</em></span></div><div class=\"quantum-energy-list\"><span>E(1,m) = 0 <small>tripleto</small></span><span>E(0,0) = J <small>singleto</small></span></div>" }
    ],
    equations: [
      { html: "<div class=\"quantum-panel energy-spectrum-panel\"><p class=\"quantum-panel-label\">Espectro de energia</p><div class=\"energy-level-diagram\" aria-label=\"Diagrama dos níveis de energia para J menor e maior que zero\"><div class=\"energy-regime\"><strong>J &lt; 0</strong><span class=\"energy-level high\">|1,m⟩</span><span class=\"energy-gap\">J</span><span class=\"energy-level low\">|0,0⟩</span></div><div class=\"energy-regime\"><strong>J &gt; 0</strong><span class=\"energy-level high\">|0,0⟩</span><span class=\"energy-gap\">J</span><span class=\"energy-level low\">|1,m⟩</span></div></div></div>" },
      { html: "<div class=\"quantum-panel concurrence-panel\"><p class=\"quantum-panel-label\">Concorrência térmica</p><span class=\"concurrence-equation\"><span>𝒞 = max</span><span class=\"concurrence-brace\">{</span><span>0, 1 −</span><span class=\"math-fraction\"><span>6</span><span>e<sup>−Jβ</sup> + 3</span></span><span class=\"concurrence-brace\">}</span></span><svg class=\"concurrence-chart\" viewBox=\"0 0 430 285\" role=\"img\" aria-label=\"Concorrência em função da temperatura reduzida\"><line x1=\"62\" y1=\"22\" x2=\"62\" y2=\"244\"/><line x1=\"62\" y1=\"244\" x2=\"406\" y2=\"244\"/><g class=\"chart-ticks\"><line x1=\"62\" y1=\"244\" x2=\"62\" y2=\"251\"/><line x1=\"131\" y1=\"244\" x2=\"131\" y2=\"251\"/><line x1=\"200\" y1=\"244\" x2=\"200\" y2=\"251\"/><line x1=\"268\" y1=\"244\" x2=\"268\" y2=\"251\"/><line x1=\"337\" y1=\"244\" x2=\"337\" y2=\"251\"/><line x1=\"406\" y1=\"244\" x2=\"406\" y2=\"251\"/></g><g class=\"chart-labels\"><text x=\"62\" y=\"268\">0</text><text x=\"131\" y=\"268\">0,2</text><text x=\"200\" y=\"268\">0,4</text><text x=\"268\" y=\"268\">0,6</text><text x=\"337\" y=\"268\">0,8</text><text x=\"406\" y=\"268\">1</text><text x=\"48\" y=\"247\">0</text><text x=\"48\" y=\"202\">0,2</text><text x=\"48\" y=\"157\">0,4</text><text x=\"48\" y=\"112\">0,6</text><text x=\"48\" y=\"67\">0,8</text><text x=\"48\" y=\"27\">1</text><text class=\"axis-title\" x=\"235\" y=\"283\">k<tspan dy=\"3\" font-size=\"8\">B</tspan><tspan dy=\"-3\">T / |J|</tspan></text><text class=\"axis-title\" transform=\"translate(16 166) rotate(-90)\">Concorrência</text></g><path class=\"concurrence-curve\" d=\"M62 23 C102 23 116 28 139 51 C174 85 202 130 237 166 C275 205 326 234 368 244 L406 244\"/></svg></div>" }
    ],
    footerRefs: "M.S. Reis, Mecânica Quântica; emaranhamento térmico em dímeros de spin 1/2",
    sourceRefs: ["E023"]
  },
  {
    id: "s33b-metal-carboxylate-article",
    layout: "cards",
    className: "metal-carboxylate-article-slide",
    section: "Resultados",
    eyebrow: "Linha 6 | Evidência experimental",
    title: "Emaranhamento térmico em carboxilatos",
    lead: "A.M. Souza et al., Physical Review B 79, 054408 (2009). Em carboxilatos metálicos, o emaranhamento persiste até Tₑ ≈ 630 K e a desigualdade de Bell é violada até ≈ 290 K.",
    figures: [
      { src: "assets/figures/metal-carboxylate-material.png", alt: "Estruturas moleculares do carboxilato metálico de cobre estudado", caption: "{Cu₂(O₂CH)₄}{Cu(O₂CH)₂(2-metilpiridina)₂} — Cu: cobre (azul); O: oxigênio (vermelho); C: carbono (marrom); N: nitrogênio (violeta); H: hidrogênio (rosa-claro)." },
      { src: "assets/figures/metal-carboxylate-concurrence.png", alt: "Concorrência em função da temperatura no carboxilato de cobre", caption: "Concorrência obtida a partir da suscetibilidade magnética; Tₑ ≈ 630 K." },
      { src: "assets/figures/metal-carboxylate-prb-2009.png", alt: "Cabeçalho e resumo do artigo publicado na Physical Review B em 2009", caption: "Souza et al., Physical Review B 79, 054408 (2009) · abrir artigo ↗", href: "https://doi.org/10.1103/PhysRevB.79.054408" }
    ],
    footerRefs: "A.M. Souza et al., Phys. Rev. B 79, 054408 (2009)",
    sourceRefs: ["E023"]
  },
  {
    id: "s33c-quantum-first-law",
    layout: "content",
    className: "quantum-first-law-slide",
    section: "Resultados",
    eyebrow: "Linha 6 | Processos termodinâmicos quânticos",
    title: "Primeira lei da termodinâmica quântica",
    equations: [
      {
        html: `<div class="quantum-first-law-equation">
          <math class="quantum-first-law-main" display="block" aria-label="d U igual a d W mais d Q igual ao somatório de p n d E n mais o somatório de E n d p n">
            <mrow>
              <mi>dU</mi><mo>=</mo><mi>dW</mi><mo>+</mo><mi>dQ</mi><mo>=</mo>
              <munder><mo>∑</mo><mi>n</mi></munder><msub><mi>p</mi><mi>n</mi></msub><mi>d</mi><msub><mi>E</mi><mi>n</mi></msub>
              <mo>+</mo>
              <munder><mo>∑</mo><mi>n</mi></munder><msub><mi>E</mi><mi>n</mi></msub><mi>d</mi><msub><mi>p</mi><mi>n</mi></msub>
            </mrow>
          </math>
          <div class="quantum-first-law-keys">
            <span class="quantum-work-key"><strong>Trabalho</strong> altera os níveis de energia <i>E<sub>n</sub></i>.</span>
            <span class="quantum-heat-key"><strong>Calor</strong> altera as populações <i>p<sub>n</sub></i>.</span>
          </div>
        </div>`
      }
    ],
    figures: [
      {
        src: "assets/figures/quantum-adiabatic-energy-levels.png",
        alt: "Esquema do processo adiabático quântico com trabalho, entropia constante e populações fixas",
        caption: "Processo adiabático: dQ = 0; pₙ permanece fixo enquanto Eₙ varia. Fonte: de Paula et al., arXiv:2411.12470, Fig. 1 · abrir artigo ↗",
        href: "https://arxiv.org/pdf/2411.12470"
      },
      {
        src: "assets/figures/quantum-isochoric-energy-levels.png",
        alt: "Esquema do processo isocórico quântico com troca de calor, níveis fixos e populações variáveis",
        caption: "Processo isocórico: dW = 0; Eₙ permanece fixo enquanto pₙ varia. Fonte: de Paula et al., arXiv:2411.12470, Fig. 2 · abrir artigo ↗",
        href: "https://arxiv.org/pdf/2411.12470"
      }
    ],
    footerRefs: "V.G. de Paula, W.S. Santana, C. Cruz e M. Reis, arXiv:2411.12470 (2024)",
    sourceRefs: ["E023"]
  },
  {
    id: "s33d-quantum-caloric-framework",
    layout: "content",
    className: "quantum-caloric-framework-slide",
    section: "Resultados",
    eyebrow: "Linha 6 | Efeito calórico quântico",
    title: "Entropia isotérmica: do clássico ao quântico",
    lead: "A excitação externa λ define qual observável controla a resposta calórica do sistema.",
    equations: [
      {
        html: `<math class="latex-math quantum-caloric-integral" display="block" aria-label="Delta S iso de delta lambda e T igual a menos a integral de lambda i até lambda f da derivada em relação à temperatura do valor esperado da derivada da Hamiltoniana em relação a lambda">
          <mstyle displaystyle="true" scriptlevel="0">
            <mrow>
              <mi mathvariant="normal">Δ</mi><msub><mi>S</mi><mtext>iso</mtext></msub>
              <mo stretchy="false">(</mo><mi mathvariant="normal">Δ</mi><mi>λ</mi><mo>,</mo><mi>T</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo>
              <munderover><mo>∫</mo><msub><mi>λ</mi><mi>i</mi></msub><msub><mi>λ</mi><mi>f</mi></msub></munderover>
              <mfrac><mo>∂</mo><mrow><mo>∂</mo><mi>T</mi></mrow></mfrac>
              <msub>
                <mrow>
                  <mo stretchy="true">⟨</mo>
                  <mfrac>
                    <mrow><mi mathvariant="normal">d</mi><mi>ℋ</mi><mo stretchy="false">(</mo><mi>λ</mi><mo stretchy="false">)</mo></mrow>
                    <mrow><mi mathvariant="normal">d</mi><mi>λ</mi></mrow>
                  </mfrac>
                  <mo stretchy="true">⟩</mo>
                </mrow>
                <mi>λ</mi>
              </msub>
              <mspace width=".16em"></mspace><mi mathvariant="normal">d</mi><mi>λ</mi>
            </mrow>
          </mstyle>
        </math>`
      }
    ],
    cards: [
      {
        label: "Caso 1 · λ = B | campo magnético",
        className: "quantum-caloric-case quantum-caloric-classical-case",
        html: `<div class="quantum-case-equations">
          <math class="latex-math" display="block" aria-label="Hamiltoniana igual à Hamiltoniana de interação menos B M"><mstyle displaystyle="true" scriptlevel="0"><mrow><mi>ℋ</mi><mo>=</mo><msub><mi>ℋ</mi><mtext>int</mtext></msub><mo>−</mo><mi>B</mi><mi>M</mi></mrow></mstyle></math>
          <math class="latex-math" display="block" aria-label="Valor esperado da derivada da Hamiltoniana em relação ao campo B igual a menos M de T e B"><mstyle displaystyle="true" scriptlevel="0"><mrow><mo stretchy="true">⟨</mo><mfrac><mrow><mo>∂</mo><mi>ℋ</mi></mrow><mrow><mo>∂</mo><mi>B</mi></mrow></mfrac><mo stretchy="true">⟩</mo><mo>=</mo><mo>−</mo><mi>M</mi><mo stretchy="false">(</mo><mi>T</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo></mrow></mstyle></math>
          <p class="quantum-case-note">A relação quântica recupera a expressão clássica da variação de entropia magnética.</p>
        </div>`
      },
      {
        label: "Caso 2 · λ = J | acoplamento de troca",
        className: "quantum-caloric-case quantum-caloric-discord-case",
        html: `<div class="quantum-case-equations">
          <math class="latex-math" display="block" aria-label="Hamiltoniana de interação igual a J vezes o somatório dos produtos escalares dos spins"><mstyle displaystyle="true" scriptlevel="0"><mrow><msub><mi>ℋ</mi><mtext>int</mtext></msub><mo>=</mo><mi>J</mi><munder><mo>∑</mo><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></munder><msub><mover accent="true"><mi>S</mi><mo>→</mo></mover><mi>i</mi></msub><mo>·</mo><msub><mover accent="true"><mi>S</mi><mo>→</mo></mover><mi>j</mi></msub></mrow></mstyle></math>
          <math class="latex-math" display="block" aria-label="Módulo do valor esperado da derivada da Hamiltoniana em relação a J igual a seis vezes a discórdia"><mstyle displaystyle="true" scriptlevel="0"><mrow><mo stretchy="true">|</mo><mo stretchy="true">⟨</mo><mfrac><mrow><mo>∂</mo><mi>ℋ</mi></mrow><mrow><mo>∂</mo><mi>J</mi></mrow></mfrac><mo stretchy="true">⟩</mo><mo stretchy="true">|</mo><mo>=</mo><mn>6</mn><mi>𝒟</mi><mo stretchy="false">(</mo><mi>J</mi><mo>,</mo><mi>T</mi><mo stretchy="false">)</mo></mrow></mstyle></math>
          <math class="latex-math quantum-discord-entropy" display="block" aria-label="Módulo de Delta S iso de Delta J e T igual a seis vezes a integral de J A até J B da derivada da discórdia em relação à temperatura"><mstyle displaystyle="true" scriptlevel="0"><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">Δ</mi><msub><mi>S</mi><mtext>iso</mtext></msub><mo stretchy="false">(</mo><mi mathvariant="normal">Δ</mi><mi>J</mi><mo>,</mo><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="true">|</mo><mo>=</mo><mn>6</mn><munderover><mo>∫</mo><msub><mi>J</mi><mi>A</mi></msub><msub><mi>J</mi><mi>B</mi></msub></munderover><mfrac><mrow><mo>∂</mo><mi>𝒟</mi><mo stretchy="false">(</mo><mi>J</mi><mo>,</mo><mi>T</mi><mo stretchy="false">)</mo></mrow><mrow><mo>∂</mo><mi>T</mi></mrow></mfrac><mspace width=".12em"></mspace><mi mathvariant="normal">d</mi><mi>J</mi></mrow></mstyle></math>
          <p class="quantum-case-note"><strong>A resposta entrópica passa a medir diretamente a variação térmica da discórdia quântica 𝒟.</strong> A discórdia quântica quantifica o grau de correlações quânticas entre os subsistemas, podendo ser não nula mesmo para estados separáveis.</p>
        </div>`
      }
    ],
    footerRefs: "C. Cruz, J.S. Amaral e M. Reis, Quantum Sci. Technol. 10, 035015 (2025)",
    sourceRefs: ["E023"]
  },
  {
    id: "s33e-knacusi4o10-result",
    layout: "cards",
    className: "quantum-caloric-result-slide quantum-caloric-figure-continuation",
    section: "Resultados",
    eyebrow: "Linha 6 | Material protótipo",
    title: "KNaCuSi₄O₁₀: discórdia e resposta calórica",
    figures: [
      {
        src: "assets/figures/quantum-caloric-knacusi4o10-study.png",
        alt: "Discórdia quântica e variação isotérmica de entropia em função da temperatura para KNaCuSi4O10",
        caption: "KNaCuSi₄O₁₀ · discórdia 𝒟(J,T) e |ΔSiso| para diferentes acoplamentos J induzidos por pressão",
        href: "https://doi.org/10.1088/2058-9565/adcf47"
      }
    ],
    footerRefs: "C. Cruz, J.S. Amaral e M. Reis, Quantum Sci. Technol. 10, 035015 (2025)",
    sourceRefs: ["E023"]
  },
  {
    id: "s33ea-quantum-caloric-article",
    layout: "photo",
    className: "quantum-caloric-reference-slide quantum-caloric-figure-continuation",
    section: "Resultados",
    title: "",
    figure: {
      src: "assets/figures/quantum-caloric-article-reference.png",
      alt: "Cabeçalho do artigo Quantum caloric effects, publicado na Quantum Science and Technology em 2025",
      href: "https://doi.org/10.1088/2058-9565/adcf47"
    },
    sourceRefs: ["E023"]
  },
  {
    id: "s33f-quantum-collaborations",
    layout: "cards",
    className: "graphene-collaboration-slide quantum-thermo-collaboration-slide",
    section: "Resultados",
    eyebrow: "Linha 6 | Rede de colaboração",
    title: "Colaborações",
    lead: "",
    cards: [
      {
        label: "Chile",
        meta: "Universidad Técnica Federico Santa María",
        logo: { src: "assets/logos/universidad-tecnica-federico-santa-maria.jpg", alt: "Universidad Técnica Federico Santa María" }
      },
      {
        label: "UFOB",
        meta: "Universidade Federal do Oeste da Bahia",
        logo: { src: "assets/logos/ufob.png", alt: "UFOB" }
      }
    ],
    footerRefs: "Colaborações associadas à linha de termodinâmica quântica em materiais magnéticos",
    sourceRefs: ["E023", "E026"]
  },
  {
    id: "s34b-quantum-thermo-publications",
    layout: "modal",
    cards: [
      {
        html: `<dialog class="publications-dialog" id="quantum-thermo-publications" aria-labelledby="quantum-thermo-publications-title">
            <div class="publications-dialog-head">
              <div><p class="publications-kicker">Termodinâmica quântica em materiais magnéticos · 2008–presente</p><h2 id="quantum-thermo-publications-title">Publicações associadas</h2></div>
              <button class="publications-close" type="button" aria-label="Fechar publicações">×</button>
            </div>
            <ol class="publications-list" reversed>
              <li><span>2025</span><strong>Quantum Level-Crossing Induced by Anisotropy in Spin-1 Heisenberg Dimers: Applications to Quantum Stirling Engines.</strong><small>B. Castorene, V.G. de Paula, F.J. Peña, C. Cruz, M. Reis e P. Vargas.</small><em>Advanced Quantum Technologies, e2500204.</em><a href="https://scholar.google.com/scholar?q=Quantum+Level-Crossing+Induced+by+Anisotropy+in+Spin-1+Heisenberg+Dimers" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2025</span><strong>Quantum thermodynamics of a power-law potential.</strong><small>V.G. de Paula, W.S. Santana, C. Cruz e M. Reis.</small><em>Physica A 674, 130728.</em><a href="https://scholar.google.com/scholar?q=Quantum+thermodynamics+of+a+power-law+potential" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2025</span><strong>Quantum caloric effects.</strong><small>C. Cruz, J.S. Amaral e M. Reis.</small><em>Quantum Science and Technology 10, 035015.</em><a href="https://scholar.google.com/scholar?q=Quantum+caloric+effects+Cruz+Amaral+Reis" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2023</span><strong>Quantum Stirling engine based on dinuclear metal complexes.</strong><small>C. Cruz, H.-R. Rastegar-Sedehi, M.F. Anka, T.R. de Oliveira e M. Reis.</small><em>Quantum Science and Technology 8, 035010.</em><a href="https://scholar.google.com/scholar?q=Quantum+Stirling+engine+based+on+dinuclear+metal+complexes" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2022</span><strong>Quantum battery based on quantum discord at room temperature.</strong><small>C. Cruz, M. Anka, M. Reis, R. Bachelard e A. Santos.</small><em>Quantum Science and Technology 7, 025020.</em><a href="https://scholar.google.com/scholar?q=Quantum+battery+based+on+quantum+discord+at+room+temperature" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2017</span><strong>Influence of the external pressure on the quantum correlations of molecular magnets.</strong><small>C. Cruz, A.S. Alves, R.N. Santos, D.D.O. Soares-Pinto, J.C.O. Jesus, J.S. Almeida e M.S. Reis.</small><em>Europhysics Letters 117, 20004.</em><a href="https://scholar.google.com/scholar?q=Influence+external+pressure+quantum+correlations+molecular+magnets" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2016</span><strong>Thermal entanglement and teleportation in a dipolar interacting system.</strong><small>C.S. Castro, O.S. Duarte, D.P. Pires, D.O. Soares-Pinto e M.S. Reis.</small><em>Physics Letters A 380, 1571.</em><a href="https://scholar.google.com/scholar?q=Thermal+entanglement+and+teleportation+in+a+dipolar+interacting+system" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2016</span><strong>Carboxylate-based molecular magnet: One path toward achieving stable quantum correlations at room temperature.</strong><small>C. Cruz, D.O. Soares-Pinto, P. Brandão, A.M. dos Santos e M.S. Reis.</small><em>Europhysics Letters 113, 40004.</em><a href="https://scholar.google.com/scholar?q=Carboxylate-based+molecular+magnet+stable+quantum+correlations+room+temperature" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Witnessing spin-orbit thermal entanglement in rare-earth ions.</strong><small>O.S. Duarte, C.S. Castro, D.O. Soares-Pinto e M.S. Reis.</small><em>Europhysics Letters 103, 40002.</em><a href="https://scholar.google.com/scholar?q=Witnessing+spin-orbit+thermal+entanglement+in+rare-earth+ions" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2013</span><strong>Spin-orbit thermal entanglement in a rare-earth-metal ion: Susceptibility witness.</strong><small>O.S. Duarte, C.S. Castro e M.S. Reis.</small><em>Physical Review A 88, 012317.</em><a href="https://doi.org/10.1103/PhysRevA.88.012317" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2012</span><strong>Thermal entanglement hundreds of Kelvin above room temperature in iron dimer.</strong><small>M.S. Reis, S. Soriano, A. Santos, D. Soares-Pinto e P. Brandão.</small><em>Europhysics Letters 100, 50001.</em><a href="https://scholar.google.com/scholar?q=Thermal+entanglement+hundreds+Kelvin+above+room+temperature+Iron+dimer" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2011</span><strong>Writing electronic ferromagnetic states in a high-temperature paramagnetic nuclear spin system.</strong><small>D.O. Soares-Pinto, J. Teles, A.M. Souza, E.R. de Azevedo, R.S. Sarthour, T.J. Bonagamba, M.S. Reis e I.S. Oliveira.</small><em>International Journal of Quantum Information 9, 1047.</em><a href="https://scholar.google.com/scholar?q=Writing+electronic+ferromagnetic+states+high-temperature+paramagnetic+nuclear+spin+system" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2009</span><strong>Identifying the temperature of entanglement in magnetic materials composed by S-spin dimers.</strong><small>D.O. Soares-Pinto, A.M. Souza, R.S. Sarthour, I.S. Oliveira, M.S. Reis, P. Brandão e A.M. dos Santos.</small><em>Europhysics Letters 87, 40008.</em><a href="https://scholar.google.com/scholar?q=Identifying+temperature+entanglement+magnetic+materials+S-spin+dimers" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2009</span><strong>Entanglement and Bell’s inequality violation above room temperature in metal carboxylates.</strong><small>A.M. Souza, D.O. Soares-Pinto, R.S. Sarthour, I.S. Oliveira, M.S. Reis, P. Brandão e A.M. dos Santos.</small><em>Physical Review B 79, 054408.</em><a href="https://doi.org/10.1103/PhysRevB.79.054408" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
              <li><span>2008</span><strong>Emaranhamento: um recurso computacional que desafia os físicos.</strong><small>I.S. Oliveira, R.S. Sarthour, A.M. Souza, D.O. Soares-Pinto e M.S. Reis.</small><em>Ciência Hoje 42, 32.</em><a href="https://scholar.google.com/scholar?q=Emaranhamento+um+recurso+computacional+que+desafia+os+fisicos" target="_blank" rel="noopener noreferrer">Localizar artigo ↗</a></li>
              <li><span>2008</span><strong>Experimental determination of thermal entanglement in spin clusters using magnetic susceptibility measurements.</strong><small>I.S. Oliveira, R.S. Sarthour, A.M. Souza, D.O. Soares-Pinto e M.S. Reis.</small><em>Physical Review B 77, 104402.</em><a href="https://doi.org/10.1103/PhysRevB.77.104402" target="_blank" rel="noopener noreferrer">Abrir artigo ↗</a></li>
            </ol>
          </dialog>`
      }
    ]
  },
  {
    id: "s35-synthesis",
    layout: "modal",
    section: "Resultados",
    eyebrow: "Síntese científica",
    title: "Um programa, várias interfaces",
    cards: [
      { label: "Método", text: "Partir de sistemas físicos reais e construir modelos termodinâmicos/magnéticos testáveis." },
      { label: "Escala", text: "Conectar Hamiltonianos, espectros e spins a M, chi, ΔS e ΔT." },
      { label: "Materiais", text: "Manganitas, intermetálicos, complexos metálicos, grafeno e sistemas moleculares." },
      { label: "Fronteira", text: "Da refrigeração magnética a informação quântica e termodinâmica quântica." }
    ],
    footerRefs: "MEM pp.22-32; refs. [2-56]",
    sourceRefs: ["E017", "E018", "E019", "E020", "E021", "E022", "E023"]
  },
  {
    id: "s36-section-opening",
    layout: "section",
    section: "Impacto",
    eyebrow: "Seção 4",
    title: "Impacto acadêmico"
  },
  {
    id: "s36-impact",
    layout: "metrics",
    className: "impact-metrics-slide",
    section: "Impacto",
    eyebrow: "Produção Científica",
    title: "Produção Científica em Números",
    metrics: [
      { value: "3794", label: "citações acumuladas" },
      { value: "1483", label: "citações desde 2021" },
      { value: "h = 34", label: "índice h" },
      { value: "i10 = 89", label: "publicações com 10+ citações" },
      { value: "140+", label: "artigos publicados" }
    ],
    figures: [
      {
        src: "assets/figures/impact-google-scholar-updated.png",
        alt: "Indicadores atualizados de citações, índice h e índice i10 no Google Scholar",
        caption: "Google Scholar — atualizado em 21 ago. 2026; o ano de 2026 é parcial."
      },
      {
        src: "assets/figures/impact-scopus-citations-updated.png",
        alt: "Evolução anual de documentos e citações na base Scopus entre 2000 e 2026",
        caption: "Documentos e citações na Scopus, 2000-2026; o ano de 2026 é parcial."
      }
    ],
    footerRefs: "Google Scholar e Scopus; consulta em 21 ago. 2026",
    sourceRefs: ["E024"]
  },
  {
    id: "s36-quality-metrics",
    layout: "metrics",
    className: "impact-all-metrics",
    section: "Impacto",
    eyebrow: "Produção Científica",
    title: "",
    metrics: [
      { value: "20,4%", label: "publicações entre os 25% mais citados mundialmente" },
      { value: "70,2%", label: "artigos em periódicos top 25% por CiteScore" },
      { value: "67,3%", label: "publicações realizadas com colaboração internacional" },
      { value: "11%", label: "como primeiro autor" },
      { value: "57%", label: "como último autor" },
      { value: "28%", label: "como coautor" },
      { value: "4%", label: "como autor único" }
    ],
    cards: [
      {
        label: "CNPq · Produtividade em Pesquisa",
        html: "<ul><li>Bolsa mantida desde 2011</li><li>Nível 2 · três ciclos</li><li>Nível 1D · um ciclo</li><li>Atualmente · nível 1C</li></ul>"
      },
      {
        label: "FAPERJ · Bolsas de mérito",
        html: "<ul><li>1 JCNE · 2012</li><li>3 CNE · 2016, 2019 e 2024</li></ul>"
      }
    ],
    footerRefs: "*Indicadores: Scopus (10 últimos anos) · Bolsas: CNPq e FAPERJ",
    sourceRefs: ["E024"]
  },
  {
    id: "s37-books",
    layout: "cards",
    className: "textbook-books-slide gold-star-title",
    section: "Produção",
    eyebrow: "Livro-texto · publicados",
    title: "Livro-texto: publicados",
    cards: [
      {
        label: "Magnetismo Molecular",
        html: "<p><em>Mario Reis e Antônio dos Santos</em></p><ul><li>Editora Livraria da Física · 2010</li><li>192 páginas</li><li>Português</li><li>ISBN 978-85-7861-079-1</li></ul>"
      },
      {
        label: "Fundamentals of Magnetism",
        html: "<p><em>Mario Reis</em></p><ul><li>Elsevier · 2013</li><li>297 páginas</li><li>Inglês</li><li>ISBN 978-0-12-405545-2</li></ul>"
      },
      {
        label: "Quantum Mechanics: Theory and Applications",
        html: "<p><em>Mario Reis</em></p><ul><li>Elsevier · 2025</li><li>Inglês</li><li>ISBN 9780443328268</li><li>10 anos</li></ul>"
      }
    ],
    figures: [
      {
        src: "assets/figures/magnetismo-molecular-cover.png",
        alt: "Capa do livro Magnetismo Molecular",
        caption: "Magnetismo Molecular · 2010"
      },
      {
        src: "assets/figures/fundamentals-magnetism-cover.png",
        alt: "Capa do livro Fundamentals of Magnetism",
        caption: "Fundamentals of Magnetism · 2013"
      },
      {
        src: "assets/figures/quantum-mechanics-cover.png",
        alt: "Capa do livro Quantum Mechanics: Theory and Applications",
        caption: "Quantum Mechanics: Theory and Applications · 2025"
      }
    ],
    footerRefs: "MEM pp.37-40",
    sourceRefs: ["E025"]
  },
  {
    id: "s37-books-continuity",
    layout: "cards",
    className: "textbook-progress-slide",
    section: "Produção",
    eyebrow: "Livro-texto · em andamento",
    title: "Livro-texto: em andamento",
    cards: [
      {
        label: "Termodinâmica para Estudantes de Física",
        text: "Livro em redação a partir das notas de aula de 2024-2026, articulando termodinâmica clássica, estatística, transições de fase e ciclos térmicos."
      },
      {
        label: "Capítulos",
        html: "<ol><li>Introdução</li><li>Conceitos Fundamentais</li><li>Potenciais Termodinâmicos e Aplicações</li><li>Termodinâmica Estatística</li><li>Transições de Fase</li><li>Processos Termodinâmicos</li><li>Ciclos Termodinâmicos</li></ol>"
      }
    ],
    figure: {
      src: "assets/figures/thermodynamics-book-draft-cover.png",
      alt: "Capa provisória de Termodinâmica para Estudantes de Física",
      caption: "Manuscrito em redação · notas de aula 2024-2026"
    },
    footerRefs: "Projeto Termodinâmica para Estudantes de Física · App Termo",
    sourceRefs: ["E025"]
  },
  {
    id: "s37-termo-app",
    layout: "figure-board",
    className: "termo-app-slide",
    section: "Produção",
    eyebrow: "Livro interativo",
    title: "App Termo",
    cards: [
      {
        label: "Aprendizagem ampliada",
        html: "<p>Livro interativo associado ao projeto:</p><ul><li>Capítulos</li><li>Simuladores</li><li>Exercícios por IA</li><li>Simulados por capítulo</li><li>Recursos para ampliar a aprendizagem de Termodinâmica</li></ul>"
      }
    ],
    figure: {
      src: "assets/figures/termo-app-interface.png",
      alt: "Interface do aplicativo interativo Termo",
      href: "http://termo-theta.vercel.app",
      bare: true
    },
    footerRefs: "termo-theta.vercel.app",
    sourceRefs: ["E025"]
  },
  {
    id: "s37-literary-work",
    layout: "figure-board",
    className: "literary-work-slide gold-star-title",
    section: "Produção",
    eyebrow: "",
    title: "Obra literária não-acadêmica",
    cards: [
      {
        label: "Obra literária · 2025",
        className: "literary-bullets-rise early-product-rise",
        html: "<p><em>As Viagens de ibn Hakim</em> é uma autobiografia heterônima narrada por um personagem fictício (ibn Hakim) situado no mundo islâmico medieval.</p><ul><li>Romance</li><li>Autor: ibn Hakim</li><li>Idioma: Português</li><li>ISBN: 978-65-01-31806-6</li></ul><p><a href=\"https://ibnhakim.wordpress.com\" target=\"_blank\" rel=\"noopener\">Conhecer o projeto ↗</a></p>"
      }
    ],
    figure: {
      src: "assets/figures/ibn-hakim-cover-literary.png",
      alt: "Capa do livro As viagens de ibn Hakim",
      bare: true
    },
    footerRefs: "Obra e materiais do projeto: ibnhakim.wordpress.com",
    sourceRefs: ["E025"]
  },
  {
    id: "s38-editorial",
    layout: "content",
    className: "editorial-physica-slide gold-star-title",
    section: "Produção",
    eyebrow: "Atividades editoriais",
    title: "Physica B",
    lead: "A atuação editorial evoluiu da gestão de manuscritos para a gestão estratégica de um periódico internacional.",
    items: [
      "Editor da Physica B: Condensed Matter entre 2016 e 2025.",
      "Editor-in-Chief desde 2025.",
      "Fator de impacto: 3,2.",
      "Mais de 6.000 submissões por ano.",
      "Atuação como editor-chefe: definição de políticas, escopo científico, padrões éticos e estratégia de visibilidade internacional.",
      "Criação do Physica B Award e aproximação com conferências, comunidades estratégicas, redes científicas e novas gerações de pesquisadores.",
      "Coordenação do corpo editorial internacional: 10 editores, mais de 5 editores associados, 1 managing editor, 1 journal manager, 1 social media editor e advisory board com mais de 5 integrantes."
    ],
    figure: {
      src: "assets/figures/physica-b-cover-volume-740.jpg",
      alt: "Capa da revista Physica B Condensed Matter",
      bare: true
    },
    footerRefs: "MEM pp.41-42; Fig. 7.1",
    sourceRefs: ["E025"]
  },
  {
    id: "s39-internationalization",
    layout: "timeline",
    className: "international-mobility-slide",
    section: "Produção",
    eyebrow: "Internacionalização · Mobilidade",
    title: "Mobilidade",
    milestones: [
      { label: "2001-2003", text: "Estágio sanduíche na Universidade de Aveiro durante a formação doutoral." },
      { label: "2003-2005", text: "Pós-doutorado na Universidade de Aveiro, consolidando a formação em magnetismo e materiais funcionais." },
      { label: "2005-2009", text: "Pesquisador Auxiliar no CICECO: infraestrutura, projetos e início da supervisão de estudantes." },
      { label: "2017-2018", text: "Pesquisador visitante na Universidade de Aveiro, fortalecendo colaborações já estabelecidas." },
      { label: "2022-2023", text: "Distinguished Researcher na Universidad de Sevilla pelo programa María Zambrano." }
    ],
    footerRefs: "MEM pp.43-44",
    sourceRefs: ["E026"]
  },
  {
    id: "s39-collaboration",
    layout: "cards",
    className: "international-collaboration-slide",
    section: "Produção",
    eyebrow: "Internacionalização · Colaboração",
    title: "Colaborações internacionais",
    cards: [
      { label: "Oak Ridge National Laboratory", text: "Estados Unidos", logo: { src: "assets/logos/oak-ridge-national-laboratory.png", alt: "Oak Ridge National Laboratory" } },
      { label: "Universidade de Aveiro", text: "Portugal", logo: { src: "assets/logos/universidade-aveiro.png", alt: "Universidade de Aveiro" } },
      { label: "Universidade do Porto", text: "Portugal", logo: { src: "assets/logos/uporto-mark.svg", alt: "Universidade do Porto" } },
      { label: "Universidad de Sevilla", text: "Espanha", logo: { src: "assets/logos/sevilla-mark.svg", alt: "Universidad de Sevilla" } },
      { label: "Taiyuan University of Technology", text: "China", logo: { src: "assets/logos/taiyuan-university-technology.png", alt: "Taiyuan University of Technology" } },
      { label: "Dagestan State University", text: "Makhachkala, Rússia", logo: { src: "assets/logos/dagestan-state-university-mark.svg", alt: "Dagestan State University" } },
      { label: "Lomonosov Moscow State University", text: "Rússia", logo: { src: "assets/logos/lomonosov-msu.jpeg", alt: "Lomonosov Moscow State University" } },
      { label: "Universidad Técnica Federico Santa María", text: "Chile", logo: { src: "assets/logos/universidad-tecnica-federico-santa-maria.jpg", alt: "Universidad Técnica Federico Santa María" } }
    ],
    footerRefs: "MEM pp.43-44",
    sourceRefs: ["E026"]
  },
  {
    id: "s39-lafmat",
    layout: "cards",
    className: "lafmat-overview-slide gold-star-title",
    section: "Produção",
    eyebrow: "Internacionalização · Rede científica",
    title: "LAFMAT",
    cards: [
      {
        label: "Rede Latino-Americana de Matéria Condensada",
        html: "Atuação em uma iniciativa voltada à integração científica entre grupos da América Latina e de outros países, promovendo seminários, colaborações e projetos conjuntos.<br><a href=\"https://www.lafmat.com\" target=\"_blank\" rel=\"noopener noreferrer\">lafmat.com ↗</a>"
      },
      {
        label: "Agenda científica",
        html: "<strong>Agenda completa até maio de 2027.</strong><br>Seminários todos os sábados."
      },
      { label: "🇦🇷 Argentina", html: "<ul><li>Universidad Nacional de Córdoba</li><li>CONICET · CAB-CNEA · Instituto Balseiro</li></ul>" },
      { label: "🇧🇴 Bolívia", html: "<ul><li>Universidad Mayor de San Andrés</li></ul>" },
      { label: "🇧🇷 Brasil", html: "<ul><li>UFPE</li><li>UFRRJ</li><li>UFF</li></ul>" },
      { label: "🇨🇱 Chile", html: "<ul><li>Universidad San Sebastián</li><li>Universidad Católica del Norte</li></ul>" },
      { label: "🇨🇴 Colômbia", html: "<ul><li>Universidad Nacional de Colombia</li></ul>" },
      { label: "🇨🇷 Costa Rica", html: "<ul><li>LANOTEC-CONARE</li><li>Universidad de Costa Rica</li></ul>" },
      { label: "🇪🇨 Equador", html: "<ul><li>Universidad Técnica de Manabí</li></ul>" },
      { label: "🇸🇻 El Salvador", html: "<ul><li>Universidad de El Salvador</li></ul>" },
      { label: "🇲🇽 México", html: "<ul><li>CINVESTAV</li><li>Universidad Autónoma de Nuevo León</li></ul>" },
      { label: "🇵🇪 Peru", html: "<ul><li>Universidad Nacional Mayor de San Marcos</li></ul>" },
      { label: "🇻🇪 Venezuela", html: "<ul><li>Universidad del Zulia</li><li>IVIC</li></ul>" }
    ],
    figures: [
      {
        src: "assets/figures/lafmat-affiliated-institutions.png",
        alt: "Faixa com as instituições afiliadas à rede LAFMAT",
        bare: true
      },
      {
        src: "assets/figures/lafmat-video-gallery-2025.png",
        alt: "Galeria de seminários da LAFMAT em 2025",
        bare: true
      }
    ],
    footerRefs: "MEM pp.43-44; LAFMAT · Galeria de seminários 2025",
    sourceRefs: ["E026"]
  },
  {
    id: "s39-innovation",
    layout: "section",
    section: "Futuro",
    eyebrow: "Seção 5",
    title: "Perspectivas futuras",
    footerRefs: "MEM · Perspectivas futuras",
    sourceRefs: ["E027"]
  },
  {
    id: "s40-future-priorities",
    layout: "cards",
    className: "future-priorities-slide",
    section: "Futuro",
    eyebrow: "Perspectivas futuras",
    title: "Prioridades",
    cards: [
      {
        label: "Ensino · Curso Automação para Físicos",
        html: "<ul><li>Ampliar e aprofundar curso</li><li>Integrar a disciplina ao currículo.</li></ul>"
      },
      {
        label: "Ensino · Produção de material didático",
        html: "<ul><li>Concluir Termodinâmica para Estudantes de Física.</li><li>Traduzir o livro de Mecânica Quântica para o português e produzir uma edição de divulgação.</li></ul>"
      },
      {
        label: "Extensão · Laboratório de Robótica e Automação",
        html: "<ul><li>Explorar atividades de ensino e robótica para estudantes do ensino médio e universitário.</li><li>Estruturar uma equipe com professores e educadores, articulando escolas e a UFF.</li></ul>"
      },
      {
        label: "Pesquisa · Termodinâmica quântica e materiais quânticos",
        html: "<ul><li>Desenvolver projeto de colaboração internacional no CNPq.</li><li>Ampliar colaborações com Chile e China.</li><li>Fomentar a participação de novos alunos de graduação e pós-graduação.</li></ul>"
      },
      {
        label: "Inovação · Aplicativos para pesquisa e educacionais",
        html: "<ul><li>Retomar o Sample for Science (SfS).</li><li>Desenvolver o App Termo.</li><li>Desenvolver o App Mecânica Quântica</li></ul>"
      },
      {
        label: "Rede · Integração Sul Global",
        html: "<ul><li>Integrar cientificamente a LAFMAT ao Sul Global.</li><li>Estabelecer conexões com África, Sul e Sudeste da Ásia.</li><li>Usar a Physica B como ponte entre comunidades científicas.</li></ul>"
      }
    ],
    footerRefs: "MEM · Perspectivas futuras",
    sourceRefs: ["E027"]
  },
  {
    id: "s42-acknowledgements",
    layout: "section",
    section: "Agradecimentos",
    eyebrow: "Seção 6",
    title: "Agradecimentos",
    footerRefs: "Memorial · Agradecimentos",
    sourceRefs: ["E001"]
  },
  {
    id: "s42-thanks",
    layout: "cards",
    className: "acknowledgements-cards-slide",
    section: "Agradecimentos",
    eyebrow: "Agradecimentos",
    title: "Agradecimentos",
    cards: [
      { label: "Instituições e Instituições de Fomento", text: "Brasil, Portugal e Espanha." },
      { label: "Orientadores", text: "Pela formação, confiança e exemplo ao longo da trajetória." },
      { label: "Colaboradores", text: "Parceiros científicos no Brasil e no exterior." },
      { label: "Colegas e funcionários", text: "Colegas de departamento e profissionais que sustentam o cotidiano institucional." },
      { label: "Alunos", text: "Estudantes de graduação e pós-graduação." },
      { label: "Família", text: "Pelo apoio e presença em toda a caminhada." },
      { label: "Processo de Promoção", text: "Banca e direção IF" }
    ],
    footerRefs: "Memorial · Agradecimentos",
    sourceRefs: ["E001"]
  },
  {
    id: "s43-closing-title",
    layout: "title",
    className: "closing-title-slide",
    eyebrow: "MEMORIAL ACADÊMICO",
    title: "Mario Reis",
    affiliations: [
      "Instituto de Física",
      "Universidade Federal Fluminense"
    ],
    footerRefs: "Memorial para Professor Titular",
    sourceRefs: ["E001"]
  }
];
