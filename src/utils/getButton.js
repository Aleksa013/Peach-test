export const getButton = (parent, nameClass, text, cb) => {
  console.log(text);
  const button = document.createElement("button");
  button.textContent = text;
  button.className = nameClass;
  button.addEventListener("click", cb);
  parent.append(button);
};
