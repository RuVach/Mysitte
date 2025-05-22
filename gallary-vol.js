// Фоточки //
const carouselImages = document.querySelectorAll('.carousels img');
const carouselContainer = document.querySelector('.carousels-images');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * (690 + 20); 
    carouselContainer.style.transform = `translateX(${offset}px)`;

    carouselImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active');
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
}

showImage(currentIndex);