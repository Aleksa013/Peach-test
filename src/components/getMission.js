import "./../styles/mission.scss";
import { missionsContent } from "../constansts/constants.js";

export const getMission = (parent) => {
  const mission = document.createElement("section");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const header = document.createElement("h2");
  const text = document.createElement("p");

  mission.className = "mission";
  left.className = "bg bg_left";
  right.className = "bg bg_right";
  header.className = "mission__header";
  text.className = "mission__text";

  header.textContent = missionsContent.header;
  text.textContent = missionsContent.text;

  mission.append(left);
  mission.append(right);
  mission.append(header);
  mission.append(text);

  parent.append(mission);
};
