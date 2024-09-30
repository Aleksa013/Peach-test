import "./../styles/galery.scss";

import slide1 from "./../assets/imgs/slide1.png";
import { generateElement } from "../utils/generateElement.js";

import { getButton } from "../utils/getButton.js";
import { changeSlide } from "../utils/changeSlide.js";
import { generateSpans } from "../utils/generateSpans.js";
import { galeryContent } from "../constansts/constants.js";

export const getGalery = (parent) => {
  const galery = generateElement("section", "galery", parent);
  generateElement("h2", "galery__header", galery, galeryContent.header);
  const buttonsBlock = generateElement("div", "slider__buttons", galery);
  const slider = generateElement("div", "galery__slider", galery);
  const paginationBlock = generateElement("div", "pagination_wrapper", galery);

  slider.style.backgroundImage = `url(${slide1})`;

  getButton(buttonsBlock, "prev button", "<", () => changeSlide("prev"));
  getButton(buttonsBlock, "next button", ">", () => changeSlide("next"));

  generateSpans(paginationBlock, "pagination", 5);
};
