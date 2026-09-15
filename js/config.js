/* Centralize aqui dados alteráveis. Não preencha valores sem confirmação institucional. */
window.ZENITH_CONFIG = Object.freeze({
  whatsapp: "",
  contactUrl: "",
  gyrooLoanUrl: "",
  sindicanciaUrl: "",
  mictmrContactUrl: "",
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
