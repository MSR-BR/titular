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
  const previousButton = document.querySelector('[data-action="previous"]');
  const nextButton = document.querySelector('[data-action="next"]');
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
        const text = normalizedCard.html ? normalizedCard.html : escapeHtml(normalizedCard.text || "");
        return `
          <article class="info-card">
            ${label}
            ${meta}
            <p class="info-card-text">${text}</p>
          </article>
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
    const refs = slide.footerRefs ? `<span class="footer-refs">${escapeHtml(slide.footerRefs)}</span>` : "<span></span>";
    const sources = Array.isArray(slide.sourceRefs) && slide.sourceRefs.length
      ? `<span class="footer-sources">${slide.sourceRefs.map(escapeHtml).join(", ")}</span>`
      : "<span></span>";
    return `
      <footer class="slide-footer">
        ${refs}
        ${sources}
        <span>${index + 1} / ${slides.length}</span>
      </footer>
    `;
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
    const lead = slide.lead && !options.omitLead ? `<p class="slide-lead">${escapeHtml(slide.lead)}</p>` : "";

    return `
      <header class="slide-header">
        ${kicker}
        ${eyebrow}
        <h1 class="slide-title">${title}</h1>
        ${subtitle}
        ${lead}
        ${renderTags(slide.tags)}
      </header>
    `;
  }

  function slideClass(slide) {
    const layout = slug(slide.layout || "section");
    const section = slug(slide.section || slide.sectionName || slide.eyebrow?.split("|")[0] || "geral");
    return `slide layout-${layout} section-${section}`;
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
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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

    if (slide.layout === "figure-board") {
      return `
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
          ${renderHeader(slide, title)}
          <div class="slide-body">
            ${renderTimeline(slide.milestones)}
          </div>
          ${footer}
          ${notes}
        </section>
      `;
    }

    if (slide.layout === "content") {
      const bodyClass = slide.figure ? "slide-body content-with-figure" : "slide-body";
      return `
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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
        <section class="${className}" aria-label="${title}">
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
      <section class="${className}" aria-label="${title}">
        ${renderHeader(slide, title)}
        <p class="section-question">${escapeHtml(slide.question || slide.subtitle || "")}</p>
        ${footer}
        ${notes}
      </section>
    `;
  }

  function updateControls() {
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    counter.value = `${currentIndex + 1} / ${slides.length}`;
    counter.textContent = counter.value;
  }

  function showSlide(index) {
    if (slides.length === 0) {
      deck.innerHTML = '<section class="slide layout-section"><h1 class="slide-title">No slides</h1></section>';
      return;
    }

    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    deck.innerHTML = renderSlide(slides[currentIndex], currentIndex);
    updateControls();
  }

  previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
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

  showSlide(currentIndex);
})();
