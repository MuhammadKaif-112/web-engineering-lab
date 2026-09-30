const links = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
    if (!link) return;

    links.forEach((l) => l.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'location');
  });
}, { threshold: 0.5 });

document.querySelectorAll('main section').forEach((section) => observer.observe(section));