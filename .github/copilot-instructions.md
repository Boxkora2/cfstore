# GitHub Copilot Instructions  KoraChoco Coffee (cfstore)

## Project Overview
**KoraChoco Coffee** is a cozy coffee-shop showcase built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Displays a menu, product catalogue, and event board. All data is mocked in `/src/data`  no backend or cart yet.

---

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router, RSC by default) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + custom CSS variables |
| Animations | Framer Motion 12 |
| Icons | Emoji (inline)  no icon library yet |
| Package Manager | pnpm |

---

## Project Structure
```
src/
  app/
    globals.css           # Kora theme CSS variables
    layout.tsx            # Root layout  "Kora Coffee | Cozy & Vibing"
    page.tsx              # Home  animated menu with category filter + pagination
    products/
      page.tsx            # Product catalogue with ProductFilter
      [slug]/
        page.tsx          # Dynamic product detail
  components/
    Navbar.tsx            # Sticky nav with hover dropdown  "use client" (Framer Motion)
    EventBoard.tsx        # Promotional event display
    EventPopup.tsx        # Modal popup for events
    MenuItemCard.tsx      # Single menu item card
    ProductCard.tsx       # Product catalogue card
    ProductDetailView.tsx # Product detail layout
    ProductFilter.tsx     # Filter UI for products page
  data/
    menu.ts               # MenuItem type + mock menu items
    products.ts           # Product type + mock product data
```

---

## Theme System
CSS variables are defined in `src/app/globals.css`. All colors are warm coffee tones:

| Token | Value | Use |
|---|---|---|
| `--kora-cream` | `#FAF7F2` | Page background |
| `--kora-brown` | `#6F4E37` | Primary brand / borders |
| `--kora-dark` | `#3E2723` | Text headings |
| `--kora-beige` | `#D2B48C` | Subtle borders, dividers |
| `--kora-sage` | `#8FBC8F` | Accent / hover states |
| `--kora-latte` | `#FFF8E1` | Card backgrounds, hover fills |

**Always use Tailwind's CSS variable utilities  never hardcode hex values:**
```tsx
//  correct
className="bg-kora-cream text-kora-dark border-kora-brown"
className="hover:bg-kora-latte hover:text-kora-brown"

//  wrong
className="bg-[#FAF7F2] text-[#3E2723]"
style={{ background: "#6F4E37" }}
```

---

## Component Conventions

### Server vs Client Components
- Pages and layout sections are **Server Components** by default
- Add `"use client"` only when using hooks, event handlers, or Framer Motion
- Framer Motion (`motion.div`, `AnimatePresence`) always requires `"use client"`
- All current components that use Framer Motion or `useState` already have `"use client"`

### New Components
- Place in `src/components/`
- Use named exports: `export const MyComponent = () => {}`
- Accept `className?: string` prop whenever the component renders a root element
- Use `cn()` if conditional class merging is needed (install `clsx` + `tailwind-merge` and create `lib/utils.ts` with `cn()`)

### TypeScript
- Import data types from `@/data/menu`, `@/data/products`
- Always type component props with an interface
- **Never use `any`**  derive types from library signatures: `type T = NonNullable<Parameters<typeof fn>[1]>`

### Framer Motion  hydration safety
Never use `Math.random()` inside `transition` or `animate` props  causes server/client hydration mismatch. Pre-seed values in static arrays:
```tsx
//  correct  stable across server and client
const items = [
  { label: "A", delay: 0,   duration: 3.2 },
  { label: "B", delay: 0.6, duration: 4.0 },
];
//  wrong
transition={{ delay: Math.random() * 2 }}
```

