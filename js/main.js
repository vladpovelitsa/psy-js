import toastLib from "js/toast.js";
import { initSlider } from "js/slider.js";

const toasts = toastLib("top-left");

toasts.renderToast("Hello, World!", "success");
toasts.renderToast("Hello, World 2!", "warning");

const slider = initSlider({
  selector: "#slider",
  autoplay: true,
  autoplaySpeed: 1000,
  withDots: false,
  withArrows: false,
});
