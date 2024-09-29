export const getButton = (parent, nameClass, text, cb = "") => {
  console.log(text);
  const button = document.createElement("button");
  button.textContent = text;
  button.className = nameClass;
  if (typeof cb === "function") {
    button.addEventListener("click", () => cb);
  }
  parent.append(button);
  return button;
};
