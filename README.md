# Hive Contracting — Website

Static marketing site for [Hive Contracting](https://www.facebook.com/Hivecontractinginc), a residential construction company serving Edmonton and Central Alberta. Framing specialists with full renovation and general contracting services.

## Stack

- Static HTML / CSS / JS — no frameworks, no build step
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/) with auto-deploy from `main`
- Custom domain: [hivecontractinginc.com](https://hivecontractinginc.com)
- Google Fonts: [Outfit](https://fonts.google.com/specimen/Outfit) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
- Contact form: [Formspree](https://formspree.io/)

## Structure

```
index.html        Home
about.html        About / Mission
services.html     Services detail + service area map
gallery.html      Project gallery with filter + lightbox
contact.html      Contact (client + trades paths)
css/styles.css    Shared stylesheet
js/main.js        Shared scripts (nav, animations, gallery)
robots.txt        Search engine crawl rules
sitemap.xml       All 5 pages listed for indexing
img/
  logo-white.png                  Full wordmark — white, for dark backgrounds
  logo-black.png                  Full wordmark — black, for light backgrounds
  icon-white.png                  H mark — white, for dark backgrounds
  icon-black.png                  H mark — black, for light backgrounds
  banner.jpg                      Hero background (home page)
  about-banner.jpg                Team photo header (about page)
  og-image.jpg                    Social share image (1200×630)
  project-1.jpg – project-4.jpg   Homepage photo strip
  bathroom-remodel-1.jpg – 2.jpg  Bathroom remodel project
  tamarack-deck-1.jpg – 3.jpg     Tamarack deck project
  cedar-deck-1.jpg                Cedar deck project
  infill-1.jpg – 2.jpg            Infill framing project
  garage-rv-1.jpg – 3.jpg         Garage with RV bay project
  garage-1.jpg – 2.jpg            Garage build project
  hardscape-path-1.jpg            Hardscape pathway project
  hardscape-steps-ret-wall-1.jpg  Steps and retaining wall project
  ret-wall-garden-box-1.jpg       Retaining wall and garden box project
  reroof-1.jpg – 3.jpg            Reroof project
  food-court-1.jpg                Outdoor food court project
```

## Status

Site is live at [hivecontractinginc.com](https://hivecontractinginc.com). All five pages are complete with real copy, photos, and testimonials.

### Remaining

- [ ] Privacy policy page — recommended before the contact form sees significant traffic (PIPA, Alberta)

## Design Notes

- Dark theme — brand colors `#000000` (black), `#F5F5F0` (off-white), `#FEDF47` (yellow) confirmed from Adobe Illustrator source files
- CSS variables at the top of `styles.css` make rebranding a single-line change per color
- Responsive down to mobile with hamburger nav at 640px breakpoint
- Scroll-triggered fade-in animations (respects `prefers-reduced-motion`)
- Honeycomb SVG texture in hero section ties to brand name
- Service cards lead with renovations and GC work; framing positioned as the expertise anchor
- Image filenames follow lowercase-hyphenated-sequential convention (`project-name-1.jpg`)

## Author

Built by BradCL as both a client project and portfolio piece during NAIT Software Development program.
