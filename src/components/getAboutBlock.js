import "./../styles/about.scss";
import { aboutContent } from "../constansts/constants.js";

export const getAbout = (parent) => {
  const about = document.createElement("section");
  const aboutText = document.createElement("p");
  const companyName = document.createElement("span");

  about.className = "about shadow";
  aboutText.classList.add("about__text");
  companyName.className = "burgundy";

  companyName.textContent = aboutContent.companyName;
  aboutText.innerHTML = aboutContent.text;
  aboutText.prepend(companyName);
  about.append(aboutText);

  parent.append(about);
};
