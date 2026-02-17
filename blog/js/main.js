document.addEventListener('click', function (e) {
    // Check if the clicked element is a nav-link
    if (e.target.classList.contains('nav-link')) {
        e.preventDefault(); // Stop the full page reload
        const targetUrl = e.target.getAttribute('href');

        // 1. Smooth Fade Out (Optional UX)
        document.querySelector('main').style.opacity = '0';

        // 2. Fetch the new content
        fetch(targetUrl)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('main').innerHTML;
                const newTitle = doc.querySelector('title').innerText;

                // 3. Update the Page without reloading
                document.querySelector('main').innerHTML = newContent;
                document.title = newTitle;
                window.history.pushState({}, '', targetUrl);

                // 4. Fade back in
                document.querySelector('main').style.opacity = '1';

                // Re-run any cursor or animation scripts if needed
                if (typeof initCursor === 'function') initCursor();
            })
            .catch(err => {
                // Fallback: if fetch fails, do a normal redirect
                window.location.href = targetUrl;
            });
    }
});

function openImage(img) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeImage() {
    document.getElementById("imgModal").style.display = "none";
}
