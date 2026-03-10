function initSlider({
  selector,
  autoplay = true,
  withDots = false,
  withArrows = true,
  autoplaySpeed = 5000,
}) {
  const slider = document.querySelector(selector);
  const slides = Array.from(slider.children);
  const arrowsStyles =
    "bg-light-accent rounded-full min-w-10 min-h-10 flex items-center justify-center text-white text-lg cursor-pointer";
  let activeSlideIndex = 0;

  const changeSlide = () => {
    slides.forEach((slide, index) => {
      slide.classList.add("hidden");
      if (withDots) {
        changeDots(false, index);
      }

      if (index === activeSlideIndex) {
        slide.classList.remove("hidden");
        if (withDots) {
          changeDots(true, index);
        }
      }
    });
  };

  const nextSlide = () => {
    activeSlideIndex =
      activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1;
    changeSlide();
  };
  const prevSlide = () => {
    activeSlideIndex =
      activeSlideIndex === 0 ? slides.length - 1 : activeSlideIndex - 1;
    changeSlide();
  };

  const createArrows = () => {
    const leftArrow = document.createElement("button");
    leftArrow.innerText = "<";
    leftArrow.className = arrowsStyles + " -order-1";

    leftArrow.addEventListener("click", prevSlide);

    const rightArrow = document.createElement("button");
    rightArrow.innerText = ">";
    rightArrow.className = arrowsStyles + " order-999";

    rightArrow.addEventListener("click", nextSlide);

    slider.appendChild(leftArrow);
    slider.appendChild(rightArrow);
    slider.classList.add("flex", "items-center", "justify-center", "gap-4");
  };

  const createDots = () => {
    const dotsContainer = document.createElement("ul");
    dotsContainer.className = "flex gap-3 absolute -bottom-6";
    slides.forEach((_, index) => {
      const dotWrap = document.createElement("li");
      const dot = document.createElement("button");
      dot.id = "dot-" + index;

      dot.className =
        "w-3 h-3 rounded-full bg-light-accent cursor-pointer inline-block";

      if (index === activeSlideIndex) {
        dot.classList.remove("bg-light-accent");
        dot.classList.add("bg-dark-accent");
      }

      dot.addEventListener("click", function () {
        activeSlideIndex = index;
        changeSlide();
      });
      dotWrap.appendChild(dot);
      dotsContainer.appendChild(dotWrap);
    });

    slider.appendChild(dotsContainer);
    slider.classList.add("relative");
  };

  const changeDots = (isActive, index) => {
    if (isActive) {
      slider.querySelector("#dot-" + index).classList.add("bg-dark-accent");
      slider.querySelector("#dot-" + index).classList.remove("bg-light-accent");
    } else {
      slider.querySelector("#dot-" + index).classList.remove("bg-dark-accent");
      slider.querySelector("#dot-" + index).classList.add("bg-light-accent");
    }
  };

  document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      nextSlide();
    }

    if (event.key === "ArrowLeft") {
      prevSlide();
    }
  });

  if (autoplay) {
    const interval = setInterval(nextSlide, autoplaySpeed);
  }
  if (withArrows) {
    createArrows();
  }
  if (withDots) {
    createDots();
  }

  changeSlide();
}
