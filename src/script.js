'use strict';
document.documentElement.classList.add('js');

const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('nav');
const progress = document.getElementById('scroll-progress');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !expanded);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { nav?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); }
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
const activateTab = tab => {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(item.getAttribute('aria-controls'));
    if (panel) panel.hidden = !active;
  });
};
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (next) { event.preventDefault(); activateTab(next); next.focus(); }
  });
});

// Native dialogs have built-in keyboard / focus behavior and keep URLs usable without custom routing.
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.dialog)?.showModal();
  });
});
document.querySelectorAll('.case-dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach(el => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.02, rootMargin: '0px 0px 90px 0px' });
  reveals.forEach(el => observer.observe(el));
}
let framePending = false;
const updateProgress = () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total > 0 ? Math.min(100, Math.max(0, window.scrollY / total * 100)) : 0}%`;
  document.getElementById('topbar')?.classList.toggle('scrolled', window.scrollY > 15);
  framePending = false;
};
window.addEventListener('scroll', () => {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(updateProgress);
}, { passive: true });
updateProgress();

const toast = document.getElementById('toast');
let toastTimer;
const showToast = text => {
  toast.textContent = text;
  toast.classList.add('active');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('active'), 2600);
};
document.getElementById('copy-email')?.addEventListener('click', async () => {
  const email = 'alexyosifov2008@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied. See you in the inbox.');
  } catch (_) {
    const input = document.createElement('textarea');
    input.value = email;
    input.style.position = 'fixed';
    input.style.left = '-9999px';
    document.body.append(input);
    input.select();
    const copied = document.execCommand('copy');
    input.remove();
    showToast(copied ? 'Email copied. See you in the inbox.' : `Email: ${email}`);
  }
});
document.getElementById('year').textContent = String(new Date().getFullYear());
