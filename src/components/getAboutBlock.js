import "./../styles/about.scss";
import { aboutContent } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";

export const getAbout = (parent) => {
  const about = generateElement("section", "about shadow", parent);
  const aboutText = generateElement(
    "p",
    "about__text",
    about,
    aboutContent.text
  );
  const companyName = generateElement(
    "span",
    "burgundy",
    "",
    aboutContent.companyName
  );
  aboutText.prepend(companyName);
};
