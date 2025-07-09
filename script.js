
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('show');
    menuToggle.textContent = navLinks.classList.contains('show') ? '✕' : '☰';
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuToggle.textContent = '☰';
        }
    });
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    'section, .header-brand, .service-card, .contact-outer-card, .contact-inner-card'
).forEach(el => {
    observer.observe(el);
});