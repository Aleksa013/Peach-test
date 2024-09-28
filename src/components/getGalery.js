import "./../styles/galery.scss";

import slide1 from "./../assets/imgs/slide1.png";

import { getButton } from "../utils/getButton.js";
import { changeSlide } from "../utils/changeSlide.js";
import { generateSpans } from "../utils/generateSpans.js";
import { galeryContent } from "../constansts/constants.js";

export const getGalery = (parent) => {
  const galery = document.createElement("section");
  const header = document.createElement("h2");
  const slider = document.createElement("div");
  const buttonsBlock = document.createElement("div");
  const paginationBlock = document.createElement("div");

  galery.classList.add("galery");
  header.classList.add("galery__header", "fs56");
  slider.classList.add("galery__slider");
  buttonsBlock.classList.add("slider__buttons");
  paginationBlock.classList.add("pagination_wrapper");

  slider.style.backgroundImage = `url(${slide1})`;
  header.textContent = galeryContent.header;

  getButton(buttonsBlock, "prev button", "<", () => changeSlide("prev"));
  getButton(buttonsBlock, "next button", ">", () => changeSlide("next"));

  generateSpans(paginationBlock, "pagination", 5);

  galery.append(header);
  galery.append(buttonsBlock);
  galery.append(slider);
  galery.append(paginationBlock);

  parent.append(galery);
};
