function initToast(position) {
  const typesColorMap = {
    info: "bg-slate-500",
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  const container = createToastContainer();
  document.body.appendChild(container);

  function createToast(message, type) {
    const toast = document.createElement("div");

    toast.className = "rounded-xl text-white p-4 w-50";
    toast.classList.add(typesColorMap[type]);

    toast.innerText = message;

    toast.addEventListener("click", function () {
      toast.remove();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        toast.remove();
      }
    });

    setTimeout(() => {
      toast.remove();
    }, 5000);

    return toast;
  }

  function createToastContainer() {
    const container = document.createElement("div");

    container.className = "fixed flex flex-col gap-3 z-50";

    if (position === "bottom-right") {
      container.classList.add("bottom-5", "right-5");
    } else if (position === "bottom-left") {
      container.classList.add("bottom-5", "left-5");
    } else if (position === "top-left") {
      container.classList.add("top-5", "left-5");
    } else {
      container.classList.add("top-5", "right-5");
    }

    return container;
  }

  function renderToast(message, type = "info") {
    container.appendChild(createToast(message, type));
  }

  return { renderToast };
}
