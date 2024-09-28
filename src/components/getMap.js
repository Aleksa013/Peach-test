import "./../styles/maps.scss";
import { mapsContent } from "../constansts/constants.js";
import { changeMap } from "../utils/changeMap.js";
import { getButton } from "../utils/getButton.js";
import { closeList, openList } from "../utils/openList.js";

import allMap from "./../assets/imgs/map_all.png";

export const getMap = (parent) => {
  const maps = document.createElement("section");
  const header = document.createElement("div");
  const map = document.createElement("div");
  const officeButton = document.createElement("button");
  const mapsButtons = document.createElement("div");

  officeButton.className = "button_office";
  maps.className = "maps";
  map.className = "maps__body";
  header.className = "maps__header shadow";
  mapsButtons.className = "maps__header__regions";
  officeButton.classList.add("maps__header__offices", "fs24");
  map.style.backgroundImage = `url(${allMap})`;
  officeButton.textContent = "Офисы Softline";

  mapsContent.buttons.forEach((button) => {
    getButton(mapsButtons, "maps__header__regions__button fs18", button, () =>
      changeMap(maps, button)
    );
  });

  officeButton.addEventListener(
    "click",
    officeButton.classList.contains("open") ? closeList() : openList()
  );

  header.append(officeButton);
  header.append(mapsButtons);
  maps.append(header);
  maps.append(map);
  parent.append(maps);
};
