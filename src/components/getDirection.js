import "./../styles/maps.scss";
import "./../styles/directions.scss";
import { directionContent } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";
import { generateSpans } from "../utils/generateSpans.js";

export const getDirection = (parent) => {
  const direction = generateElement("section", "direction", parent);
  generateElement(
    "h2",
    "direction__header",
    direction,
    directionContent.header
  );

  directionContent.solutions.forEach((value) => {
    const solution = generateElement("article", "solution", direction);
    const infoBlock = generateElement("div", "solution__info", solution);
    generateElement("h3", "solution__info_header", infoBlock, value.solution);
    solution.style.backgroundImage = `url(${value.bgPath})`;
    const arrowIcon = generateElement("div", "arrow mobile", infoBlock);
    generateSpans(arrowIcon, "arrow__part white", 2, false);
    generateElement("p", "solution__info_text", infoBlock, value.description);
  });
};
