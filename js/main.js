
// document.addEventListener("DOMContentLoaded", () => {
//     const observerOptions = {
//         threshold: 0.15 // Triggers when 15% of the element is visible
//     };

//     const revealCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("active");
//                 // Optional: stop observing once revealed
//                 // observer.unobserve(entry.target);
//             }
//         });
//     };

//     const observer = new IntersectionObserver(revealCallback, observerOptions);

//     // Target all your main sections and boxes
//     document.querySelectorAll('.education-box, .bio-block, .section-title, .stack-card').forEach(el => {
//         el.classList.add("reveal");
//         observer.observe(el);
//     });
// });

// /* ======================================================
//    HERO SCROLL PARALLAX ANIMATION
//    Text → right
//    Image → left
//    Blur + fade
//    ====================================================== */

// /* ======================================================
//    HERO SCROLL PARALLAX (Desktop + Mobile Optimized)
//    ====================================================== */

// const hero = document.getElementById("hero");
// const heroText = document.getElementById("heroText");
// const heroImage = document.getElementById("heroImage");


// if (hero && heroText && heroImage) {

//     let ticking = false;

//     function updateHero() {

//         const rect = hero.getBoundingClientRect();

//         // scroll progress (0 → 1)
//         const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

//         // detect mobile
//         const isMobile = window.innerWidth < 768;

//         // lighter animation for mobile
//         const move = progress * (isMobile ? 90 : 260);
//         const blur = progress * (isMobile ? 0 : 8); // disable blur on mobile
//         const fade = 1 - progress;

//         /* GPU accelerated transform */
//         heroText.style.transform = `translate3d(${move}px,0,0)`;
//         heroImage.style.transform = `translate3d(-${move}px,0,0)`;

//         heroText.style.opacity = fade;
//         heroImage.style.opacity = fade;

//         heroText.style.filter = `blur(${blur}px)`;
//         heroImage.style.filter = `blur(${blur}px)`;

//         ticking = false;
//     }

//     /* requestAnimationFrame = smoother + faster */
//     function onScroll() {
//         if (!ticking) {
//             window.requestAnimationFrame(updateHero);
//             ticking = true;
//         }
//     }

//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("resize", updateHero);

//     // run once on load
//     updateHero();
// }

// // 1. Matrix Animation
// const canvas = document.getElementById('matrix-canvas');
// const ctx = canvas.getContext('2d');

// function resizeCanvas() {
//     // Reset canvas size to current window dimensions
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }

// // Initial call and listener for orientation changes
// window.addEventListener('resize', resizeCanvas);
// resizeCanvas();

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// const fontSize = 14;
// const columns = canvas.width / fontSize;
// const drops = Array(Math.floor(columns)).fill(1);

// function drawMatrix() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Darker trail for better readability
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "#00ffb4";
//     ctx.font = fontSize + "px monospace";

//     for (let i = 0; i < drops.length; i++) {
//         const text = letters.charAt(Math.floor(Math.random() * letters.length));
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         // Reset drop to top if it goes off screen
//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//             drops[i] = 0;
//         }
//         drops[i]++;
//     }
// }

// // Smooth frame rate for mobile performance
// setInterval(drawMatrix, 50);

// // 2. Preloader Removal
// window.addEventListener('load', () => {
//     setTimeout(() => {
//         const preloader = document.getElementById('preloader');
//         preloader.style.opacity = '0';
//         setTimeout(() => preloader.style.display = 'none', 500);
//     }, 2000); // 2-second boot sequence
// });
// document.addEventListener("DOMContentLoaded", () => {

//     const dot = document.querySelector(".cursor-dot");
//     const ring = document.querySelector(".cursor-ring");

//     /* ========================
//        DESKTOP MOUSE
//     ======================== */
//     window.addEventListener("mousemove", e => {
//         moveCursor(e.clientX, e.clientY);
//     });


//     /* ========================
//        MOBILE TOUCH SUPPORT
//     ======================== */

//     window.addEventListener("touchstart", e => {
//         const t = e.touches[0];
//         showCursor();
//         moveCursor(t.clientX, t.clientY);
//         ring.style.transform = "scale(1.8)";
//     });

//     window.addEventListener("touchmove", e => {
//         const t = e.touches[0];
//         moveCursor(t.clientX, t.clientY);
//     });

//     window.addEventListener("touchend", () => {
//         ring.style.transform = "scale(1)";
//         hideCursor();
//     });


//     /* ========================
//        FUNCTIONS
//     ======================== */

