# Deep Winter Portfolio Redesign Plan

## Objective

Redesign the personal website as a responsive portfolio experience that combines:

- A deep winter color palette with cool, high-contrast colors.
- Material 3 structure, hierarchy, and interaction patterns.
- Restrained glassmorphism through translucent surfaces, subtle blur, borders, and layered depth.
- Bento-style modular layouts for the site content.
- Responsive behavior across mobile, tablet, and desktop web.
- Purposeful hover, press, entrance, and fade animations.

The deep winter design applies to both light and dark appearance modes. The existing light and dark banner images, crop, and reflected-text placement remain unchanged as the visual anchor of the home page. The rest of the site will be reorganized into a consistent modular system.

## Delivery Strategy

The redesign will be implemented in stages rather than treating every route as a single simultaneous rewrite:

1. Establish the shared theme, responsive layout system, glass surfaces, bento modules, and motion primitives.
2. Complete the home page first and use it as the visual reference for the rest of the site.
3. Apply the established home-page design language to About, Projects, Blog, and Contact.
4. Verify the complete system across mobile, tablet, and desktop before considering the redesign finished.

## Design Principles

1. Keep the interface content-focused and easy to scan.
2. Use glass effects selectively so text remains legible and the design does not become visually noisy.
3. Use Material 3 conventions for spacing, elevation, state changes, navigation, and interaction feedback.
4. Use bento modules to establish hierarchy through size and placement rather than through excessive decoration.
5. Preserve feature parity and existing content while improving presentation and responsiveness.
6. Respect reduced-motion preferences and keep animations short and functional.

## Phase 1: Foundation

### Theme Tokens

- Replace the current color theme with semantic deep winter tokens for both light and dark appearance modes.
- Define tokens for page backgrounds, elevated and glass surfaces, text, accents, borders, links, interaction states, shadows, and overlays.
- Add reusable values for corner radii, elevation, opacity, blur strength, content widths, and animation timing.
- Retain language and social-network brand colors where they communicate recognizable meaning.
- Ensure text and interactive controls maintain accessible contrast.

### Shared Components

- Extend the themed standard components to consume the new semantic tokens.
- Create reusable primitives for glass surfaces, bento modules, section headings, icon buttons, action links, responsive page containers, and animated entrance wrappers.
- Keep component APIs small and consistent with existing React Native and Expo conventions.
- Avoid nested card-on-card layouts.

### Responsive Layout

- Define explicit mobile, tablet, and desktop breakpoints.
- Use a single-column layout on narrow screens.
- Use two-column and asymmetric bento grids on tablet and desktop where content supports them.
- Constrain readable text widths while allowing visual modules to use the available viewport.
- Verify that navigation, type, buttons, and bento modules do not overflow or overlap at supported sizes.

## Phase 2: Navigation And App Shell

- Use a floating glass navigation bar at the top on web and tablet, and at the bottom on mobile.
- Preserve the Home, About, Projects, Blog, and Contact routes.
- Keep the appearance toggle available on every route.
- Give navigation items clear hover, focus, active, and pressed states.
- Use a translucent header only where background content provides sufficient contrast.
- Preserve the initial app fade while aligning its duration with the shared motion system.

## Phase 3: Home Page

- Preserve the existing light and dark banner images without changing their crop, content positioning, or reflected-text placement.
- Keep the banner as the first-viewport visual anchor.
- Ensure the next content section remains partially visible beneath the banner at common viewport sizes.
- Replace the current vertical card stack with a responsive bento layout.
- Organize the existing introduction, projects, and contact content into modules with varied but stable spans.
- Add concise icon-supported actions for About, Projects, and Contact.
- Add subtle module entrance animation, pointer hover feedback, and touch press feedback.

## Phase 4: About Page

- Convert the current repeated sections into a modular bento composition.
- Preserve education, professional experience, technical skills, personal information, and resume content.
- Use module size and placement to emphasize professional experience and technical skills.
- Keep timelines, coursework, and highlights easy to scan.
- Keep useful existing images where they improve the content.
- Remove existing images when doing so improves hierarchy, responsiveness, or clarity.
- Use gradients only as temporary placeholders in locations where a future image would add meaningful visual or contextual value.
- Do not add gradients to sections that work better as text-focused modules.
- Keep the resume download action visually distinct and accessible.
- Collapse the layout predictably from an asymmetric grid to a single-column reading order on mobile.

## Phase 5: Projects Page

- Present repositories in a responsive bento grid instead of a single vertical list.
- Preserve sorting by most recently updated repository.
- Keep language indicators, descriptions, GitHub links, and live-demo links.
- Add explicit loading, empty, and error states.
- Prevent nested presses so repository and live-demo actions behave independently.
- Add card hover and press feedback without changing module dimensions.
- Use stable repository keys instead of array indexes.

## Phase 6: Contact Page

- Recompose the contact content into a compact modular layout.
- Give each communication channel a clear icon, label, and action.
- Preserve Email, LinkedIn, GitHub, and Instagram links.
- Ensure links open the correct destination and expose clear hover, focus, and pressed states.
- Keep the primary contact message prominent without introducing a marketing-style hero.

## Phase 7: Blog Page

- Present Markdown articles from the `blog` directory as responsive preview cards.
- Derive article titles, excerpts, reading times, and search content from the Markdown files.
- Treat larger numeric filenames as newer posts.
- Default article sorting to newest first and allow switching between newest-first and oldest-first order.
- Provide local search across article titles, excerpts, and full content.
- Render each article on its own route with readable typography and native-safe Markdown formatting.

## Phase 8: Motion And Interaction

- Build a shared motion vocabulary for page fades, module entrances, hover elevation, press feedback, and navigation transitions.
- Prefer opacity and transform animations for performance.
- Disable pointer-only hover behavior on touch devices.
- Honor reduced-motion preferences by removing or shortening nonessential movement.
- Avoid continuous decorative animation.

## Phase 9: Verification

- Run ESLint and TypeScript checks.
- Fix existing type errors that block reliable validation of the redesign.
- Test navigation and all external links.
- Verify loading, error, empty, hover, focus, pressed, light, and dark states.
- Inspect the site at representative mobile, tablet, and desktop viewport sizes.
- Confirm there is no clipped text, layout shift, overlap, inaccessible contrast, or blank media.
- Run the Expo web development server and visually review every route before completion.

## Acceptance Criteria

- The site has a coherent deep winter identity in every supported appearance mode.
- Material 3 structure and restrained glass surfaces are applied consistently.
- Home, About, Projects, Blog, and Contact use responsive bento or modular layouts.
- The existing light and dark banner images, crop, and reflected-text placement remain unchanged.
- Navigation and appearance switching work across all routes.
- Hover, press, focus, entrance, and reduced-motion states are implemented appropriately.
- All content is usable on mobile, tablet, and desktop without overflow or overlap.
- Repository loading failures and empty results are handled visibly.
- Blog search, numeric sorting, previews, and article routes work correctly.
- Lint and TypeScript checks pass.
