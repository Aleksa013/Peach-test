export const generateElement = (tag, nameClass, parent, contentText = "") => {
  const elem = document.createElement(tag);
  elem.className = nameClass;
  if (contentText.length) {
    console.log(contentText);
    elem.textContent = contentText;
  }
  parent.append(elem);
  return elem;
};
