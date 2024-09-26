import "./styles/vars.scss";
import { getHeader } from "./components/getHeader.js";
import { getBanner } from "./components/getBanner.js";
import { getAbout } from "./components/getAboutBlock.js";
import { getNumbers } from "./components/getNumbersBlock.js";

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

getHeader(container);
getBanner(container);
getAbout(container);
getNumbers(container);
