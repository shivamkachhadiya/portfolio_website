/* Visitor Counter */
let visits = localStorage.getItem("visits");
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem("visits", visits);
document.getElementById("visitorCount").textContent = visits;

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Time formatter */
function format(zone) {
    return new Date().toLocaleTimeString("en-US", {
        timeZone: zone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

/* Live clocks */
function updateClocks() {
    const now = new Date();
    document.getElementById("liveTime").textContent = now.toLocaleTimeString() + "." + now.getMilliseconds();
    document.getElementById("utc").textContent = format("UTC");
    document.getElementById("india").textContent = format("Asia/Kolkata");
    document.getElementById("ny").textContent = format("America/New_York");
    document.getElementById("london").textContent = format("Europe/London");
    document.getElementById("tokyo").textContent = format("Asia/Tokyo");
    document.getElementById("sydney").textContent = format("Australia/Sydney");
    document.getElementById("brazil").textContent = format("America/Sao_Paulo");
}
setInterval(updateClocks, 100);
updateClocks();

/* Smooth scroll for footer nav */
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
