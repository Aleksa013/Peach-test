export const generateElement = (
  tag,
  nameClass,
  parent = "",
  contentText = ""
) => {
  if (contentText.length && Array.isArray(contentText)) {
    return contentText.forEach((text) => {
      generateOne(tag, nameClass, parent, text);
    });
  }

  return generateOne(tag, nameClass, parent, contentText);
};

function generateOne(tag, nameClass, parent = "", contentText = "") {
  const elem = document.createElement(tag);
  elem.className = nameClass;
  if (contentText.length && typeof contentText === "string") {
    console.log(contentText);
    elem.textContent = contentText;
  }

  if (typeof parent !== "string") {
    parent.append(elem);
  }
  return elem;
}
