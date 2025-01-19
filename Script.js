let currentIndex = 0;
const images = document.querySelectorAll('.slider-frame img');
const totalImages = images.length;

function moveToNextFrame() {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100; // Each image takes up 100% of the container
  document.querySelector('.slider-frame').style.transform = `translateX(${offset}%)`;
}

// Change slide every 3 seconds
setInterval(moveToNextFrame, 3000);

// Optional: Add event listeners for manual slide control (e.g., using left and right arrows)
