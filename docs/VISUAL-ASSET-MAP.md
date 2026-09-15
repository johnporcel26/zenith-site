# Direção de Arte e Mapa de Assets — Zenith

## Escopo desta etapa

Este documento é o plano de produção visual da landing page. Nenhuma imagem foi gerada e nenhuma estrutura, conteúdo, formulário ou integração foi alterada.

## Auditoria visual do projeto

A página é uma experiência dark, mobile-first, composta por Hero, seleção de perfis, Pessoa Física, Pessoa Jurídica, MICTMR, Serviços, três formulários e CTA final. A base visual existente é consistente: fundo azul-noite (`#0c1018`), superfícies azul-acinzentadas, dourado como sinal de valor e conversão, azul claro em PJ e verde-petróleo/teal em MICTMR. Cards, bordas discretas, gradientes radiais e brilhos suaves já resolvem bem a decoração; imagens devem entrar como foco editorial, não como textura de preenchimento.

O Hero usa `assets/images/hero/hero-main-transparent.png` como arte mestre em proporção 4:5, com fundo transparente para integrar ao gradiente da página. As versões anteriores foram preservadas como backup e os demais espaços de imagem continuam como placeholders CSS. Os formulários não precisam de imagens: incluir fotos neles prejudicaria foco, leitura e conversão.

## DNA visual da campanha

**Posicionamento:** financeiro premium + tecnologia clara + consultoria próxima. A sensação deve ser de uma marca segura e contemporânea, nunca de banco genérico, empréstimo agressivo, cassino ou ficção científica.

**Linguagem comum**

- Fotografia/3D editorial fotorrealista, sofisticada e contida; nunca stock genérico.
- Ambientes azul-noite, grafite e preto suave, com dourado acetinado como luz de recorte, reflexo ou detalhe material — não como excesso de objetos dourados.
- Contraste médio-alto, sombras profundas mas legíveis, profundidade de campo moderada e grão extremamente sutil.
- Câmera em ângulo de três quartos ou perspectiva levemente elevada; composições limpas, com um assunto inequívoco.
- Pessoas de 28–48 anos, aparência brasileira diversa, roupas contemporâneas discretas (tons escuros, areia, azul-marinho); expressão serena e confiante. Não repetir a mesma pessoa em todos os assets.
- Nenhum texto, número, preço, marca, logotipo, interface legível ou botão dentro das imagens. A marca oficial permanece o PNG existente.

**Variações por território:** PF recebe luz dourada quente e humana; PJ usa azul profundo/ciano contido com dourado apenas como acabamento; MICTMR usa verde-petróleo e teal escuro; Serviços preserva a base azul-noite e usa acentos dourados, azul ou verde conforme a categoria.

## Regras de produção e entrega

- Formato preferencial: WebP, qualidade de exportação 78–84, perfil sRGB. Preserve PNG/WebP com transparência somente quando o recorte fizer diferença real.
- Não aplique texto, logo, watermark, ícones de marca, moedas voando, chuva de notas, cofrinhos, calculadoras, apertos de mão ou telas com números legíveis.
- Para imagens ao lado de texto, o lado do texto deve permanecer calmo. No layout atual, Hero, PF, PJ, MICTMR e Serviços usam texto à esquerda e visual à direita: assunto no lado direito, respiro de 35–45% à esquerda.
- Desktop usa o arquivo principal; tablet preserva o foco via `object-position`; mobile deve preferir `object-position: 62% center` e, quando o assunto perder integridade, uma variante vertical recortada pelo mesmo master.
- Pesos-alvo: hero até 350 KB; artes de seção 180–300 KB; cards 80–160 KB. Use lazy loading fora do Hero quando a implementação for feita.

## Mapa de assets

### Essenciais — 14 assets

