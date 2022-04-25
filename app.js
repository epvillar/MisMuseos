// 16-29

// create variables

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0; // index of the image on

// function reset to Clear all images, pone display none a todas
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// function startSlide to Initialize slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// function slideLeft to sow prev slide
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// ditto to Show next slide
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// event listener to Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();