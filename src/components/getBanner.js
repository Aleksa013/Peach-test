import "./../styles/banner.scss";
import { bannerContent } from "./../constansts/constants.js";

export const getBanner = (parent) => {
  const banner = document.createElement("div");
  const text = document.createElement("h2");
  const buttonLink = document.createElement("a");

  banner.className = "banner";
  text.classList.add("banner__text", "fs56");
  buttonLink.classList.add("banner__button", "fs18");

  text.innerHTML = bannerContent.text;
  buttonLink.textContent = bannerContent.buttonText;
  buttonLink.href = bannerContent.buttonLinkText;

  banner.append(text);
  banner.append(buttonLink);
  parent.append(banner);
};
