# Frontend Workbench Reshape Design

## Goal

Restructure the frontend so the app no longer reads as a near-match to the prior PR while preserving the existing data wiring, demo behavior, and core entity coverage.

## Constraints

- Keep the current Next.js app in `apps/web`.
- Preserve working routes and data access for the hosted demo.
- Avoid backend contract changes unless required for routing or page composition.
- Prioritize high-visibility structural differences over cosmetic restyling.

## Design Summary

The app will move from a landing-page-plus-sections pattern to an analyst workbench shell. The new shape uses a persistent navigation rail, denser operational panels, and data-first entry points.

The new top-level structure:

- `Workspace`
- `Properties`
- `Businesses`
- `Contractors`
- `Tenancy`
- `Inquiries`
- `Sources`

`Insights` will be folded into `Workspace`. `Ask` will be repositioned as `Inquiries`.

## Information Architecture

### Workspace

The default route becomes a workbench, not a hero page. It will show:

- a compact metrics strip
- suggested inquiry entry points
- high-signal property and contractor slices
- direct pivots into the main record domains

This gives the app a data-operational first impression and removes the current marketing-style composition.

### Domain Pages

List pages will shift toward a two-pane work surface:

- compact page header
- result list or table region
- contextual panel or supporting evidence section

Detail pages will read as dossiers:

- summary strip
- key signals
- related entities
- provenance blocks

### Query Surface

Natural-language query remains supported, but it will be framed as an inquiry console rather than a standalone demo card. The screen should feel like an investigation tool with preset inquiries, query input, and grounded results.

## Component Changes

### App Shell

Replace the current top-nav-plus-footer layout with:

- a slim top bar for search and dataset status
- a persistent left rail for primary navigation
- a main workspace container with denser spacing

Footer presence will be reduced or removed from the main shell unless needed for source context.

### Shared UI Composition

Prefer:

- flatter panels
- tighter spacing
- clearer section boundaries
- stronger list and table emphasis

Avoid:

- oversized hero sections
- large empty states on initial load
- decorative composition that reads like a brochure

## Routing Strategy

- `/` becomes `Workspace`
- `/ask` remains supported for compatibility, but the visible navigation label becomes `Inquiries`
- `/insights` content is absorbed into `/`
- `/tenants` remains routed but is presented as `Tenancy` in navigation and page copy

## Testing Strategy

Add focused tests first for:

- navigation labels and route presence
- default route rendering a populated workspace shell
- inquiry page labeling and compatibility route behavior

Then verify:

- `pnpm test`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm --filter @oracle/web build`

## Implementation Order

1. Add or update tests covering the new shell and route labeling.
2. Replace the root layout with the workbench shell.
3. Rewrite the home page into the workspace view.
4. Update navigation labels and page headers.
5. Reshape the highest-visibility pages (`Properties`, `Inquiries`, `Businesses`, `Contractors`, `Tenancy`) to match the new structure.
6. Run verification and then update the PR branch.
