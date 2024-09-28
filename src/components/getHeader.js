import "./../styles/header.scss";
import logoImage from "./../assets/logo.png";
import { menuItems } from "../constansts/constants.js";

export const getHeader = (parent) => {
  const header = document.createElement("header");
  const logo = document.createElement("img");
  const menu = document.createElement("ul");

  header.className = "header";
  logo.className = "header__logo";
  logo.src = logoImage;
  menu.classList.add("header__menu");

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.className = "header__menu__item";
    menuItem.textContent = item;
    menu.appendChild(menuItem);
  });
  header.append(logo);
  header.append(menu);
  parent.appendChild(header);
};
