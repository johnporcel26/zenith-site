window.ZenithNavigation = (() => {
  const init = () => {
    const toggle = document.querySelector("[data-menu-toggle]");
    const navigation = document.querySelector("[data-site-nav]");
    if (!toggle || !navigation) return;

    const setMenu = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      navigation.dataset.open = String(isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    };

    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  };
  return { init };
})();
