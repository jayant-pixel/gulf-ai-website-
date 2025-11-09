async function injectPartials() {
  const headerMount = document.querySelector('[data-partial="header"]');
  const footerMount = document.querySelector('[data-partial="footer"]');

  const load = async (path, mount) => {
    if (!mount) return;
    try {
      const res = await fetch(path, { cache: 'no-store' });
      const html = await res.text();
      mount.innerHTML = html;
    } catch (e) {
      console.warn('Partial load failed:', path, e);
    }
  };

  await Promise.all([
    load('/partials/header.html', headerMount),
    load('/partials/footer.html', footerMount),
  ]);

  try {
    const here = location.pathname.replace(/\/index.html$/, '/');
    document
      .querySelectorAll('.nav-links a')
      .forEach((a) => a.classList.toggle('active', a.getAttribute('href') === here));
  } catch (err) {
    console.warn('Nav active state failed:', err);
  }
}

document.addEventListener('DOMContentLoaded', injectPartials);
