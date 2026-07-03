(function () {
  const slides = Array.isArray(window.MemorialDeckSlides) ? window.MemorialDeckSlides : [];
  const deck = document.getElementById("deck");
  const counter = document.getElementById("slide-counter");
  const previousButton = document.querySelector('[data-action="previous"]');
  const nextButton = document.querySelector('[data-action="next"]');
  let currentIndex = 0;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderList(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return "";
    }

    return `<ul class="content-list">${items
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("")}</ul>`;
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

  function renderFooter(slide, index) {
    const marker = slide.placeholder ? '<span class="placeholder-chip">placeholder</span>' : "";
    const meta = slide.meta ? `<span>${escapeHtml(slide.meta)}</span>` : "<span></span>";
    return `
      <footer class="slide-footer">
        ${marker}
        ${meta}
        <span>${index + 1} / ${slides.length}</span>
      </footer>
    `;
  }

  function renderSlide(slide, index) {
    const title = escapeHtml(slide.title);
    const eyebrow = slide.eyebrow ? `<p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>` : "";
    const subtitle = slide.subtitle ? `<p class="slide-subtitle">${escapeHtml(slide.subtitle)}</p>` : "";
    const lead = slide.lead ? `<p class="slide-lead">${escapeHtml(slide.lead)}</p>` : "";
    const footer = renderFooter(slide, index);

    if (slide.layout === "image") {
      return `
        <section class="slide layout-image" aria-label="${title}">
          <header class="slide-header">
            ${eyebrow}
            <h1 class="slide-title">${title}</h1>
            ${lead}
          </header>
          <figure class="visual-placeholder">
            <span>${escapeHtml(slide.imageLabel || "visual placeholder")}</span>
          </figure>
          <p class="figure-caption">${escapeHtml(slide.caption || "")}</p>
          ${footer}
        </section>
      `;
    }

    if (slide.layout === "timeline") {
      return `
        <section class="slide layout-timeline" aria-label="${title}">
          <header class="slide-header">
            ${eyebrow}
            <h1 class="slide-title">${title}</h1>
          </header>
          <div class="slide-body">
            ${renderTimeline(slide.milestones)}
          </div>
          ${footer}
        </section>
      `;
    }

    if (slide.layout === "content") {
      return `
        <section class="slide layout-content" aria-label="${title}">
          <header class="slide-header">
            ${eyebrow}
            <h1 class="slide-title">${title}</h1>
          </header>
          <div class="slide-body">
            ${lead}
            ${renderList(slide.items)}
          </div>
          ${footer}
        </section>
      `;
    }

    const layoutClass = `layout-${escapeHtml(slide.layout || "section")}`;
    return `
      <section class="slide ${layoutClass}" aria-label="${title}">
        <header class="slide-header">
          ${eyebrow}
          <h1 class="slide-title">${title}</h1>
          ${subtitle}
        </header>
        ${footer}
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

  showSlide(0);
})();
