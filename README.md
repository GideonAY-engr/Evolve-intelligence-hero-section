# Gideon Ayomide | Software Engineer Portfolio

A high-performance, single-viewport portfolio landing page designed to showcase my software engineering projects, technical stack, and GitHub contributions. 

Built entirely with raw HTML, CSS, and Vanilla JavaScript, this project demonstrates a strong command of core web fundamentals, performant animations, and zero-dependency architecture.

## Features

- **Zero-Dependency Architecture**: No heavy frameworks or build steps; entirely static for maximum performance.
- **Performant Visuals**: Full-bleed background video integration with hardware-accelerated CSS animations.
- **Custom Vanilla JS Utilities**: Hand-rolled `IntersectionObserver` logic for count-up metrics and responsive mobile sheet navigation.
- **Fully Responsive**: Adapts seamlessly from ultra-wide desktop monitors down to mobile viewports using advanced CSS `clamp()` and media queries.
- **Modern Typography**: Integrates Inter for readability and retro dot-matrix display fonts for a distinct developer aesthetic.

## Tech Stack

- **HTML5**: Semantic structure and accessibility.
- **CSS3**: Native CSS variables, Flexbox, Grid, and complex keyframe animations.
- **Vanilla JavaScript (ES6+)**: DOM manipulation, event delegation, and performance-optimized animation frames.

## Local Development

To run this project locally, you simply need to serve the static files. 

If you have Node.js installed, you can use `serve`:

```bash
# Install serve globally if you haven't already
npm install -g serve

# Run the local server
serve . -p 3000
```

Alternatively, you can use any local web server (like Python's `http.server` or the VS Code Live Server extension) or just open `index.html` directly in your browser.

## Deployment

This static site can be deployed instantly to any static hosting provider such as:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

Simply connect your repository and set the publish directory to the root (`/`). No build command is required.

## License

This project is open-source and available under the MIT License.
