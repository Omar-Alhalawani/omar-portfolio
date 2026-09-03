(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let previousFocus;

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

  function ensureDialogs() {
    if (!$('[data-command-dialog]')) document.body.insertAdjacentHTML('beforeend', `<div class="dialog-backdrop" data-command-dialog hidden><section class="command-dialog" role="dialog" aria-modal="true" aria-labelledby="command-title"><div><label id="command-title" for="command-input">COMMAND // NAVIGATE</label><button aria-label="Close command palette" data-close-dialog>×</button></div><input id="command-input" type="search" placeholder="Type a command…" autocomplete="off"><ul class="command-list" role="listbox"></ul><p>↑ ↓ to navigate <b>·</b> Enter to select <b>·</b> Esc to close</p></section></div>`);
  }
  ensureDialogs();
  const commandDialog = $('[data-command-dialog]');
  function openDialog(dialog, focusElement) { previousFocus = document.activeElement; dialog.hidden = false; document.body.style.overflow = 'hidden'; (focusElement || $('[data-close-dialog]', dialog))?.focus(); }
  function closeDialog(dialog) { if (!dialog || dialog.hidden) return; dialog.hidden = true; document.body.style.overflow = ''; previousFocus?.focus(); }
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('.dialog-backdrop'))));
  $$('.dialog-backdrop').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(dialog); }));

  const commands = [
    ['Go Home', 'index.html'], ['Open Experience', 'experience.html'], ['View Projects', 'projects.html'], ['Open FIFO Project', 'project-details.html#fifo'], ['Open FPGA Arithmetic Project', 'project-details.html#fpga-arithmetic'], ['Open EMG Project', 'project-details.html#emg'], ['Open LumaLink', 'project-details.html#lumalink'], ['View Resume', 'resume.html'], ['Download Resume', 'assets/resume/Resume_Omar_Alhalawani.pdf'], ['Open GitHub', 'https://github.com/Omar-Alhalawani'], ['Open LinkedIn', 'https://linkedin.com/in/omar-alhalawani'], ['Contact Omar', 'contact.html']
  ];
  const commandInput = $('#command-input', commandDialog); const commandList = $('.command-list', commandDialog); let selection = 0; let visibleCommands = commands;
  function renderCommands(query = '') { visibleCommands = commands.filter(([name]) => name.toLowerCase().includes(query.toLowerCase())); selection = Math.min(selection, Math.max(visibleCommands.length - 1, 0)); commandList.innerHTML = visibleCommands.length ? visibleCommands.map(([name], index) => `<li><button class="${index === selection ? 'active' : ''}" role="option" aria-selected="${index === selection}" data-command="${index}">${name}</button></li>`).join('') : '<li><button disabled>No matching command</button></li>'; }
  function executeCommand(index) { const [, target] = visibleCommands[index]; if (!target) return; closeDialog(commandDialog); if (/^https?:/.test(target)) open(target, '_blank', 'noopener'); else location.href = target; }
  function openCommand() { selection = 0; commandInput.value = ''; renderCommands(); openDialog(commandDialog, commandInput); }
  $$('[data-open-command]').forEach(button => button.addEventListener('click', openCommand));
  commandInput?.addEventListener('input', () => { selection = 0; renderCommands(commandInput.value); });
  commandList?.addEventListener('click', event => { const button = event.target.closest('[data-command]'); if (button) executeCommand(Number(button.dataset.command)); });
  document.addEventListener('keydown', event => {
    const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !typing) { event.preventDefault(); openCommand(); return; }
    if (event.key === 'Escape') { closeDialog(commandDialog); return; }
    if (!commandDialog.hidden) { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); selection = (selection + (event.key === 'ArrowDown' ? 1 : -1) + visibleCommands.length) % visibleCommands.length; renderCommands(commandInput.value); } if (event.key === 'Enter') { event.preventDefault(); executeCommand(selection); } }
  });


  $$('.filter-bar [data-filter]').forEach(button => button.addEventListener('click', () => { $$('.filter-bar button').forEach(b => b.classList.toggle('active', b === button)); const filter = button.dataset.filter; $$('[data-project-grid] .project-card').forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter)); }));
  if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('active', entry.isIntersecting)), { threshold: .3 }); $$('.role').forEach(role => observer.observe(role)); }
  const tilt = $('[data-tilt]'); if (tilt && !reduceMotion && matchMedia('(pointer:fine)').matches) { tilt.addEventListener('pointermove', event => { const rect = tilt.getBoundingClientRect(); tilt.style.transform = `perspective(900px) rotateX(${(rect.height / 2 - (event.clientY - rect.top)) / 20}deg) rotateY(${((event.clientX - rect.left) - rect.width / 2) / 20}deg)`; }); tilt.addEventListener('pointerleave', () => { tilt.style.transform = ''; }); }
  const form = $('.contact-form'); form?.addEventListener('submit', async event => { event.preventDefault(); const status = $('.form-status', form); const submit = $('button[type="submit"]', form); submit.disabled = true; status.textContent = 'Sending…'; try { const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); if (!response.ok) throw new Error(); form.reset(); status.textContent = 'Message transmitted. Thank you.'; } catch { status.textContent = 'Transmission failed. Please use the email link instead.'; } finally { submit.disabled = false; } });

  const canvas = $('#circuit-canvas'); if (!canvas || reduceMotion) return;
  const context = canvas.getContext('2d'); let points = [], raf, last = 0;
  function resize() { const ratio = Math.min(devicePixelRatio || 1, 1.5); canvas.width = innerWidth * ratio; canvas.height = innerHeight * ratio; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; context.setTransform(ratio, 0, 0, ratio, 0, 0); const count = innerWidth < 600 ? 16 : 30; points = Array.from({ length: count }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .09, vy: (Math.random() - .5) * .09 })); }
  function draw(time) { if (document.hidden) { raf = requestAnimationFrame(draw); return; } if (time - last > 32) { context.clearRect(0, 0, innerWidth, innerHeight); points.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > innerWidth) p.vx *= -1; if (p.y < 0 || p.y > innerHeight) p.vy *= -1; context.fillStyle = 'rgba(103,232,249,.35)'; context.fillRect(p.x - 1, p.y - 1, 2, 2); }); for (let i = 0; i < points.length; i++) for (let j = i + 1; j < points.length; j++) { const a = points[i], b = points[j], dx = a.x - b.x, dy = a.y - b.y; if (Math.abs(dx) < 130 && Math.abs(dy) < 80) { context.strokeStyle = 'rgba(103,232,249,.055)'; context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, a.y); context.lineTo(b.x, b.y); context.stroke(); } } last = time; } raf = requestAnimationFrame(draw); }
  resize(); addEventListener('resize', resize, { passive: true }); raf = requestAnimationFrame(draw);
})();
