export const generateElements = (parent, tag, nameClass, quantity) => {
  for (let i = 0; i < quantity; i += 1) {
    const elem = document.createElement(tag);
    elem.className = nameClass;
    parent.append(elem);
  }
};
