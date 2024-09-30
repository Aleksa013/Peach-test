import "./../styles/maps.scss";
import { mapsContent } from "../constansts/constants.js";
import { changeMap } from "../utils/changeMap.js";
import { getButton } from "../utils/getButton.js";
import { openList, closeList } from "../utils/openList.js";
import { generateElement } from "../utils/generateElement.js";

import allMap from "./../assets/imgs/map_all.png";
import { generateSpans } from "../utils/generateSpans.js";

export const getMap = (parent) => {
  const maps = generateElement("section", "maps", parent);
  const header = generateElement("div", "maps__header shadow", maps);
  const mapWrapper = generateElement("div", "maps__body", maps);
  const map = generateElement("div", "map", mapWrapper);
  const officeButtonWrapper = generateElement(
    "div",
    "maps__header__offices",
    header
  );
  const officeButton = getButton(
    officeButtonWrapper,
    "button_offices",
    "Офисы Softline"
  );
  const arrowIcon = generateElement("div", "arrow", officeButtonWrapper);
  const mapsButtons = generateElement("div", "maps__header__regions", header);
  generateSpans(arrowIcon, "arrow__part", 2, false);

  map.style.backgroundImage = `url(${allMap})`;

  mapsContent.buttons.forEach((button) => {
    getButton(mapsButtons, "regions__button", button, () =>
      changeMap(mapWrapper, button)
    );
  });

  officeButton.addEventListener("click", () =>
    officeButtonWrapper.classList.contains("open") ? closeList() : openList()
  );
};
