import { listCities } from "../constansts/constants.js";
import { generateElement } from "./generateElement.js";

export const openList = () => {
  const maps = document.querySelector(".maps");
  const button = document.querySelector(".maps__header__offices");
  const arrowParts = document.querySelectorAll(".arrow__part");

  if (button) {
    button.classList.add("open");
  }

  maps.classList.add("relatives");

  const listWrappers = generateElement(
    "div",
    "list_wrappers showBlock",
    button
  );
  Object.values(listCities).forEach((value) => {
    const list = generateElement("ul", "list", listWrappers);
    generateElement("li", "list__region", list, value.region);
    value.cities.forEach((city) => {
      generateElement("li", "list__city", list, city);
    });
  });

  arrowParts.forEach((part, index) => {
    part.classList.remove(
      index === 0 ? "animationLeftDown" : "animationRightDown"
    );
    part.classList.add(index === 0 ? "animationLeftUp" : "animationRightUp");
  });
};

export const closeList = () => {
  const maps = document.querySelector(".maps");
  const button = maps.querySelector(".maps__header__offices");
  const arrowParts = maps.querySelectorAll(".arrow__part");
  const list = maps.querySelector(".list_wrappers");

  arrowParts.forEach((part, index) => {
    part.classList.remove(
      index === 0 ? "animationLeftDown" : "animationRightDown"
    );
    part.classList.add(
      index === 0 ? "animationLeftDown" : "animationRightDown"
    );
  });

  if (button) {
    list.classList.add("hideBlock");

    setTimeout(() => {
      list.remove();
      button.classList.remove("open");
      maps.classList.remove("relatives");
    }, "500");
  }
};
