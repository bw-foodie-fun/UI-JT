
//nav bar shrinks on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-nav").style.padding = "0px 10px";
    document.querySelector(".logo-heading").style.fontSize = "3rem";
  } else {
    document.getElementById("main-nav").style.padding = "20px 10px";
    document.querySelector(".logo-heading").style.fontSize = "4rem";
  }
}