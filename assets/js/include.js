// include.js — server-side include via fetch (simples, funciona em GitHub Pages)
document.addEventListener('DOMContentLoaded', async () => {
  const includes = document.querySelectorAll('[id^="include"]');
  for (const el of includes) {
    const path = el.id.replace('include ', '').trim();
    try {
      const res = await fetch(path);
      if (res.ok) {
        const html = await res.text();
        el.outerHTML = html;
      }
    } catch (e) {
      console.error('Include failed:', path, e);
    }
  }
  // Marcar nav ativa
  const path = window.location.pathname;
  document.querySelectorAll('nav.main-nav a').forEach(a => {
    if (a.getAttribute('href') && path.startsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});
