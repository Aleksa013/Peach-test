const button = document.querySelector(".button_office");

export const openList = () => {
  const list = document.createElement("div");
  if (button) {
    list.className = "cities_list";
    button.classList.add("open");
  }
};

export const closeList = () => {
  const list = document.querySelector(".cities_list");
  if (button) {
    button.classList.remove("open");
    list.remove();
  }
};
