import "./../styles/directions.scss";
import { directionContent } from "../constansts/constants.js";

export const getDirection = (parent) => {
  const direction = document.createElement("section");
  const header = document.createElement("h2");

  direction.className = "direction";
  header.className = "direction__header fs56";

  header.textContent = directionContent.header;

  direction.append(header);

  directionContent.solutions.forEach((value) => {
    const solution = document.createElement("article");
    const infoBlock = document.createElement("div");
    const solutionHeader = document.createElement("h3");
    const solutionText = document.createElement("p");

    solution.className = "solution";
    infoBlock.className = "solution__info";
    solutionHeader.className = "solution__info_header";
    solutionText.className = "solution__info_text";

    solution.style.backgroundImage = `url(${value.bgPath})`;
    solutionHeader.textContent = value.solution;
    solutionText.textContent = value.description;

    infoBlock.append(solutionHeader);
    infoBlock.append(solutionText);
    solution.append(infoBlock);
    direction.append(solution);
  });
  parent.append(direction);
};
