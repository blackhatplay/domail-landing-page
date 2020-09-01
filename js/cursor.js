let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

window.addEventListener("mousemove", (e) => {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
});

links.forEach((e) => {
  e.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    e.classList.add("hovered-link");
  });
  e.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("link-grow");
    e.classList.remove("hovered-link");
  });
});
