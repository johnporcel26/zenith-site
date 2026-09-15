# Mapa de slots de imagem

O site utiliza somente os caminhos abaixo. Para trocar uma arte, substitua o arquivo dentro do slot correspondente, mantendo exatamente o nome exigido.

| Área | Pasta | Arquivo obrigatório | Tamanho recomendado | Proporção | Tipo |
| --- | --- | --- | --- | --- | --- |
| Hero | `01_Hero` | `hero-home.png` | 1920x900 | 2.13:1 | Horizontal |
| Pessoa Física | `02_Pessoa_Fisica` | `pessoa-fisica.png` | 1920x900 | 2.13:1 | Horizontal |
| Pessoa Jurídica | `03_Pessoa_Juridica` | `pessoa-juridica.png` | 1920x900 | 2.13:1 | Horizontal |
| MICTMR | `04_MICTMR` | `mictmr.png` | 1920x900 | 2.13:1 | Horizontal |
| Soluções | `05_Solucoes` | `solucoes-zenith.png` | 1920x900 | 2.13:1 | Horizontal |
| Atendimento | `06_Atendimento` | `atendimento.png` | 1920x900 | 2.13:1 | Horizontal |
| Zenith TAP | `07_Zenith_TAP` | `zenith-tap.png` | 1080x1920 | 9:16 | Vertical |
| Zenith PRO | `08_Zenith_PRO` | `zenith-pro.png` | 1080x1920 | 9:16 | Vertical |
| Parceiros | `09_Parceiros` | `bancos-parceiros.png` | 1800x600 | 3:1 | Transparente |
| Card PF — topo | `11_Cards_Segmentos_PF` | `card-top-pf.png` | 1200x420 | 2.86:1 | Card Top Art |
| Card PJ — topo | `12_Cards_Segmentos_PJ` | `card-top-pj.png` | 1200x420 | 2.86:1 | Card Top Art |
| Card MICTMR — topo | `13_Cards_Segmentos_MICTMR` | `card-top-mictmr.png` | 1200x420 | 2.86:1 | Card Top Art |

## Regra do projeto

Não há busca automática, seleção por dimensão ou associação por conteúdo. Cada seção depende exclusivamente de seu slot fixo.

## Canvas superior dos cards de segmentos

Os três slots de cards usam as pastas individuais `11`, `12` e `13`; `10_Cards_Segmentos` é somente o índice da família. Os arquivos são opcionais enquanto os slots estiverem vazios: o CSS mantém uma faixa neutra. Quando um PNG com o nome obrigatório for salvo no slot, ele passa a ocupar automaticamente somente o topo do card correspondente.
