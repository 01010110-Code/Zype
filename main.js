var index = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {index = 1}
  slides[index-1].style.display = "flex";
  setTimeout(showSlides, 3000);
}

showSlides();
window.onload = function () {
  document.getElementsByClassName("slide")[0].style.display = "flex";
}
