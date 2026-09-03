(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const header = $('.site-header');
  const setScroll = () => {
    header?.classList.toggle('scrolled', scrollY > 12);
    const height = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--progress', `${height > 0 ? (scrollY / height) * 100 : 0}%`);
  };
  addEventListener('scroll', setScroll, { passive: true }); setScroll();

  const navToggle = $('.nav-toggle'); const nav = $('#site-nav');
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open);
  });
  $$('a', nav || document).forEach(a => a.addEventListener('click', () => { nav?.classList.remove('open'); navToggle?.setAttribute('aria-expanded', 'false'); }));

  $$('.filter-bar [data-filter]').forEach(button => button.addEventListener('click', () => { $$('.filter-bar button').forEach(b => b.classList.toggle('active', b === button)); const filter = button.dataset.filter; $$('[data-project-grid] .project-card').forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter)); }));
  if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('active', entry.isIntersecting)), { threshold: .3 }); $$('.role').forEach(role => observer.observe(role)); }
  const tilt = $('[data-tilt]'); if (tilt && !reduceMotion && matchMedia('(pointer:fine)').matches) { tilt.addEventListener('pointermove', event => { const rect = tilt.getBoundingClientRect(); tilt.style.setProperty('--tilt-x', `${(rect.height / 2 - (event.clientY - rect.top)) / 20}deg`); tilt.style.setProperty('--tilt-y', `${((event.clientX - rect.left) - rect.width / 2) / 20}deg`); }); tilt.addEventListener('pointerleave', () => { tilt.style.setProperty('--tilt-x', '0deg'); tilt.style.setProperty('--tilt-y', '0deg'); }); }
  const form = $('.contact-form'); form?.addEventListener('submit', async event => { event.preventDefault(); const status = $('.form-status', form); const submit = $('button[type="submit"]', form); submit.disabled = true; status.textContent = 'Sending…'; try { const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); if (!response.ok) throw new Error(); form.reset(); status.textContent = 'Message transmitted. Thank you.'; } catch { status.textContent = 'Transmission failed. Please use the email link instead.'; } finally { submit.disabled = false; } });

  const canvas = $('#circuit-canvas'); if (!canvas || reduceMotion) return;
  const context = canvas.getContext('2d'); const circuitModes = { hero:{tone:'103,232,249',alpha:.065,interval:3600},experience:{tone:'103,232,249',alpha:.08,interval:2700},projects:{tone:'167,139,250',alpha:.075,interval:3000},stack:{tone:'103,232,249',alpha:.08,interval:2500},about:{tone:'103,232,249',alpha:.045,interval:4400},contact:{tone:'167,139,250',alpha:.055,interval:3300} }; let points = [], routes = [], pulse = null, nextPulse = 0, raf = 0, last = 0, running = false;
  function resize() { const ratio = Math.min(devicePixelRatio || 1, 1.5); canvas.width = innerWidth * ratio; canvas.height = innerHeight * ratio; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; context.setTransform(ratio, 0, 0, ratio, 0, 0); const count = innerWidth < 600 ? 14 : 26; points = Array.from({ length: count }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .075, vy: (Math.random() - .5) * .075 })); routes = Array.from({ length: Math.floor(count * .8) }, () => { const a = points[Math.floor(Math.random() * points.length)]; let b = points[Math.floor(Math.random() * points.length)]; if (a === b) b = points[(points.indexOf(a) + 1) % points.length]; return { a, b }; }); }
  function routePoint(route, progress) { const mid = { x: route.b.x, y: route.a.y }, first = Math.abs(mid.x - route.a.x), second = Math.abs(route.b.y - mid.y), total = first + second || 1, distance = progress * total; return distance < first ? { x: route.a.x + Math.sign(mid.x - route.a.x) * distance, y: route.a.y } : { x: mid.x, y: mid.y + Math.sign(route.b.y - mid.y) * (distance - first) }; }
  const canRun = () => !document.hidden && !document.body.classList.contains('game-active');
  const stop = () => { running = false; if (raf) { cancelAnimationFrame(raf); raf = 0; } };
  const schedule = () => { if (running) raf = requestAnimationFrame(draw); };
  const start = () => { if (running || !canRun()) return; running = true; last = performance.now(); schedule(); };
  const sync = () => { if (canRun()) start(); else stop(); };
  function draw(time) { raf = 0; if (!running || !canRun()) { stop(); return; } if (time - last > 32) { const mode = circuitModes[document.body.dataset.circuitMode] || circuitModes.hero; context.clearRect(0, 0, innerWidth, innerHeight); points.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > innerWidth) p.vx *= -1; if (p.y < 0 || p.y > innerHeight) p.vy *= -1; }); routes.forEach(route => { context.strokeStyle = `rgba(${mode.tone},${mode.alpha})`; context.beginPath(); context.moveTo(route.a.x, route.a.y); context.lineTo(route.b.x, route.a.y); context.lineTo(route.b.x, route.b.y); context.stroke(); }); points.forEach(p => { context.fillStyle = `rgba(${mode.tone},.3)`; context.fillRect(p.x - 1, p.y - 1, 2, 2); }); if (!pulse && time > nextPulse && routes.length) { pulse = { route: routes[Math.floor(Math.random() * routes.length)], start: time, hue: mode.tone }; nextPulse = time + mode.interval + Math.random() * 1800; } if (pulse) { const progress = Math.min(1, (time - pulse.start) / 850), point = routePoint(pulse.route, progress); context.fillStyle = `rgba(${pulse.hue},.9)`; context.shadowColor = `rgb(${pulse.hue})`; context.shadowBlur = 10; context.beginPath(); context.arc(point.x, point.y, 2.4, 0, Math.PI * 2); context.fill(); context.shadowBlur = 0; if (progress >= 1) pulse = null; } last = time; } schedule(); }
  resize(); addEventListener('resize', () => { resize(); sync(); }, { passive: true }); addEventListener('circuit-section', () => { nextPulse = 0; sync(); }); document.addEventListener('visibilitychange', sync); new MutationObserver(sync).observe(document.body, { attributes:true, attributeFilter:['class'] }); sync();
})();
