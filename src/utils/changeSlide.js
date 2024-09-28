import slide1 from "./../assets/imgs/slide1.png";
import slide2 from "./../assets/imgs/slide2.png";
import slide3 from "./../assets/imgs/slide3.png";
import slide4 from "./../assets/imgs/slide4.png";
import slide5 from "./../assets/imgs/slide5.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

let count = 0;

export const changeSlide = (direction) => {
  const slideBlock = document.querySelector(".galery__slider");
  const paginations = document.querySelectorAll(".pagination");

  if (slideBlock) {
    if (direction === "next") {
      count === 4 ? (count = 0) : (count += 1);
    }
    if (direction === "prev") {
      count === 0 ? (count = 4) : (count -= 1);
    }

    const currentSlide = slides[count];
    slideBlock.style.backgroundImage = `url(${currentSlide})`;

    paginations.forEach((pagination, index) => {
      index === count
        ? pagination.classList.add("active")
        : pagination.classList.remove("active");
    });
  }
};
