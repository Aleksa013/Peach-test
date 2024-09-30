import "./../styles/banner.scss";
import { bannerContent } from "./../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";

export const getBanner = (parent) => {
  const banner = generateElement("section", "banner", parent);
  const text = generateElement("h2", "banner__text", banner);
  generateElement("span", "banner__text_one", text, bannerContent.textOne);
  generateElement("span", "banner__text_two", text, bannerContent.textTwo);
  const buttonLink = generateElement(
    "a",
    "banner__button",
    banner,
    bannerContent.buttonText
  );
  buttonLink.href = bannerContent.buttonLinkText;
};
