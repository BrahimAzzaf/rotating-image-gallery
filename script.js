'use strict';

const imgContainerEl = document.querySelector('.image-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let x = 0;
let timer;

prevBtn.addEventListener('click', () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    imgContainerEl.style.transition = 'transform 0.5s';

    // Save the setTimeout reference in the timer variable
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000);
}

// Start the automatic gallery update
updateGallery();


