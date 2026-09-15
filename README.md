# Zenith — fundação da landing page

Base estática para a landing page da Zenith Serviços Financeiros de A a Z. Nesta etapa foram implementados o Design System visual, o header responsivo e a primeira dobra; as demais seções comerciais ainda não foram construídas.

## Executar localmente

Abra `index.html` no navegador. Para uma experiência mais próxima de hospedagem, sirva esta pasta com qualquer servidor estático, por exemplo a extensão Live Server do VS Code.

## Estrutura

```text
.
├── index.html                 # Estrutura HTML semântica e metadados
├── README.md
├── css/
│   ├── reset.css              # Normalização leve
│   ├── variables.css          # Design Tokens centralizados
│   ├── components.css         # Componentes reutilizáveis
│   ├── sections.css           # Estilos estruturais da página
│   └── responsive.css         # Ajustes mobile-first e acessibilidade
├── js/
│   ├── config.js              # Dados e links institucionais editáveis
│   ├── navigation.js          # Menu responsivo
│   ├── animations.js          # Ponto de extensão para animações
│   └── main.js                # Inicialização da aplicação
└── assets/
    ├── favicon/
    ├── fonts/
    └── images/
        ├── logo/ hero/ pessoa-fisica/ pessoa-juridica/ mictmr/
        └── servicos/ parceiros/ backgrounds/ icons/
```

## Mapa de assets

| Pasta | Conteúdo esperado |
| --- | --- |
| `assets/images/logo/` | Logotipo e variações oficiais. |
| `assets/images/hero/` | Fotografia ou arte principal futura. |
| `assets/images/pessoa-fisica/` | Imagens da futura seção Pessoa Física. |
| `assets/images/pessoa-juridica/` | Imagens da futura seção Pessoa Jurídica. |
| `assets/images/mictmr/` | Imagens da futura seção MICTMR. |
| `assets/images/perfis/` | Imagens editáveis dos cards de seleção de perfil. |
| `assets/images/servicos/` | Ilustrações e imagens de serviços. |
| `assets/images/cta-final/` | Imagem editável do bloco de conversão final. |
| `assets/images/parceiros/` | Marcas autorizadas de parceiros. |
| `assets/images/backgrounds/` | Texturas e fundos decorativos. |
| `assets/images/icons/` | Ícones próprios. |
| `assets/fonts/` | Arquivos da tipografia oficial, quando definida. |
| `assets/favicon/` | Favicon da página. |

### Mapa de imagens

- `zenith-logo.png` → logo principal recebida do cliente.
- `hero-main-transparent.png` → imagem transparente do Hero, aplicada em `index.html` sem textos incorporados.
- `pf-profile.webp` → imagem futura do card Pessoa Física.
- `pj-profile.webp` → imagem futura do card Pessoa Jurídica.
- `mictmr-profile.webp` → imagem futura do card MICTMR.
- `pf-main.webp` → imagem principal futura da seção Pessoa Física.
- `pj-main.webp` → imagem principal futura da seção Zenith PJ.
- `pj-tap.webp` → imagem futura do produto Zenith TAP.
- `pj-pro.webp` → imagem futura do produto Zenith PRO.
- `mictmr-main.webp` → imagem principal futura da seção MICTMR.
- `mictmr-obreiro.webp`, `mictmr-loja.webp`, `mictmr-potencia.webp` → imagens futuras das subseções MICTMR.
- `servicos-main.webp` → imagem principal futura da seção Serviços.
- `cta-main.webp` → imagem principal futura do bloco de conversão final.
- `seguros.webp`, `credito.webp`, `financiamentos.webp`, `consorcios.webp`, `saude.webp` → imagens futuras das respectivas categorias de serviços.
- `bb.webp`, `itau.webp`, `bv.webp`, `bradesco.webp`, `banco-pan.webp`, `delfinance.webp`, `santander.webp`, `porto-seguro.webp`, `zurich-seguros.webp` → logos oficiais futuros dos parceiros.

## Editar imagens

1. Coloque o novo arquivo na pasta correspondente em `assets/images/`.
2. Troque o valor de `src` da imagem no HTML pelo novo caminho.
3. Atualize o atributo `alt` para descrever a nova imagem.
4. Mantenha os comentários `IMAGEM EDITÁVEL` ao lado de cada imagem usada.

A logo recebida está em `assets/images/logo/zenith-logo.png`; é possível substituí-la mantendo esse nome, sem alterar o HTML. O favicon atual é uma cópia provisória da mesma marca.

## Manutenção

- **Cores, espaçamentos, raios, sombras e tipografia:** altere `css/variables.css`.
- **Fonte oficial:** adicione os arquivos em `assets/fonts/`, declare `@font-face` e atualize `--font-family-base` e `--font-family-heading`.
- **WhatsApp, links externos, Gyroo, Sindicância e analytics:** altere `js/config.js`. Os valores vazios devem continuar assim até confirmação.
- **Componentes:** mantenha regras reutilizáveis em `css/components.css`; regras exclusivas de seções ficam em `css/sections.css`.
- **Hero:** substitua `assets/images/hero/hero-main-transparent.png` para atualizar a arte do Hero. Há somente uma referência ao arquivo no bloco `hero-visual` de `index.html`. O tamanho é ajustado em `.hero-visual__image`, em `css/sections.css`.
- **Cards de perfil:** quando as imagens forem fornecidas, coloque-as em `assets/images/perfis/`. Os cards atuais usam placeholders em CSS e já indicam, no HTML, o arquivo que cada arte deverá substituir.
- **Pessoa Física:** a arte principal futura deve ficar em `assets/images/pessoa-fisica/pf-main.webp`; logos oficiais devem ficar em `assets/images/parceiros/`. Enquanto não forem fornecidos, a interface usa placeholders sem simular marcas.
- **Zenith PJ:** use `assets/images/pessoa-juridica/pj-main.webp`, `pj-tap.webp` e `pj-pro.webp` quando as artes estiverem disponíveis. A seção usa placeholders em CSS até a substituição.
- **MICTMR:** use `assets/images/mictmr/` para as artes MICTMR, Obreiro, Loja e Potência. Até o recebimento dos arquivos, a seção usa placeholders em CSS.
- **Serviços:** use `assets/images/servicos/` para a arte principal e as categorias do catálogo. Até o recebimento dos arquivos, a seção usa placeholders em CSS.
- **CTA final:** coloque `cta-main.webp` em `assets/images/cta-final/` para substituir o elemento visual temporário. O botão principal usa `ZENITH_CONFIG.contactUrl`; vazio, ele direciona para `#form-servicos`.

## Formulário Pessoa Física

Front-end implementado em quatro etapas: dados pessoais, contato e endereço, serviços de interesse (14 opções do briefing) e revisão. Inclui máscaras de CPF, telefone, CEP e renda mensal, validação local e sucesso simulado. Backend e endpoint permanecem pendentes; `ZENITH_FORM_CONFIG.pfEndpoint` está vazio e nenhum dado é enviado ou persistido.

## Convenções

- HTML semântico, mobile-first e sem dependências externas.
- Imagens nunca devem ser incorporadas em base64 ou espalhadas em CSS.
- Use nomes de classes por função, não por cor ou aparência.
- A interface respeita foco visível e `prefers-reduced-motion`.

## Pendências para a próxima etapa

- Aprovação de tipografia e paleta oficiais (as cores atuais são provisórias e derivadas da logo).
- WhatsApp, URL Gyroo e demais links institucionais.
- Conteúdo, arquitetura de navegação, imagens e Open Graph oficial.
