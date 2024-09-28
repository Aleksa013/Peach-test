export const generateSpans = (parent, nameClass, quantity) => {
  for (let i = 0; i < quantity; i += 1) {
    const elem = document.createElement("span");
    i === 0
      ? elem.classList.add(nameClass, "active")
      : (elem.className = nameClass);
    parent.append(elem);
  }
};
