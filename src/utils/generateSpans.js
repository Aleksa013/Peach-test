export const generateSpans = (
  parent,
  nameClass,
  quantity,
  needActive = true
) => {
  for (let i = 0; i < quantity; i += 1) {
    const elem = document.createElement("span");
    if (needActive) {
      i === 0
        ? elem.classList.add(nameClass, "active")
        : (elem.className = nameClass);
    } else {
      elem.className = nameClass;
    }

    parent.append(elem);
  }
};
