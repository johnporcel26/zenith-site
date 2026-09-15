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
  document.querySelectorAll("[data-gyroo-loan]").forEach((button) => {
    button.addEventListener("click", () => {
      // A URL é institucional e deve ser definida em js/config.js antes da publicação.
      if (window.ZENITH_CONFIG?.gyrooLoanUrl) window.location.assign(window.ZENITH_CONFIG.gyrooLoanUrl);
    });
  });
  document.querySelectorAll("[data-config-link]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.configLink;
      const url = key && window.ZENITH_CONFIG?.[key];
      // A URL é institucional e só navega após configuração em js/config.js.
      if (url) window.location.assign(url);
    });
  });
  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    const contactUrl = window.ZENITH_CONFIG?.contactUrl;
    // Sem URL institucional, o CTA mantém o caminho interno para o formulário de serviços.
    link.setAttribute("href", contactUrl || "#form-servicos");
  });
  document.querySelectorAll("[data-whatsapp-float]").forEach((link) => {
    const value = window.ZENITH_CONFIG?.whatsapp?.trim();
    if (!value) return;
    link.href = /^https?:\/\//i.test(value)
      ? value
      : `https://wa.me/${value.replace(/\D/g, "")}`;
  });
  document.querySelectorAll("[data-potencia-headline]").forEach((element) => {
    if (window.ZENITH_CONFIG?.potenciaHeadline) element.textContent = window.ZENITH_CONFIG.potenciaHeadline;
  });
  // Futuramente: inicialização de formulários, WhatsApp e integrações.
});
