# Project identity and shared context

This project's current canonical name is **Faura Digital**. Previous working names include **Dig A** and **Digital Products Agency**.

The project is undergoing rebranding and reconstruction, so legacy names such as SAV.AGENCY may remain in code, documentation, infrastructure, URLs, and repository history. Do not rename technical identifiers or change infrastructure solely for branding consistency unless the user explicitly requests it.

Canonical project context is available in `../Projects/Agencies/Faura Digital.md`. It contains the broader vision, positioning, purpose, and role within the Faura ecosystem. Codex may also consult related documentation under `../Projects` when broader ecosystem context would materially improve the work.

Current user instructions and the actual repository state remain authoritative for the immediate task. Vision documents provide context; they do not authorize unrelated implementation.

## Working context

- `PROJECT_STATE.md` is the single canonical technical implementation snapshot and the Stage 4 document when shared with ChatGPT. It is orientation, not an automatically injected instruction; verify relevant code before making claims or changes.
- Fixed supplementary context: `../Projects/Agencies/Faura Digital.md` contains broader positioning and ecosystem vision. Read it only when that context matters. No other fixed supplementary-document mapping is configured.
- The Ukrainian redesign brief and files under `Materials/` are historical planning references, not maintained snapshots of current implementation. Read only relevant material. Stage 1–3 concepts and missing cross-project documents do not block project work.
- Use current task instructions to define the requested scope within these rules. Do not infer permission for feature work, redesign, or release from context documents.

## Development and project constraints

- Existing local commands: `npm run dev` (Vite on port 3000), `npm run build` (TypeScript check and Vite build), and `npm run preview` (local build preview). Check `package.json` before relying on or adding commands.
- Preserve SAV.AGENCY technical identifiers, URLs and infrastructure during the rebrand unless explicitly asked to change them. The current frontend still uses that brand.
- Lead delivery is implemented through `api/lead.ts` and server-side Telegram environment variables. Keep credentials out of client code and logs. Local source does not prove provider configuration, delivery, or deployment status.
- No Faura Digital-specific GitHub-only access exception is configured. Do not infer live infrastructure access or status from the local checkout.

## Canonical state maintenance

After authorized work materially changes functionality, architecture, integrations, important limitations, or project-level understanding, update the affected sections of `PROJECT_STATE.md` as part of that work. Keep routine updates focused; do not rewrite the whole snapshot for trivial changes. Mark partial updates as partial and reserve a new full-review checkpoint for a fresh baseline review. Record what was actually inspected and verified, and distinguish source review from deployment or provider verification.
