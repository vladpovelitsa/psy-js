const toasts = initToast("top-left");

toasts.renderToast("Hello, World!", "success");

const slider = initSlider({
  selector: "#slider",
  autoplay: true,
  autoplaySpeed: 1000,
  withDots: false,
  withArrows: false,
});
