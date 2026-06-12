function toggleMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('navLinks');
    btn.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function toggleCategory(header) {
    const category = header.parentElement;
    const wasActive = category.classList.contains('active');
    document.querySelectorAll('.menu-category').forEach(cat => cat.classList.remove('active'));
    if (!wasActive) category.classList.add('active');
}

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobile-menu-btn').classList.remove('active');
        document.getElementById('navLinks').classList.remove('active');
    });
});