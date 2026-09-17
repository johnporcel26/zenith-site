document.addEventListener("DOMContentLoaded", () => {
  window.ZenithNavigation?.init();
  window.ZenithAnimations?.init();
  window.ZenithForms?.init();
  window.ZenithForms?.initPJ();
  window.ZenithForms?.initMictmr();
  const header = document.querySelector("[data-site-header]");
  const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
  const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const setExternalAnchor = (link, url) => {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  };
  document.querySelectorAll("[data-loan-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      const url = window.ZENITH_CONFIG?.loanContactUrl;
      if (url) openExternal(url);
    });
  });
  document.querySelectorAll("[data-config-link]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.configLink;
      const url = key && window.ZENITH_CONFIG?.[key];
      if (url) openExternal(url);
    });
  });
  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    const contactUrl = window.ZENITH_CONFIG?.contactUrl;
    if (contactUrl) setExternalAnchor(link, contactUrl);
  });
  document.querySelectorAll("[data-whatsapp-float]").forEach((link) => {
    const value = window.ZENITH_CONFIG?.whatsapp?.trim();
    if (!value) return;
    const url = /^https?:\/\//i.test(value)
      ? value
      : `https://wa.me/${value.replace(/\D/g, "")}`;
    setExternalAnchor(link, url);
  });
  document.querySelectorAll("[data-potencia-headline]").forEach((element) => {
    if (window.ZENITH_CONFIG?.potenciaHeadline) element.textContent = window.ZENITH_CONFIG.potenciaHeadline;
  });
  // Futuramente: inicialização de formulários, WhatsApp e integrações.
});
