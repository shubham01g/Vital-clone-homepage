import re
import os

if not os.path.exists('src/main.js'):
    print("main.js not found")
    exit(1)

with open('src/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'innerHTML = `(.*?)`\s*;\s*(.*)', content, re.DOTALL)
if not match:
    print("Could not find innerHTML")
    exit(1)

html = match.group(1)

html = html.replace('class="', 'className="')

def style_replacer(m):
    style_str = m.group(1)
    if "justify-content:center;" in style_str:
        return "style={{ justifyContent: 'center' }}"
    if "margin-top:24px;" in style_str:
        return "style={{ marginTop: '24px' }}"
    if "margin-top: 24px;" in style_str:
        return "style={{ marginTop: '24px' }}"
    return m.group(0)

html = re.sub(r'style="([^"]*)"', style_replacer, html)

html = html.replace('<br>', '<br/>')
html = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html)
html = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html)

# Inject GlowingEffect into feature-card
html = html.replace('<div className="feature-card">', 
'''<div className="feature-card relative">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative z-10 h-full">''')

# We need to close the extra div for feature-card
# feature cards end with </p>\n      </div>
html = html.replace('</p>\n      </div>', '</p>\n        </div>\n      </div>')

app_tsx = """import React, { useEffect } from 'react';
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
""" + html + """
    </>
  );
}
"""

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_tsx)

main_tsx = """import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"""
with open('src/main.tsx', 'w', encoding='utf-8') as f:
    f.write(main_tsx)

print("Success")
