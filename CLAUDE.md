# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR at http://localhost:5173
npm run build      # Production build (outputs to build/client and build/server)
npm run start      # Serve production build
npm run typecheck  # Generate route types and run TypeScript check
```

No test framework is configured yet.

## Architecture

This is a **React Router v7** portfolio site with SSR enabled (`ssr: true` in `react-router.config.ts`).

**Route definition** is file-based via `app/routes.ts` — routes are registered explicitly there using the `@react-router/dev/routes` helpers. Currently only an index route exists (`app/routes/home.tsx`).

**Type generation**: React Router auto-generates typed route args/props into `app/+types/`. Always run `npm run typecheck` after adding routes so these types are regenerated.

**Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Global styles in `app/app.css`. Inter font loaded via Google Fonts in `app/root.tsx`.

**Docker**: A `Dockerfile` exists for containerized deployment. The container serves on port 3000.
