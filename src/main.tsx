import './style.css'
import './tailwind.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import GlowingEffectDemo from '@/components/ui/demo'
import SparklesDemo from '@/components/ui/sparkles-demo'
import { GlowingEffect } from '@/components/ui/glowing-effect-card'

document.querySelector('#app').innerHTML = `

<!-- ===== NAVBAR ===== -->
<nav class="navbar" id="navbar">
  <div class="container">
    <a href="#" class="nav-logo">Vital Clone</a>
    <ul class="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#features">About</a></li>
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#pricing">Plans</a></li>
      <li><a href="#affiliate">Affiliate</a></li>
      <li><a href="#partnership">Partnership</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
    <div class="nav-actions">
      <button class="btn-ghost" id="sign-in-btn">Sign In</button>
      <button class="btn-primary" id="get-started-btn">Get Started</button>
    </div>
    <button class="mobile-toggle" id="mobile-menu-btn">☰</button>
  </div>
</nav>

<!-- ===== HERO SECTION ===== -->
<section class="hero" id="hero">
  <div class="hero-video-bg">
    <video src="/new-hero-video.mp4" autoplay muted loop playsinline preload="auto" fetchpriority="high" disablePictureInPicture></video>
  </div>
  <div class="hero-video-overlay"></div>
  <div class="container hero-content">
    <h1>
      Your Legacy,<br/>
      <span class="gradient-text">Eternalized.</span>
    </h1>
    <p class="hero-description">
      Preserve. Interact. Inspire.
    </p>
    <div class="hero-cta">
      <button class="btn-primary" id="hero-start-btn">Get Started</button>
    </div>
  </div>
</section>

<!-- ===== SPARKLES ===== -->
<div id="sparkles-container"></div>

<!-- ===== FEATURES SECTION ===== -->
<section class="section features" id="features">
  <div class="container">

    <div class="features-grid reveal">
      <div class="feature-card">
        <div class="feature-icon">🧠</div>
        <h3>Cognitive AI Brain</h3>
        <p>Train your clone with personal memories, documents, and unique knowledge to perfectly capture your mindset and values.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎙️</div>
        <h3>Voice Cloning</h3>
        <p>Ultra-realistic voice synthesis that perfectly captures your unique tone, cadence, and emotion for natural conversations.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>Privacy First</h3>
        <p>Your digital persona and legacy data are securely encrypted. You retain complete ownership of your data forever.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎬</div>
        <h3>Video Synthesis</h3>
        <p>Create lifelike visual avatars that move, react, and express emotions just like you do in real life.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🌳</div>
        <h3>Interactive Family Tree</h3>
        <p>Connect generations by building a living family tree where descendants can directly interact with their ancestors.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🛡️</div>
        <h3>Legacy Contacts</h3>
        <p>Designate trusted individuals who will inherit access to interact with your digital twin in the future.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section class="section how-it-works" id="how-it-works">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <div class="section-label" style="justify-content:center;"><span class="line"></span> How It Works</div>
      <h2 class="section-title">Create your clone in minutes</h2>
      <p class="section-subtitle" style="margin:0 auto;">Three simple steps to begin building your eternal legacy.</p>
    </div>
    <div class="steps-container reveal">
      <div class="step-card">
        <div class="step-number">1</div>
        <h3>Build Knowledge Base</h3>
        <p>Upload documents, chat logs, and provide voice samples to train your unique cognitive model and personality.</p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <h3>Synthesize Persona</h3>
        <p>Our advanced AI processes your data to generate a highly lifelike visual avatar and dynamic voice model.</p>
      </div>
      <div class="step-card">
        <div class="step-number">3</div>
        <h3>Interact & Preserve</h3>
        <p>Your digital twin is ready. Family members can now have natural, spoken conversations with your persona at any time.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== VISION SECTION ===== -->
<section class="section vision" id="vision" style="background: var(--bg-secondary);">
  <div class="container">
    <div class="showcase-content reveal">
      <div class="showcase-text">
        <div class="section-label"><span class="line"></span> The Vision</div>
        <h2 class="section-title">A glimpse into<br/>eternity</h2>
        <p class="section-subtitle">Experience the profound emotional connection of preserving memories that transcend time. Watch how a digital legacy is carefully crafted to bring peace of mind to generations.</p>
      </div>
      <div class="showcase-visual">
        <video class="lazy-video" data-src="/hero-video-updated.mp4" muted loop playsinline preload="none"></video>
      </div>
    </div>
  </div>
</section>

<!-- ===== SHOWCASE ===== -->
<section class="section showcase" id="showcase">
  <div class="container">
    <div class="showcase-content reveal">
      <div class="showcase-visual">
        <video class="lazy-video" data-src="/showcase-video.mp4" muted loop playsinline preload="none"></video>
      </div>
      <div class="showcase-text">
        <div class="section-label"><span class="line"></span> See It In Action</div>
        <h2 class="section-title">A persona that<br/>speaks for you</h2>
        <p class="section-subtitle">Our advanced interface makes interacting with digital twins feel as natural as a real-world conversation.</p>
        <ul class="showcase-list">
          <li><span class="check">✓</span> Real-time voice and video conversations</li>
          <li><span class="check">✓</span> Deep contextual memory and learning</li>
          <li><span class="check">✓</span> Secure legacy preservation storage</li>
          <li><span class="check">✓</span> Shareable interactive links for family</li>
          <li><span class="check">✓</span> Integration with major genealogy platforms</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="section testimonials" id="testimonials">
  <div class="container">
    <div class="testimonials-header reveal">
      <div class="section-label" style="justify-content:center;"><span class="line"></span> What Our Clients Say</div>
      <h2 class="section-title">Preserving thousands of legacies</h2>
      <p class="section-subtitle">Hear from families who have preserved their heritage with Vital Clone.</p>
    </div>
    <div class="testimonials-grid reveal">
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"Vital Clone completely changed how we remember my grandfather. Being able to ask him questions about his life and hear his actual voice reply is priceless."</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">S</div>
          <div>
            <div class="testimonial-name">Sarah Mitchell</div>
            <div class="testimonial-role">Heritage Pro Member</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"As a historian, this is a game-changer. The ability to create interactive personas from historical documents makes the past come alive in a way text never could."</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">D</div>
          <div>
            <div class="testimonial-name">Dr. James Park</div>
            <div class="testimonial-role">Archivist</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"I created my own digital twin for my children. Knowing that they will always be able to seek my advice and hear my voice, even when I'm gone, brings me profound peace."</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">M</div>
          <div>
            <div class="testimonial-name">Maria Rodriguez</div>
            <div class="testimonial-role">Dynasty Elite Member</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== PRICING ===== -->
<section class="section pricing" id="pricing">
  <div class="container">
    <div class="pricing-header reveal">
      <div class="section-label" style="justify-content:center;"><span class="line"></span> Pricing Plans</div>
      <h2 class="section-title">Choose your plan</h2>
      <p class="section-subtitle">Start free and upgrade as you grow. No hidden fees, cancel anytime.</p>
    </div>
    <div class="pricing-grid reveal">
      <div class="pricing-card">
        <div class="pricing-plan">Starter</div>
        <div class="pricing-desc">Perfect for individuals getting started</div>
        <div class="pricing-price">
          <span class="amount">Free</span>
        </div>
        <ul class="pricing-features">
          <li><span class="icon">✓</span> Basic text-only persona</li>
          <li><span class="icon">✓</span> 1 voice clone sample</li>
          <li><span class="icon">✓</span> 50 monthly interactions</li>
          <li><span class="icon">✓</span> Community access</li>
          <li><span class="icon">✓</span> Email support</li>
        </ul>
        <button class="btn-ghost">Get Started Free</button>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-badge">Most Popular</div>
        <div class="pricing-plan">Professional</div>
        <div class="pricing-desc">Best for comprehensive legacy creation</div>
        <div class="pricing-price">
          <span class="amount">$19</span>
          <span class="period">/month</span>
        </div>
        <ul class="pricing-features">
          <li><span class="icon">✓</span> Full voice cloning</li>
          <li><span class="icon">✓</span> 3D video avatar generation</li>
          <li><span class="icon">✓</span> Unlimited interactions</li>
          <li><span class="icon">✓</span> Cognitive AI training</li>
          <li><span class="icon">✓</span> Priority support</li>
          <li><span class="icon">✓</span> Secure sharing links</li>
        </ul>
        <button class="btn-primary">Start Free Trial</button>
      </div>
      <div class="pricing-card">
        <div class="pricing-plan">Enterprise</div>
        <div class="pricing-desc">For large families and historians</div>
        <div class="pricing-price">
          <span class="amount">$49</span>
          <span class="period">/month</span>
        </div>
        <ul class="pricing-features">
          <li><span class="icon">✓</span> Everything in Professional</li>
          <li><span class="icon">✓</span> Interactive Family Tree (up to 10)</li>
          <li><span class="icon">✓</span> Deep archive storage</li>
          <li><span class="icon">✓</span> API access</li>
          <li><span class="icon">✓</span> Dedicated legacy manager</li>
          <li><span class="icon">✓</span> Offline backups</li>
        </ul>
        <button class="btn-ghost">Contact Sales</button>
      </div>
    </div>
  </div>
</section>

<!-- ===== AFFILIATE & PARTNERSHIP ===== -->
<section class="section" id="affiliate" style="background: var(--bg-secondary);">
  <div class="container">
    <div class="showcase-content reveal">
      <div class="showcase-text">
        <div class="section-label"><span class="line"></span> Affiliate Program</div>
        <h2 class="section-title">Earn while you<br/>share legacies</h2>
        <p class="section-subtitle">Join our affiliate program and earn up to 30% recurring commission for every referral. Help others preserve their family history while growing your income.</p>
        <ul class="showcase-list" style="margin-top:24px;">
          <li><span class="check">✓</span> 30% recurring commission</li>
          <li><span class="check">✓</span> 90-day cookie window</li>
          <li><span class="check">✓</span> Real-time tracking dashboard</li>
          <li><span class="check">✓</span> Marketing materials provided</li>
        </ul>
        <div style="margin-top:32px;">
          <button class="btn-primary">Join Affiliate Program</button>
        </div>
      </div>
      <div class="showcase-visual">
        <video class="lazy-video" data-src="/affiliate-video.mp4" muted loop playsinline preload="none"></video>
      </div>
    </div>
  </div>
</section>

<section class="section" id="partnership">
  <div class="container">
    <div class="showcase-content reveal">
      <div class="showcase-visual">
        <video class="lazy-video" data-src="/partnership-video.mp4" muted loop playsinline preload="none"></video>
      </div>
      <div class="showcase-text">
        <div class="section-label"><span class="line"></span> Partnership</div>
        <h2 class="section-title">Partner with us to<br/>build the future</h2>
        <p class="section-subtitle">We collaborate with genealogy platforms, historians, and tech innovators to build the future of digital preservation.</p>
        <ul class="showcase-list" style="margin-top:24px;">
          <li><span class="check">✓</span> White-label solutions</li>
          <li><span class="check">✓</span> API & SDK access</li>
          <li><span class="check">✓</span> Co-marketing opportunities</li>
          <li><span class="check">✓</span> Dedicated partner support</li>
        </ul>
        <div style="margin-top:32px;">
          <button class="btn-primary">Become a Partner</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA BANNER ===== -->
<section class="section cta-banner" id="contact">
  <div class="container">
    <div class="cta-inner reveal">
      <h2>Ready to eternalize<br/>your legacy?</h2>
      <p>Join thousands who are preserving their stories for future generations. Start building your digital twin today.</p>
      <button class="btn-primary" id="cta-start-btn">Get Started — It's Free</button>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#" class="nav-logo">Vital Clone</a>
        <p>The premier platform for digital twin creation and eternal legacy preservation.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#">Changelog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <ul>
          <li><a href="#affiliate">Affiliate</a></li>
          <li><a href="#partnership">Partnership</a></li>
          <li><a href="#">Referrals</a></li>
          <li><a href="#">Ambassador</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">HIPAA</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Vital. All rights reserved.</span>
      <div class="footer-socials">
        <a href="#" aria-label="Twitter">𝕏</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="YouTube">▶</a>
      </div>
    </div>
  </div>
</footer>
`

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50)
})

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a, .footer-col a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href')
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  })
})

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal')
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.15 })

