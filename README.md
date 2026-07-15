This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
frontend
├─ AGENTS.md
├─ animations
├─ app
│  ├─ api
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  └─ [locale]
│     ├─ about
│     │  └─ page.tsx
│     ├─ clients
│     │  └─ page.tsx
│     ├─ contact
│     │  └─ page.tsx
│     ├─ equipment
│     │  ├─ page.tsx
│     │  └─ [slug]
│     ├─ error.tsx
│     ├─ layout.tsx
│     ├─ loading.tsx
│     ├─ news
│     │  ├─ page.tsx
│     │  └─ [slug]
│     ├─ not-found.tsx
│     ├─ page.tsx
│     ├─ projects
│     │  ├─ page.tsx
│     │  └─ [slug]
│     │     └─ page.tsx
│     ├─ qhse
│     │  └─ page.tsx
│     ├─ quote
│     │  └─ page.tsx
│     └─ services
│        ├─ page.tsx
│        └─ [slug]
│           └─ page.tsx
├─ CLAUDE.md
├─ components
│  ├─ about
│  │  ├─ about.tsx
│  │  ├─ clients
│  │  │  ├─ client-marquee.tsx
│  │  │  ├─ clients.data.ts
│  │  │  └─ trusted-clients.tsx
│  │  ├─ hero
│  │  │  ├─ about-hero.tsx
│  │  │  ├─ breadcrumb.tsx
│  │  │  ├─ hero-background.tsx
│  │  │  └─ hero-content.tsx
│  │  ├─ timeline
│  │  │  ├─ timeline-card.tsx
│  │  │  ├─ timeline-item.tsx
│  │  │  ├─ timeline.data.ts
│  │  │  └─ timeline.tsx
│  │  ├─ values
│  │  │  ├─ value-card.tsx
│  │  │  ├─ values.data.ts
│  │  │  └─ values.tsx
│  │  └─ who-we-are
│  │     ├─ about-content.tsx
│  │     ├─ about-image.tsx
│  │     └─ about-preview.tsx
│  ├─ card
│  │  ├─ certificate-card
│  │  ├─ clinet-card
│  │  ├─ equipment-card
│  │  ├─ news-card
│  │  ├─ project-card
│  │  └─ service-card
│  ├─ common
│  │  ├─ badge
│  │  │  └─ section-badge.tsx
│  │  ├─ button
│  │  │  └─ primary-button.tsx
│  │  ├─ card
│  │  │  └─ glass-card.tsx
│  │  ├─ container
│  │  │  └─ container.tsx
│  │  ├─ empty-state
│  │  ├─ loading
│  │  │  └─ loading.tsx
│  │  ├─ page-header
│  │  │  └─ page-header.tsx
│  │  ├─ section
│  │  │  ├─ section-header.tsx
│  │  │  ├─ section-title.tsx
│  │  │  └─ section.tsx
│  │  ├─ section-title
│  │  │  └─ section-title.tsx
│  │  ├─ seo
│  │  └─ timeline
│  ├─ contact
│  │  ├─ contact.data.ts
│  │  ├─ contact.tsx
│  │  ├─ cta
│  │  │  └─ contact-cta.tsx
│  │  ├─ faq
│  │  │  ├─ faq-item.tsx
│  │  │  └─ faq.tsx
│  │  ├─ form
│  │  │  └─ contact-form.tsx
│  │  ├─ hero
│  │  │  └─ hero.tsx
│  │  ├─ info
│  │  │  └─ contact-info.tsx
│  │  ├─ map
│  │  │  └─ office-map.tsx
│  │  └─ types
│  │     └─ contact.ts
│  ├─ equipment
│  │  ├─ cta
│  │  │  └─ cta.tsx
│  │  ├─ detail-modal
│  │  │  ├─ equipment-application-card.tsx
│  │  │  ├─ equipment-feature-card.tsx
│  │  │  ├─ equipment-gallery-thumb.tsx
│  │  │  ├─ equipment-modal-application.tsx
│  │  │  ├─ equipment-modal-cta.tsx
│  │  │  ├─ equipment-modal-feature.tsx
│  │  │  ├─ equipment-modal-gallery.tsx
│  │  │  ├─ equipment-modal-header.tsx
│  │  │  ├─ equipment-modal-specs.tsx
│  │  │  ├─ equipment-modal.tsx
│  │  │  └─ equipment-spec-item.tsx
│  │  ├─ equipment-grid
│  │  │  ├─ empty-state.tsx
│  │  │  ├─ equipment-badge.tsx
│  │  │  ├─ equipment-card.tsx
│  │  │  ├─ equipment-grid.tsx
│  │  │  ├─ equipment-modal.tsx
│  │  │  ├─ equipment-pagination.tsx
│  │  │  └─ equipment-spec.tsx
│  │  ├─ equipment.constants.ts
│  │  ├─ equipment.data.ts
│  │  ├─ equipment.tsx
│  │  ├─ filters
│  │  │  ├─ application-filter.tsx
│  │  │  ├─ capacity-filter.tsx
│  │  │  ├─ category-filter.tsx
│  │  │  ├─ equipment-filters.tsx
│  │  │  ├─ reset-filter.tsx
│  │  │  ├─ search-box.tsx
│  │  │  └─ status-filter.tsx
│  │  ├─ hero
│  │  │  ├─ hero-background.tsx
│  │  │  ├─ hero-content.tsx
│  │  │  └─ hero.tsx
│  │  ├─ hooks
│  │  │  ├─ use-equipment-filter.ts
│  │  │  ├─ use-equipment-modal.ts
│  │  │  └─ use-pagination.ts
│  │  ├─ toolbar
│  │  │  ├─ equipment-count.tsx
│  │  │  ├─ equipment-sort.tsx
│  │  │  ├─ equipment-toolbar.tsx
│  │  │  └─ equipment-view.tsx
│  │  ├─ types
│  │  │  └─ equipment.ts
│  │  └─ utils
│  │     ├─ filter.ts
│  │     ├─ pagination.ts
│  │     └─ sort.ts
│  ├─ forms
│  │  ├─ contact-form
│  │  └─ quote-form
│  ├─ home
│  │  ├─ about-preview
│  │  │  ├─ about-button.tsx
│  │  │  ├─ about-content.tsx
│  │  │  ├─ about-features.tsx
│  │  │  ├─ about-image.tsx
│  │  │  ├─ about-preview.tsx
│  │  │  ├─ about-timeline.tsx
│  │  │  └─ about-video.tsx
│  │  ├─ cta
│  │  │  ├─ cta-background.tsx
│  │  │  ├─ cta-buttons.tsx
│  │  │  └─ cta.tsx
│  │  ├─ equipment-preview
│  │  ├─ hero
│  │  │  ├─ floating-actions.tsx
│  │  │  ├─ hero-background.tsx
│  │  │  ├─ hero-buttons.tsx
│  │  │  ├─ hero-content.tsx
│  │  │  ├─ hero-stat-card.tsx
│  │  │  ├─ hero-stats.data.ts
│  │  │  ├─ hero-stats.tsx
│  │  │  ├─ hero-video.tsx
│  │  │  ├─ hero.tsx
│  │  │  └─ scroll-indicator.tsx
│  │  ├─ industries
│  │  │  ├─ industries-grid-mobile.tsx
│  │  │  ├─ industries-grid.tsx
│  │  │  ├─ industries-header.tsx
│  │  │  ├─ industries.data.ts
│  │  │  ├─ industries.tsx
│  │  │  └─ industry-card.tsx
│  │  ├─ news
│  │  │  ├─ news-card.tsx
│  │  │  ├─ news-grid-mobile.tsx
│  │  │  ├─ news-grid.tsx
│  │  │  ├─ news-header.tsx
│  │  │  ├─ news-preview-mobile.tsx
│  │  │  ├─ news-preview.tsx
│  │  │  └─ news.data.ts
│  │  ├─ projects
│  │  │  ├─ commitment.data.ts
│  │  │  ├─ commitment.tsx
│  │  │  ├─ iso-card.tsx
│  │  │  ├─ iso.data.ts
│  │  │  ├─ project-card.tsx
│  │  │  ├─ project-status.tsx
│  │  │  ├─ projects-carousel.tsx
│  │  │  ├─ projects.data.ts
│  │  │  └─ projects.tsx
│  │  ├─ qhse
│  │  │  ├─ certification.tsx
│  │  │  ├─ qhse-card.tsx
│  │  │  ├─ qhse.data.ts
│  │  │  └─ qhse.tsx
│  │  ├─ services
│  │  │  ├─ service-card.tsx
│  │  │  ├─ service-icons.tsx
│  │  │  ├─ services-carousel.tsx
│  │  │  ├─ services.data.ts
│  │  │  └─ services.tsx
│  │  ├─ statistics
│  │  ├─ trusted-clients
│  │  │  ├─ trusted-clients-carousel.tsx
│  │  │  ├─ trusted-clients-item.tsx
│  │  │  ├─ trusted-clients.data.ts
│  │  │  └─ trusted-clients.tsx
│  │  └─ why-choose
│  │     ├─ why-card.tsx
│  │     ├─ why-choose.tsx
│  │     └─ why.data.ts
│  ├─ icons
│  ├─ layout
│  │  ├─ app-shell.tsx
│  │  ├─ breadcrumb
│  │  ├─ footer
│  │  │  ├─ footer-bottom.tsx
│  │  │  ├─ footer-brand.tsx
│  │  │  ├─ footer-contact.tsx
│  │  │  ├─ footer-links.tsx
│  │  │  ├─ footer-services.tsx
│  │  │  └─ footer.tsx
│  │  ├─ footer_old
│  │  │  ├─ footer-links.tsx
│  │  │  └─ footer.tsx
│  │  ├─ language-switcher
│  │  ├─ navbar
│  │  │  ├─ desktop-menu.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ language-switcher.tsx
│  │  │  ├─ logo.tsx
│  │  │  ├─ mobile-menu.tsx
│  │  │  ├─ nav-actions.tsx
│  │  │  ├─ nav-link.tsx
│  │  │  ├─ navbar.config.ts
│  │  │  └─ navbar.tsx
│  │  └─ sidebar
│  ├─ news
│  ├─ project
│  │  ├─ detail-page
│  │  │  ├─ project-cta.tsx
│  │  │  ├─ project-detail.tsx
│  │  │  ├─ project-equipment.tsx
│  │  │  ├─ project-gallery.tsx
│  │  │  ├─ project-header.tsx
│  │  │  ├─ project-overview.tsx
│  │  │  ├─ project-related.tsx
│  │  │  ├─ project-results.tsx
│  │  │  ├─ project-scope.tsx
│  │  │  └─ project-timeline.tsx
│  │  ├─ filters
│  │  │  ├─ category-filter.tsx
│  │  │  ├─ project-filters.tsx
│  │  │  ├─ reset-filter.tsx
│  │  │  ├─ search-box.tsx
│  │  │  └─ year-filter.tsx
│  │  ├─ hero
│  │  │  └─ hero.tsx
│  │  ├─ project-grid
│  │  │  ├─ empty-state.tsx
│  │  │  ├─ project-badge.tsx
│  │  │  ├─ project-card.tsx
│  │  │  ├─ project-grid.tsx
│  │  │  └─ project-pagination.tsx
│  │  ├─ project.data.ts
│  │  ├─ project.tsx
│  │  ├─ toolbar
│  │  │  ├─ project-sort.tsx
│  │  │  ├─ project-toolbar.tsx
│  │  │  └─ project-view.tsx
│  │  └─ types
│  │     ├─ project.data.ts
│  │     └─ project.ts
│  ├─ sections
│  │  ├─ about
│  │  ├─ clients
│  │  ├─ contact
│  │  ├─ cta
│  │  ├─ equipment
│  │  ├─ hero
│  │  ├─ news
│  │  ├─ projects
│  │  ├─ qhse
│  │  └─ services
│  ├─ services
│  │  ├─ cta
│  │  ├─ detail-services
│  │  │  ├─ detail-service-card.tsx
│  │  │  ├─ detail-services-mobile.tsx
│  │  │  ├─ detail-services.tsx
│  │  │  └─ services.data.ts
│  │  ├─ faq
│  │  │  ├─ faq-item.tsx
│  │  │  ├─ faq.data.ts
│  │  │  └─ faq.tsx
│  │  ├─ hero
│  │  │  ├─ hero-background.tsx
│  │  │  ├─ hero-content.tsx
│  │  │  ├─ hero-image.tsx
│  │  │  └─ hero.tsx
│  │  ├─ industries
│  │  │  ├─ industries-mobile.tsx
│  │  │  ├─ industries.data.ts
│  │  │  ├─ industries.tsx
│  │  │  └─ industry-card.tsx
│  │  ├─ modal
│  │  │  ├─ modal-info-card.tsx
│  │  │  ├─ service-modal-cta.tsx
│  │  │  ├─ service-modal-feature-card.tsx
│  │  │  ├─ service-modal-features.tsx
│  │  │  ├─ service-modal-gallery.tsx
│  │  │  ├─ service-modal-header.tsx
│  │  │  ├─ service-modal-overview.tsx
│  │  │  └─ service-modal.tsx
│  │  ├─ overview
│  │  │  ├─ overview-card.tsx
│  │  │  ├─ overview-mobile.tsx
│  │  │  ├─ overview.data.ts
│  │  │  └─ overview.tsx
│  │  ├─ process
│  │  │  ├─ process-card.tsx
│  │  │  ├─ process-mobile.tsx
│  │  │  ├─ process.data.ts
│  │  │  └─ process.tsx
│  │  ├─ service-grid
│  │  ├─ service.data.ts
│  │  └─ services.tsx
│  └─ ui
│     ├─ button.tsx
│     ├─ dropdown-menu.tsx
│     ├─ navigation-menu.tsx
│     ├─ separator.tsx
│     └─ sheet.tsx
├─ components.json
├─ config
│  ├─ company.ts
│  ├─ metadata.ts
│  ├─ navigation.ts
│  ├─ site.ts
│  └─ theme.ts
├─ constants
│  └─ services.ts
├─ data
│  └─ hero-stats.ts
├─ eslint.config.mjs
├─ frontend.zip
├─ hooks
│  └─ use-scroll.ts
├─ i18n
│  ├─ navigation.ts
│  ├─ request.ts
│  └─ routing.ts
├─ lib
│  ├─ animation.ts
│  ├─ fonts.ts
│  ├─ metadata.ts
│  └─ utils.ts
├─ messages
│  ├─ en.json
│  └─ id.json
├─ middleware_old.ts
├─ nex.config.ts_old
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ providers
│  └─ IntlProvider.tsx
├─ proxy.ts
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ home
│  │  ├─ akr.png
│  │  ├─ chevron.png
│  │  ├─ exxonmobil.png
│  │  ├─ hero-1.png
│  │  ├─ hero.png
│  │  ├─ pelindo.png
│  │  ├─ pertamina.png
│  │  ├─ shell.png
│  │  ├─ tank-terminal.png
│  │  ├─ vopak.png
│  │  └─ worker.png
│  ├─ images
│  │  ├─ about.png
│  │  ├─ contact
│  │  │  └─ hero-contact.png
│  │  ├─ project
│  │  │  ├─ cta-background.png
│  │  │  ├─ gallery
│  │  │  │  ├─ project-1-1.png
│  │  │  │  ├─ project-1-2.png
│  │  │  │  └─ project-1-3.png
│  │  │  ├─ hero-project.png
│  │  │  ├─ project-1.png
│  │  │  ├─ project-2.png
│  │  │  ├─ project-3.png
│  │  │  ├─ project-4.png
│  │  │  ├─ project-5.png
│  │  │  └─ project-6.png
│  │  └─ services
│  │     ├─ disposal-handling.png
│  │     ├─ hero.png
│  │     ├─ pumping.png
│  │     ├─ rafting.png
│  │     ├─ sludge-removal.png
│  │     ├─ tank-cleaning.png
│  │     └─ tank-washing.png
│  ├─ logo
│  │  ├─ 300ppi
│  │  │  ├─ logo-full.png
│  │  │  └─ logo-icon.png
│  │  ├─ logo-full.png
│  │  └─ logo-icon.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ services
├─ store
├─ structure.txt
├─ styles
├─ tsconfig.json
├─ types
│  └─ navigation.ts
└─ utils

```