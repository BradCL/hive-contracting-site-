# Hive Contracting — Website

Static marketing site for [Hive Contracting](https://www.facebook.com/Hivecontractinginc), a residential construction company serving Edmonton and Central Alberta. Framing specialists with full renovation and general contracting services.

## Stack

- Static HTML / CSS / JS — no frameworks, no build step
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/) with auto-deploy from `main`
- Custom domain: [hivecontractinginc.com](https://hivecontractinginc.com)
- Google Fonts: [Outfit](https://fonts.google.com/specimen/Outfit) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)

## Structure

```
index.html            Home
about.html            About / Mission
services.html         Services
contact.html          Contact (client + trades paths)
privacy-policy.html   Privacy policy (required before contact form goes live — PIPA)
css/styles.css        Shared stylesheet
js/main.js            Shared scripts
robots.txt            Search engine crawl rules
sitemap.xml           All 4 pages listed for indexing
img/
  logo-white.png      Full wordmark — white text, for dark backgrounds
  logo-black.png      Full wordmark — black text, for light backgrounds
  icon-white.png      H mark — for dark backgrounds (nav)
  icon-black.png      H mark — for light backgrounds
  banner.png          Hero background (⚠ compress before launch — currently 980KB)
  Business Card 1.png Reference only
  Business Card 2.png Reference only
```

## Status

Site is in active development. Homepage structure is complete with real copy and placeholder blocks for images and testimonials.

### To Do

**Assets needed from client:**
- [ ] Project photos (photo strip, services page — hero background is in place)
- [ ] Testimonials (pulled from Facebook reviews)
**Asset prep:**
- [ ] Compress `banner.png` — export as JPG at ~1920px wide, target under 200KB
- [ ] Favicon files — H mark at 32×32 (`favicon.png`) and 180×180 (`apple-touch-icon.png`)
- [ ] OG image — 1200×630 export for social sharing preview

**Pages:**
- [x] Home
- [ ] About
- [ ] Services
- [ ] Contact
- [ ] Privacy Policy (required before contact form goes live)

**Infrastructure:**
- [ ] Connect Cloudflare Pages to repo
- [ ] Configure custom domain
- [ ] Set up Cloudflare DNS

## Design Notes

- Dark theme — brand colors `#000000` (black), `#F5F5F0` (off-white), `#FEDF47` (yellow) confirmed from Adobe Illustrator source files
- CSS variables at the top of `styles.css` make rebranding a single-line change per color
- Responsive down to mobile with hamburger nav at 640px breakpoint
- Scroll-triggered fade-in animations (respects `prefers-reduced-motion`)
- Honeycomb SVG texture in hero section ties to brand name
- Service cards lead with renovations and GC work; framing positioned as the expertise anchor

## Author

Built by BradCL as both a client project and portfolio piece during NAIT Software Development program.
