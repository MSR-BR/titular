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
        label: "Formação acadêmica e inserção internacional",
        html: "<ul><li>UFRJ</li><li>CBPF: mestrado e doutorado</li><li>Universidade de Aveiro: doutorado sanduíche, pós-doc e pesquisador auxiliar</li></ul>"
      },
      {
        number: "2",
        href: "#section-2",
        label: "Desenvolvimento acadêmico e consolidação na UFF",
        html: "<ul><li>Atividades docentes</li><li>Formação de alunos</li><li>Montagem de laboratórios</li><li>Projetos de inovação e pesquisa</li><li>Administração</li></ul>"
      },
      {
        number: "3",
        href: "#section-3",
        label: "Linhas de pesquisa",
        html: "<ul><li>Aplicação da Estatística de Tsallis ao Magnetismo</li><li>Efeito magnetocalórico e materiais magnéticos</li><li>Complexos Metálicos, Magnetismo e Modelagem Termodinâmica</li><li>Informação quântica em materiais magnéticos</li><li>Efeitos calóricos em materiais relativísticos</li><li>Termodinâmica quântica aplicada a novos materiais</li></ul>"
      },
      {
        number: "4",
        href: "#section-4",
        label: "Impacto acadêmico",
        html: "<ul><li>Produção Científica</li><li>Livro-texto</li><li>Obra literária não-acadêmica</li><li>Atividades editoriais</li><li>Internacionalização</li></ul>"
      },
      {
        number: "5",
        href: "#section-5",
        label: "Perspectivas futuras",
        html: "<ul><li>Ensino</li><li>Extensão</li><li>Pesquisa</li><li>Inovação</li><li>Rede</li></ul>"
      },
      {
        number: "6",
        href: "#section-6",
        label: "Agradecimentos",
        html: "<ul><li>Instituições e agências de fomento</li><li>Mentores, colaboradores e colegas</li><li>Alunos</li><li>Família</li></ul>"
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
    lead: "Atuação contínua e abrangente, distribuída por praticamente todo o curso de Física e articulando graduação, pós-graduação, teoria, experimento e aplicações.",
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
        <button class="publications-trigger" type="button" data-publications-open="automation-course-pdf">Visualizar material do curso</button>
        <dialog class="publications-dialog course-pdf-dialog" id="automation-course-pdf" aria-labelledby="automation-course-pdf-title">
          <div class="publications-dialog-head">
            <div><p class="publications-kicker">L3D · Material didático</p><h2 id="automation-course-pdf-title">Automação para Físicos</h2></div>
            <button class="publications-close" type="button" aria-label="Fechar material do curso">×</button>
          </div>
          <div class="course-pdf-viewer">
            <iframe src="assets/docs/automacao-para-fisicos.pdf#page=1&zoom=page-width&view=FitH" title="Material do curso Automação para Físicos"></iframe>
          </div>
          <p class="course-pdf-fallback"><a href="assets/docs/automacao-para-fisicos.pdf" target="_blank" rel="noopener noreferrer">Abrir PDF em uma nova aba ↗</a></p>
        </dialog>` },
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
      { label: "Equipe", text: "Projeto multidisciplinar reunindo Física, Matemática, Computação, Marketing e Comunicação Audiovisual." },
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
    title: "Projetos que sustentam pesquisa e formação",
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
      { label: "Editoração", text: "Editor-chefe da Physica B: gestão de submissões, editores, revisores e política editorial." },
      { label: "Comunidade científica", text: "Organização de conferências e eventos para circulação do conhecimento e fortalecimento das redes de colaboração." }
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
      { label: "3.2", text: "Efeito magnetocalórico e materiais magnéticos" },
      { label: "3.3", text: "Complexos Metálicos, Magnetismo e Modelagem Termodinâmica" },
      { label: "3.4", text: "Informação quântica em materiais magnéticos" },
      { label: "3.5", text: "Efeitos calóricos em materiais relativísticos" },
      { label: "3.6", text: "Termodinâmica quântica aplicada a novos materiais" }
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
    lead: "A maximização da entropia generalizada conduz à função de Langevin q e, em campo médio, a uma energia livre cuja topologia é regulada por q.",
    equations: [
      equationAsset("tsallis-entropy", "Entropia não extensiva de Tsallis", ""),
      equationAsset("tsallis-langevin-generalized", "Função de Langevin generalizada", ""),
      equationAsset("tsallis-gibbs-transition", "Energia livre de Gibbs e limites de metaestabilidade", "")
    ],
    items: [
      "q > 0,5: mínimo único e transição contínua de segunda ordem.",
      "q < 0,5: mínimos degenerados, metaestabilidade, histerese e transição de primeira ordem."
    ],
    figures: [
      {
        src: "assets/figures/tsallis-fig-1-gibbs.png",
        alt: "Energia livre de Gibbs para transições de segunda e primeira ordem",
        caption: "Fig. 1 · q regula o número e a estabilidade dos mínimos de G."
      },
      {
        src: "assets/figures/tsallis-fig-2-magnetization.png",
        alt: "Magnetização reduzida em função da temperatura para diferentes valores de q",
        caption: "Fig. 2 · A descontinuidade aparece para q < 0,5."
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
    title: "Do diagrama de fases aos dados de manganitas",
    lead: "A expansão da energia livre fornece todos os coeficientes de Landau e conecta a ordem da transição às assinaturas experimentais de La₀.₆₀Y₀.₀₇Ca₀.₃₃MnO₃.",
    items: [
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
        caption: "Fig. 9 · A inclinação muda com q e revela a ordem da transição."
      },
      {
        src: "assets/figures/tsallis-fig-10-mh.png",
        alt: "Curvas experimentais e teóricas de magnetização em função do campo",
        caption: "Fig. 10 · Ajuste de M(H) entre 175 K e 290 K."
      },
      {
        src: "assets/figures/tsallis-fig-12-hm.png",
        alt: "Curvas experimental e teórica de H sobre M em função da temperatura",
        caption: "Fig. 12 · Predição de H/M(T) sem novo ajuste."
      }
    ],
    footerRefs: "Physical Review B 68, 014404 (2003), Eqs. (26)-(29), Figs. 9, 10 e 12",
    sourceRefs: ["E018"]
  },
  {
    id: "s22-tsallis-contribution",
    layout: "cards",
    className: "tsallis-contributions-slide",
    section: "Resultados",
    eyebrow: "Linha 1 | Significado físico e legado",
    title: "q: da parametrização à medida experimental",
    lead: "O resultado central foi estabelecer uma conexão física direta entre não homogeneidade, distribuição de interações, separação de fases e não extensividade.",
    cards: [
      { label: "Significado físico", text: "O parâmetro q é relacionado aos momentos da distribuição das interações magnéticas e quantifica a não homogeneidade efetiva do sistema." },
      { label: "Determinação experimental", text: "q pode ser obtido diretamente a partir de medidas macroscópicas de magnetização e suscetibilidade." },
      { label: "Desdobramentos", html: "<ul><li>Diagrama de fases magnético não extensivo.</li><li>Sistemas magnéticos compostos.</li><li>Ondas de spin e modelos de Ising 2D.</li><li>Escalonamento de tamanho finito.</li></ul>" },
      {
        label: "Produção científica",
        html: `<p>Doze trabalhos publicados entre 2002 e 2009.</p>
          <button class="publications-trigger" type="button" data-publications-open="tsallis-publications">12 publicações · abrir lista</button>
          <dialog class="publications-dialog" id="tsallis-publications" aria-labelledby="tsallis-publications-title">
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
    ],
    footerRefs: "MEM · Significado físico de q e produção associada",
    sourceRefs: ["E018"]
  },
  {
    id: "s23-mce-foundation",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 2 | Efeito magnetocalórico",
    title: "O efeito como resposta termodinâmica",
    lead: "A variação de campo magnético permite observar mudanças de entropia em processo isotérmico e mudanças de temperatura em processo adiabático.",
    equations: [
      equationAsset("mce-entropy", "Variação isotérmica de entropia magnética", "Delta S_mag"),
      equationAsset("mce-temperature", "Variação adiabática de temperatura", "Delta T_ad"),
      equationAsset("heat-capacity-split", "Capacidade térmica total", "termos magnético, rede e eletrônico")
    ],
    items: [
      "Base conceitual para refrigeração magnética em estado sólido.",
      "Relação direta entre medidas magnéticas e resposta calórica."
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
      { label: "Manganitas", text: "Substituição química, correlações e separação de fases." },
      { label: "Intermetálicos", text: "Transições magnéticas múltiplas e efeitos magnetoestruturais." },
      { label: "Anisotropia", text: "Amplitude e largura térmica do efeito dependem da anisotropia magnetocristalina." },
      { label: "Moleculares", text: "Alta degenerescência magnética para maximizar entropia disponível." }
    ],
    footerRefs: "MEM pp.24-25; refs. [12-23]",
    sourceRefs: ["E019"]
  },
  {
    id: "s25-mce-synthesis",
    layout: "content",
    section: "Resultados",
    eyebrow: "Linha 2 | Síntese",
    title: "Do mecanismo microscópico a refrigeração em estado sólido",
    lead: "A linha magnetocalórica combina caracterização experimental detalhada e modelagem para otimizar capacidade refrigerante.",
    items: [
      "Estudo de efeitos diretos e inversos.",
      "Uso de anisotropia e transições sucessivas para ampliar a região util.",
      "Revisão abrangente sobre efeitos magnetocalóricos e barocalóricos em complexos metálicos.",
      "Extensões para compósitos multiferroicos e materiais relativísticos."
    ],
    footerRefs: "MEM pp.24-25; refs. [16-23]",
    sourceRefs: ["E019"]
  },
  {
    id: "s26-complexes-hamiltonian",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 3 | Complexos metálicos",
    title: "Do Hamiltoniano ao ajuste termodinâmico",
    lead: "Complexos metálicos permitem conectar estrutura de spins, interações de troca, anisotropia e observáveis magnéticas.",
    equations: [
      equationAsset("spin-hamiltonian", "Hamiltoniano efetivo de spins", "troca, anisotropia e Zeeman"),
      equationAsset("partition-observables", "Função de partição e observáveis", "Z, F, M e chi")
    ],
    items: [
      "Diagonalização fornece o espectro de energias E_n.",
      "A função de partição conecta o modelo microscópico a M e chi."
    ],
    footerRefs: "MEM pp.25-26; refs. [24-27]",
    sourceRefs: ["E020"]
  },
  {
    id: "s27-complexes-result",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 3 | Resultado representativo",
    title: "Na2Cu5Si4O14: cadeia dímero-trimero",
    lead: "Um exemplo mostra a métodologia: estrutura cristalina, Hamiltoniano efetivo, parâmetros de troca e interpretação física.",
    equations: [
      equationAsset("cu5-hamiltonian", "Hamiltoniano dímero-trimero", "Na2Cu5Si4O14"),
      equationAsset("cu5-parameters", "Parametros de troca", "ajuste de suscetibilidade")
    ],
    figure: {
      src: "assets/figures/molecular-chain-na2cu5si4o14.png",
      alt: "Cadeia magnética em zigue-zague do composto Na2Cu5Si4O14",
      caption: "Estrutura dímero-trimero em cadeia Cu2/Cu3; ponte entre geometria e Hamiltoniano efetivo."
    },
    items: [
      "Cadeia em zigue-zague com unidades Cu2 e Cu3.",
      "Momento liquido ao longo da cadeia: ferrimagnetismo homometálico.",
      "Ajuste quantitativo de suscetibilidade experimental."
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
      alt: "Ajuste de chi T para Na2Cu5Si4O14 e esquema de interações de troca",
      caption: "CARDAMOMO: ajuste quantitativo de chi T e interações J1, J2, J3 no exemplo Na2Cu5Si4O14."
    },
    eyebrow: "Linha 3 | Ferramenta computacional",
    title: "CARDAMOMO como infraestrutura teórica",
    lead: "O pacote automatiza o ajuste de modelos quânticos e clássicos a dados experimentais de suscetibilidade magnética.",
    items: [
      "Modelos para clusters e cadeias unimetálicas e bimetálicas.",
      "Cadeias regulares e irregulares, além de modelos de Ising.",
      "Integra modelagem microscópica e dados experimentais em uma ferramenta reprodutível.",
      "Registrado no memorial como propriedade intelectual/produção computacional."
    ],
    footerRefs: "MEM pp.25,99; refs. [26,27]",
    sourceRefs: ["E020", "E014"]
  },
  {
    id: "s29-quantum-info-concept",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 4 | Informação quântica",
    title: "Susceptibilidade como testemunha de emaranhamento",
    lead: "A linha conecta matéria condensada e informação quântica usando medidas magnéticas macroscópicas para inferir correlações quânticas.",
    equations: [
      equationAsset("entanglement-witness", "Testemunha de emaranhamento por suscetibilidade", "W(T) < 0 indica emaranhamento")
    ],
    figure: {
      src: "assets/figures/entanglement-witness.png",
      alt: "Testemunho de emaranhamento em função da temperatura",
      caption: "Valores negativos do witness indicam emaranhamento em sistema magnético molecular."
    },
    items: [
      "Clusters de spin e magnetos moleculares como sistemas reais.",
      "Acesso experimental por técnicas tradicionais de caracterização magnética.",
      "Ponte entre observáveis termodinâmicos e propriedades quânticas microscópicas."
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
      caption: "Figura 4.4 do memorial: emaranhamento térmico lido por observável magnético macroscópico."
    },
    eyebrow: "Linha 4 | Resultado",
    title: "Correlações quânticas em temperaturas elevadas",
    lead: "O memorial destaca resultados de emaranhamento térmico, violação de desigualdades de Bell e persistência de correlações quânticas em sistemas moleculares.",
    items: [
      "Demonstração experimental de emaranhamento térmico por suscetibilidade magnética.",
      "Sistemas moleculares específicos com emaranhamento e violação de Bell acima da temperatura ambiente.",
      "Dímeros de ferro com emaranhamento centenas de Kelvin acima da temperatura ambiente.",
      "Aplicações em terras raras e carboxilatos metálicos."
    ],
    footerRefs: "MEM pp.28-29; refs. [37-42]",
    sourceRefs: ["E021"]
  },
  {
    id: "s31-graphene-concept",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 5 | Materiais relativísticos",
    title: "Grafeno e efeitos calóricos oscilatórios",
    lead: "Em materiais relativísticos, a quantização de Landau e o espectro de Dirac alteram a resposta termodinâmica a campos externos.",
    equations: [
      equationAsset("graphene-landau", "Quantização de Landau em grafeno", "escala m e níveis relativísticos"),
      equationAsset("graphene-caloric", "Entropia magnética oscilatória", "alternância normal/inverso")
    ],
    figure: {
      src: "assets/figures/graphene-entropy-oscillation.png",
      alt: "Variação da entropia magnética em grafeno bidimensional",
      caption: "Entropia magnética em grafeno bidimensional em função de m = N0 Phi0/B."
    },
    items: [
      "Efeito magnetocalórico oscilatório em grafeno.",
      "Temperaturas características da ordem de 100 K, superiores a materiais diamagnéticos 3D convencionais.",
      "Extensões para efeitos eletrocalórico e barocalórico."
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
      alt: "Oscilações de entropia magnética em grafeno",
      caption: "Oscilações por quantização de Landau conectam férmions de Dirac a resposta calórica."
    },
    eyebrow: "Linha 5 | Resultado",
    title: "Da física de Dirac a uma resposta calórica mensurável",
    lead: "A contribuição está em conectar os férmions de Dirac em sistemas bidimensionais a fenômenos termodinâmicos macroscópicos.",
    items: [
      "Oscilações da entropia magnética moduladas por uma função envelope dependente da temperatura.",
      "Alternância entre regimes normal e inverso do efeito magnetocalórico.",
      "Perspectiva para sensores magnéticos e estudo termodinâmico de sistemas 2D.",
      "Generalizações para nanofitas, sistemas multicamadas e pressões externas."
    ],
    footerRefs: "MEM pp.29-30; refs. [43-51]",
    sourceRefs: ["E022"]
  },
  {
    id: "s33-quantum-thermo-batteries",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 6 | Termodinâmica quântica",
    title: "Energia, trabalho e calor em materiais quânticos",
    lead: "Materiais moleculares e sistemas de spin permitem estudar armazenamento e conversão de energia em plataformas físicas reais.",
    equations: [
      equationAsset("quantum-battery", "Trabalho extraível em bateria quântica", "ergotropia / energia extraível")
    ],
    items: [
      "Bateria quântica baseada em correlações em complexos metálicos.",
      "Caracterização experimental possível por suscetibilidade magnética.",
      "Conexão entre materiais magnéticos e tecnologias quânticas emergentes."
    ],
    footerRefs: "MEM pp.30-31; ref. [52]",
    sourceRefs: ["E023"]
  },
  {
    id: "s34-quantum-thermo-caloric",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 6 | Máquinas e potenciais calóricos",
    title: "Ciclos quânticos e respostas calóricas gerais",
    lead: "A formulação recente expressa potenciais calóricos diretamente em termos do Hamiltoniano do sistema.",
    equations: [
      equationAsset("quantum-caloric-potentials", "Potenciais calóricos quânticos", "Delta S_iso e Delta T_ad a partir do Hamiltoniano")
    ],
    items: [
      "Ciclo de Stirling quântico em complexos metálicos dinucleares.",
      "Meios de trabalho baseados em sistemas magnéticos moleculares e potenciais efetivos.",
      "Contribuições quânticas para respostas calóricas em equilíbrio térmico."
    ],
    footerRefs: "MEM pp.31-32; refs. [53-56]",
    sourceRefs: ["E023"]
  },
  {
    id: "s35-synthesis",
    layout: "cards",
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
        html: "<p><em>Mario Reis</em></p><ul><li>Elsevier · 2025</li><li>Inglês</li><li>ISBN 9780443328268</li></ul>"
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
    title: "Colaboração",
    cards: [
      { label: "Oak Ridge National Laboratory", text: "Estados Unidos", logo: { src: "assets/logos/oak-ridge-national-laboratory.png", alt: "Oak Ridge National Laboratory" } },
      { label: "Universidade de Aveiro", text: "Portugal", logo: { src: "assets/logos/universidade-aveiro.png", alt: "Universidade de Aveiro" } },
      { label: "Universidade do Porto", text: "Portugal", logo: { src: "assets/logos/uporto-mark.svg", alt: "Universidade do Porto" } },
      { label: "Universidad de Sevilla", text: "Espanha", logo: { src: "assets/logos/sevilla-mark.svg", alt: "Universidad de Sevilla" } },
      { label: "Taiyuan University of Technology", text: "China", logo: { src: "assets/logos/taiyuan-university-technology.png", alt: "Taiyuan University of Technology" } },
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
        html: "<ul><li>Ampliar a formação experimental.</li><li>Integrar a disciplina ao currículo.</li></ul>"
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
        html: "<ul><li>Retomar o Sample for Science (SfS).</li><li>Desenvolver o App Termo.</li><li>Criar para o livro de Mecânica Quântica um aplicativo similar ao Termo.</li></ul>"
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
      { label: "Instituições", text: "Brasil, Portugal e Espanha." },
      { label: "Instituições de fomento", text: "Brasil, Portugal e Espanha." },
      { label: "Orientadores", text: "Pela formação, confiança e exemplo ao longo da trajetória." },
      { label: "Colaboradores", text: "Parceiros científicos no Brasil e no exterior." },
      { label: "Colegas e funcionários", text: "Colegas de departamento e profissionais que sustentam o cotidiano institucional." },
      { label: "Alunos", text: "Estudantes de graduação e pós-graduação." },
      { label: "Família", text: "Pelo apoio e presença em toda a caminhada." }
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
