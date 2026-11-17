# Faura Digital

Faura Digital, previously developed as Dig A and Digital Products Agency, is the digital-product, technology, AI, and development agency within the Faura ecosystem.

The project is in a rebranding and reconstruction phase. The canonical vision is maintained in `../Projects/Agencies/Faura Digital.md`. SAV.AGENCY and other legacy names may remain in code and historical implementation notes until a separate technical rebranding task changes them.

## Current implementation

[`PROJECT_STATE.md`](PROJECT_STATE.md) is the canonical technical snapshot, including the current code map, implementation boundaries and review checkpoint. See [`AGENTS.md`](AGENTS.md) for project working instructions.

## Development

The existing scripts are declared in `package.json`:

- `npm run dev` — start the Vite development server (port 3000).
- `npm run build` — run the TypeScript check and create a production bundle.
- `npm run preview` — serve the built bundle locally.

The Vercel lead endpoint and Telegram environment requirements are described in `PROJECT_STATE.md`. The repository does not establish whether a deployment or provider configuration is currently active.

## Background material

The Ukrainian redesign brief and `Materials/` files contain earlier planning and service notes. Consult them when relevant; use the current source and `PROJECT_STATE.md` for implementation facts.
