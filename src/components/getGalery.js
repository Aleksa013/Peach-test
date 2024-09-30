import "./../styles/galery.scss";

import slide1 from "./../assets/imgs/slide1.png";
import slide2 from "./../assets/imgs/slide2.png";
import slide3 from "./../assets/imgs/slide3.png";
import slide4 from "./../assets/imgs/slide4.png";
import slide5 from "./../assets/imgs/slide5.png";

import { generateElement } from "../utils/generateElement.js";

import { getButton } from "../utils/getButton.js";
import { changeSlide, changeSlidePagination } from "../utils/changeSlide.js";
import { generateSpans } from "../utils/generateSpans.js";
import { galeryContent } from "../constansts/constants.js";

export const getGalery = (parent) => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const galery = generateElement("section", "galery", parent);
  generateElement("h2", "galery__header", galery, galeryContent.header);
  const buttonsBlock = generateElement("div", "slider__buttons", galery);
  const slider = generateElement("div", "galery__slider_container", galery);
  const sliderView = generateElement("div", "galery__slider_view", slider);
  const paginationBlock = generateElement("div", "pagination_wrapper", galery);

  slides.map((slide) => {
    const slideImg = generateElement("div", "slider__img", sliderView);
    slideImg.style.backgroundImage = `url(${slide})`;
  });

  const prevButton = getButton(buttonsBlock, "prev__button button", "", () =>
    changeSlide("prev")
  );
  const nextButton = getButton(buttonsBlock, "next__button button", "", () =>
    changeSlide("next")
  );

  const signBlockPrev = generateElement("div", "sign", prevButton);
  const signBlockNext = generateElement("div", "sign", nextButton);

  generateSpans(signBlockPrev, "sign_prev", 2, false);
  generateSpans(signBlockNext, "sign_next", 2, false);

  generateSpans(paginationBlock, "pagination", 5);

  paginationBlock.addEventListener("click", (event) =>
    changeSlidePagination(event.target)
  );

  slider.addEventListener("touchend", () => changeSlide("next"));
};
