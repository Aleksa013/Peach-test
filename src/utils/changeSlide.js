let count = 0;

export const changeSlide = (direction) => {
  const sliderView = document.querySelector(".galery__slider_view");
  const imgs = document.querySelectorAll(".slider__img");
  const paginations = document.querySelectorAll(".pagination");

  if (sliderView) {
    if (direction === "next") {
      count === 4 ? (count = 0) : (count += 1);
    }
    if (direction === "prev") {
      count === 0 ? (count = 4) : (count -= 1);
    }

    sliderView.style.transform = `translateX(-${(count / imgs.length) * 100}%)`;

    paginations.forEach((pagination, index) => {
      index === count
        ? pagination.classList.add("active")
        : pagination.classList.remove("active");
    });
  }
};

export const changeSlidePagination = (target) => {
  const sliderView = document.querySelector(".galery__slider_view");
  const imgs = document.querySelectorAll(".slider__img");
  const paginations = document.querySelectorAll(".pagination");

  paginations.forEach((pagination, index) => {
    pagination.classList.remove("active");
    if (pagination === target) {
      count = index;
      pagination.classList.add("active");
    }
  });
  sliderView.style.transform = `translateX(-${(count / imgs.length) * 100}%)`;
};
