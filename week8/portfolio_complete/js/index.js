// Add callback when page is scrolled
window.onscroll = function () {
  scrollFunction();
};

//scroll callback function
function scrollFunction() {
  // when the user scrolls past 20px we add the scroll-background class to the navbar to change its background color
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").classList.add("scroll-background");
  } else {
    // when the user scrolls less than 20px we remove the scroll-background class from the navbar to change its background color to the default
    document.querySelector("nav").classList.remove("scroll-background");
  }
}
