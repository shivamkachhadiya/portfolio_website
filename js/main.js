document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Target all your main sections and boxes
    document.querySelectorAll('.education-box, .bio-block, .section-title, .stack-card').forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });
});
// 1. Matrix Animation
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    // Reset canvas size to current window dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initial call and listener for orientation changes
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Darker trail for better readability
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffb4";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top if it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Smooth frame rate for mobile performance
setInterval(drawMatrix, 50);

// 2. Preloader Removal
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 2000); // 2-second boot sequence
});
document.addEventListener("DOMContentLoaded", () => {

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    /* ========================
       DESKTOP MOUSE
    ======================== */
    window.addEventListener("mousemove", e => {
        moveCursor(e.clientX, e.clientY);
    });


    /* ========================
       MOBILE TOUCH SUPPORT
    ======================== */

    window.addEventListener("touchstart", e => {
        const t = e.touches[0];
        showCursor();
        moveCursor(t.clientX, t.clientY);
        ring.style.transform = "scale(1.8)";
    });

    window.addEventListener("touchmove", e => {
        const t = e.touches[0];
        moveCursor(t.clientX, t.clientY);
    });

    window.addEventListener("touchend", () => {
        ring.style.transform = "scale(1)";
        hideCursor();
    });


    /* ========================
       FUNCTIONS
    ======================== */

    function moveCursor(x, y) {
        dot.style.left = x + "px";
        dot.style.top = y + "px";

        ring.style.left = x - 14 + "px";
        ring.style.top = y - 14 + "px";
    }

    function showCursor() {
        dot.style.opacity = 1;
        ring.style.opacity = 1;
    }

    function hideCursor() {
        dot.style.opacity = 0;
        ring.style.opacity = 0;
    }


    /* ========================
       HOVER/TAP GROW
    ======================== */

    document.querySelectorAll("a, button, .profile-img").forEach(el => {

        el.addEventListener("mouseenter", () => {
            ring.style.transform = "scale(1.8)";
        });

        el.addEventListener("mouseleave", () => {
            ring.style.transform = "scale(1)";
        });

        /* mobile tap */
        el.addEventListener("touchstart", () => {
            ring.style.transform = "scale(1.8)";
        });

        el.addEventListener("touchend", () => {
            ring.style.transform = "scale(1)";
        });

    });

});
