# XE Labs SEO launch checklist

## Google Search Console

1. Add `xelabs.in` as a Domain property in Google Search Console.
2. Verify ownership by adding Google's DNS TXT record at the domain provider.
3. Submit `https://xelabs.in/sitemap.xml` in the Sitemaps report.
4. Use URL Inspection on:
   - `https://xelabs.in/`
   - `https://xelabs.in/careers`
   - `https://xelabs.in/build-sprint/influenceos`
   - `https://xelabs.in/build-sprint/editdna`
   - `https://xelabs.in/build-sprint/voicecore`
   - `https://xelabs.in/contact`
5. Request indexing for each inspected canonical URL after the production deployment is live.
6. Review the Page indexing and Core Web Vitals reports after Google has recrawled the site. Discovery can begin quickly, but indexing and rankings have no guaranteed timeline.
7. Check discovery periodically with `site:xelabs.in`, `xelabs.in`, `XE Labs`, and `XE Labs Build Sprint 2026`.

## Pre-launch verification

- Confirm every production page returns HTTP 200 and redirects consistently to HTTPS and one hostname form.
- Confirm `https://xelabs.in/robots.txt`, `https://xelabs.in/sitemap.xml`, and `https://xelabs.in/llms.txt` return HTTP 200.
- Confirm `/careers/apply` contains `noindex, follow` and is absent from the sitemap.
- Test canonical, Open Graph, and Twitter metadata in rendered HTML.
- Validate Organization, WebSite, BreadcrumbList, Event, FAQPage, WebPage, and TechArticle JSON-LD with Schema.org Validator and Google's Rich Results Test. The Event intentionally omits dates until exact dates are confirmed.
- Test LinkedIn previews with LinkedIn Post Inspector after deployment.
- Keep the published IST schedule aligned across the Careers page, application window, Event JSON-LD, `llms.txt`, and external announcements. Update all locations together if an official date changes.
- Keep the LinkedIn company URL, contact emails, legal-entity wording, and Build Sprint facts consistent across the website and external profiles.

## Ongoing maintenance

- Update sitemap `lastModified` dates when page content materially changes.
- Keep FAQ answers aligned with visible program terms.
- Compress new images, provide descriptive alt text, set dimensions, and use `next/image` for content imagery.
- Review Search Console for indexing errors, duplicate canonicals, manual actions, and Core Web Vitals regressions.
- Do not create thin keyword pages, doorway pages, fabricated reviews, or unverifiable client, advisor, or employment claims.
