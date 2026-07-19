# Skyrim RP Brasil — Wiki

Site wiki estático do Skyrim Roleplay Brasil (Reino Alto).

## Estrutura

- `index.html` — Home
- `lore/` — Lore e Calendário Canon
- `cities/` — 9 cidades + índice
- `villages/` — 7 vilas + índice
- `npcs/` — NPCs canônicos
- `players/` — Top jogadores do servidor
- `professions/` — 11 profissões
- `items/` — Códex de Itens (229 itens)
- `regras/` — Código oficial (8 capítulos)
- `download/` — Launcher + instalação
- `assets/css/style.css` — Tema nórdico
- `assets/img/` — Imagens (vazio por enquanto)

## Como rodar localmente

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# Ou abrir direto no browser:
# file://caminho/para/site/index.html
```

## Como publicar no GitHub Pages

1. Criar repo `Skyrim-Roleplay-Brasil/site` (privado ou público).
2. Push do conteúdo deste diretório.
3. Settings → Pages → Branch: `main` / folder: `/` (root).
4. URL: `https://skyrim-roleplay-brasil.github.io/site/`

## Atualização

Os dados são gerados a partir do Obsidian Vault (`E:\SKYRIMRPOBSIDIAN\SKYRIMRP\SKYRIM RP\`).
Atualizar manualmente quando houver mudança significativa.
