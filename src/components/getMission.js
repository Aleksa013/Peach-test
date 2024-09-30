import "./../styles/mission.scss";
import { missionsContent } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";

export const getMission = (parent) => {
  const mission = generateElement("section", "mission", parent);
  generateElement("div", "bg bg_left", mission);
  generateElement("div", "bg bg_right", mission);
  generateElement("h2", "mission__header", mission, missionsContent.header);
  generateElement("p", "mission__text", mission, missionsContent.text);
};
