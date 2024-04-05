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
      window.scrollY > 400 && window.scrollY < 900
    );
  document
    .getElementById("l3")
    .classList.toggle(
      "focusedLink",
      window.scrollY > 901 && window.scrollY < 1800
    );
  document
    .getElementById("l4")
    .classList.toggle(
      "focusedLink",
      window.scrollY > 1801 
    );
});

l1.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
l2.addEventListener("click", () => {
  window.scrollTo(0, 460);
});
l3.addEventListener("click", () => {
  window.scrollTo(0, 930);
});
l4.addEventListener("click", () => {
  window.scrollTo(0, 1260);
});


project.addEventListener("mouseover", () => {
  document.getElementById('pd1').style.display = "inline";
});
project.addEventListener("mouseleave", () => {
  document.getElementById('pd1').style.display = "none";
});
project.addEventListener("mouseover", () => {
  document.getElementById('pd1').style.display = "inline";
});
project2.addEventListener("mouseover", () => {
  document.getElementById('pd1').style.display = "inline";
});
project2.addEventListener("mouseleave", () => {
  document.getElementById('pd1').style.display = "none";
});
project2.addEventListener("mouseover", () => {
  document.getElementById('pd1').style.display = "inline";
});

