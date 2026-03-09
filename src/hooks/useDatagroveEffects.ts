import { useEffect, useRef } from 'react';

export function useDatagroveEffects() {
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    // === Particle Animation ===
    const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    const heroSection = document.querySelector('.hero') as HTMLElement;

    if (canvas && heroSection) {
      const ctx = canvas.getContext('2d')!;
      const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });

      heroSection.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
      });

      function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      class Particle {
        x: number; y: number; size: number;
        baseSpeedX: number; baseSpeedY: number;
        speedX: number; speedY: number; opacity: number;
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 1;
          this.baseSpeedX = Math.random() * 0.5 - 0.25;
          this.baseSpeedY = Math.random() * 0.5 - 0.25;
          this.speedX = this.baseSpeedX;
          this.speedY = this.baseSpeedY;
          this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
          if (mouse.x != null && mouse.y != null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
              const force = (mouse.radius - distance) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              this.speedX = Math.cos(angle) * force * 5 + this.baseSpeedX;
              this.speedY = Math.sin(angle) * force * 5 + this.baseSpeedY;
            } else {
              this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
              this.speedY += (this.baseSpeedY - this.speedY) * 0.05;
            }
          } else {
            this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
            this.speedY += (this.baseSpeedY - this.speedY) * 0.05;
          }
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }
        draw() {
          ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const particles: Particle[] = [];
      for (let i = 0; i < 100; i++) particles.push(new Particle());

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
              ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 120)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        particles.forEach(p => { p.update(); p.draw(); });
        animationFrameRef.current = requestAnimationFrame(animate);
      }
      animate();
    }

    // === Navbar scroll effect ===
    const navbar = document.querySelector('.dg-nav') as HTMLElement;
    function onScroll() {
      if (!navbar) return;
      if (window.pageYOffset > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // === Mobile menu toggle ===
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
      });
    }

    // === Smooth scroll ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = (this as HTMLAnchorElement).getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // === Intersection Observer for reveal animations ===
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // === Pricing tabs ===
    document.querySelectorAll('.pricing-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.pricing-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = document.querySelector(`.pricing-panel[data-panel="${(tab as HTMLElement).dataset.tab}"]`);
        if (panel) panel.classList.add('active');
      });
    });

    // === Project filter tabs ===
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = (btn as HTMLElement).dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
          const el = card as HTMLElement;
          if (filter === 'all' || el.dataset.category === filter) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
      });
    });

    // === Contact form ===
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const otherService = formData.get('otherService');
        const finalService = service === 'Other' && otherService ? otherService : service;
        const message = formData.get('message');
        const mailtoLink = `mailto:nataliemutebuka@gmail.com?subject=New Quote Request from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${finalService}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = mailtoLink;
        contactForm.reset();
      });
    }

    // === Testimonial carousel ===
    const track = document.querySelector('.testimonials-track') as HTMLElement;
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentSlide = 0;

    function getCardsPerView() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1200) return 1;
      return 1;
    }

    function getMaxSlide() {
      if (!track) return 0;
      return Math.max(0, track.children.length - getCardsPerView());
    }

    function updateCarousel() {
      if (!track) return;
      const maxSlide = getMaxSlide();
      if (currentSlide > maxSlide) currentSlide = maxSlide;

      const card = track.children[0] as HTMLElement;
      if (!card) return;
      const gap = 24; // 1.5rem
      const cardWidth = card.offsetWidth + gap;
      track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { currentSlide = i; updateCarousel(); });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide <= 0 ? getMaxSlide() : currentSlide - 1;
        updateCarousel();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide >= getMaxSlide() ? 0 : currentSlide + 1;
        updateCarousel();
      });
    }

    // Auto-advance testimonials
    const autoAdvance = setInterval(() => {
      if (!track) return;
      currentSlide = currentSlide >= getMaxSlide() ? 0 : currentSlide + 1;
      updateCarousel();
    }, 5000);

    // === Touch swipe support ===
    const trackWrapper = document.querySelector('.testimonials-track-wrapper') as HTMLElement;
    let touchStartX = 0;
    if (trackWrapper) {
      trackWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      trackWrapper.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            currentSlide = currentSlide >= getMaxSlide() ? 0 : currentSlide + 1;
          } else {
            currentSlide = currentSlide <= 0 ? getMaxSlide() : currentSlide - 1;
          }
          updateCarousel();
        }
      }, { passive: true });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      clearInterval(autoAdvance);
      observer.disconnect();
    };
  }, []);
}
