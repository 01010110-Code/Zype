window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; /* For Safari */
  document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera */
}
const galleryContainer = document.querySelector('.gallery-container');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    galleryContainer.src = thumbnail.src.replace('-thumb', '');
  });
});


const galleryContainer = document.querySelector('.gallery-container');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    galleryContainer.src = thumbnail.src.replace('-thumb', '');
  });
});