revealElements.forEach(el => revealObserver.observe(el))

// ===== ENSURE HERO VIDEO PLAYS INSTANTLY =====
const heroVideo = document.querySelector('.hero-video-bg video')
if (heroVideo) {
  heroVideo.play().catch(() => {})
}

// ===== LAZY LOAD VIDEOS =====
const lazyVideos = document.querySelectorAll('.lazy-video')
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      if (video.dataset.src) {
        video.src = video.dataset.src;
        video.removeAttribute('data-src');
        video.load();
        video.play().catch(() => {});
      } else {
        video.play().catch(() => {});
      }
    } else {
      entry.target.pause();
    }
  })
}, { rootMargin: '200px 0px', threshold: 0.1 })

lazyVideos.forEach(video => videoObserver.observe(video))

// Inject React component into features section
const featuresGrid = document.querySelector('.features-grid')
if (featuresGrid) {
  document.documentElement.classList.add('dark')
  featuresGrid.className = 'w-full mt-16 dark'
  const root = createRoot(featuresGrid)
  root.render(<GlowingEffectDemo />)
}

// Inject Sparkles Demo
const sparklesContainer = document.getElementById('sparkles-container')
if (sparklesContainer) {
  sparklesContainer.className = 'w-full dark'
  const sparklesRoot = createRoot(sparklesContainer)
  sparklesRoot.render(<SparklesDemo />)
}

// Inject GlowingEffect into How It Works cards
const stepCards = document.querySelectorAll('.step-card')
stepCards.forEach(card => {
  card.style.position = 'relative'
  
  const glowContainer = document.createElement('div')
  glowContainer.style.position = 'absolute'
  glowContainer.style.inset = '0'
  glowContainer.style.pointerEvents = 'none'
  glowContainer.style.zIndex = '0'
  glowContainer.style.borderRadius = 'inherit'
  
  card.insertBefore(glowContainer, card.firstChild)
  
  Array.from(card.children).forEach(child => {
    if (child !== glowContainer) {
      child.style.position = 'relative'
      child.style.zIndex = '1'
    }
  })

  const root = createRoot(glowContainer)
  root.render(
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
      borderWidth={3}
    />
  )
})
