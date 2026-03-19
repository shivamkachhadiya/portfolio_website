/* ======================================================
   SHIVAMSYS.IN — footer.js
   Visitor counter, year, live clocks, smooth scroll
   ====================================================== */

/* Visitor Counter */
let visits = localStorage.getItem('visits');
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem('visits', visits);
const vc = document.getElementById('visitorCount');
if (vc) vc.textContent = visits;

/* Year */
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

/* Time formatter */
function formatZone(zone) {
    return new Date().toLocaleTimeString('en-US', {
        timeZone: zone, hour12: false,
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
}

/* Live clocks */
function updateClocks() {
    const now = new Date();
    const lt = document.getElementById('liveTime');
    if (lt) lt.textContent = now.toLocaleTimeString() + '.' + String(now.getMilliseconds()).padStart(3, '0');

    const map = {
        utc:    'UTC',
        india:  'Asia/Kolkata',
        ny:     'America/New_York',
        london: 'Europe/London',
        tokyo:  'Asia/Tokyo',
        sydney: 'Australia/Sydney',
        brazil: 'America/Sao_Paulo'
    };
    Object.entries(map).forEach(([id, zone]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = formatZone(zone);
    });
}
setInterval(updateClocks, 100);
updateClocks();

/* Smooth scroll for footer nav */
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
