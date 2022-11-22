window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").classList.add("scroll-background");
  } else {
    document.querySelector("nav").classList.remove("scroll-background");
  }
}
