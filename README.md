# BufferSpace MVP site

This is a static MVP for the BufferSpace website. It is designed to deploy without a build step on Vercel or Cloudflare Pages.

## What is included

- One-page SEO-focused landing page for Gyotoku and Ojima
- Dedicated detail pages at the legacy Jimdo URLs for Gyotoku and Ojima
- Real space photos from the current public website
- Clear routes for LINE, Upnow web booking, and long-term inquiry
- LocalBusiness and FAQ structured data
- Redirect rules for the old Jimdo URLs
- `robots.txt` and `sitemap.xml`

## Update points

- Main copy: edit `index.html`
- Visual design: edit `styles.css`
- Inquiry copy-and-open behavior: edit `script.js`
- Deployment redirects: edit `vercel.json` and `_redirects`
- SEO sitemap date: edit `sitemap.xml`

## Next recommended upgrades

- Replace the MVP inquiry handoff with a real Vercel Function or Supabase-backed form.
- Add pricing tables after final prices and campaign dates are confirmed.
- Replace or supplement the copied legacy photos with fresh wide hero photos when available.
