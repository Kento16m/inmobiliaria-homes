# Graph Report - Inmobiliaria homes  (2026-11-01)

## Corpus Check
- Corpus is ~5,349 words - fits in a single context window. You may not need a graph.

## Summary
- 259 nodes · 463 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Shell & Routing
- package.json & Dependencies
- Buttons, Cards & Select
- Badges, Inputs & Tabs
- CLAUDE.md Project Rules
- App TypeScript Config
- Topbar & Avatar
- Node TypeScript Config
- Property Grid & Map Views
- Case Study Cover & Calendar
- Marketing Dashboard
- Linter Config
- Project Mission Overview
- Style Guide Colors & Type
- UI Showcase Screens
- Add Property Form
- Root TypeScript Config

## God Nodes (most connected - your core abstractions)
1. `cn()` - 19 edges
2. `compilerOptions` - 19 edges
3. `Strings` - 17 edges
4. `strings` - 17 edges
5. `compilerOptions` - 15 edges
6. `lucide-react` - 11 edges
7. `react` - 11 edges
8. `ShowcaseSection()` - 10 edges
9. `App()` - 9 edges
10. `StyleguidePage()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `index.html (app entry HTML, lang=es, mounts src/main.tsx)` --references--> `favicon.svg (purple template favicon)`  [EXTRACTED]
  index.html → public/favicon.svg
- `CLAUDE.md (SwiftProp project instructions)` --references--> `DESIGN.md (SwiftProp design system)`  [EXTRACTED]
  CLAUDE.md → docs/DESIGN.md
- `Centralized UI text in src/lib/strings.ts` --references--> `Spanish text glossary (menu, buttons, property types, statuses, dashboard widgets)`  [EXTRACTED]
  CLAUDE.md → docs/DESIGN.md
- `Code rules (small components, no inline styles, theme tokens only, no extra libs)` --references--> `Theme utilities (text-h1..p4, rounded-button/card/pill, shadow-card)`  [EXTRACTED]
  CLAUDE.md → docs/DESIGN.md
- `favicon.svg (purple template favicon)` --semantically_similar_to--> `icons.svg (social icon sprite from template)`  [INFERRED] [semantically similar]
  public/favicon.svg → public/icons.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **SwiftProp design system (tokens, typography, layout, glossary)** — docs_design_color_palette, docs_design_theme_tokens, docs_design_typography, docs_design_layout, docs_design_spanish_glossary [EXTRACTED 1.00]
- **SwiftProp project conventions (Spanish UI, strings.ts, locale formats, code rules)** — claude_spanish_ui_rule, claude_strings_ts_centralization, claude_locale_formats, claude_code_rules [EXTRACTED 1.00]
- **Style guide design tokens** — docs_03_styleguide_inter_typeface, docs_03_styleguide_typography_scale, docs_03_styleguide_color_palette [EXTRACTED 0.95]
- **SwiftProp showcase screens sharing sidebar and visual style** — docs_04_styleguide_properties_grid_screen, docs_04_styleguide_dashboard_screen, docs_04_styleguide_sidebar_navigation [INFERRED 0.85]
- **SwiftProp property browsing views (grid, map, shared toolbar)** — docs_06_styleguide_property_grid_view, docs_06_styleguide_property_map_view, docs_06_styleguide_property_filters_toolbar [INFERRED 0.85]
- **Dashboard lead analytics widgets** — docs_07_styleguide_leads_bar_chart, docs_07_styleguide_leads_campaign_line_chart, docs_07_styleguide_leads_tables [EXTRACTED 1.00]

## Communities (17 total, 1 thin omitted)

### Community 0 - "App Shell & Routing"
Cohesion: 0.13
Nodes (23): react-router-dom, App(), AppLayout(), Sidebar(), SidebarProps, ColorPalette(), ColorSwatch(), ColorSwatchProps (+15 more)

### Community 1 - "package.json & Dependencies"
Cohesion: 0.07
Nodes (36): dependencies, lucide-react@^1.66.0, react@^19.3.1, react-dom@^19.3.1, react-router-dom@^7.18.5, recharts@^3.10.1, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3 (+28 more)

### Community 2 - "Buttons, Cards & Select"
Cohesion: 0.13
Nodes (21): Button(), ButtonProps, ButtonSize, ButtonVariant, sizes, variants, Card(), StatCard() (+13 more)

### Community 3 - "Badges, Inputs & Tabs"
Cohesion: 0.15
Nodes (18): react, BadgeProps, BadgeVariant, variants, CardProps, Input(), InputProps, Pagination() (+10 more)

### Community 4 - "CLAUDE.md Project Rules"
Cohesion: 0.11
Nodes (20): CLAUDE.md (SwiftProp project instructions), Locale 'es' formatting (Intl date/currency USD), src/ folder structure (components/ui, layout, properties, dashboard, pages, data, lib), SwiftProp CRM inmobiliario, Stack: Vite + React + TypeScript + Tailwind v4 + React Router + lucide-react + recharts + Inter, Task workflow (npm run build, fix errors, 5-line summary, stop), DESIGN.md (SwiftProp design system), Color palette tokens (primary blue, secondary green, danger red, grays, surface, accent) (+12 more)

### Community 5 - "App TypeScript Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+12 more)

### Community 6 - "Topbar & Avatar"
Cohesion: 0.20
Nodes (12): lucide-react, Topbar(), TopbarProps, Avatar(), AvatarProps, AvatarSize, sizes, Badge() (+4 more)

### Community 7 - "Node TypeScript Config"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 8 - "Property Grid & Map Views"
Cohesion: 0.36
Nodes (7): Property Card (photo, For Sell/Furnished tags, price, address, sqft/bed/bath), Property Detail Panel (price, address, action chips, details, internal details), Property Toolbar (type tabs, view toggle, Export, Add Property), 06 Property Grid and Map View (SwiftProp), Property Grid View (4-column property cards, pagination), Property Map View (list + detail panel + map pins), SwiftProp Sidebar Navigation (Dashboard, Properties, Projects, Leads, Agreements, Calendar, Activities, Contacts, Brokers, Documents)

### Community 9 - "Case Study Cover & Calendar"
Cohesion: 0.40
Nodes (6): Calendar and Leads collected chart screens, SwiftProp Real Estate CRM UX & UI Design Case Study cover, Property detail panel (gallery, price, actions, details), Property listing card grid with type filter tabs and search, Sidebar navigation menu (Dashboard, Properties, Projects, Leads, Agreements, Calendar, Activities, Contacts, Brokers, Documents), SwiftProp brand (blue/white/yellow)

### Community 10 - "Marketing Dashboard"
Cohesion: 0.40
Nodes (5): SwiftProp Marketing Dashboard (Section 07), Leads collected analytics bar chart (Brokers vs Agents), Leads collected by campaign line chart (Instagram vs Website), Leads tables by Agents and by Direct Source (status badges: Assigned, Deals Won, Deals Lost), Sidebar Navigation (Dashboard, Properties, Projects, Leads, Agreements, Calendar, Activities, Contacts, Brokers & Agents, Documents)

### Community 11 - "Linter Config"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 12 - "Project Mission Overview"
Cohesion: 0.40
Nodes (3): SwiftProp Overview Slide (Project Mission), Project Mission: transform property management CRM, User needs and pain points research with property managers, landlords, tenants

### Community 13 - "Style Guide Colors & Type"
Cohesion: 0.50
Nodes (5): Color Palette (primary blue, secondary green, status red, gray), Inter Typeface, Primary Color Blue Ramp, SwiftProp Style Guide (03), Typography Scale (H1-H5, P1-P3; size/line-height 36/44 down to 10/16)

### Community 14 - "UI Showcase Screens"
Cohesion: 0.50
Nodes (4): Dashboard Screen (leads analytics charts and tables), Properties Grid Screen (property cards, type tabs, Add Property), Sidebar Navigation (Dashboard, Properties, Projects, Leads, Agreements, Calendar...), 04 UI Design Showcase (SwiftProp)

### Community 15 - "Add Property Form"
Cohesion: 0.67
Nodes (4): 05 Property Add & View styleguide screen, Add Property form (name, photos, description, exclusive details, location), SwiftProp property listing grid and detail view (sidebar, type tabs, spec panel, action buttons), Segmented toggle and stepper input controls

## Knowledge Gaps
- **19 isolated node(s):** `Locale 'es' formatting (Intl date/currency USD)`, `src/ folder structure (components/ui, layout, properties, dashboard, pages, data, lib)`, `Task workflow (npm run build, fix errors, 5-line summary, stop)`, `README.md (Vite React TS template)`, `Oxlint configuration (type-aware rules)` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 103 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `lucide-react` connect `Topbar & Avatar` to `App Shell & Routing`, `package.json & Dependencies`, `Buttons, Cards & Select`, `Badges, Inputs & Tabs`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **What connects `Locale 'es' formatting (Intl date/currency USD)`, `src/ folder structure (components/ui, layout, properties, dashboard, pages, data, lib)`, `Task workflow (npm run build, fix errors, 5-line summary, stop)` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.12682926829268293 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Badges, Inputs & Tabs` to `App Shell & Routing`, `package.json & Dependencies`, `Buttons, Cards & Select`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `package.json & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06882591093117409 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell & Routing` to `package.json & Dependencies`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Should `Buttons, Cards & Select` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._