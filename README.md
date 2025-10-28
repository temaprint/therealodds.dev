# The Real Odds

An educational website demonstrating the real mathematics and psychology behind gambling. Built with Astro and designed to help people understand why the odds are always against them.

## Features

- **Interactive Slot Machine Simulator**: Adjust probability settings and see real-time statistics showing how the odds work
- **Multilingual Support**: Full support for English, Spanish, Korean, Japanese, and German
- **Educational Articles**: Comprehensive articles about gambling mathematics, psychology, and responsible gaming
- **Comprehensive SEO**: Full meta tags, Open Graph, Twitter Cards, structured data, and hreflang tags
- **Responsive Design**: Mobile-first design that works on all devices
- **Language-Filtered Content**: Articles automatically filtered by language on each locale

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: Markdown with Astro Content Collections
- **Internationalization**: Custom i18n implementation with route-based locales

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Articles.astro         # Article listing component
│   │   ├── Education.astro        # Educational content section
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── LanguagePicker.astro   # Language switcher
│   │   ├── Resources.astro        # Help resources
│   │   ├── SlotMachine.astro      # Interactive simulator
│   │   └── Warnings.astro
│   ├── content/
│   │   ├── articles/              # Educational articles in all languages
│   │   └── config.ts              # Content collections schema
│   ├── i18n/
│   │   ├── ui.ts                  # Translation strings
│   │   └── utils.ts               # i18n helper functions
│   ├── layouts/
│   │   └── Layout.astro           # Main layout with SEO
│   └── pages/
│       ├── index.astro            # English homepage
│       ├── articles.astro         # English articles listing
│       ├── articles/
│       │   └── [...slug].astro    # Individual article pages
│       └── [...lang]/             # Localized pages
│           ├── index.astro
│           └── articles/
│               ├── index.astro
│               └── [...slug].astro
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Internationalization

The site supports 5 languages:
- English (default, `/`)
- Spanish (`/es/`)
- Korean (`/ko/`)
- Japanese (`/ja/`)
- German (`/de/`)

### Adding New Translations

1. Add translation strings to `src/i18n/ui.ts`
2. Create article files with the language suffix (e.g., `article-name-es.md`)
3. Set the `lang` field in the article frontmatter
4. Articles will automatically appear on the corresponding language version

## Content Management

### Articles

Articles are stored in `src/content/articles/` as Markdown files with frontmatter:

```markdown
---
title: "Article Title"
description: "Brief description"
publishDate: 2024-01-14
author: "The Real Odds Team"
tags: ["tag1", "tag2"]
featured: true
lang: en
---

# Article content here...
```

Articles are automatically filtered by language on each locale.

## SEO

The site includes comprehensive SEO features:
- Meta tags (title, description, keywords, author)
- Open Graph tags for social media sharing
- Twitter Card tags
- JSON-LD structured data (WebSite and Article schemas)
- Canonical URLs
- Language alternate links (hreflang)
- Robots directives

## Configuration

- **Site URL**: Set in `astro.config.mjs` (currently `https://therealodds.com`)
- **Languages**: Configure in `src/i18n/ui.ts`
- **Content Schema**: Modify in `src/content/config.ts`

## Educational Focus

This site is designed purely for educational purposes to help people understand:
- The mathematical reality of gambling odds
- Cognitive biases that affect gambling behavior
- The psychology behind gambling addiction
- Why "the house always wins" mathematically

The site does not promote gambling and provides resources for gambling addiction help.

## License

This project is for educational purposes.
