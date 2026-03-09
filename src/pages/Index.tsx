import { useState } from 'react';
import '../styles/datagrove.css';
import { useDatagroveEffects } from '../hooks/useDatagroveEffects';
import aboutImage from '@/assets/about-illustration.jpg';
import servicesBg from '@/assets/services-bg.jpg';
import logoImg from '@/assets/logo-datagrove.png';
import adegiWebsiteImg from '@/assets/AdegiWebsite.png';
import careerCompassImg from '@/assets/CareerCompass.png';
import giftHavenImg from '@/assets/GiftHaven.png';
import adegi2026CalImg from '@/assets/Adegi2026Calendar.png';
import adegi2025CalImg from '@/assets/Adegi2025Calendar.png';
import adegiProfileImg from '@/assets/AdegiCompanyProfile.png';
import adegiFlyerImg from '@/assets/AdegiConsultingFlyer.jpg';
import khulaPathImg from '@/assets/KhulaPathCompanyProfile.png';
import trophyFlyerImg from '@/assets/TrophyPackagingFlyer.jpg';
import trophyCatalogueImg from '@/assets/Trophy.png';
import wjImg from '@/assets/wj.png';
import fs1Img from '@/assets/FS1.jpg';
import fs2Img from '@/assets/FS2.jpg';
import fs3Img from '@/assets/FS3.jpg';
import {
  Target, Gem, Rocket, Handshake,
  Globe, Smartphone, Code2, Search, Palette,
  MapPin, Mail, Phone, Clock, CheckCircle2,
  ArrowUp, Linkedin
} from 'lucide-react';

