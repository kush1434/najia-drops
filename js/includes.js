// Simple include loader for repeated components (header/footer)
document.addEventListener('DOMContentLoaded', async () => {
  const nodes = [...document.querySelectorAll('[data-include]')];

  await Promise.all(nodes.map(async (el) => {
    const url = el.getAttribute('data-include');
    try {
      const html = await fetch(url, { cache: 'no-store' }).then(r => r.text());
      el.outerHTML = html;
    } catch (e) {
      console.error('Include failed:', url, e);
    }
  }));
});
