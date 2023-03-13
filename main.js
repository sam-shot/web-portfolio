window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 20);
  document
    .getElementById("l1")
    .classList.toggle("unfocusedLink", window.scrollY > 400);
  document
    .getElementById("l2")
    .classList.toggle(
      "focusedLink",
      window.scrollY > 400 && window.scrollY < 800
    );
  document
    .getElementById("l3")
    .classList.toggle(
      "focusedLink",
      window.scrollY > 801 && window.scrollY < 1200
    );
  document
    .getElementById("l4")
    .classList.toggle(
      "focusedLink",
      window.scrollY > 1201 
    );
});

l1.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
l2.addEventListener("click", () => {
  window.scrollTo(0, 460);
});
l3.addEventListener("click", () => {
  window.scrollTo(0, 860);
});
l4.addEventListener("click", () => {
  window.scrollTo(0, 1260);
});
