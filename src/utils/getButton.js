export const getButton = (parent, nameClass, text = "", cb = "") => {
  console.log(text);
  const button = document.createElement("button");
  if (text.length) {
    button.textContent = text;
  }

  button.className = nameClass;
  if (typeof cb !== "string") {
    button.addEventListener("click", cb);
  }
  parent.append(button);
  return button;
};
