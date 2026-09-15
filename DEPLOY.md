# Deploy — Zenith Serviços Financeiros

O projeto é uma landing page estática. A publicação esperada é:

`GitHub (branch main) → Cloudflare Pages → npm run build → dist`

## Comandos locais

```bash
npm install
npm run build
npm run preview
```

O preview abre a versão gerada em `http://127.0.0.1:4173`. Ele serve exclusivamente o conteúdo de `dist`, nunca os arquivos-fonte.

## Cloudflare Pages

Ao conectar o repositório no Cloudflare Pages, use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: `None`

`dist` é gerada a cada build e permanece fora do Git. Assim, todo push aprovado para `main` gera uma nova versão de produção a partir dos arquivos-fonte.

## O que o build publica

O script copia apenas o HTML, CSS, JavaScript, assets, vídeo e os banners utilizados pela landing page. Backups, documentação interna, imagens originais não usadas e dependências não entram em `dist`.

Durante o build, as referências locais de HTML e CSS são verificadas com diferenciação entre maiúsculas e minúsculas, como no ambiente Linux do Cloudflare. Âncoras internas sem alvo também interrompem o build.
