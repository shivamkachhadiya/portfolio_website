// blog/js/blog-layout.js

const siteHeader = `
    <header class="navbar">
        <div class="logo">
            <a href="/" class="nav-link">ShivamSys</a>
        </div>
        <nav>
            <a href="/blog/index.html" class="nav-link">Home</a>
            <a href="https://shivamsys.in" class="nav-link">Portfolio</a>
        </nav>
    </header>
`;

const siteFooter = `
    <footer>
        © ${new Date().getFullYear()} Shivam Kachhadiya • Built for Performance
    </footer>
    <div class="cursor-dot"></div>
    <div class="cursor-ring"></div>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject Header
    if (!document.querySelector('.navbar')) {
        document.body.insertAdjacentHTML('afterbegin', siteHeader);
    }

    // Inject Footer
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', siteFooter);
    }
});