const galleryContainer = document.querySelector('.gallery-container');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    galleryContainer.src = thumbnail.src.replace('-thumb', '');
  });
});
