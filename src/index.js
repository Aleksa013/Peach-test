import "./styles/vars.scss";
import { getHeader } from "./components/getHeader.js";
import { getBanner } from "./components/getBanner.js";
import { getAbout } from "./components/getAboutBlock.js";
import { getNumbers } from "./components/getNumbersBlock.js";
import { getMap } from "./components/getMap.js";
import { getMission } from "./components/getMission.js";

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

getHeader(container);
getBanner(container);
getAbout(container);
getNumbers(container);
getMap(container);
getMission(container);
