(function () {
  const params = new URLSearchParams(window.location.search);
  const useTemplatePrototype =
    params.has("template") ||
    params.get("mode") === "template" ||
    params.get("deck") === "template";

  const defaultSlides = Array.isArray(window.MemorialDeckSlides) ? window.MemorialDeckSlides : [];
  const prototypeSlides = Array.isArray(window.MemorialDeckTemplatePrototypes)
    ? window.MemorialDeckTemplatePrototypes
    : [];
  const slides = useTemplatePrototype && prototypeSlides.length ? prototypeSlides : defaultSlides;
  document.body.classList.toggle("template-mode", useTemplatePrototype);

  const deck = document.getElementById("deck");
  const counter = document.getElementById("slide-counter");
  const storyIndex = document.getElementById("story-index");
  const progressBar = document.getElementById("story-progress-bar");
  const currentSectionLabel = document.getElementById("current-section");
  const currentTopicLabel = document.getElementById("current-topic");
  let navigationLockUntil = 0;
  let currentIndex = Number.parseInt(params.get("slide") || "1", 10) - 1;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }

  function slug(value) {
    return String(value || "geral")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "geral";
  }

  function renderTags(tags) {
    if (!Array.isArray(tags) || tags.length === 0) {
      return "";
    }

    return `<div class="slide-tags">${tags
      .map((tag) => `<span class="slide-tag">${escapeHtml(tag)}</span>`)
      .join("")}</div>`;
  }

  function renderList(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return "";
    }

    return `<ul class="content-list">${items
      .map((item) => {
        if (item && typeof item === "object") {
          const label = item.label ? `<strong>${escapeHtml(item.label)}:</strong> ` : "";
          return `<li>${label}${escapeHtml(item.text || "")}</li>`;
        }

        return `<li>${escapeHtml(item)}</li>`;
      })
      .join("")}</ul>`;
  }

  function renderEquations(equations) {
    if (!Array.isArray(equations) || equations.length === 0) {
      return "";
    }

    return `<div class="equation-stack">${equations
      .map((equation) => {
        if (equation && typeof equation === "object" && equation.src) {
          const caption = equation.caption
            ? `<figcaption class="equation-caption">${escapeHtml(equation.caption)}</figcaption>`
            : "";
          return `
            <figure class="equation-line equation-asset-frame">
              <img class="equation-asset" src="${escapeAttribute(equation.src)}" alt="${escapeAttribute(equation.alt || "")}" />
              ${caption}
            </figure>
          `;
        }

        if (equation && typeof equation === "object" && equation.html) {
          return `<div class="equation-line">${equation.html}</div>`;
        }

        return `<div class="equation-line">${escapeHtml(equation)}</div>`;
      })
      .join("")}</div>`;
  }

  function renderFigure(figure) {
    if (!figure || !figure.src) {
      return "";
    }

    const caption = figure.caption ? `<figcaption>${escapeHtml(figure.caption)}</figcaption>` : "";
    return `
      <figure class="deck-figure">
        <img src="${escapeAttribute(figure.src)}" alt="${escapeAttribute(figure.alt || "")}" />
        ${caption}
      </figure>
    `;
  }

  function renderCards(cards, options = {}) {
    if (!Array.isArray(cards) || cards.length === 0) {
      return "";
    }

    const compactClass = options.compact || cards.length > 4 ? " compact" : "";
    const countClass = ` count-${Math.min(cards.length, 6)}`;
    return `<div class="card-grid${compactClass}${countClass}">${cards
      .map((card) => {
        const normalizedCard = typeof card === "string" ? { text: card } : card;
        const label = normalizedCard.label
          ? `<p class="info-card-label">${escapeHtml(normalizedCard.label)}</p>`
          : "";
        const meta = normalizedCard.meta ? `<p class="info-card-meta">${escapeHtml(normalizedCard.meta)}</p>` : "";
        const text = normalizedCard.html
          ? `<div class="info-card-text">${normalizedCard.html}</div>`
          : `<p class="info-card-text">${escapeHtml(normalizedCard.text || "")}</p>`;
        const tag = normalizedCard.href ? "a" : "article";
        const href = normalizedCard.href ? ` href="${escapeAttribute(normalizedCard.href)}"` : "";
        const linkedClass = normalizedCard.href ? " index-section-card" : "";
        const logoClass = normalizedCard.logo?.src ? " has-institutional-logo" : "";
        const logo = normalizedCard.logo?.src
          ? `<img class="institutional-logo" src="${escapeAttribute(normalizedCard.logo.src)}" alt="${escapeAttribute(normalizedCard.logo.alt || "")}" loading="lazy" />`
          : "";
        const number = normalizedCard.number
          ? `<span class="section-number" aria-hidden="true">${escapeHtml(normalizedCard.number)}</span>`
          : "";
        return `
          <${tag} class="info-card${linkedClass}${logoClass}"${href}>
            ${number}
            ${logo}
            ${label}
            ${meta}
            ${text}
          </${tag}>
        `;
      })
      .join("")}</div>`;
  }

  function renderMetrics(metrics) {
    if (!Array.isArray(metrics) || metrics.length === 0) {
      return "";
    }

    const countClass = metrics.length === 4 ? " with-four" : "";
    return `<div class="metric-grid${countClass}">${metrics
      .map(
        (metric) => `
          <article class="metric-item">
            <p class="metric-value">${escapeHtml(metric.value)}</p>
            <p class="metric-label">${escapeHtml(metric.label)}</p>
          </article>
        `
      )
      .join("")}</div>`;
  }

  function renderTimeline(milestones) {
    if (!Array.isArray(milestones) || milestones.length === 0) {
      return "";
    }

    return `<div class="timeline">${milestones
      .map(
        (milestone) => `
          <article class="timeline-item">
            <p class="timeline-item-label">${escapeHtml(milestone.label)}</p>
            <p class="timeline-item-text">${escapeHtml(milestone.text)}</p>
          </article>
        `
      )
      .join("")}</div>`;
  }

  function renderFlow(steps) {
    if (!Array.isArray(steps) || steps.length === 0) {
      return "";
    }

    return `<div class="flow-grid">${steps
      .map((step) => {
        const meta = step.meta ? `<p class="flow-step-meta">${escapeHtml(step.meta)}</p>` : "";
        const items = renderList(step.items);
        return `
          <article class="flow-step">
            ${meta}
            <p class="flow-step-label">${escapeHtml(step.label || "")}</p>
            <p class="flow-step-text">${escapeHtml(step.text || "")}</p>
            ${items}
          </article>
        `;
      })
      .join("")}</div>`;
  }

  function renderComparison(columns) {
    if (!Array.isArray(columns) || columns.length === 0) {
      return "";
    }

    return `<div class="comparison-grid">${columns
      .map(
        (column) => `
          <article class="comparison-column">
            <p class="comparison-title">${escapeHtml(column.title)}</p>
            <p>${escapeHtml(column.text)}</p>
            ${renderList(column.items)}
          </article>
        `
      )
      .join("")}</div>`;
  }

  function renderFooter(slide, index) {
    return "";
  }

  function renderNotes(slide) {
    if (!slide.notes) {
      return "";
    }

    return `<aside class="speaker-notes">${escapeHtml(slide.notes)}</aside>`;
  }

  function renderHeader(slide, title, options = {}) {
    const section = slide.sectionName || slide.section;
    const kicker = section ? `<p class="section-kicker">${escapeHtml(section)}</p>` : "";
    const eyebrow = slide.eyebrow ? `<p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>` : "";
    const subtitle = slide.subtitle ? `<p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>` : "";
    const affiliations = Array.isArray(slide.affiliations) && slide.affiliations.length
      ? `<div class="slide-affiliations">${slide.affiliations
          .map((affiliation) => `<p>${escapeHtml(affiliation)}</p>`)
          .join("")}</div>`
      : "";
    const lead = slide.lead && !options.omitLead ? `<p class="slide-lead">${escapeHtml(slide.lead)}</p>` : "";

    return `
      <header class="slide-header">
        ${kicker}
        ${eyebrow}
        <h1 class="slide-title">${title}</h1>
        ${subtitle}
        ${affiliations}
        ${lead}
        ${renderTags(slide.tags)}
      </header>
    `;
  }

  function slideClass(slide) {
    const layout = slug(slide.layout || "section");
    const section = slug(slide.section || slide.sectionName || slide.eyebrow?.split("|")[0] || "geral");
    return `slide reveal layout-${layout} section-${section}`;
  }

  function renderSlide(slide, index) {
    const title = escapeHtml(slide.title);
    const footer = renderFooter(slide, index);
    const notes = renderNotes(slide);
    const className = slideClass(slide);

    if (slide.layout === "technical") {
      const hasSecondary = Array.isArray(slide.cards) && slide.cards.length > 0;
      const evidenceClass = hasSecondary ? "technical-evidence" : "technical-evidence no-secondary";
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="technical-body">
            <div class="technical-summary">
              ${renderCards(slide.items, { compact: true })}
            </div>
            <div class="${evidenceClass}">
              <div class="technical-primary">
                ${renderEquations(slide.equations)}
                ${renderFigure(slide.figure)}
                ${renderMetrics(slide.metrics)}
              </div>
              ${
                hasSecondary
                  ? `<div class="technical-secondary">
                      ${renderCards(slide.cards)}
                    </div>`
                  : ""
              }
            </div>
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "cards") {
      const bodyClass = slide.figure ? "slide-body cards-with-figure" : "slide-body";
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="${bodyClass}">
            <div class="cards-panel">
              ${renderCards(slide.cards)}
            </div>
            ${renderFigure(slide.figure)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "photo") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          <div class="slide-body photo-stage">
            ${renderFigure(slide.figure)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "figure-board") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body figure-board">
            ${renderFigure(slide.figure)}
            <div class="figure-copy">
              ${renderCards(slide.cards)}
              ${renderList(slide.items)}
            </div>
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "metrics") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body">
            ${renderMetrics(slide.metrics)}
            ${renderCards(slide.cards)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "dashboard") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body dashboard-body">
            <div>
              ${renderMetrics(slide.metrics)}
            </div>
            <div>
              ${renderCards(slide.cards)}
              ${renderFigure(slide.figure)}
            </div>
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "comparison") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body">
            ${renderComparison(slide.columns)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "image") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <figure class="visual-panel">
            <span>${escapeHtml(slide.imageLabel || "visual panel")}</span>
          </figure>
          <p class="figure-caption">${escapeHtml(slide.caption || "")}</p>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "timeline") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body">
            ${renderTimeline(slide.milestones)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "section") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body section-cover-body">
            ${slide.question ? `<p class="section-question">${escapeHtml(slide.question)}</p>` : ""}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "flow") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body flow-body">
            ${renderFlow(slide.steps)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "content") {
      const bodyClass = slide.figure ? "slide-body content-with-figure" : "slide-body";
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title, { omitLead: true })}
          <div class="${bodyClass}">
            <div class="content-panel">
              ${slide.lead ? `<p class="slide-lead">${escapeHtml(slide.lead)}</p>` : ""}
              ${renderList(slide.items)}
              ${renderEquations(slide.equations)}
              ${renderCards(slide.cards)}
              ${renderMetrics(slide.metrics)}
            </div>
            ${renderFigure(slide.figure)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "title") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body title-board">
            ${renderCards(slide.cards, { compact: true })}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "closing") {
      return `
        <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body">
            ${renderCards(slide.cards, { compact: true })}
            ${slide.question ? `<p class="section-question">${escapeHtml(slide.question)}</p>` : ""}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    return `
      <section id="slide-${index + 1}" data-slide-index="${index}" class="${className}" aria-label="${title}">
        ${renderHeader(slide, title)}
        <p class="section-question">${escapeHtml(slide.question || slide.subtitle || "")}</p>
        ${footer}
        ${notes}
      </section>
    `;
  }

  function updateControls() {
    counter.value = `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    counter.textContent = counter.value;
    if (progressBar) {
      progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
    }

    const activeSlide = slides[currentIndex];
    const rawActiveSection = slug(activeSlide?.section || (currentIndex === 0 ? "inicio" : "geral"));
    const activeSection = rawActiveSection === "internacionalizacao" ? "impacto" : rawActiveSection;
    if (currentSectionLabel) {
      currentSectionLabel.textContent = activeSlide?.section || (currentIndex === 0 ? "Inicio" : "Geral");
    }
    if (currentTopicLabel) {
      currentTopicLabel.textContent = activeSlide?.title || "";
    }
    storyIndex?.querySelectorAll("a").forEach((link) => {
      const active = link.dataset.section === activeSection;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  function showSlide(index) {
    if (slides.length === 0) {
      deck.innerHTML = '<section class="slide layout-section"><h1 class="slide-title">No slides</h1></section>';
      return;
    }

    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    document.getElementById(`slide-${currentIndex + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    updateControls();
  }

  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", "PageDown"].includes(event.key)) {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }

    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      showSlide(currentIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      showSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      showSlide(slides.length - 1);
    }
  });

  function buildStory() {
    if (slides.length === 0) {
      deck.innerHTML = '<section class="slide layout-section"><h1 class="slide-title">Sem conteudo</h1></section>';
      return;
    }

    if (!useTemplatePrototype) {
      const timelineIndex = slides.findIndex((slide) => slide.id === "s05-formation-timeline");
      const uffIndex = slides.findIndex((slide) => slide.id === "s10-uff-entry");
      if (timelineIndex >= 0 && uffIndex >= 0 && timelineIndex !== uffIndex - 1) {
        const [timeline] = slides.splice(timelineIndex, 1);
        const updatedUffIndex = slides.findIndex((slide) => slide.id === "s10-uff-entry");
        slides.splice(updatedUffIndex, 0, timeline);
      }
    }

    deck.innerHTML = slides.map(renderSlide).join("");
    const sections = [
      {
        number: 1,
        key: "formacao",
        label: "Formação",
        title: "Formação acadêmica e inserção internacional",
        targetId: "s04-first-steps"
      },
      {
        number: 2,
        key: "uff",
        label: "UFF",
        title: "Desenvolvimento acadêmico e consolidação na UFF",
        targetId: "s10-uff-entry"
      },
      {
        number: 3,
        key: "resultados",
        label: "Pesquisa",
        title: "Linhas de pesquisa",
        targetId: "s17-program-map"
      },
      {
        number: 4,
        key: "impacto",
        label: "Impacto",
        title: "Impacto e internacionalização",
        targetId: "s36-impact"
      },
      {
        number: 5,
        key: "futuro",
        label: "Futuro",
        title: "Perspectivas futuras",
        targetId: "s39-innovation"
      }
    ];

    sections.forEach((section) => {
      section.targetSlide = slides.findIndex((slide) => slide.id === section.targetId) + 1;
      section.anchor = `slide-${section.targetSlide}`;
    });

    const indexSlide = deck.querySelector("#slide-2");
    indexSlide?.classList.add("standard-section-cover", "index-cover");

    sections.forEach((section) => {
      const target = deck.querySelector(`#slide-${section.targetSlide}`);
      target?.classList.add("standard-section-cover", "section-scroll-card", `section-${section.key}`);
      if (target) {
        target.dataset.sectionNumber = String(section.number);
        target.dataset.sectionName = section.label;
        target.dataset.sectionTitle = section.title;
      }
    });

    const formationOpening = deck.querySelector("#slide-4");
    formationOpening?.classList.add("formation-opening-content");
    const masterSlide = deck.querySelector("#slide-5");
    masterSlide?.classList.add("formation-master");
    const doctorateSlide = deck.querySelector("#slide-6");
    doctorateSlide?.classList.add("formation-doctorate");
    const postdocSlide = deck.querySelector("#slide-8");
    postdocSlide?.classList.add("postdoc-erice");
    const teachingSlide = deck.querySelector(`#slide-${slides.findIndex((slide) => slide.id === "s11-teaching") + 1}`);
    teachingSlide?.classList.add("side-media-slide", "teaching-robotics");
    teachingSlide?.querySelector(".deck-figure")?.classList.add("apple-product-rise");
    const studentLevelsSlide = deck.querySelector(`#slide-${slides.findIndex((slide) => slide.id === "s13-people") + 1}`);
    studentLevelsSlide?.classList.add("student-levels");
    const studentPhotoSlide = deck.querySelector(`#slide-${slides.findIndex((slide) => slide.id === "s13b-student-photo") + 1}`);
    studentPhotoSlide?.classList.add("student-photo-slide");
    studentPhotoSlide?.querySelector(".deck-figure")?.classList.add("apple-product-rise");
    const professionalPrimary = deck.querySelector(`#slide-${slides.findIndex((slide) => slide.id === "s14-former-students") + 1}`);
    professionalPrimary?.classList.add("professional-outcomes", "professional-primary", "professional-highlight");

    deck.querySelectorAll("#slide-2 .index-section-card").forEach((card, index) => {
      if (sections[index]) card.setAttribute("href", `#${sections[index].anchor}`);
    });

    deck.querySelectorAll(".slide").forEach((slide) => {
      if (
        slide.id !== "slide-1" &&
        !slide.classList.contains("standard-section-cover") &&
        !slide.classList.contains("layout-closing")
      ) {
        slide.classList.add("subsection-slide");
      }
    });

    deck.querySelectorAll("[data-publications-open]").forEach((trigger) => {
      const dialog = document.getElementById(trigger.dataset.publicationsOpen);
      if (!(dialog instanceof HTMLDialogElement)) return;
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        dialog.showModal();
      });
      dialog.querySelector(".publications-close")?.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
    });

    storyIndex.innerHTML = sections
      .map((section) => `<a href="#${section.anchor}" data-section="${section.key}"><span>${section.number}</span>${escapeHtml(section.label)}</a>`)
      .join("");

    function announceSection(section) {
      navigationLockUntil = Date.now() + 1800;
      currentIndex = section.targetSlide - 1;
      updateControls();
      if (currentSectionLabel) currentSectionLabel.textContent = section.label;
      if (currentTopicLabel) currentTopicLabel.textContent = section.title;
    }

    sections.forEach((section, index) => {
      storyIndex.querySelector(`[href="#${section.anchor}"]`)?.addEventListener("click", () => announceSection(section));
      deck.querySelectorAll("#slide-2 .index-section-card")[index]?.addEventListener("click", () => announceSection(section));
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      if (Date.now() < navigationLockUntil) return;
      currentIndex = Number(visible.target.dataset.slideIndex || 0);
      updateControls();
      if (visible.target.dataset.sectionName && currentSectionLabel && currentTopicLabel) {
        currentSectionLabel.textContent = visible.target.dataset.sectionName;
        currentTopicLabel.textContent = visible.target.dataset.sectionTitle || "";
      }
    }, { rootMargin: "-22% 0px -48%", threshold: [0.05, 0.35, 0.65] });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -30% 0px", threshold: 0.1 });

    const scrollRevealGroups = [];
    deck.querySelectorAll(".slide").forEach((slide) => {
      const animatedElements = slide.querySelectorAll(
        ".section-kicker, .eyebrow, .slide-title, .slide-subtitle, .slide-affiliations, .slide-lead, .info-card, .metric-item, .timeline-item, .flow-step, .comparison-column, .equation-line, .deck-figure, .section-question"
      );
      const usesScrollTemplate =
        slide.classList.contains("subsection-slide") ||
        slide.classList.contains("section-scroll-card");
      const scrubElements = [];
      animatedElements.forEach((element, order) => {
        const isIndexCard = slide.classList.contains("index-cover") && element.classList.contains("index-section-card");
        element.classList.add("story-reveal");
        if (element.matches(".info-card, .metric-item, .timeline-item, .flow-step, .comparison-column, .equation-line, .deck-figure")) {
          element.classList.add("content-scroll-card");
        }
        element.style.setProperty("--reveal-order", Math.min(order, 10));
        if (usesScrollTemplate || isIndexCard) {
          element.classList.add("scroll-scrub-reveal");
          scrubElements.push(element);
        } else {
          revealObserver.observe(element);
        }
      });
      if (scrubElements.length) scrollRevealGroups.push({ slide, elements: scrubElements });
      sectionObserver.observe(slide);
    });

    const turningCards = [
      "#slide-6 .info-card:nth-child(3)",
      "#slide-15 .info-card:nth-child(2)",
      "#slide-20 .info-card:nth-child(2)",
      "#slide-30 .info-card:nth-child(1)",
      "#slide-35 .info-card:nth-child(3)",
      "#slide-39 .info-card:nth-child(2)"
    ].map((selector) => deck.querySelector(selector)).filter(Boolean);

    turningCards.forEach((card) => card.classList.add("strategic-turn"));

    let turnFrame = 0;
    function updateCardTurns() {
      turnFrame = 0;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollRevealGroups.forEach(({ slide, elements }) => {
        const slideRect = slide.getBoundingClientRect();
        const isFarBelow = slideRect.top > window.innerHeight * 1.2;
        const isFarAbove = slideRect.bottom < -window.innerHeight * .25;
        elements.forEach((element, index) => {
          let progress;
          if (reduceMotion || isFarAbove) {
            progress = 1;
          } else if (isFarBelow) {
            progress = 0;
          } else {
            const rect = element.getBoundingClientRect();
            const isProductRise = element.classList.contains("apple-product-rise");
            const start = window.innerHeight * (isProductRise ? 1.02 : .84) + Math.min(index, 7) * 18;
            const finish = window.innerHeight * (isProductRise ? .30 : .48) + Math.min(index, 7) * 8;
            progress = Math.max(0, Math.min(1, (start - rect.top) / Math.max(1, start - finish)));
          }
          element.style.setProperty("--scrub-opacity", progress.toFixed(4));
          const isProductRise = element.classList.contains("apple-product-rise");
          const riseDistance = isProductRise ? 112 : 42;
          element.style.setProperty("--scrub-y", `${((1 - progress) * riseDistance).toFixed(2)}px`);
          const blurDistance = isProductRise ? 7 : 5;
          element.style.setProperty("--scrub-blur", `${((1 - progress) * blurDistance).toFixed(2)}px`);
          element.style.setProperty("--star-rise", `${((1 - progress) * 20).toFixed(2)}px`);
          element.style.setProperty("--star-turn", `${((1 - progress) * -150).toFixed(2)}deg`);
          const initialScale = isProductRise ? .90 : .88;
          const scale = element.classList.contains("content-scroll-card")
            ? initialScale + progress * (1 - initialScale)
            : 1;
          element.style.setProperty("--scrub-scale", scale.toFixed(4));
        });
      });
      deck.querySelectorAll(".section-scroll-card").forEach((sectionCard) => {
        if (reduceMotion) {
          sectionCard.style.setProperty("--section-card-rotate-x", "0deg");
          sectionCard.style.setProperty("--section-card-rotate-y", "0deg");
          sectionCard.style.setProperty("--section-card-scale", "1");
          sectionCard.style.setProperty("--section-card-opacity", "1");
        } else {
          const rect = sectionCard.getBoundingClientRect();
          const finishLine = 66;
          const travel = Math.max(1, window.innerHeight - finishLine);
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / travel));
          const remaining = 1 - progress;
          sectionCard.style.setProperty("--section-card-rotate-x", `${(remaining * 9).toFixed(3)}deg`);
          sectionCard.style.setProperty("--section-card-rotate-y", `${(remaining * -15).toFixed(3)}deg`);
          sectionCard.style.setProperty("--section-card-scale", (.88 + progress * .12).toFixed(4));
          sectionCard.style.setProperty("--section-card-opacity", (.45 + progress * .55).toFixed(4));
        }
      });
      if (reduceMotion) return;
      const viewportCenter = window.innerHeight / 2;
      turningCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (cardCenter - viewportCenter) / window.innerHeight));
        card.style.setProperty("--card-turn", `${(progress * -9).toFixed(2)}deg`);
      });
    }

    window.addEventListener("scroll", () => {
      if (!turnFrame) turnFrame = requestAnimationFrame(updateCardTurns);
    }, { passive: true });
    window.addEventListener("resize", updateCardTurns);
    updateCardTurns();

    currentIndex = Math.max(0, Math.min(currentIndex, slides.length - 1));
    updateControls();
    if (params.has("slide")) {
      requestAnimationFrame(() => document.getElementById(`slide-${currentIndex + 1}`)?.scrollIntoView());
    }
  }

  buildStory();
})();
