## README file for ashterism

# Ashterism

Personal site built with **Jekyll (Minima theme)**.  
Hosted on **Cloudflare Pages**.  
Source controlled on GitHub.

Live site: https://ashterism.com

---

## How it works

- Static site generator: **Jekyll**
- Theme: `minima` (heavily customised)
- Markdown engine: `kramdown`
- Templates: Liquid
- Built at deploy time (Cloudflare Pages)

Liquid runs at build time, not in the browser.

---

## Folder structure (important bits)

- `_posts/` → blog posts (`YYYY-MM-DD-title.md`)
- `_layouts/` → page + post templates
- `_includes/` → reusable partials (head, nav, etc.)
- `assets/` → SCSS + images
- `css/override.css` → custom styling
- `_config.yml` → site configuration
- `archive.html` → category archive logic

---

## Adding a new post

1. Create file in `_posts/`:

YYYY-MM-DD-title.md


2. Include front matter:

---
layout: post
title: My Title
date: 2026-02-11
categories: [Astro]   # IMPORTANT
---


3.	Write content below the front matter.

If categories is missing, the post will not appear in the Archive category list.

⸻

### Archive logic

* Archive page groups posts by category using Liquid.
* Posts without categories are shown under Uncategorised.
* Liquid loops run at build time.

⸻

### Deployment

Cloudflare Pages:
* Auto-deploys on push to main
* Builds Jekyll site
* Serves static output

⸻

### Things to watch out for:
* Use categories: not category:
* Use relative_url in links
* Posts must live in _posts/
* Filenames must follow YYYY-MM-DD-title.md