| Asset | Seção | Objetivo | Proporção | Resolução | Estilo / área negativa | Prioridade |
|---|---|---|---|---|---|---|
| `hero/hero-main.webp` | Hero | Apresentar solução financeira digital premium | 4:5, vertical | 1200×1500 | Smartphone/objeto tecnológico à direita; luz dourada e fundo calmo à esquerda | Essencial 1 |
| `pessoa-fisica/pf-main.webp` | Pessoa Física | Humanizar a conta digital | 4:5, vertical | 1200×1500 | Pessoa à direita, contexto doméstico urbano discreto; dourado quente. **GENERATED / INTEGRATED** | Essencial 2 |
| `pessoa-juridica/pj-main.webp` | Zenith PJ | Mostrar estratégia e operação empresarial | 4:5, vertical | 1200×1500 | Profissional/pequena empresa à direita; azul tecnológico. **GENERATED / INTEGRATED** | Essencial 3 |
| `mictmr/mictmr-main.webp` | Hero MICTMR | Introduzir o ecossistema de conta e gestão | 4:5, vertical | 1200×1500 | Objeto/ambiente de gestão à direita; verde-petróleo e teal. **GENERATED / INTEGRATED** | Essencial 4 |
| `mictmr/mictmr-obreiro.webp` | MICTMR Obreiro | Representar uso individual da conta | 3:2, horizontal | 1200×800 | Pessoa com celular à direita; sem símbolos religiosos | Essencial 4 |
| `mictmr/mictmr-loja.webp` | MICTMR Loja | Representar organização e operação de loja | 3:2, horizontal | 1200×800 | Mesa/gestão operacional à direita; teal profundo | Essencial 4 |
| `mictmr/mictmr-potencia.webp` | MICTMR Potência | Representar estrutura, escala e controle | 3:2, horizontal | 1200×800 | Rede/ambiente administrativo abstrato à direita; teal e azul | Essencial 4 |
| `servicos/servicos-main.webp` | Hero Serviços | Introduzir o portfólio como um sistema integrado | 4:5, vertical | 1200×1500 | Composição de objetos financeiros abstratos à direita; azul-noite, dourado e azul | Essencial 5 |
| `servicos/seguros.webp` | Proteção | Sinalizar cuidado e segurança | 3:2, horizontal | 1200×800 | Casa/automóvel/pessoa apenas sugestivos, sem clichê; dourado suave | Essencial 5 |
| `servicos/credito.webp` | Crédito | Comunicar acesso a recursos com serenidade | 3:2, horizontal | 1200×800 | Objeto de organização financeira, não dinheiro; azul com dourado | Essencial 5 |
| `servicos/financiamentos.webp` | Financiamentos | Evocar projeto concreto e progresso | 3:2, horizontal | 1200×800 | Arquitetura/veículo em detalhe, assunto à direita | Essencial 5 |
| `servicos/consorcios.webp` | Consórcios | Comunicar planejamento coletivo e conquista | 3:2, horizontal | 1200×800 | Elementos geométricos/arquitetônicos coordenados | Essencial 5 |
| `servicos/saude.webp` | Saúde | Sinalizar cuidado sem fotografia clínica fria | 3:2, horizontal | 1200×800 | Bem-estar cotidiano sofisticado; verde discreto | Essencial 5 |
| `cta-final/cta-main.webp` | CTA final | Fechar com progresso, decisão e proximidade | 1:1 | 1200×1200 | Pessoa/objeto em movimento sutil à direita; grande respiro à esquerda | Essencial 6 |

### Recomendados — 5 assets

| Asset | Seção | Objetivo | Proporção | Resolução | Estilo / área negativa | Prioridade |
|---|---|---|---|---|---|---|
| `perfis/pf-profile.webp` | Card de perfil PF | Antecipar o universo humano PF | 16:9 | 960×540 | Detalhe humano no lado direito, dourado suave | Recomendado |
| `perfis/pj-profile.webp` | Card de perfil PJ | Antecipar operação e tecnologia PJ | 16:9 | 960×540 | Ambiente empresarial abstrato, azul profundo | Recomendado |
| `perfis/mictmr-profile.webp` | Card de perfil MICTMR | Antecipar gestão MICTMR | 16:9 | 960×540 | Geometria/gestão em teal escuro | Recomendado |
| `pessoa-juridica/pj-tap.webp` | Card Zenith TAP | Dar contexto ao celular como maquininha | 4:3 | 960×720 | Celular sem interface legível, objeto à direita | Recomendado |
| `pessoa-juridica/pj-pro.webp` | Card Zenith PRO | Dar contexto à maquininha física | 4:3 | 960×720 | Terminal de pagamento sem marca ou números | Recomendado |

