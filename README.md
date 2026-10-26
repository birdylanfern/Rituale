<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c3eb3472-4bac-419d-94fb-3576dfef7940

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploying to GitHub Pages

Push to `main`; `.github/workflows/deploy.yml` builds the site and publishes it. In the repo,
set **Settings → Pages → Source** to **GitHub Actions** (once). The build uses a relative base
(`base: './'` in `vite.config.ts`) and `#/hash` routes, so it works at
`https://<user>.github.io/<repo>/` with no further configuration.
