# IYI Studios Website

Target Domain: `https://www.iyistudios.com`
Built with: React, Vite, Tailwind CSS

## Project Structure
- `public/privacy-policies/`: Static HTML pages for App Store compliance.
- `public/media/`: Assets directory (currently placeholders).
- `src/`: React source code.

## Setup & Build
This project uses Node.js.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
   Output will be in `dist/`.

## Deployment
This repository is configured for GitHub Pages. The `dist` folder content is what should be deployed.
The `public/404.html` includes a script to handle SPA routing on GitHub Pages.
