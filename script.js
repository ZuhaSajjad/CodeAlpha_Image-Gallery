let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
        caption.textContent = image.alt;
        currentIndex = index;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

function moveSlide(n) {
    currentIndex += n;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    modalImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].alt;
}
