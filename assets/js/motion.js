(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reveal = (element, type = 'up', delay) => { if (!element || element.dataset.reveal) return; element.dataset.reveal = type; if (delay) element.dataset.delay = delay; };
  const revealGroups = () => {
    $$('.page-hero').forEach(hero => { reveal(hero.querySelector('.eyebrow'), 'signal'); reveal(hero.querySelector('h1'), 'up', '80'); reveal(hero.querySelector('.lede'), 'up', '140'); reveal(hero.querySelector('.button'), 'up', '200'); });
    $$('.section-heading').forEach(heading => reveal(heading, 'signal'));
    $$('.experience-feature,.proof-strip,.stack,.journey,.education-card,.biocare,.resume-frame,.contact-card,.contact-form,.about-photo').forEach((element, index) => reveal(element, 'up', index % 2 ? '80' : ''));
    $$('.project-card').forEach((card, index) => reveal(card, 'scale', String(Math.min((index % 4) * 70, 200))));
    $$('.skills-grid article').forEach((card, index) => reveal(card, 'up', String(Math.min(index * 80, 280))));
    $$('.role').forEach((role, index) => reveal(role, index % 2 ? 'right' : 'left'));
    $$('.detail-card').forEach(card => reveal(card, card.classList.contains('reverse') ? 'right' : 'left'));
  };
  const observeReveals = () => {
    const targets = $$('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(target => observer.observe(target));
  };
  const sequence = (selector, childSelector, step = 120) => {
    const parent = $(selector); if (!parent || reduce) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; parent.classList.add('is-revealed'); $$(childSelector, parent).forEach((child, index) => setTimeout(() => child.classList.add('signal-active','pipeline-active'), index * step)); observer.disconnect(); }), { threshold: .35 });
    observer.observe(parent);
  };
  const hero = () => {
    const core = $('.hero-core'); const pageHero = $('.hero'); if (!core || !pageHero) return;
    core.addEventListener('animationend', event => { if (event.animationName === 'core-online') core.classList.add('booted'); }, { once: true }); pageHero.classList.add('motion-hero');
    if (!finePointer || reduce) return;
    let frame;
    core.addEventListener('pointermove', event => { const rect = core.getBoundingClientRect(), x = (event.clientX - rect.left) / rect.width - .5, y = (event.clientY - rect.top) / rect.height - .5; cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { core.style.setProperty('--light-x', `${(x + .5) * 100}%`); core.style.setProperty('--light-y', `${(y + .5) * 100}%`); core.style.setProperty('--motion-x', `${x * 12}px`); core.style.setProperty('--motion-y', `${y * 12}px`); }); });
    core.addEventListener('pointerleave', () => { core.style.setProperty('--light-x', '50%'); core.style.setProperty('--light-y', '50%'); core.style.setProperty('--motion-x', '0px'); core.style.setProperty('--motion-y', '0px'); });
  };
  const projectPointer = () => {
    if (!finePointer || reduce) return;
    $$('.project-card').forEach(card => { let frame; card.addEventListener('pointermove', event => { const rect = card.getBoundingClientRect(), x = (event.clientX - rect.left) / rect.width, y = (event.clientY - rect.top) / rect.height; cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { card.style.setProperty('--pointer-x', `${x * 100}%`); card.style.setProperty('--pointer-y', `${y * 100}%`); card.style.setProperty('--image-x', `${(0.5 - x) * 7}px`); card.style.setProperty('--image-y', `${(0.5 - y) * 7}px`); card.style.setProperty('--content-x', `${(x - .5) * 3}px`); card.style.setProperty('--content-y', `${(y - .5) * 3}px`); card.classList.add('motion-hover'); }); }); card.addEventListener('pointerleave', () => card.classList.remove('motion-hover')); });
  };
  const filterFlip = () => {
    document.addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; const cards = $$('[data-project-grid] .project-card'); const first = new Map(cards.map(card => [card, card.getBoundingClientRect()])); button.classList.add('filter-signal'); setTimeout(() => button.classList.remove('filter-signal'), 420); requestAnimationFrame(() => cards.forEach(card => { if (card.classList.contains('hidden')) return; const before = first.get(card), after = card.getBoundingClientRect(), dx = before.left - after.left, dy = before.top - after.top; if (dx || dy) card.animate([{ transform: `translate(${dx}px,${dy}px) scale(.985)` }, { transform: 'translate(0,0) scale(1)' }], { duration: 360, easing: 'cubic-bezier(.16,1,.3,1)' }); })); }, true);
  };
  const timeline = () => {
    const line = $('.timeline'); if (!line || reduce) return; let pending = false; const update = () => { pending = false; const rect = line.getBoundingClientRect(), height = Math.max(rect.height, 1), progress = Math.max(0, Math.min(1, (innerHeight * .7 - rect.top) / height)); line.style.setProperty('--timeline-progress', `${progress * 100}%`); }; const request = () => { if (!pending) { pending = true; requestAnimationFrame(update); } }; addEventListener('scroll', request, { passive: true }); addEventListener('resize', request, { passive: true }); request();
  };
  const directory = () => { const anchors = $$('.anchor-nav a'); const records = $$('.detail-card[id]'); if (!anchors.length || !records.length) return; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; anchors.forEach(anchor => anchor.classList.toggle('anchor-active', anchor.hash === `#${entry.target.id}`)); }), { rootMargin: '-28% 0px -60% 0px' }); records.forEach(record => observer.observe(record)); };
  const contact = () => { const form = $('.contact-form'); if (!form) return; const button = $('button[type="submit"]', form), status = $('.form-status', form); form.addEventListener('submit', () => { form.classList.remove('is-complete','is-failed'); form.classList.add('is-transmitting'); button?.classList.add('is-transmitting'); }); new MutationObserver(() => { const message = status?.textContent.toLowerCase() || ''; if (message.includes('transmitted')) { form.classList.remove('is-transmitting'); button?.classList.remove('is-transmitting'); form.classList.add('is-complete'); } if (message.includes('failed')) { form.classList.remove('is-transmitting'); button?.classList.remove('is-transmitting'); form.classList.add('is-failed'); } }).observe(status, { childList: true, characterData: true, subtree: true }); };
  const gameSafety = () => { const game = $('[data-fault-hunt]'); if (!game) return; const sync = () => document.body.classList.toggle('game-active', !game.hidden); new MutationObserver(sync).observe(game, { attributes: true, attributeFilter: ['hidden'] }); sync(); };
  const start = () => { if (reduce) return; revealGroups(); document.body.classList.add('motion-ready'); requestAnimationFrame(() => { hero(); observeReveals(); sequence('.proof-strip','article',140); sequence('.scope-visual','span',130); sequence('.stack','div',95); projectPointer(); filterFlip(); timeline(); directory(); contact(); gameSafety(); }); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
})();
