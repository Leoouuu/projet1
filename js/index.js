var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide, i) => {
    if (i == slideIndex - 1) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
