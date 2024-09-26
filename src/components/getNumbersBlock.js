import "./../styles/numbers.scss";
import { numberContent } from "../constansts/constants.js";

export const getNumbers = (parent) => {
  const numbers = document.createElement("div");
  numbers.className = "numbers";

  numbers.className = "numbers";
  Object.values(numberContent).forEach((number, index) => {
    const block = document.createElement("div");
    const numberSpan = document.createElement("span");
    const textSpan = document.createElement("span");

    block.classList.add("numbers__item", index);
    numberSpan.classList.add("numbers__item__number", "burgundy", "fs80");
    textSpan.classList.add("numbers__item__text", "grey-dark", "fs18");

    numberSpan.innerHTML = number[0];
    textSpan.textContent = number[1];

    block.append(numberSpan);
    block.append(textSpan);
    numbers.append(block);
  });

  parent.append(numbers);
};
