# Hive Contracting — Website

Static marketing site for [Hive Contracting](https://www.facebook.com/Hivecontractinginc), a residential construction company serving Edmonton and Central Alberta. Framing specialists with full renovation and general contracting services.

## Stack

- Static HTML / CSS / JS — no frameworks, no build step
- Hosted on [Netlify](https://www.netlify.com/) with auto-deploy from `main`
- Custom domain: [hivecontractinginc.com](https://hivecontractinginc.com)
- Google Fonts: [Outfit](https://fonts.google.com/specimen/Outfit) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
- Contact form: [Formspree](https://formspree.io/)

## Structure

```
index.html        Home — hero, services overview, photo strip, testimonials, service area map, CTA
about.html        About — mission statement, "how we work" pillars, values cards (Precision / Reliability / Accountability)
services.html     Services — detailed service cards (Renovations, Framing, GC) + service area map
gallery.html      Project gallery — filter bar (All / Bathroom / Exterior / Framing / General / Landscape) + lightbox
contact.html      Contact — two-path split (Start a Project / Join the Team) + Formspree contact form + info bar
css/styles.css    Shared stylesheet
js/main.js        Scroll fade-in, mobile nav toggle, gallery filter, gallery lightbox
robots.txt        Search engine crawl rules
sitemap.xml       All 5 pages listed for indexing
img/
  logo-white.png                  Full wordmark — white, for dark backgrounds
  logo-black.png                  Full wordmark — black (not currently used in any page)
  icon-white.png                  H mark — white (not currently used in any page)
  icon-black.png                  H mark — black (not currently used in any page)
  favicon.png                     Browser tab icon
  apple-touch-icon.png            iOS home screen icon
  og-image.jpg                    Social share image (1200×630)
  banner.avif                     Hero background (home + interior page headers)
  about-banner.avif               Team photo header (about page)
  project-1.avif – project-4.avif Homepage photo strip
  bathroom-remodel-1.avif – 2.avif   Bathroom remodel project
  tamarack-deck-1.avif – 3.avif      Tamarack deck project
  cedar-deck-1.avif                   Cedar deck project
  infill-1.avif – 2.avif              Infill framing project
  garage-rv-1.avif – 3.avif           Garage with RV bay project
  garage-1.avif – 2.avif              Garage build project
  hardscape-path-1.avif               Hardscape pathway project
  hardscape-steps-ret-wall-1.avif     Steps and retaining wall project
  ret-wall-garden-box-1.avif          Retaining wall and garden box project
  reroof-1.avif – 3.avif              Reroof project
  food-court-1.avif                   Outdoor food court project
  IMG_1541.avif                   Unused — candidate for a future project card
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
- Honeycomb SVG texture in hero — inline SVG data URI set as `background-image` on `.hero-bg::before` at 4% opacity; ties to brand name
- Schema.org `GeneralContractor` structured data on `index.html` for local search visibility
- Service cards lead with renovations and GC work; framing positioned as the expertise anchor
- Project images use AVIF format for performance; `og-image.jpg` remains JPEG for broad social platform compatibility
- Image filenames follow lowercase-hyphenated-sequential convention (`project-name-1.avif`)

## Author

Built by BradCL as both a client project and portfolio piece during NAIT Software Development program.
