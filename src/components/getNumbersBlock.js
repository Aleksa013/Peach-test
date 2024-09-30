import "./../styles/numbers.scss";
import { numberContent } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";

export const getNumbers = (parent) => {
  const numbers = generateElement("section", "numbers", parent);

  Object.values(numberContent).forEach((number) => {
    const block = generateElement("div", "numbers__item", numbers);
    generateElement("span", "numbers__item__number burgundy", block, number[0]);
    generateElement("span", "numbers__item__text grey-dark", block, number[1]);
  });
};
