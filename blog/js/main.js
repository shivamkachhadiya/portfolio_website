

function openImage(img) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeImage() {
    document.getElementById("imgModal").style.display = "none";
}
