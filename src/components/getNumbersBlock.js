import "./../styles/numbers.scss";
import { numberContent } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";
import { generateSpans } from "../utils/generateSpans.js";

export const getNumbers = (parent) => {
  const numbers = generateElement("section", "numbers", parent);

  Object.values(numberContent).forEach((number, index) => {
    const block = generateElement("div", "numbers__item", numbers);
    const numberBlock = generateElement(
      "span",
      "numbers__item__number burgundy",
      block,
      number[0]
    );
    const blockSpan = generateElement("div", "sign", "");
    if (index === 0) {
      generateSpans(blockSpan, "sign_less", 2, false);
      numberBlock.prepend(blockSpan);
      generateElement(
        "span",
        "numbers__item__text grey-dark",
        block,
        number[1]
      );
    } else if (index === 3 || index === 4) {
      generateSpans(blockSpan, "sign_plus", 2, false);
      generateElement(
        "span",
        "numbers__item__text grey-dark",
        block,
        number[1]
      );
      numberBlock.append(blockSpan);
    } else {
      generateElement(
        "span",
        "numbers__item__text grey-dark",
        block,
        number[1]
      );
    }
  });
};
