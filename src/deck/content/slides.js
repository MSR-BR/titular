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
        html: "<ul><li>Estatística não extensiva aplicada ao magnetismo</li><li>Efeito magnetocalórico e materiais magnéticos</li><li>Complexos metálicos e modelagem termodinâmica</li><li>Informação quântica em materiais magnéticos</li><li>Efeitos calóricos em materiais relativísticos</li><li>Termodinâmica quântica</li></ul>"
      },
      {
        number: "4",
        href: "#section-4",
        label: "Impacto e internacionalização",
        html: "<ul><li>Produção científica</li><li>Livros</li><li>Atividades editoriais</li><li>Internacionalização</li></ul>"
      },
      {
        number: "5",
        href: "#section-5",
        label: "Perspectivas futuras",
        html: "<ul><li>Ensino, laboratórios e L3D</li><li>Termodinâmica quântica e novos materiais</li><li>Redes internacionais e cooperação Sul Global</li></ul>"
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
    id: "s10-uff-entry",
    layout: "section",
    section: "UFF",
    eyebrow: "UFF | desde 2009",
    title: "Da trajetória individual a construção institucional",
    subtitle: "O ingresso na UFF em dezembro de 2009 reorganiza a carreira em torno de ensino, pesquisa, orientação, extensão, infraestrutura e vida institucional.",
    footerRefs: "MEM pp.12,20-21",
    sourceRefs: ["E006", "E016"]
  },
  {
    id: "s11-teaching",
    layout: "cards",
    section: "UFF",
    eyebrow: "Ensino",
    title: "Um portfolio entre teoria, experimento e aplicação",
    cards: [
      { label: "Teoria", text: "Física Moderna, Introdução a Mecânica Quântica, Mecânica Quântica e Termodinâmica." },
      { label: "Experimento", text: "Física Experimental e disciplinas de laboratório ao longo da graduação." },
      { label: "Pós", text: "Tópicos de matéria condensada, magnetismo e disciplinas avançadas." },
      { label: "Aplicação", text: "Automação e Robótica aplicada a Física, com roteiros e projetos próprios." }
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
    lead: "A produção editorial segue uma mesma lógica no memorial: pesquisa acumulada alimenta disciplinas, as disciplinas geram material sistematizado, e esse material vira livro.",
    cards: [
      { label: "2010 | ISBN 978-85-7861-079-1", text: "Magnetismo Molecular, Editora Livraria da Física, com Antonio Moreira dos Santos; magnetos moleculares, spins, troca e termodinâmica." },
      { label: "2013 | ISBN 978-0-12-405545-2", text: "Fundamentals of Magnetism, Elsevier; fundamentos teóricos, magnetismo não cooperativo, cooperativo e molecular." },
      { label: "2025 | ISBN 978-0-443-32826-8", text: "Quantum Mechanics: Theory and Applications, Elsevier; resultado de 10 anos de material de mecânica quântica." },
      { label: "em redação", text: "Termodinâmica para Estudantes de Física, a partir de notas de aula de 2024-2026." }
    ],
    figure: {
      src: "assets/figures/books-academic-covers.png",
      alt: "Capas dos livros acadêmicos publicados",
      caption: "Capas extraídas da Figura 6.1 do memorial."
    },
    footerRefs: "MEM pp.13,37-40; refs. [36,57-59]",
    sourceRefs: ["E008"],
    notes: "Mostrar que os livros não são item lateral: eles conectam pesquisa, pós-graduação e graduação."
  },
  {
    id: "s13-people",
    layout: "metrics",
    section: "UFF",
    eyebrow: "Formação de pessoas",
    title: "Orientação como multiplicação acadêmica",
    metrics: [
      { value: "25", label: "IC e extensão" },
      { value: "5", label: "monografias" },
      { value: "4", label: "mestrados" },
      { value: "5 + 1", label: "doutorados orientados + coorientação" },
      { value: "10", label: "pos-doutorados supervisionados" }
    ],
    lead: "Os números visíveis usam o memorial como fonte principal, evitando as aproximações divergentes da apresentação exemplo.",
    footerRefs: "MEM pp.13-16,21,97",
    sourceRefs: ["E009", "E010", "E029"]
  },
  {
    id: "s14-former-students",
    layout: "content",
    section: "UFF",
    eyebrow: "Egressos",
    title: "Formação que se distribui em instituições",
    lead: "Ex-orientandos e supervisionados ocupam posições em universidades, centros de pesquisa e instituições públicas.",
    items: [
      "Universidades: UFRJ, UFOB, USP, UFRB, UERJ, PUC-Rio e UFF Petropolis.",
      "Institutos e setor público: IF Sudeste de Minas Gerais, Caixa Econômica Federal e CBPF.",
      "A formação atua tambem como interiorização e expansão da pesquisa e do ensino superior."
    ],
    footerRefs: "MEM pp.15-16",
    sourceRefs: ["E011"]
  },
  {
    id: "s15-lab-magnetism",
    layout: "cards",
    section: "UFF",
    eyebrow: "Infraestrutura",
    title: "Laboratório de Magnetismo da UFF",
    cards: [
      { label: "Contexto UFF", text: "Ingresso em um movimento de renovação experimental do IF, com foco em matéria condensada e novas frentes de pesquisa." },
      { label: "Equipamentos", text: "PPMS com acessórios para medidas magnéticas e de transporte, liquefatora de hélio e operação em altos campos/baixas temperaturas." },
      { label: "Construção", text: "Projetos de fomento, apoio institucional, espaço físico, instalação, protocolos e manutenção experimental." },
      { label: "Formação", text: "Equipe com docentes, pos-doutorandos e estudantes; laboratório destacado em reportagem institucional da FAPERJ." }
    ],
    figure: {
      src: "assets/figures/lab-magnetismo-uff-2014.png",
      alt: "Equipe do Laboratório de Magnetismo da UFF em 2014",
      caption: "Equipe do Laboratório de Magnetismo da UFF durante a consolidação da infraestrutura experimental, fevereiro de 2014."
    },
    footerRefs: "MEM pp.16-17,21",
    sourceRefs: ["E012", "E015"],
    notes: "Ligar com CICECO: experiência anterior com VSM e protocolos experimentais aparece aqui como capacidade institucional."
  },
  {
    id: "s16-l3d",
    layout: "cards",
    section: "UFF",
    eyebrow: "Infraestrutura e extensão",
    title: "L3D: robótica, automação e ensino por projeto",
    cards: [
      { label: "2018", text: "Criação do laboratório como interface entre ensino, infraestrutura experimental, automação e desenvolvimento em didática." },
      { label: "Ferramentas", text: "Arduino, sensores físicos, estáções de montagem, impressoras 3D e instrumentação personalizada." },
      { label: "Curso", text: "Robótica aplicada a Física para graduação e pós-graduação, com aprendizagem orientada por projetos." },
      { label: "Extensão", text: "Oficinas com o Coluni, cooperação educacional e desdobramentos com escolas em Portugal." }
    ],
    figure: {
      src: "assets/figures/l3d-robotica-projeto-2019.png",
      alt: "Projeto final do curso de Automação e Robótica de 2019",
      caption: "Exemplo de projeto final do curso de Automação e Robótica, 2019.2, com carro montado por estudantes com sensores."
    },
    footerRefs: "MEM pp.17-18,46",
    sourceRefs: ["E013"],
    notes: "Usar o carro com sensores como exemplo concreto: o aluno projeta, monta, mede, controla e explica o fenômeno."
  },
  {
    id: "s17-program-map",
    layout: "cards",
    section: "Resultados",
    eyebrow: "Programa científico",
    title: "Um mapa coerente de pesquisa",
    cards: [
      { label: "Magnetismo", text: "Sistemas não homogêneos, manganitas e estatística de Tsallis." },
      { label: "Termodinâmica", text: "Efeito magnetocalórico, barocalórico e efeitos calóricos em materiais." },
      { label: "Moleculares", text: "Complexos metálicos, Hamiltonianos efetivos e modelagem termodinâmica." },
      { label: "Quântico", text: "Informação quântica, termodinâmica quântica e materiais de baixa dimensionalidade." }
    ],
    footerRefs: "MEM pp.22-31",
    sourceRefs: ["E017"]
  },
  {
    id: "s18-physics-bridge",
    layout: "section",
    section: "Resultados",
    eyebrow: "Resultados em física",
    title: "Da entropia aos materiais quânticos",
    subtitle: "A parte técnica do memorial organiza resultados em torno de uma pergunta comum: como propriedades microscópicas de spins, orbitais, redes e espectros geram respostas termodinâmicas mensuráveis?",
    footerRefs: "MEM pp.22-31",
    sourceRefs: ["E017"]
  },
  {
    id: "s19-tsallis-problem",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 1 | Tsallis e magnetismo",
    title: "O problema físico: magnetismo não homogêneo",
    lead: "Manganitas CMR exibem desvios sistemáticos em M(H) e suscetibilidade que não são descritos adequadamente por modelos tradicionais de campo médio.",
    items: [
      "Separação de fases e distribuição de interações magnéticas.",
      "Necessidade de um parâmetro físico para não homogeneidade.",
      "Aplicação de estatística não extensiva a sistemas magnéticos reais."
    ],
    equations: [
      equationAsset("tsallis-entropy", "Entropia de Tsallis", "entropia q"),
      equationAsset("q-exponential", "q-exponencial", "distribuição generalizada")
    ],
    footerRefs: "MEM pp.22-23; refs. [2-8]",
    sourceRefs: ["E018"]
  },
  {
    id: "s20-tsallis-equations",
    layout: "technical",
    section: "Resultados",
    eyebrow: "Linha 1 | Formalismo",
    title: "Entropia q e distribuição generalizada",
    lead: "A reformulação estatística altera a função partição e, portanto, as propriedades magnéticas calculadas.",
    equations: [
      equationAsset("tsallis-entropy", "Entropia q", "S_q"),
      equationAsset("q-exponential", "q-exponencial", "peso estatístico"),
      equationAsset("tsallis-magnetization", "Magnetização q", "observável magnético")
    ],
    items: [
      "A abordagem recupera Boltzmann-Gibbs no limite q = 1.",
      "O parâmetro q passa a representar a inhomogeneidade magnética efetiva."
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
    lead: "A função de Langevin generalizada ajusta isotermas de magnetização em manganitas acima da temperatura de Curie.",
    items: [
      "Sistema representativo: La0.60Y0.07Ca0.33MnO3.",
      "Ajuste das curvas M(H) entre 175 K e 290 K.",
      "q interpretado como medida macroscópica da não homogeneidade magnética.",
      "Sem introduzir distribuições artificiais de campo."
    ],
    equations: [
      equationAsset("tsallis-magnetization", "Magnetização no formalismo q", "M(H,T) ajustado por funções generalizadas")
    ],
    figure: {
      src: "assets/figures/tsallis-manganite-mh.png",
      alt: "Curvas de magnetização em manganita ajustadas por função de Langevin generalizada",
      caption: "La0.60Y0.07Ca0.33MnO3: M(H) acima de Tc = 150 K; ajuste por abordagem não extensiva."
    },
    footerRefs: "MEM pp.22-23; refs. [3-8]",
    sourceRefs: ["E018"]
  },
  {
    id: "s22-tsallis-contribution",
    layout: "content",
    section: "Resultados",
    eyebrow: "Linha 1 | Contribuição",
    title: "O parâmetro q como observável físico",
    lead: "A contribuição não e apenas ajustar curvas: e estabelecer uma ponte entre não homogeneidade, separação de fases e medidas macroscópicas.",
    items: [
      "Evidência experimental de não extensividade em manganitas CMR.",
      "Determinação experimental direta do parâmetro q.",
      "Diagrama de fases magnético não extensivo.",
      "Extensão do formalismo a sistemas magnéticos compostos."
    ],
    footerRefs: "MEM p.23; refs. [4-8]",
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
    id: "s36-impact",
    layout: "dashboard",
    section: "Impacto",
    eyebrow: "Impacto científico",
    title: "Regularidade, qualidade e liderança",
    metrics: [
      { value: "3625", label: "citações Google Scholar" },
      { value: "h = 33", label: "índice h" },
      { value: "i10 = 88", label: "índice i10" },
      { value: "67%", label: "colaboração internacional em 10 anos" },
      { value: "70,2%", label: "artigos em periódicos top 25% CiteScore" }
    ],
    lead: "Os indicadores são tratados como fotografia documentada no memorial, não como métricas ao vivo.",
    cards: [
      { label: "Crescimento", text: "A série temporal mostra crescimento acentuado de citações apos a consolidação das linhas UFF." },
      { label: "Qualidade", text: "20,4% dos artigos entre os 25% mais citados mundialmente e 70,2% em periódicos top 25% CiteScore." },
      { label: "Rede", text: "A colaboração internacional de 67% no período 2015-2024 conecta impacto a redes estruturais." },
      { label: "Leitura", text: "A física apresentada antes explica estes indicadores; os números não substituem os resultados." }
    ],
    figure: {
      src: "assets/figures/impact-citations-trends.png",
      alt: "Evolução anual das citações segundo Google Scholar e Scopus",
      caption: "Figura 5.1: evolução anual das citações em bases documentadas no memorial."
    },
    footerRefs: "MEM pp.32-36,98-99",
    sourceRefs: ["E024"]
  },
  {
    id: "s37-internationalization",
    layout: "timeline",
    section: "Internacionalização",
    eyebrow: "Internacionalização",
    title: "Internacionalização como estrutura",
    milestones: [
      { label: "2001-2002", text: "Doutorado sanduíche em Aveiro; retorno ao Brasil e defesa no CBPF em 2003." },
      { label: "2003-2009", text: "Pós-doc em Aveiro e Pesquisador Auxiliar no CICECO." },
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
    section: "Internacionalização",
    eyebrow: "Liderança editorial",
    title: "Physica B e responsabilidade científica global",
    lead: "A atuação editorial amplia a dimensão de liderança para além do grupo de pesquisa e da universidade.",
    items: [
      "Editor da Physica B: Condensed Matter desde 2016.",
      "Editor-in-Chief registrado no material de 2026 da revista.",
      "Coordenação de corpo editorial, política editorial, escopo científico e padrões éticos.",
      "Iniciativas como Physica B Award e aproximação com conferências e redes científicas."
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
    eyebrow: "Inovação e extensão",
    title: "Da infraestrutura local a circulação de conhecimento",
    cards: [
      { label: "L3D", text: "Robótica, automação, ensino por investigação e oficinas educacionais." },
      { label: "Sample for Science", text: "Plataforma para compartilhamento de amostras científicas entre grupos." },
      { label: "Aplicativo", text: "Projeto mobile-first disponibilizado em lojas digitais." },
      { label: "Formação", text: "Equipe multidisciplinar com física, matemática, computação, marketing e comunicação audiovisual." }
    ],
    figure: {
      src: "assets/figures/sample-for-science-app.png",
      alt: "Telas do aplicativo Sample for Science",
      caption: "Sample for Science: compartilhamento de amostras com registro de material, resultados prévios e contato entre grupos."
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
      { label: "Ensino", text: "Consolidar Automação para Físicos e concluir Termodinâmica para Estudantes de Física." },
      { label: "Extensão", text: "Ampliar o L3D como espaço de formação experimental e divulgação científica." },
      { label: "Pesquisa", text: "Expandir a termodinâmica quântica aplicada a novos materiais." },
      { label: "Redes", text: "Fortalecer cooperações Sul Global em matéria condensada e ciência dos materiais." }
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
    subtitle: "A trajetória apresentada sustenta uma atuação futura que combina densidade científica, formação de pessoas, construção institucional e cooperação internacional.",
    footerRefs: "MEM pp.45-46",
    sourceRefs: ["E002", "E027"],
    notes: "Fechar sem repetir indicadores: a mensagem final deve ser responsabilidade, continuidade e ampliação de escala."
  }
];
