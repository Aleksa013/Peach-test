import { benefitsContent } from "../constansts/constants.js";
import "./../styles/benefits.scss";

export const getBenefits = (parent) => {
  const benefits = document.createElement("section");

  benefits.className = "benefits";

  Object.values(benefitsContent).forEach((value) =>
    createBenefitsPart(benefits, value, value.nameClass)
  );

  parent.append(benefits);
};

function createBenefitsPart(parent, data, nameClass) {
  const block = document.createElement("div");
  const header = document.createElement("h2");

  block.className = `benefits__part ${nameClass}`;
  header.classList.add("benefits__part__header", data.accent ? "fs40" : "fs56");

  header.textContent = data.header;

  block.append(header);

  if (data.accent) {
    const accent = document.createElement("p");
    accent.classList.add("benefits__part__accent", "fs40");
    accent.textContent = data.accent;
    block.appendChild(accent);
  }

  data.benefits.forEach((arr) => {
    createBenefit(block, arr);
  });
  parent.append(block);
}

function createBenefit(parent, dataBenefit) {
  const benefit = document.createElement("div");
  const benefitIcon = document.createElement("div");
  const benefitText = document.createElement("p");

  benefit.classList = "benefit";
  benefitIcon.classList = "benefit__icon";
  benefitText.classList = "benefit__text fs18";

  benefitIcon.style.backgroundImage = `url(${dataBenefit.icon})`;
  benefitText.innerHTML = dataBenefit.text;

  benefit.append(benefitIcon);
  benefit.append(benefitText);
  parent.append(benefit);
}
