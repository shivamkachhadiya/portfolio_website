document.addEventListener("DOMContentLoaded", () => {

    /* ===== PROFILE SCROLL EFFECT ===== */
    const pic = document.getElementById("profilePic");

    window.addEventListener("scroll", () => {
        const y = window.scrollY;

        let scale = 1 - y / 1200;
        if (scale < 0.75) scale = 0.75;

        let gray = y / 600;
        if (gray > 1) gray = 1;

        let opacity = 1 - y / 1000;
        if (opacity < 0.4) opacity = 0.4;

        pic.style.transform = `scale(${scale})`;
        pic.style.filter = `grayscale(${gray})`;
        pic.style.opacity = opacity;
    });


    /* ===== CUSTOM CURSOR ===== */
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    window.addEventListener("mousemove", e => {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

        ring.style.left = e.clientX - 14 + "px";
        ring.style.top = e.clientY - 14 + "px";
    });

    document.querySelectorAll("a, button, .profile-img").forEach(el => {
        el.addEventListener("mouseenter", () => ring.style.transform = "scale(1.8)");
        el.addEventListener("mouseleave", () => ring.style.transform = "scale(1)");
    });

});
