
```
frontend
├─ AGENTS.md
├─ animations
├─ app
│  ├─ api
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ page.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  └─ [locale]
│     ├─ clients
│     │  └─ page.tsx
│     ├─ contact
│     │  └─ page.tsx
│     ├─ equipment
│     │  ├─ equipment-client.tsx
│     │  ├─ page.tsx
│     │  └─ [slug]
│     ├─ error.tsx
│     ├─ loading.tsx
│     ├─ news
│     │  ├─ page.tsx
│     │  └─ [slug]
│     │     └─ page.tsx
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
│  ├─ news
│  │  ├─ detail-page
│  │  │  ├─ news-breadcrumb.tsx
│  │  │  ├─ news-content.tsx
│  │  │  ├─ news-detail.tsx
│  │  │  ├─ news-hero.tsx
│  │  │  └─ related-news.tsx
│  │  ├─ featured
│  │  │  └─ featured-news.tsx
│  │  ├─ filters
│  │  │  ├─ category-filter.tsx
│  │  │  ├─ news-filters.tsx
│  │  │  ├─ reset-filter.tsx
│  │  │  └─ search-box.tsx
│  │  ├─ hero
│  │  │  ├─ hero-background.tsx
│  │  │  ├─ hero-content.tsx
│  │  │  └─ hero.tsx
│  │  ├─ hooks
│  │  │  └─ use-news.ts
│  │  ├─ news-grid
│  │  │  ├─ news-card.tsx
│  │  │  ├─ news-grid.tsx
│  │  │  └─ news-pagination.tsx
│  │  ├─ news.data.ts
│  │  ├─ news.tsx
│  │  └─ types
│  │     └─ news.ts
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
│  │  │  ├─ project-gallery-modal.tsx
│  │  │  ├─ project-grid.tsx
│  │  │  ├─ project-pagination.tsx
│  │  │  └─ project-table.tsx
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
│  ├─ hero-stats.ts
│  └─ project
├─ eslint.config.mjs
├─ hooks
│  └─ use-scroll.ts
├─ i18n
│  ├─ navigation.ts
│  └─ request.ts
├─ lib
│  ├─ animation.ts
│  ├─ api.ts
│  ├─ fonts.ts
│  ├─ media-url.ts
│  ├─ metadata.ts
│  └─ utils.ts
├─ messages
│  ├─ en.json
│  └─ id.json
├─ middleware_old.ts
├─ nex.config.ts_old
├─ next-env.d.ts
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
│  │  ├─ 1.jpeg
│  │  ├─ 10.jpeg
│  │  ├─ 11.jpg
│  │  ├─ 12.jpg
│  │  ├─ 13.jpg
│  │  ├─ 14.png
│  │  ├─ 15.jpg
│  │  ├─ 16.png
│  │  ├─ 17.jpeg
│  │  ├─ 2.jpg
│  │  ├─ 3.png
│  │  ├─ 4.jpg
│  │  ├─ 5.jpeg
│  │  ├─ 6.jpg
│  │  ├─ 7.jpg
│  │  ├─ 8.jpg
│  │  ├─ 9.png
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
│  │  ├─ contact
│  │  │  └─ hero-contact.png
│  │  ├─ news
│  │  │  ├─ news-1.png
│  │  │  ├─ news-2.png
│  │  │  ├─ news-3.png
│  │  │  ├─ news-4.png
│  │  │  ├─ news-5.png
│  │  │  ├─ news-6.png
│  │  │  ├─ news-7.png
│  │  │  ├─ news-8.png
│  │  │  ├─ news-banner-1.png
│  │  │  ├─ news-banner-2.png
│  │  │  ├─ news-banner-3.png
│  │  │  ├─ news-banner-4.png
│  │  │  ├─ news-banner-5.png
│  │  │  ├─ news-banner-6.png
│  │  │  ├─ news-banner-7.png
│  │  │  └─ news-banner-8.png
│  │  ├─ project
│  │  │  ├─ cta-background-v1.png
│  │  │  ├─ gallery
│  │  │  │  ├─ project-1-1.png
│  │  │  │  ├─ project-1-2.png
│  │  │  │  └─ project-1-3.png
│  │  │  ├─ hero-project-v1.png
│  │  │  ├─ project-1.png
│  │  │  ├─ project-2.png
│  │  │  ├─ project-3.png
│  │  │  ├─ project-4.png
│  │  │  ├─ project-5.png
│  │  │  └─ project-6.png
│  │  └─ services
│  │     ├─ disposal-handling.png
│  │     ├─ hero-v1.png
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
├─ repositories
│  ├─ equipment.repository.ts
│  ├─ home.repository.ts
│  ├─ news.repository.ts
│  └─ project.repository.ts
├─ services
│  ├─ equipment.service.ts
│  ├─ home.service.ts
│  ├─ news.service.ts
│  └─ project.service.ts
├─ store
├─ styles
├─ tsconfig.json
├─ types
│  ├─ api.ts
│  ├─ equipment.ts
│  ├─ home.ts
│  ├─ navigation.ts
│  ├─ news.ts
│  └─ project.ts
└─ utils

```