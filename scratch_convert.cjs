const fs = require('fs');

if (!fs.existsSync('src/main.js')) {
    console.error("main.js not found");
    process.exit(1);
}

let content = fs.readFileSync('src/main.js', 'utf-8');

const match = content.match(/innerHTML = `([\s\S]*?)`\s*;\s*([\s\S]*)/);
if (!match) {
    console.error("Could not find innerHTML");
    process.exit(1);
}

let html = match[1];

html = html.replace(/class="/g, 'className="');

html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    if (p1.includes("justify-content:center;")) {
        return "style={{ justifyContent: 'center' }}";
    }
    if (p1.includes("margin-top:24px;") || p1.includes("margin-top: 24px;")) {
        return "style={{ marginTop: '24px' }}";
    }
    return match;
});

html = html.replace(/<br>/g, '<br/>');
html = html.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
html = html.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');

html = html.replace(/<div className="feature-card">/g, 
`<div className="feature-card relative">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative z-10 h-full">`);

html = html.replace(/<\/p>\n      <\/div>/g, '</p>\n        </div>\n      </div>');

const app_tsx = `import React, { useEffect } from 'react';
import './style.css';
import './tailwind.css';
import { GlowingEffect } from '@/components/ui/glowing-effect-card';

export default function App() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const mobileToggle = document.querySelector('.mobile-toggle')
    const navLinks = document.querySelector('.nav-links')

    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      })
    }

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex'
        navLinks.style.display = isVisible ? 'none' : 'flex'
        navLinks.style.flexDirection = 'column'
        navLinks.style.position = 'absolute'
        navLinks.style.top = '100%'
        navLinks.style.left = '0'
        navLinks.style.right = '0'
        navLinks.style.background = 'var(--bg-card)'
        navLinks.style.padding = '20px'
        navLinks.style.borderBottom = '1px solid var(--border)'
      })
    }

    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

    revealElements.forEach(el => revealObserver.observe(el))

    const heroVideo = document.querySelector('.hero-video-bg video')
    if (heroVideo) {
      heroVideo.play().catch(() => {})
    }
  }, []);

  return (
    <>
${html}
    </>
  );
}
`;

fs.writeFileSync('src/App.tsx', app_tsx, 'utf-8');

const main_tsx = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;
fs.writeFileSync('src/main.tsx', main_tsx, 'utf-8');

console.log("Success");
