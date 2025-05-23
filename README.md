# BOMer Monorepo Prototype

A TypeScript monorepo for a BOM-centric manufacturing workflow system.

## Structure

- `apps/frontend`: Remix app, Tailwind CSS, demo UI with dummy BOM data
- `apps/backend`: AWS Lambda (TypeScript), returns dummy BOM data
- `infra`: (placeholder) AWS CDK infra
- `shared`: (placeholder) Shared types/interfaces

## Getting Started

### 1. Install dependencies (from root)

```sh
npm install
```

### 2. Run Frontend (Remix dev server)

```sh
cd apps/frontend
npm run dev
```

### 3. Run Backend (dummy lambda)

```sh
cd apps/backend
npm run dev
```

## CI/CD

GitHub Actions workflow in `.github/workflows/ci.yml` builds, lints, and tests all workspaces on push/PR to `main`.

---

- See `instructions/` for full requirements and roles.
- This is a prototype: backend and frontend use dummy data for rapid UI demo.