const Index = () => {
  useDatagroveEffects();
  const [selectedService, setSelectedService] = useState('');
  const [otherService, setOtherService] = useState('');

  return (
    <div className="dg-body" style={{ fontFamily: "'Manrope', sans-serif", background: 'var(--dark-bg)', color: 'var(--text-primary)' }}>
      {/* Navigation */}
      <nav className="dg-nav">
        <div className="nav-container">
          <img src={logoImg} alt="DATAGROVE Logo" className="dg-logo" />
          <div className="menu-toggle" id="menuToggle">
            <span></span><span></span><span></span>
          </div>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact"><button className="cta-nav">Get a Quote</button></a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section — Preserved exactly */}
      <section className="hero" id="home">
        <canvas id="particles-canvas"></canvas>
        <div className="hero-content">
          <h1>Smart Digital Solutions for Growing Businesses</h1>
          <p>DATAGROVE builds modern websites, mobile apps, and custom software that help businesses operate efficiently, attract customers, and scale with confidence.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a href="#pricing" className="btn-secondary">View Pricing</a>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section */}
      <section className="dg-section" id="about">
        <h2 className="section-title">About <span className="accent">DATAGROVE</span></h2>
        <p className="section-subtitle">Empowering small businesses and freelancers in Africa with impactful digital solutions that enhance their online presence, credibility, and growth potential.</p>
        <h3 className="about-who-title reveal">Who <span className="accent">We Are</span></h3>
        <div className="about-layout">
          <div className="about-image-wrapper reveal">
            <img src={aboutImage} alt="DATAGROVE team collaborating on digital solutions" />
          </div>
          <div className="about-text">
            <p className="reveal">Datagrove is a modern digital design and software startup based in Johannesburg, South Africa. We bridge the gap between small businesses and the online market — helping clients appear credible and professional through well-designed websites, apps, and branding materials.</p>
            <p className="reveal">Our vision is to become Africa's leading creative tech partner for small businesses — transforming ideas into digital experiences that grow brands and connect communities.</p>
          </div>
        </div>
        <div className="about-features">
          {[
            { icon: <Target size={22} />, title: 'Tailored Solutions', desc: 'Affordable, tailored digital solutions designed specifically for small businesses and their unique challenges.' },
            { icon: <Gem size={22} />, title: 'End-to-End Service', desc: 'Design, hosting, mobile apps, and content creation — all in one place with transparent pricing.' },
            { icon: <Rocket size={22} />, title: 'Quick Turnaround', desc: 'Personalized one-on-one service with fast delivery times, so you can get online and start growing sooner.' },
            { icon: <Handshake size={22} />, title: 'Local Expertise', desc: 'A strong understanding of local African business challenges, ensuring solutions that truly fit your market.' },
          ].map((f, i) => (
            <div className={`feature-item reveal reveal-delay-${i + 1}`} key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-inner">
          <h2 className="section-title">What <span className="accent">Clients Say</span></h2>
          <p className="section-subtitle">Real feedback from businesses we've helped grow</p>
          <div className="testimonials-carousel">
            <button className="testimonial-arrow testimonial-prev" aria-label="Previous testimonial">&#8249;</button>
            <div className="testimonials-track-wrapper">
              <div className="testimonials-track">
                {[
                  { text: '"DATAGROVE built our website from scratch and the results exceeded expectations. Professional, responsive, and delivered on time."', name: 'Adegi Consulting', role: 'Business Consulting Website', avatar: 'A' },
                  { text: '"Our online gift store looks stunning. DATAGROVE understood exactly what we needed and delivered a clean, modern site our customers love."', name: 'Gift Haven', role: 'E-commerce Website', avatar: 'G' },
                  { text: '"The Career Compass app is exactly what our students needed. Smooth, intuitive, and built with real care for the user experience."', name: 'Career Compass', role: 'Career Guidance Web App', avatar: 'C' },
                ].map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="testimonial-stars">★★★★★</div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.avatar}</div>
                      <div>
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="testimonial-arrow testimonial-next" aria-label="Next testimonial">&#8250;</button>
          </div>
          <div className="testimonial-dots">
            <button className="testimonial-dot active" aria-label="Slide 1"></button>
            <button className="testimonial-dot" aria-label="Slide 2"></button>
            <button className="testimonial-dot" aria-label="Slide 3"></button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="services-bg"><img src={servicesBg} alt="" /></div>
        <div className="services-inner">
          <h2 className="section-title">Our <span className="accent">Services</span></h2>
          <p className="section-subtitle">Comprehensive digital solutions designed to accelerate your business growth</p>
          <div className="services-grid">
            {[
              { icon: <Globe size={26} />, title: 'Website Design & Development', desc: 'Professional, responsive websites designed to convert visitors into customers. From simple landing pages to complex web applications.' },
              { icon: <Smartphone size={26} />, title: 'Android App Development', desc: 'Custom Android applications built using Java, XML, and Firebase. Intuitive mobile experiences that engage users.' },
              { icon: <Code2 size={26} />, title: 'Custom Software Development', desc: 'Bespoke software solutions designed around your unique business processes, including automation tools and management systems.' },
              { icon: <Search size={26} />, title: 'SEO Services', desc: 'Improve your online visibility through strategic search engine optimization. Rank higher and attract more qualified traffic.' },
              { icon: <Palette size={26} />, title: 'Digital Design', desc: 'Professional digital materials including catalogues, calendars, flyers, and marketing assets that elevate your brand.' },
            ].map((s, i) => (
              <div className={`service-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
                <div className="service-icon-wrapper">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Pricing */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <h2 className="section-title">Transparent <span className="accent">Pricing</span></h2>
          <p className="section-subtitle">Clear, competitive rates with no hidden fees</p>

          <div className="pricing-tabs">
            <button className="pricing-tab active" data-tab="websites">Websites</button>
            <button className="pricing-tab" data-tab="seo">SEO</button>
            <button className="pricing-tab" data-tab="apps">Android Apps</button>
            <button className="pricing-tab" data-tab="software">Custom Software</button>
            <button className="pricing-tab" data-tab="design">Digital Design</button>
          </div>

          {/* Websites */}
          <div className="pricing-panel active" data-panel="websites">
            <div className="pricing-grid">
              <div className="pricing-card reveal">
                <div className="pricing-category">Starter</div>
                <h3>Starter Website</h3>
                <div className="price">From R2,000</div>
                <ul className="pricing-features">
                  <li>Up to 5 pages</li><li>Responsive design</li><li>Contact form</li><li>Basic SEO</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
              </div>
              <div className="pricing-card featured reveal reveal-delay-1">
                <div className="pricing-ribbon">Most Popular</div>
                <div className="pricing-category">Business</div>
                <h3>Business Website</h3>
                <div className="price">From R3,500</div>
                <ul className="pricing-features">
                  <li>8–10 pages</li><li>Custom layout & UI/UX</li><li>Responsive design</li><li>Basic SEO</li><li>Content management</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
              </div>
              <div className="pricing-card reveal reveal-delay-2">
                <div className="pricing-category">Professional</div>
                <h3>Professional Website</h3>
                <div className="price">From R5,000</div>
                <ul className="pricing-features">
                  <li>12–15 pages</li><li>Fully custom design</li><li>Conversion-focused layout</li><li>Basic SEO</li><li>Advanced features</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="pricing-panel" data-panel="seo">
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-category">One-Time</div>
                <h3>SEO Setup</h3>
                <div className="price">From R1,000</div>
                <ul className="pricing-features">
                  <li>Initial SEO audit</li><li>Keyword research</li><li>Meta tags optimization</li><li>Basic technical SEO</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
              </div>
              <div className="pricing-card">
                <div className="pricing-category">Monthly</div>
                <h3>Ongoing SEO Management</h3>
                <div className="price">R500/month</div>
                <ul className="pricing-features">
                  <li>Continuous optimization</li><li>Content updates</li><li>Performance monitoring</li><li>Monthly reports</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
              </div>
            </div>
          </div>

          {/* Apps */}
          <div className="pricing-panel" data-panel="apps">
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-category">Mobile App</div>
                <h3>Starter Android App</h3>
                <div className="price">From R15,000</div>
                <ul className="pricing-features">
                  <li>Core functionality</li><li>Firebase integration</li><li>Custom UI design</li><li>Basic features</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
              </div>
              <div className="pricing-card">
                <div className="pricing-category">Custom</div>
                <h3>Custom Android App</h3>
                <div className="price">Custom Quote</div>
                <p className="price-note">Based on requirements</p>
                <ul className="pricing-features">
                  <li>Advanced features</li><li>Complex integrations</li><li>Custom architecture</li><li>Ongoing support</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Contact Us</a>
              </div>
            </div>
          </div>

          {/* Software */}
          <div className="pricing-panel" data-panel="software">
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-category">Development</div>
                <h3>Custom Software</h3>
                <div className="price">From R250/hr</div>
                <p className="price-note">or fixed project pricing</p>
                <ul className="pricing-features">
                  <li>Tailored solutions</li><li>Process automation</li><li>System integrations</li><li>Flexible engagement</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Discuss Project</a>
              </div>
            </div>
          </div>

          {/* Design */}
          <div className="pricing-panel" data-panel="design">
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-category">Print & Digital</div>
                <h3>Catalogues, Calendars & Schedules</h3>
                <div className="price">From R800</div>
                <p className="price-note">Base price for 10 pages</p>
                <ul className="pricing-features">
                  <li>10 pages included</li><li>R50 per additional page</li><li>Professional layout & design</li><li>Brand-consistent styling</li><li>Print & digital ready formats</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get a Quote</a>
              </div>
              <div className="pricing-card featured">
                <div className="pricing-ribbon">Popular</div>
                <div className="pricing-category">Business Identity</div>
                <h3>Company Profiles</h3>
                <div className="price">From R700</div>
                <p className="price-note">Custom quote based on scope</p>
                <ul className="pricing-features">
                  <li>Professional layout & structure</li><li>About us, services & team pages</li><li>Brand-consistent design</li><li>Print & digital ready formats</li><li>Editable source files included</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get a Quote</a>
              </div>
              <div className="pricing-card">
                <div className="pricing-category">One-Off</div>
                <h3>Flyers & Custom Design</h3>
                <div className="price">From R200</div>
                <p className="price-note">Price varies by complexity</p>
                <ul className="pricing-features">
                  <li>Flyers from R200</li><li>Social media graphics</li><li>Posters & banners</li><li>Any other marketing material</li><li>All custom projects quoted individually</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get a Quote</a>
              </div>
            </div>
          </div>

          <div className="pricing-disclaimer">
            <strong>Note:</strong> Pricing may vary based on project scope and requirements. All quotes are customized to your specific needs. Contact us for a detailed estimate.
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Projects */}
      <section className="dg-section" id="projects">
        <h2 className="section-title">Our <span className="accent">Work</span></h2>
        <p className="section-subtitle">Real solutions delivering measurable results for our clients</p>
        <div className="project-filters">
          <button className="filter-btn active" data-filter="all">All</button>
          <button className="filter-btn" data-filter="web">Web</button>
          <button className="filter-btn" data-filter="app">App</button>
          <button className="filter-btn" data-filter="design">Design</button>
        </div>
        <div className="projects-grid">
          {/* Web Projects */}
          {[
            { title: 'Adegi Consulting Website', desc: 'Designed and developed a professional website for Adegi Consulting, a training and business development company based in Pretoria.', img: adegiWebsiteImg, link: 'https://adegi.co.za/', cat: 'web' },
            { title: 'Career Guidance Web App', desc: 'A career guidance web application that helps high school students discover suitable career paths through an interactive quiz system.', img: careerCompassImg, link: 'https://career-compass-za.web.app/', cat: 'web' },
            { title: 'E-commerce Business Website', desc: 'A modern website for a small gift business, creating an engaging online storefront that showcases products.', img: giftHavenImg, link: 'https://gift-haven-business.netlify.app/', cat: 'web' },
            { title: 'WJ Consultancy Website', desc: 'A sleek, premium website for WJ Consultancy, an ERP solutions and automation advisory firm.', img: wjImg, link: 'https://wjconsultancy.vercel.app/', cat: 'web' },
          ].map((p, i) => (
            <div className={`project-card reveal reveal-delay-${(i % 4) + 1}`} data-category={p.cat} key={`web-${i}`}>
              <div className="project-image">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}>Visit Site</a>
              </div>
            </div>
          ))}

          {/* Design Projects */}
          {[
            { title: 'Adegi 2026 Training Calendar', desc: 'Professional training calendar for Adegi Consulting\'s 2026 skills development programme.', img: adegi2026CalImg, link: 'https://drive.google.com/uc?export=download&id=1vjLD4GzEnQYxoBWHeolgP2-f5xIxEyfo' },
            { title: 'Adegi 2025 Training Calendar', desc: 'Professional training calendar for Adegi Consulting\'s 2025 skills development programme.', img: adegi2025CalImg, link: 'https://drive.google.com/uc?export=download&id=100-ae3hP2I_ng0cjJ-zuRVXHiibKGfoj' },
            { title: 'Adegi Company Profile', desc: 'A polished, brand-consistent company profile covering services, approach, and contact details.', img: adegiProfileImg, link: 'https://drive.google.com/uc?export=download&id=1r7URo-NEHs37vZ2wQ9EX6voYue5oGvtw' },
            { title: 'Adegi Consulting Flyer', desc: 'Marketing flyer to promote training and consulting services. Bold, on-brand, and optimised for sharing.', img: adegiFlyerImg, link: 'https://drive.google.com/uc?export=download&id=1AOuKTQZ2TnsyWbJiEHdZIJD0hPqMvX0T' },
            { title: 'KhulaPath Company Profile', desc: 'Professional company profile for KhulaPath, an organisational capability and transformation partner.', img: khulaPathImg, link: 'https://drive.google.com/uc?export=download&id=1R6v73cw3BIXTyomE2yDRG2TDsB9ntoH-' },
            { title: 'Trophy Packaging Catalogue', desc: 'Product catalogue showcasing their full range of food packaging solutions for digital and print.', img: trophyCatalogueImg, link: 'https://drive.google.com/uc?export=download&id=1npd48LRHDHhHadDCVrCAobES9EaKP1sX' },
            { title: 'Trophy Packaging Flyer', desc: 'Product flyer for a Zimbabwe-based food packaging supplier. Clean, professional layout.', img: trophyFlyerImg, link: 'https://drive.google.com/uc?export=download&id=1Y6h9jFr7OKJkYvgffisO0G3fa9MFHwdq' },
          ].map((p, i) => (
            <div className={`project-card reveal`} data-category="design" key={`design-${i}`}>
              <div className="project-image">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} download className="btn-secondary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}>Download</a>
              </div>
            </div>
          ))}

          {/* App Projects */}
          <div className="project-card reveal" data-category="app">
            <div className="project-image project-app-screenshots">
              <img src={fs3Img} alt="Farm Scheduler Screen 1" loading="lazy" />
              <img src={fs2Img} alt="Farm Scheduler Screen 2" loading="lazy" />
              <img src={fs1Img} alt="Farm Scheduler Screen 3" loading="lazy" />
            </div>
            <div className="project-content">
              <h3>Farm Scheduler Mobile App</h3>
              <p>Currently developing a comprehensive task scheduling and management tool specifically designed for farmers.</p>
              <button className="btn-secondary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.9rem', cursor: 'not-allowed', opacity: 0.6 }} disabled>In Progress</button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Contact */}
      <section className="dg-section" id="contact">
        <h2 className="section-title">Let's Build <span className="accent">Something Together</span></h2>
        <p className="section-subtitle">Ready to transform your business with digital solutions? Get in touch today.</p>
        <div className="contact-container">
          <div className="contact-form reveal">
            <h3>Send a Message</h3>
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => { setSelectedService(e.target.value); if (e.target.value !== 'Other') setOtherService(''); }}
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="Android App Development">Android App Development</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Digital Design">Digital Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {selectedService === 'Other' && (
                <div className="form-group">
                  <label htmlFor="otherService">Please specify</label>
                  <input
                    type="text"
                    id="otherService"
                    name="otherService"
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    placeholder="Describe the service you need"
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
          <div className="contact-info reveal reveal-delay-2">
            <h3>Get In Touch</h3>
            {[
              { icon: <MapPin size={20} />, title: 'Location', content: <p>Johannesburg, South Africa</p> },
              { icon: <Mail size={20} />, title: 'Email', content: <a href="mailto:nataliemutebuka@gmail.com">nataliemutebuka@gmail.com</a> },
              { icon: <Phone size={20} />, title: 'Phone / WhatsApp', content: <a href="tel:+27638335128">+27 63 833 5128</a> },
              { icon: <Clock size={20} />, title: 'Response Time', content: <p>Within 24 hours</p> },
              { icon: <CheckCircle2 size={20} />, title: 'Availability', content: <p>Open for new projects and consultations</p> },
            ].map((c, i) => (
              <div className="contact-item" key={i}>
                <div className="contact-item-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  {c.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dg-footer">
        <div className="footer-bg"><img src={servicesBg} alt="" /></div>
        <div className="footer-content">
          <div className="footer-section">
            <h3>DATAGROVE</h3>
            <p>Smart digital solutions for growing businesses. Based in Johannesburg, serving clients across South Africa.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/natalie-mutebuka-9a0a47250" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <a href="#services">Website Development</a>
            <a href="#services">Android Apps</a>
            <a href="#services">Custom Software</a>
            <a href="#services">SEO Services</a>
            <a href="#services">Digital Design</a>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Johannesburg, South Africa</p>
            <a href="mailto:nataliemutebuka@gmail.com">nataliemutebuka@gmail.com</a>
            <a href="tel:+27638335128">+27 63 833 5128</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DATAGROVE. All rights reserved. | Designed & Developed by DATAGROVE</p>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/27638335128" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.534 5.856L.057 23.886l6.183-1.622A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.887 9.887 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
