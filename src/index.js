import "./styles/vars.scss";
import { getHeader } from "./components/getHeader.js";

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

getHeader(container);
