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
  const oldMap = document.querySelector(".map");
  if (oldMap) {
    oldMap.remove();
    const currentMap = document.createElement("div");
    currentMap.classList.add("map");
    let path = `url(${allMap})`;
    switch (newMap) {
      case "Центр":
        path = `url(${centralMap})`;
        break;
      case "Москва":
        path = `url(${moscowMap})`;
        break;
      case "Северо-Запад":
        path = `url(${nordOstMap})`;
        break;
      case "Юг":
        path = `url(${southMap})`;
        break;
      case "Волга":
        path = `url(${volgaMap})`;
        break;
      case "Сибирь":
        path = `url(${siberiaMap})`;
        break;
      case "Дальний восток":
        path = `url(${vestMap})`;
        break;
      case "Урал":
        path = `url(${uralMap})`;
        break;
      default:
        path = `url(${allMap})`;
        break;
    }
    currentMap.style.backgroundImage = path;
    parent.append(currentMap);
  }
};
