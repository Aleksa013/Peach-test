import allMap from "./../assets/imgs/map_all.png";
import centralMap from "./../assets/imgs/map_central.png";
import moscowMap from "./../assets/imgs/map_moscow.png";
import nordOstMap from "./../assets/imgs/map_nord_ost.png";
import southMap from "./../assets/imgs/map_south.png";
import volgaMap from "./../assets/imgs/map_volga.png";
import uralMap from "./../assets/imgs/map_ural.png";
import siberiaMap from "./../assets/imgs/map_siberia.png";
import vestMap from "./../assets/imgs/map_vest.png";

export const changeMap = (parent, newMap) => {
  console.log("push");
  const oldMap = document.querySelector(".maps__body");
  if (oldMap) {
    oldMap.remove();
    const currentMap = document.createElement("img");
    currentMap.classList.add("maps__body");
    let path = "";
    switch (newMap) {
      case "Центр":
        path = centralMap;
        break;
      case "Москва":
        path = moscowMap;
        break;
      case "Северо-Запад":
        path = nordOstMap;
        break;
      case "Юг":
        path = southMap;
        break;
      case "Волга":
        path = volgaMap;
        break;
      case "Сибирь":
        path = siberiaMap;
        break;
      case "Дальний восток":
        path = vestMap;
        break;
      case "Урал":
        path = uralMap;
        break;
      default:
        path = allMap;
        break;
    }
    currentMap.src = path;
    parent.append(currentMap);
  }
};
