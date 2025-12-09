# SOC Support Analyst Portfolio — Esihle

A simple, responsive single-page portfolio for a SOC Support Analyst. This repository contains an HTML/CSS/JS template you can customize with your name, experience, projects, and contact details. It is designed for easy hosting on GitHub Pages.

Live demo
- If you enable GitHub Pages for this repo (branch: main, folder: root), your site will be available at:
  https://Esihle14.github.io/contact-form-website

Screenshot
- Add screenshots to the repo and link them here (e.g., `screenshots/hero.png`) to show the site on the README.

What’s included
- index.html — single-page portfolio
- styles.css — styling, responsive layout, color variables
- script.js — small helpers (year, smooth scrolling)
- README.md — this file

Features
- Clean, accessible structure with skip link and semantic HTML
- Responsive layout that works on desktop and mobile
- Contact form ready to integrate with FormSubmit/Formspree or your backend
- Easy theme customization using CSS variables (colors, fonts)
- Instructions for GitHub Pages deployment

Quick start (local preview)
1. Clone the repo:
   ```
   git clone https://github.com/Esihle14/contact-form-website.git
   cd contact-form-website
   ```
2. Preview locally (simple static server):
   - Using Python 3:
     ```
     python -m http.server 8000
     ```
     then open http://localhost:8000
   - Or use the "Live Server" extension in VS Code.

Deploy to GitHub Pages
1. Commit and push your changes to the `main` branch.
2. In your repository Settings → Pages, set the source to:
   - Branch: main
   - Folder: / (root)
3. Save — your site will be published at `https://Esihle14.github.io/contact-form-website` after a few minutes.

Customize the site
- Replace text: open `index.html` and edit your name, role, experience, projects, resume link, and social links.
- Contact form: update the `action` attribute in the form to your FormSubmit/Formspree endpoint or your backend.
- Change colors: edit `:root` variables at the top of `styles.css`. Example (for the blue theme):
  ```css
  :root{
    --bg: #0b3d91;      /* page background */
    --accent: #06b6d4;  /* buttons / highlights */
    --text: #eef6ff;    /* primary text color */
  }
  ```
  After editing, save and commit.

Troubleshooting (background color not updating)
- Force-refresh browser cache: Chrome: Ctrl+Shift+R (Win) / Cmd+Shift+R (Mac).
- Add a cache-busting query string to the stylesheet link in `index.html`:
  ```html
  <link rel="stylesheet" href="styles.css?v=2" />
  ```
- Open DevTools → Network → ensure “Disable cache” is checked, then reload.
- Inspect the `body` in DevTools Elements → Computed to see which rule sets the background and whether another stylesheet overrides it.

Accessibility & SEO tips
- Provide a real profile image with descriptive alt text.
- Keep heading structure (h1, h2, h3) semantic.
- Add Open Graph meta tags (title, description, image) for nicer link previews.
- Consider adding structured resume data (JSON-LD) if you want search engines to pick up credentials.

Contributing
- If you want to collaborate, open a PR with changes.
- Simple contribution flow:
  ```
  git checkout -b my-change
  git add .
  git commit -m "Describe change"
  git push origin my-change
  ```
- Create a PR from your branch to `main`.

License
- This template is provided under the MIT License. Add a `LICENSE` file with your preferred license text.

Contact
- If you want me to populate this template with your real content (name, bullets, links), or commit the README and CSS changes directly to the repo, reply with the details and I’ll prepare the commit.

Enjoy — and let me know if you want a GitHub Actions workflow to auto-deploy on push to `main`.