### Standard Framer Motion entrance pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.07 }}
>
```

---

## Data Layer
All data lives in `src/data/*.ts`:

```ts
// data/menu.ts  types + mock data
export type Category = 'Specialty' | 'Espresso' | 'Non-Coffee' | 'Pastries';
export interface MenuItem { id, name, description, price, category, image, popular?, discount? }
export const menuItems: MenuItem[]

// data/products.ts  types + mock data
export interface Product { ... }
export const products: Product[]
```

When adding new data-fetching logic, keep it in the data files and mark with a `// TODO: Replace with API call` comment.

---

## Routing
| Route | Page |
|---|---|
| `/` | Home  animated menu with category filter and pagination |
| `/products` | Product catalogue with filters |
| `/products/[slug]` | Product detail |

---

## Images
- All images live in `public/images/`
- Use `next/image`  never `<img>` tags
- Add `sizes` prop when using `fill`
- Add `priority` on above-the-fold images

```tsx
//  correct
<Image src="/images/latte.png" alt="Kora Signature Latte" width={400} height={300} />
<Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 33vw" priority />
```

---

## CI / Quality
- GitHub Actions: `.github/workflows/ci.yml`  runs `pnpm lint` + `tsc --noEmit` on every push and PR
- TypeScript strict mode is on  no `any`, no unchecked indexing
- No testing library installed yet  add Vitest if writing utility functions

---

## Agent Skills
The following skills are installed in `.github/instructions/` and apply automatically:

### `vercel-react-best-practices`
**Apply when:** writing/refactoring any component or page in this project.
Key rules relevant to cfstore:
- `async-parallel`  when `products/[slug]/page.tsx` fetches multiple data sources, use `Promise.all()`
- `bundle-dynamic-imports`  use `next/dynamic` if EventPopup or heavy modals grow large
- `bundle-defer-third-party`  defer any future analytics scripts after hydration
- `rerender-memo`  memoize `MenuItemCard` / `ProductCard` if list re-renders become expensive
- `rerender-derived-state-no-effect`  derive `filteredItems` and `currentItems` during render (already correct in `page.tsx`)
- `rendering-conditional-render`  use ternary instead of `&&` for rendering optional UI
- `rendering-hoist-jsx`  hoist static JSX (hero section, static badges) outside component body
- `server-parallel-fetching`  restructure product detail page to parallel-fetch related data

### `vercel-composition-patterns`
**Apply when:** adding new props to existing components or building reusable UI.
Key rules relevant to cfstore:
- `architecture-avoid-boolean-props`  instead of `<MenuItemCard isPopular isDiscounted />` use composition or explicit variant components
- `architecture-compound-components`  if EventBoard/EventPopup grows, structure with shared context
- `patterns-explicit-variants`  create `<PopularMenuItemCard>` and `<DiscountedMenuItemCard>` instead of boolean flags
- `react19-no-forwardref`  React 19 is in use; skip `forwardRef`, pass refs as plain props

### `web-design-guidelines`
**Apply when:** asked to "review my UI", "check accessibility", "audit design", or "check UX".
Process:
1. Fetch live rules from `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
2. Read the target files
3. Report findings in `file:line` terse format

Key areas to watch in cfstore:
- **Accessibility**: category filter buttons need `aria-pressed` attribute
- **Focus states**: filter buttons and nav links need visible `:focus-visible` outlines
- **Images**: all `<Image>` components need meaningful `alt` text
- **Animation**: wrap Framer Motion animations in `prefers-reduced-motion` check
- **Touch**: filter buttons should have minimum 4444px touch target

---

## Do / Don't

**Do:**
- Use `bg-kora-*`, `text-kora-*`, `border-kora-*` Tailwind utilities for all colors
- Keep data in `src/data/*.ts` with `// TODO: Replace with API call` comments
- Use `next/image` with proper `sizes` and `priority`
- Pre-seed animation values  never `Math.random()` inside JSX props
- Use `"use client"` only for components with hooks or Framer Motion

**Don't:**
- Hardcode hex colors (`#FAF7F2`, `#6F4E37`, etc.)
- Use `<img>` tags  use `next/image`
- Add `"use client"` to page files unless absolutely necessary
- Use `any` type  derive types from library signatures
- Use boolean props for visual variants  use composition or explicit variant components
