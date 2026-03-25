/* ======================================================
   SHIVAMSYS.IN — main.js v5.0
   1. Preloader
   2. Mobile Nav Toggle
   3. Scroll Reveal
   4. Custom Cursor
   5. Active Nav Highlight
   6. Hero Parallax
   7. Matrix Canvas
   8. Contact Form (Formspree AJAX)
   ====================================================== */

/* ======================================================
   1. PRELOADER
   ====================================================== */
window.addEventListener('load', () => {
    const el = document.getElementById('preloader');
    if (!el) return;
    setTimeout(() => {
        el.style.transition = 'opacity 0.45s ease';
        el.style.opacity = '0';
        setTimeout(() => { el.style.display = 'none'; }, 450);
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================
       2. MOBILE NAV TOGGLE
       ====================================================== */
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
        });
        navToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
        // Close when a link is clicked
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('open'));
        });
        // Close on outside click
        document.addEventListener('click', e => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    }


    /* ======================================================
       3. SCROLL REVEAL
       ====================================================== */
    const revealObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.12 });

    document.querySelectorAll('.education-box, .bio-card, .metric-card, .skill-card, .section-title').forEach(el => {
        el.classList.add('reveal');
        revealObs.observe(el);
    });


    /* ======================================================
       4. CUSTOM CURSOR
       ====================================================== */
    const dot  = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');

    if (dot && ring) {
        let mX = -200, mY = -200, dX = 0, dY = 0, rX = 0, rY = 0, on = false;

        window.addEventListener('mousemove', e => {
            mX = e.clientX; mY = e.clientY;
            if (!on) { dot.style.opacity = ring.style.opacity = 1; on = true; }
        });
        document.addEventListener('mouseleave', () => {
            dot.style.opacity = ring.style.opacity = 0; on = false;
        });

        (function tick() {
            dX += (mX - dX) * 0.55; dY += (mY - dY) * 0.55;
            rX += (mX - rX) * 0.22; rY += (mY - rY) * 0.22;
            dot.style.transform  = `translate3d(${dX}px,${dY}px,0)`;
            ring.style.transform = `translate3d(${rX - 14}px,${rY - 14}px,0)`;
            requestAnimationFrame(tick);
        })();

        document.querySelectorAll('a, button, .profile-img, .skill-card, .bio-card, .metric-card').forEach(el => {
            el.addEventListener('mouseenter', () => { ring.style.width = ring.style.height = '40px'; ring.style.borderColor = 'var(--blue)'; });
            el.addEventListener('mouseleave', () => { ring.style.width = ring.style.height = '28px'; ring.style.borderColor = 'var(--green)'; });
        });
    }


    /* ======================================================
       5. ACTIVE NAV HIGHLIGHT ON SCROLL
       ====================================================== */
    const sections = document.querySelectorAll('section[id], footer[id]');
    const links    = document.querySelectorAll('.nav-links a[href^="#"]');

    sections.forEach(s => {
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(a => a.classList.remove('active'));
                    links.forEach(a => a.removeAttribute('aria-current'));
                    const m = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                    if (m) {
                        m.classList.add('active');
                        m.setAttribute('aria-current', 'page');
                    }
                }
            });
        }, { threshold: 0.3 }).observe(s);
    });


    /* ======================================================
       8. CONTACT FORM (Formspree AJAX)
       ====================================================== */
    const form   = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const btn    = document.getElementById('submit-btn');

    if (form && status && btn) {
        form.addEventListener('submit', async e => {
            e.preventDefault();
            btn.textContent = 'Sending...';
            btn.disabled = true;
            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                status.style.display = 'block';
                if (res.ok) {
                    status.textContent = '> MESSAGE_SENT: OK';
                    status.style.color = 'var(--accent)';
                    form.reset();
                } else {
                    status.textContent = '> ERROR: Please email directly.';
                    status.style.color = '#ff4444';
                }
            } catch {
                status.style.display = 'block';
                status.textContent = '> ERROR: Network issue. Please email directly.';
                status.style.color = '#ff4444';
            }
            btn.textContent = 'Send →';
            btn.disabled = false;
        });
    }

});


/* ======================================================
   6. HERO PARALLAX
   ====================================================== */
(function () {
    const hero  = document.getElementById('hero');
    const hText = document.getElementById('heroText');
    const hImg  = document.getElementById('heroImage');
    if (!hero || !hText || !hImg) return;

    let ticking = false;
    function update() {
        const p = Math.min(Math.max(-hero.getBoundingClientRect().top / window.innerHeight, 0), 1);
        const m = window.innerWidth < 768;
        const move = p * (m ? 60 : 230);
        const fade = 1 - p;
        hText.style.transform = `translate3d(${move}px,0,0)`;
        hImg.style.transform  = `translate3d(${-move}px,0,0)`;
        hText.style.opacity   = hImg.style.opacity = fade;
        if (!m) hText.style.filter = hImg.style.filter = `blur(${p * 7}px)`;
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
})();


/* ======================================================
   7. MATRIX CANVAS
   ====================================================== */
(function () {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx   = canvas.getContext('2d');
    const size  = 14;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%<>';
    let cols, drops;

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        cols  = Math.floor(canvas.width / size);
        drops = Array(cols).fill(1);
    }
    function draw() {
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffb4';
        ctx.font      = `${size}px monospace`;
        for (let i = 0; i < drops.length; i++) {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * size, drops[i] * size);
            if (drops[i] * size > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    window.addEventListener('resize', resize);
    resize();
    setInterval(draw, 50);
})();