### Opcionais — 9 assets

| Asset | Seção | Objetivo | Proporção | Resolução | Estilo / área negativa | Prioridade |
|---|---|---|---|---|---|---|
| `parceiros/bb.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/itau.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/bv.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/bradesco.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/banco-pan.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/delfinance.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/santander.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/porto-seguro.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |
| `parceiros/zurich-seguros.webp` | Parceiros | Logo oficial autorizado | Contain | 600×300 | Arquivo oficial, sem tratamento IA | Opcional* |

\* Usar somente arquivos oficiais e mediante autorização de uso. Não gerar nem redesenhar logos por IA.

**Assets descartados nesta fase:** texturas, partículas, brilhos, linhas e formas abstratas adicionais. Os gradientes e pseudo-elementos CSS existentes já cumprem esse papel com mais flexibilidade e menor custo de performance. Não há imagem recomendada para nenhum formulário.

## Prompt-base compartilhado

Aplicar a intenção abaixo em toda geração, adaptando o assunto de cada prompt: `premium Brazilian financial-services campaign, cinematic photorealism, navy and graphite environment, restrained satin-gold rim light, realistic materials, controlled contrast, refined depth of field, editorial composition, no readable text, no letters, no logo, no watermark, no numbers, no UI, no banknotes, no coins, no piggy bank, no calculator, no handshake, no neon cyberpunk, no casino aesthetic`.

## Prompts de geração

### Essenciais

#### `hero/hero-main.webp`

`Premium financial technology still life, a modern unbranded smartphone seen at a three-quarter angle with an abstract dark screen and subtle glass reflections, resting within layered architectural arcs and fine metallic lines, subject concentrated on the right half, 40 percent quiet negative space on the left, deep navy and graphite environment, restrained satin-gold edge light, elegant cinematic photorealism, shallow-to-medium depth of field, polished but believable materials, vertical 4:5 composition. No readable text, letters, logos, numbers, UI, banknotes, coins, piggy bank, calculator, hands, watermark, neon cyberpunk or casino mood.`

#### `pessoa-fisica/pf-main.webp`

`Editorial photorealistic portrait of a confident Brazilian adult in their early thirties, wearing a refined navy casual outfit, seated in a contemporary apartment near a softly lit window, holding an unbranded phone naturally while organizing their day, person positioned on the right side, left side intentionally calm for website copy, dark navy and warm graphite palette with subtle gold rim light, authentic and aspirational but not stock-photo-like, vertical 4:5 composition. No readable screen, text, logos, money, coins, calculator, exaggerated smile, office handshake or watermark.`

#### `pessoa-juridica/pj-main.webp`

`Contemporary Brazilian small-business owner in a refined dark-blue workspace, reviewing a physical product sample and an unbranded tablet with the screen turned away, composed posture and focused expression, subject and desk details on the right side, broad clean negative space on the left, midnight blue and graphite palette with restrained cool cyan accents and a fine gold reflection, cinematic photorealistic editorial campaign, vertical 4:5 composition. No charts, readable screen, text, logos, generic meeting, pointing at graphs, handshake, cash or watermark.`

#### `mictmr/mictmr-main.webp`

`Sophisticated account-management visual: an unbranded smartphone and a slim card-like object arranged on a dark green-petrol architectural surface, subtle teal concentric forms suggesting organized flows, objects on the right side and quiet negative space on the left, deep green-petrol, teal and graphite palette, premium cinematic photorealism, realistic metal and glass, vertical 4:5 composition. No religious symbols, text, letters, logos, numbers, readable UI, money, coins or watermark.`

#### `mictmr/mictmr-obreiro.webp`

`Brazilian adult in a dark casual smart outfit using an unbranded phone while leaving a contemporary shared interior, calm and capable expression, person on the right with clear darker negative space on the left, green-petrol and teal ambience with warm gold edge light, realistic editorial photography, horizontal 3:2 composition. No religious symbols, ceremonial clothing, text, logos, readable phone screen, money, coins or watermark.`

#### `mictmr/mictmr-loja.webp`

`Elegant operational still life in a small contemporary organization: organized desk, unbranded card terminal turned away, notebook with blank pages, key and geometric tray, primary objects on the right, calm negative space on the left, deep green-petrol and teal with refined gold reflections, cinematic photorealism, horizontal 3:2 composition. No readable writing, religious symbols, logos, receipts, money, numbers, UI or watermark.`

#### `mictmr/mictmr-potencia.webp`

`Premium abstract operational infrastructure scene: layered dark green-petrol architectural modules connected by subtle teal illuminated paths, visual suggestion of coordinated scale and flow, focal structure on the right and empty dark field on the left, restrained realistic materials, cinematic depth and soft gold accent, horizontal 3:2 composition. No religious symbols, text, letters, logos, numbers, charts, money, sci-fi neon or watermark.`

#### `servicos/servicos-main.webp`

`Integrated financial-services still life with an unbranded phone, a minimal card-shaped object and elegant architectural forms orbiting in a controlled composition, objects on the right, 40 percent quiet left negative space, navy, graphite, satin gold and subtle cool blue palette, premium cinematic photorealism, realistic glass and brushed metal, vertical 4:5 composition. No text, logos, readable UI, money, coins, piggy bank, calculator, watermark or excessive futuristic effects.`

#### `servicos/seguros.webp`

`Premium protective still life: a softly illuminated abstract home silhouette made of matte architectural forms protected beneath a clear glass arc, focal composition on the right and quiet navy negative space on the left, graphite and navy with restrained satin-gold highlights, cinematic photorealism, horizontal 3:2 composition. No text, logos, shield icon, money, car brand, stock-family pose, watermark or cartoon style.`

#### `servicos/credito.webp`

`Refined financial planning still life: unbranded dark card form, polished graphite notebook with blank pages and a subtle ascending architectural plane, objects on the right, calm left negative space, navy and graphite palette with controlled gold accent, cinematic photorealistic product editorial, horizontal 3:2 composition. No readable writing, logos, cash, coins, piggy bank, calculator, interest rates, UI or watermark.`

#### `servicos/financiamentos.webp`

`Cinematic architectural detail of a contemporary residence facade at blue hour, warm interior glow and a precise satin-gold line of light suggesting progress, structure concentrated on the right and dark quiet space on the left, premium navy and graphite grade, horizontal 3:2 composition. No text, logos, people posing, money, keys with labels, sales signs or watermark.`

#### `servicos/consorcios.webp`

`Sophisticated composition of several coordinated geometric architectural volumes in matte graphite and warm stone, arranged in a harmonious circle-like relationship, focal group on the right, calm negative space on the left, navy ambient shadows and restrained gold rim light, cinematic photorealism, horizontal 3:2 composition. No text, logos, people, cash, coins, vehicles with brands, charts or watermark.`

#### `servicos/saude.webp`

`Quiet premium wellbeing scene: Brazilian adult in a modern dark-toned home, sitting near a plant and window in a calm reflective moment, subject on the right, left side uncluttered, navy and graphite base with soft deep-green accent and gentle warm light, cinematic editorial photography, horizontal 3:2 composition. No medical uniform, hospital room, readable phone screen, text, logos, money or watermark.`

#### `cta-final/cta-main.webp`

`Cinematic editorial image of a confident Brazilian professional walking forward through a refined contemporary corridor with soft architectural light, subtle motion in fabric and perspective, subject on the right edge moving inward, broad dark calm negative space on the left for CTA copy, navy, graphite and restrained satin-gold palette, realistic premium photography, hopeful but understated atmosphere, square 1:1 composition. No text, logo, signs, money, phone screen, handshake, exaggerated sales pose or watermark.`

### Recomendados

#### `perfis/pf-profile.webp`

`Close editorial detail of a Brazilian adult using an unbranded phone near a warm window, person and light on the right, dark calm left space, navy graphite palette with subtle gold reflection, cinematic photorealism, 16:9. No text, logos, readable screen, money or watermark.`

#### `perfis/pj-profile.webp`

`Contemporary small-business work surface with an unbranded tablet facing away and precise material samples, focal objects on the right, deep-blue quiet space left, subtle cool-blue highlights, cinematic photorealism, 16:9. No text, logos, charts, cash or watermark.`

#### `perfis/mictmr-profile.webp`

`Dark green-petrol abstract management composition with layered teal architectural forms and restrained warm reflection, focal forms on the right, quiet left field, realistic material study, 16:9. No religious symbols, text, logos, numbers or watermark.`

#### `pessoa-juridica/pj-tap.webp`

`Unbranded smartphone used as a contactless payment device, held naturally above a refined countertop, device on the right and negative space left, blue-black palette with cool cyan and restrained gold reflection, cinematic photorealism, 4:3. No readable UI, text, logos, numbers, cash or watermark.`

#### `pessoa-juridica/pj-pro.webp`

`Minimal unbranded physical card terminal on a refined contemporary counter, terminal on the right and dark blue negative space left, premium product-editorial lighting with satin-gold edge reflection, photorealistic, 4:3. No readable display, text, brand, receipts, money or watermark.`

## Implementação, responsividade e acessibilidade

| Asset / grupo | Desktop | Tablet e mobile | CSS recomendado | Alt |
|---|---|---|---|---|
| Hero | `img` dentro de `.hero-visual`; manter o aparelho à direita | `object-position: 62% center`; considerar crop vertical dedicado se o aparelho perder leitura | `object-fit: contain` | `Aplicativo Zenith em celular para operações financeiras digitais` |
| PF, PJ, MICTMR e Serviços principais | Visual à direita do texto | `object-position: 62% center`; em telas estreitas, empilhar abaixo do texto | `object-fit: cover` | Descrever sujeito/objeto real sem nomear benefícios promocionais |
| MICTMR subseções e serviços categoria | Usar somente onde houver componente visual dedicado na próxima etapa | Em cards, crop no assunto e preservar margem de segurança | `object-fit: cover` | Descrição curta do conceito visual; `alt=""` se puramente decorativo |
| Cards de perfil e produtos PJ | Fundo visual do card, sem competir com rótulo HTML | Ocultar em mobile se reduzir legibilidade ou manter crop simples | `object-fit: cover` | `alt=""` (o texto do card já fornece o sentido) |
| CTA final | Arte na coluna direita | `object-position: 65% center`; reduzir/ocultar se competir com CTA | `object-fit: contain` | `alt=""` se a imagem for apenas atmosférica |
| Logos parceiros | Dentro de área protegida e tamanho uniforme | Manter `contain`, nunca ampliar além do arquivo | `object-fit: contain` | `Logotipo de [nome do parceiro]` |

## Ordem recomendada de geração

1. `hero-main.webp` — fixa materialidade, luz dourada e profundidade da campanha.
2. `pf-main.webp` — valida a dimensão humana do mesmo DNA.
3. `pj-main.webp` — estabelece a variação azul tecnológica.
4. Família MICTMR (`mictmr-main`, `mictmr-obreiro`, `mictmr-loja`, `mictmr-potencia`) — gerar em uma única sessão de direção para preservar coerência teal.
5. Família Serviços (`servicos-main`, `seguros`, `credito`, `financiamentos`, `consorcios`, `saude`) — gerar com mesma lente, contraste e materiais.
6. `cta-main.webp` — deve resumir a campanha, não introduzir uma estética nova.
7. Cards de perfil e produtos PJ, somente se a revisão visual indicar necessidade real.
8. Logos oficiais autorizados, recebidos de fontes de marca; nunca gerados.

## Resumo operacional

- **Total planejado:** 28 assets.
- **Essenciais:** 14 assets.
- **Recomendados:** 5 assets.
- **Opcionais:** 9 logos oficiais autorizados.
- **Pastas a criar/preencher:** `assets/images/perfis/`, `assets/images/pessoa-fisica/`, `assets/images/pessoa-juridica/`, `assets/images/mictmr/`, `assets/images/servicos/`, `assets/images/cta-final/` e `assets/images/parceiros/`.
- **Sem geração nesta etapa:** o próximo passo é aprovar este DNA e começar pelo Hero.
