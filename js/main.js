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
