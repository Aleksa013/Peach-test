import "./../styles/header.scss";
import logoImage from "./../assets/logo.png";
import { menuItems } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";

export const getHeader = (parent) => {
  const header = generateElement("header", "header", parent);
  const logo = generateElement("img", "header__logo", header);
  const menu = generateElement("ul", "header__menu", header);

  logo.src = logoImage;

  menuItems.forEach((item) => {
    generateElement("li", "header__menu__item", menu, item);
  });
};
