let mouseX = 0;
let mouseY = 0;
const cursor = document.querySelector('.cursor');
let isMouseMoving = true; // Fare hareket ediyor mu kontrolü

document.addEventListener('mousemove', (e) => {
    // Fare imleci pozisyonunu alın
    mouseX += (e.clientX - mouseX) * 0.2;
    mouseY += (e.clientY - mouseY) * 0.2;

    // Fare imleci noktasını güncelleyin
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Fare hareket ediyor olarak işaretle
    isMouseMoving = false;

    // Fare durduğunda imleci takip etmeyi durdurun
    clearTimeout(cursorMoveTimeout);
    const cursorMoveTimeout = setTimeout(() => {
        isMouseMoving = true;
    }, 150); // Fare hareketsiz olduğu kabul edilecek süre (milisaniye cinsinden)
});

// Animasyon işlemini yürüt
function animateCursor() {
    if (!isMouseMoving) {
        // Fare durduğunda imleci arkasına getir
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }

    requestAnimationFrame(animateCursor);
}

// Animasyonu başlat
animateCursor();

// Resmin üzerine gelindiğinde titreşim efekti
const image = document.querySelector('.shaking-image');

image.addEventListener('mouseover', () => {
    image.style.animation = 'shake 0.3s ease-in-out infinite';
});

image.addEventListener('mouseout', () => {
    image.style.animation = '';
});
