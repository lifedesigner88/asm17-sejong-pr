# AGENTS.md

## Purpose
Build PersonaMirror step by step — not just fast, but in a way that makes structure and intent understandable.

## Default Start-of-Task Checklist
1. Read `README.md` — check current state and priorities
2. Explore relevant directories/code
3. Design → implement → verify
4. Write changelog automatically (see Documentation Rules)
5. Share results and next steps

## Parallel Worktree Setup

| Workspace | Path | Branch | Frontend | Backend | Scope |
|-----------|------|--------|----------|---------|-------|
| main | `/home/sejong/260309_persona-mirror` | `main` | 3000 | 8000 | merge only |
| work1 | `/home/sejong/persona-mirror-work1` | `feat/email-signup` | 3001 | 8001 | Backend Steps 1→2→3 |
| work2 | `/home/sejong/persona-mirror-work2` | `feat/frontend-mvp` | 3002 | 8002 | Frontend Steps 4→6 |

### Port Policy
- Each workspace runs on dedicated ports to avoid conflicts when running simultaneously.
- Frontend port is set via `vite.config.ts` `server.port` or `VITE_PORT` env var.
- Backend port is set via uvicorn `--port` arg or `BACKEND_PORT` env var.
- `VITE_API_BASE_URL` and `BACKEND_CORS_ORIGINS` must match the workspace's port pair.

### Worktree Rules
- `main` is updated **only via PR** — never commit or push directly to `main`.
- work1 and work2 push to their own branches and open a PR to `main`.
- PR must be reviewed and approved before merging.
- When adding a new worktree: `git worktree add <path> <branch>` from the main repo.
- When done: PR merged → `git worktree remove <path>` → delete remote branch.

## Source of Truth
- `README.md` is the authority on current state, priorities, and runtime policy.
- On conflict between docs and code, align with `README.md`.
- On major structural change, update `README.md` alongside the code.

## Architecture Rules

### Monorepo Layout
- `apps/frontend` — UI, camera/mic control
- `apps/backend` — FastAPI API, orchestration, DB access
- `apps/ai-worker` — LangGraph inference worker (Claude API)
- `libs/shared-interfaces` — frontend-backend contracts
- `libs/ai-models` — model loading/inference wrappers
- `libs/ui-components` — reusable UI components
- `infrastructure/terraform` — IaC

### Frontend
- React Router `loader` / `action` pattern is the default.
- Shared UI: `apps/frontend/src/common/components` (shadcn/ui under `ui/*`, unified export via `index.ts`).
- Feature code: `apps/frontend/src/features/<domain>` → subfolders `components/`, `pages/`, `layout/`, `utils/`.
- Before adding a new component, check if shared UI already covers it.
- If a pattern repeats more than once, lift it — do not inline copy-paste.
- `index.ts` is the entry point only; no logic.

### Backend
- Common code: `apps/backend/app/common`.
- Feature code: `apps/backend/app/features/<domain>` → split into `router.py`, `service.py`, `schemas.py`, `models.py` as needed.
- `apps/backend/main.py` — uvicorn entry only. App assembly in `apps/backend/app/main.py`.
- Domain names are shared with frontend: `auth`, `admin`, `capture`.

## Runtime and Execution Rules
- Node `24.11.0` (`.nvmrc`), Python `3.11.15` (`.python-version`) — pinned to patch.
- Package managers: `pnpm` (Node), `uv` (Python).
- Local, Dockerfile, and Docker Compose use the same patch-level versions.

### Official Commands
| Command | Purpose |
|---------|---------|
| `pnpm setup` | Initial install + env generation |
| `pnpm dev` | Local dev server |
| `pnpm infra:up/down` | Start/stop db + redis |
| `pnpm docker` | Build and run Dockerfiles |
| `pnpm docker:logs` | View container logs |
| `pnpm docker:down` | Stop all containers |

### Script Organization
- `package.json` script order: `setup → dev → infra → docker → quality → raw tool`.
- Prefer Node/Python scripts over bash-only for cross-platform compatibility.
- Docker and local dev must not share the same cache/venv directories.

## Environment Variable Rules
- `apps/frontend/.env` and `apps/backend/.env` are not committed — only `.env.example` files are tracked.
- `compose.env` holds Docker Compose demo defaults and is tracked.
- `pnpm setup/dev/docker` auto-generate `.env` from `.env.example` when needed.
- Do not mix env roles: local dev/docker → app `.env`; compose demo → `compose.env`.

## Security and Data Rules
- Browser tokens: `httpOnly` cookies preferred over `localStorage`.
- Auth secrets: environment variables only — no code fallback.
- Input: strip/validate before storage.
- Personal data (voice, images, interview text): handled conservatively.
- Heavy AI tasks: async, separated from web request cycle.

## Quality Rules
| Task | Command |
|------|---------|
| Backend test | `pnpm test:backend` |
| Frontend lint | `pnpm lint:frontend` |
| Python lint | `uvx ruff check` |
| Python format | `uvx ruff format` |
| Common format | `pnpm format` |

- pre-commit config: `.pre-commit-config.yaml`.

## Documentation Rules
- On any feature, structural, or API change: update `README.md` (if needed) and `docs/changelog/YYYY-MM-DD.md`.
- Full changelog rules: `docs/changelog/README.md`.
- API reference at runtime: FastAPI OpenAPI (`/docs`, `/openapi.json`) — no manual endpoint docs.
- Backend test plans: `apps/backend/docs/api/testing.md`.

### Automatic Changelog (no user prompt needed)
After any task that changes `README.md`, `AGENTS.md`, or project structure:
1. Check if `docs/changelog/YYYY-MM-DD.md` exists; create it if not.
2. Append a numbered section (`## 1.`, `## 2.`, …) with: `What Changed` / `Why It Mattered` / `Files To Read`.
3. Update `docs/changelog/README.md` file list if a new date file was created.

## Safety and Git Rules
- No destructive commands (`reset --hard`, mass deletion) without explicit user instruction.
- Before the final commit, share a change summary and get user approval.
- On approval: commit to current branch and push to `origin` under the same branch name.

### Branch Policy
- Independent work → new branch from latest `origin/main`.
- Dependent work → new branch from the unmerged parent branch.
- Branch names: short and domain-focused — `feat/ai`, `feat/auth`, `study/prompt-exp`.
- Do not reuse a branch that already has an open PR; create a child branch instead.

### PR Policy
- **`main` is protected — only updated via PR, never by direct push.**
- One PR = one branch.
- work1 and work2 each open a PR to `main` when their step is complete.
- Merge the previous PR before starting the next branch whenever possible; use stacked branches if not.
- A stacked PR targets the parent branch; rebase to `main` after the parent merges.
- Never add commits to an already-merged PR branch — create a new branch and cherry-pick if needed.
- Clean up merged branches (local + remote) after PR is merged.

## Response Style
After each task, briefly state:
- What changed
- Why
- Which file to check
- 1–2 next steps

## English Correction Rule
The user is actively learning English. Apply this on every message:
1. **Correct first** — show the natural English version of the user's sentence in italics
2. **Then execute** — proceed with the task as understood
- Keep corrections brief and non-interrupting; do not explain grammar rules unless asked
- Example: user says "plz conduct this cmd" → reply with *"Please run this command"* then run it
