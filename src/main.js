import { animateLanding, initSmoothScroll, morphBlob } from './motion.js';

const navItems = ['Work', 'About', 'Atelier', 'Contact'];
const footerLinks = ['LinkedIN', 'Twitter/X', 'Instagram', 'Behance'];
const projects = [
  { title: 'RTIG', action: 'View Live Site ↗', image: 'landscape' },
  { title: 'ACEMYX', action: 'View Live Site ↗', image: 'brand' },
  { title: 'FLEETKIT', action: 'Read Case Study ↗', image: 'shoe' },
];

const el = (tag, className = '', html = '') => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
};

function fauxImage(type) {
  const node = el('div', `faux-image ${type}`);
  if (type === 'brand') node.innerHTML = '<div class="brand-pill">brand.ai</div><div class="brand-symbol">✣</div><strong>Your brand OS.</strong><small>domain-specific AI for brand builders</small><div class="tile-row"><i></i><i></i><i></i></div>';
  if (type === 'landscape') node.innerHTML = '<div class="hill h1"></div><div class="hill h2"></div><p>Maybe it’s not about the happy ending, maybe it’s about the story.</p>';
  if (type === 'shoe') node.innerHTML = '<div class="shoe-shape"></div><div class="shoe-shadow"></div>';
  if (type === 'terminal') node.innerHTML = '<span></span><span></span><span></span><span></span>';
  if (type === 'purple') node.innerHTML = '<b>20<br>26</b>';
  return node.outerHTML;
}

function logoMark() {
  let cells = '';
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const on = (col === row + 2 && row < 7) || (col === 6 && row < 7) || (row > 4 && col > 2 && col < 7) || (row > 2 && col === 2);
      cells += `<span class="${on ? 'on' : ''}"></span>`;
    }
  }
  return `<div class="pixel-mark" aria-hidden="true">${cells}</div>`;
}

function header() {
  return `<header class="site-header"><a class="brand" href="#home" aria-label="aMD home">aMD</a><nav class="nav" aria-label="Main navigation">${navItems.map((item) => `<a href="#${item.toLowerCase()}">${item}</a>`).join('')}</nav></header>`;
}

function render() {
  document.querySelector('#root').innerHTML = `${header()}
    <main id="home">
      <section class="hero section-pad">${logoMark()}<div class="hero-copy"><h1>init_<span>design_engineer</span>.sh</h1><p>With a heavy emphasis on complex interface motion</p></div><div class="floating-board" aria-hidden="true">${fauxImage('terminal')}${fauxImage('brand')}${fauxImage('purple')}${fauxImage('shoe')}</div></section>
      <section id="work" class="selected section-pad"><h2>Selected Work</h2><div class="selected-track">${projects.map((project) => `<article>${fauxImage(project.image)}</article>`).join('')}</div></section>
      <section class="intro-panel"><div class="intro-grid"><h2>Hi, I’m <em>Misbah</em></h2>${fauxImage('brand')}<p>I am a Developer and Designer focused on bringing intuitive concepts to life.</p></div><h3>I design complex <em>web apps</em></h3><div class="trust"><div class="avatars"><span></span><span></span><span></span><span></span></div><p>Trusted by developers and used by micro-startups and agencies</p></div><div class="logos"><b>Acemyx</b><b>campusx</b><b>Fleetkit</b><b>Looprail</b><b>Studione</b></div></section>
      <section class="specialization section-pad"><div class="section-heading"><h2>Area Of Specializations</h2><small>‹ Dev ›</small></div><h3>WEB APP DESIGN & DEVELOPMENT</h3><div class="motion-word"><p>Fluenting static layouts into fully immersive digital experiences.</p><strong>MOTI<span>${fauxImage('brand')}</span>ON</strong><p>I design the subtle details and micro-interactions that guide users and increase app feel premium.</p></div><h3>INTERFACE STRATEGY & SYSTEMS</h3></section>
    </main>
    <section id="about" class="about-page section-pad page-block">${logoMark()}<div class="about-title"><h1>init_<span>design_engineer</span>.sh</h1><p>Misbah / Dami</p></div><div class="about-story">${fauxImage('landscape')}<p>I'm Musbaudeen Abdul, a designer based in Lagos. For the past four years, I've worked across UI/UX, graphic design and front-end development, moving between polished product screens, high-impact social media visuals, AI-assisted design and custom illustration, then closing the loop by building the interfaces myself.</p></div></section>
    <section class="work-page section-pad page-block">${logoMark()}<div class="work-heading"><h1>Websites</h1><p><span>3</span> Responsive Web Applications</p></div><div class="project-grid">${projects.map((project) => `<article>${fauxImage(project.image)}<div><strong>${project.title}</strong><a>${project.action}</a></div></article>`).join('')}</div><div class="muted-row"><h2>Mobile Apps</h2><p><span>3</span> Responsive Web Applications</p></div></section>
    <section id="atelier" class="atelier page-block"><div class="atelier-strip"><p><em>Welcome</em></p>${fauxImage('brand')}<h1>I am a Developer and Designer focused on bringing intuitive concepts to life.</h1>${fauxImage('shoe')}</div><p class="nameplate">Misbah / Dami</p></section>
    <footer id="contact" class="footer section-pad"><a class="cta" href="mailto:hello@misbah.com">Let’s make <em>it, worth</em> it.<br>hello@misbah.com</a><div><small>© 2025-2026</small><nav>${footerLinks.map((link) => `<a>${link}</a>`).join('')}</nav></div></footer>
    <svg class="morph" viewBox="0 0 120 120"><path d="M10,44 C24,4 82,9 92,43 C106,82 70,104 34,91 C0,78 -4,62 10,44Z"></path></svg>`;
}

render();
initSmoothScroll();
animateLanding();
morphBlob(document.querySelector('.morph path'));
