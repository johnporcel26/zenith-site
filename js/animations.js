window.ZenithAnimations = (() => {
  const init = () => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.querySelectorAll(":scope > [data-reveal]")];
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.max(index, 0) * 80}ms`;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5%" });

    elements.forEach((element) => observer.observe(element));
  };
  return { init };
})();
