# Goutham Reddy S Portfolio

React, Vite, TypeScript, and Tailwind portfolio for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:5173/portfolio/`.

## Build

```bash
npm run build
```

## Deploy

Manual deployment:

```bash
npm run deploy
```

GitHub Actions deployment:

1. Push to the `main` branch.
2. Go to the repository settings.
3. Open Pages.
4. Set the source to `Deploy from a branch`.
5. Select the `gh-pages` branch and `/(root)`.

The site will be available at `https://gouthamgovardhan.github.io/portfolio/`.

## Content Updates

- Update personal data in `src/data/portfolio.ts`.
- Add a resume at `public/assets/resume.pdf`.
- Add a profile image at `public/assets/profile.jpg`.
- If the repository name changes, update `base` in `vite.config.ts`.

## Asset Credits

- `public/assets/bengaluru-night.jpg`: "The Silicon Valley of India at Night" by Sohom Datta, licensed under CC BY-SA 3.0.
