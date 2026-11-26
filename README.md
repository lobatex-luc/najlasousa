# Najla Sousa · Estética Facial

Landing page da clínica Najla Sousa Estética Facial, em Joinville (SC). Uma
página só: hero, diferenciais, tratamentos, sobre, como funciona, depoimentos,
dúvidas e contato — com agendamento direto pelo WhatsApp.

## Rodar

```sh
bun install
bun run dev        # http://127.0.0.1:5173 (Vite puro, sem o Worker)
bun run build      # dist/client (assets) + dist/najla_sousa/index.js (Worker)
```

O Worker da Cloudflare é compilado apenas no `build`, porque a página é
estática e o plugin não inicia o workerd local em toda máquina.

## Editar o conteúdo

- `src/data/clinic.ts` guarda tudo que muda com frequência: nome, endereço,
  WhatsApp, Instagram, horários, tratamentos, etapas, depoimentos e dúvidas.
  O link do WhatsApp é montado por `whatsappLink(mensagem)`.
- `src/app/pages/Home.tsx` é a página (as seções estão na ordem em que
  aparecem); `src/app/components/*` traz nav, footer e primitivas de UI.
- `src/styles.css` mantém os tokens herdados da loja: fundo creme, tinta
  escura, um único acento terracota, Instrument Serif para títulos e Inter no
  resto. Cantos são squircle via `corner-shape`; `.round` é círculo de verdade.
- Imagens em `public/images` (hero, tratamento, consultório, pele).

## Deploy com Freebuff Sites

`deploy.json` aponta para o build. Depois de `bun run build`, publique com a
ferramenta `sites_deploy` a partir desta pasta.
