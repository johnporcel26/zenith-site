/* Centralize aqui dados institucionais confirmados e alteráveis. */
const zenithWhatsAppUrl = "https://wa.me/5511973987760?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Zenith%20Servi%C3%A7os%20Financeiros%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

window.ZENITH_CONFIG = Object.freeze({
  whatsapp: zenithWhatsAppUrl,
  contactUrl: zenithWhatsAppUrl,
  gyrooLoanUrl: "https://card.gyroo.com.br/",
  sindicanciaUrl: "",
  mictmrContactUrl: zenithWhatsAppUrl,
  potenciaHeadline: "Sua Potência recebe per captas e mútuas?",
  analyticsId: "",
  externalLinks: Object.freeze({})
});

window.ZENITH_FORM_CONFIG = Object.freeze({
  pfSubmitLabel: "ENVIAR MEU CADASTRO",
  pjSubmitLabel: "ENVIAR CADASTRO DA EMPRESA",
  mictmrSubmitLabel: "",
  servicesSubmitLabel: "",
  pfEndpoint: "",
  pjEndpoint: "",
  mictmrEndpoint: "",
  servicesEndpoint: ""
});

window.MICTMR_FORM_CONFIG = Object.freeze({
  obreiro: { fields: ["pessoaFisica"] },
  loja: { fields: ["pessoaFisica"] },
  potencia: { fields: ["pessoaFisica"] },
  veneravelMestre: { fields: ["pessoaFisica"] }
});
