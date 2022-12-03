// Add callback when page is scrolled
window.onscroll = function () {
  navScroll();
  scrollSpy();
};

//nav scroll callback function
const navScroll = () => {
  // when the user scrolls past 20px we add the scroll-background class to the navbar to change its background color
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("BODY", document.body.scrollTop);
    document.querySelector("nav").classList.add("scroll-background");
  } else {
    // when the user scrolls less than 20px we remove the scroll-background class from the navbar to change its background color to the default
    document.querySelector("nav").classList.remove("scroll-background");
  }
};

/* Scroll spy behavior */
//scroll spy callback function
const scrollSpy = () => {
  //get access to sections and nav links
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav ul li a");

  //loop through sections and get positions
  sections.forEach((section) => {
    //get y position of window
    let top = window.scrollY;
    //add offset based on when we want the active class to change
    let offset = section.offsetTop - 100;
    //get the offset of the section
    let height = section.offsetHeight;
    //get the id attribut of the section
    let id = section.getAttribute("id");

    //check if the top has scrolled past the section minus the offset
    if (top >= offset && top < offset + height) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        document
          .querySelector("header nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
