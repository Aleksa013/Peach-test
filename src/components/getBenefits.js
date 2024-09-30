import { benefitsContent } from "../constansts/constants.js";
import { generateElement } from "../utils/generateElement.js";
import "./../styles/benefits.scss";

export const getBenefits = (parent) => {
  const benefits = generateElement("section", "benefits shadow", parent);

  Object.values(benefitsContent).forEach((value) =>
    createBenefitsPart(benefits, value, value.nameClass)
  );
};

function createBenefitsPart(parent, data, nameClass) {
  const block = generateElement("div", `benefits__part ${nameClass}`, parent);
  generateElement("h2", "benefits__part__header", block, data.header);

  if (data.accent) {
    generateElement("p", "benefits__part__accent", block, data.accent);
  }

  data.benefits.forEach((arr) => {
    createBenefit(block, arr);
  });
}

function createBenefit(parent, dataBenefit) {
  const benefit = generateElement("div", "benefit", parent);
  const benefitIcon = generateElement("div", "benefit__icon", benefit);
  generateElement("p", "benefit__text", benefit, dataBenefit.text);

  benefitIcon.style.backgroundImage = `url(${dataBenefit.icon})`;
}