//     function moveCursor(x, y) {
//         dot.style.left = x + "px";
//         dot.style.top = y + "px";

//         ring.style.left = x - 14 + "px";
//         ring.style.top = y - 14 + "px";
//     }

//     function showCursor() {
//         dot.style.opacity = 1;
//         ring.style.opacity = 1;
//     }

//     function hideCursor() {
//         dot.style.opacity = 0;
//         ring.style.opacity = 0;
//     }


//     /* ========================
//        HOVER/TAP GROW
//     ======================== */

//     document.querySelectorAll("a, button, .profile-img").forEach(el => {

//         el.addEventListener("mouseenter", () => {
//             ring.style.transform = "scale(1.8)";
//         });

//         el.addEventListener("mouseleave", () => {
//             ring.style.transform = "scale(1)";
//         });

//         /* mobile tap */
//         el.addEventListener("touchstart", () => {
//             ring.style.transform = "scale(1.8)";
//         });

//         el.addEventListener("touchend", () => {
//             ring.style.transform = "scale(1)";
//         });

//     });

// });


// /* ======================================================
//    FOOTER ANIMATION + YEAR AUTO UPDATE
//    ====================================================== */

// document.addEventListener("DOMContentLoaded", () => {

//     /* auto year */
//     document.getElementById("year").textContent = new Date().getFullYear();

//     /* terminal type animation */
//     const lines = document.querySelectorAll(".terminal-line");

//     lines.forEach((line, index) => {
//         setTimeout(() => {
//             line.style.transition = "all 0.6s ease";
//             line.style.opacity = 1;
//             line.style.transform = "translateY(0)";
//         }, index * 400);
//     });

// });


//================================update=================================================


document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for Reveal
    const observerOptions = { threshold: 0.15 };
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    };
    const observer = new IntersectionObserver(revealCallback, observerOptions);
    document.querySelectorAll('.education-box, .bio-block, .section-title, .stack-card').forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });

    // 2. Optimized Cursor (Using requestAnimationFrame for buttery smoothness)
    // 2. Snappy Cursor (Human-Level Response)
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mouseX = -100, mouseY = -100; // Start off-screen
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        showCursor();
    });

    // Hide when mouse leaves window to prevent "stuck" cursor
    document.addEventListener("mouseleave", () => hideCursor());

    function animateCursor() {
        // Increased LERP values: 0.5 for dot (very fast), 0.25 for ring (smooth follow)
        // This removes the "heavy" feeling
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;
        ringX += (mouseX - ringX) * 0.25;
        ringY += (mouseY - ringY) * 0.25;

        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        ring.style.transform = `translate3d(${ringX - 14}px, ${ringY - 14}px, 0)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    function showCursor() { dot.style.opacity = 1; ring.style.opacity = 1; }
    function hideCursor() { dot.style.opacity = 0; ring.style.opacity = 0; }

    // Hover Scaling
    document.querySelectorAll("a, button, .profile-img").forEach(el => {
        el.addEventListener("mouseenter", () => ring.classList.add("grow"));
        el.addEventListener("mouseleave", () => ring.classList.remove("grow"));
    });
});

// 3. Hero Parallax (Optimized with 3D Transforms)
const hero = document.getElementById("hero");
const heroText = document.getElementById("heroText");
const heroImage = document.getElementById("heroImage");

if (hero && heroText && heroImage) {
    let ticking = false;
    function updateHero() {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
        const isMobile = window.innerWidth < 768;

        const move = progress * (isMobile ? 90 : 260);
        const blur = progress * (isMobile ? 0 : 8);
        const fade = 1 - progress;

        heroText.style.transform = `translate3d(${move}px,0,0)`;
        heroImage.style.transform = `translate3d(-${move}px,0,0)`;
        heroText.style.opacity = fade;
        heroImage.style.opacity = fade;
        if (!isMobile) {
            heroText.style.filter = `blur(${blur}px)`;
            heroImage.style.filter = `blur(${blur}px)`;
        }
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHero);
            ticking = true;
        }
    }, { passive: true }); // Better scroll performance
}

// 4. Matrix Background (Memory Efficient)
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
let columns, drops;
const fontSize = 14;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; // Smoother trail
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ffb4";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

// 5. Year & Footer
document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const lines = document.querySelectorAll(".terminal-line");
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = 1;
            line.style.transform = "translateY(0)";
        }, index * 400);
    });
});

// 6. Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 1000);
    }
});