export function initSmoothScroll() {
  let current = window.scrollY;
  let target = current;
  const ease = 0.12;
  window.addEventListener('wheel', (event) => {
    if (event.ctrlKey) return;
    event.preventDefault();
    target = Math.max(0, Math.min(document.body.scrollHeight - innerHeight, target + event.deltaY));
  }, { passive: false });
  const tick = () => {
    current += (target - current) * ease;
    if (Math.abs(target - current) > 0.1) window.scrollTo(0, current);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function animateLanding() {
  document.querySelectorAll('.hero h1, .hero-copy p, .pixel-mark').forEach((node, index) => {
    node.animate([{ opacity: 0, transform: 'translateY(26px)' }, { opacity: 1, transform: 'translateY(0)' }], {
      duration: 900,
      delay: index * 120,
      easing: 'cubic-bezier(.22,1,.36,1)',
      fill: 'both',
    });
  });
  document.querySelectorAll('.floating-board .faux-image').forEach((node, index) => {
    node.animate([{ transform: `${getComputedStyle(node).transform} translateY(0) rotate(0deg)` }, { transform: `${getComputedStyle(node).transform} translateY(-18px) rotate(4deg)` }], {
      duration: 2800,
      delay: index * 180,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
    });
  });
}

export function morphBlob(path) {
  if (!path) return;
  const frames = [
    'M10,44 C24,4 82,9 92,43 C106,82 70,104 34,91 C0,78 -4,62 10,44Z',
    'M9,49 C10,14 57,-5 87,24 C118,53 98,96 55,99 C13,102 7,77 9,49Z',
  ];
  let frame = 0;
  setInterval(() => {
    frame = (frame + 1) % frames.length;
    path.setAttribute('d', frames[frame]);
  }, 1800);
}
