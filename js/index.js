
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

//hamburger click
  let dropdowns = document.querySelector('.hamburger-nav').addEventListener('click', function(){
    // document.querySelector('.animate').classList.toggle('nav-expand');
    document.querySelector('.hamburger1').classList.toggle("change1");
    document.querySelector('.hamburger2').classList.toggle("change2");
    document.querySelector('.hamburger3').classList.toggle("change3");
    document.querySelector('.new-nav').classList.toggle('hidden-new-nav');
    document.querySelector('.new-nav').classList.toggle('change');
    document.querySelector('.container').classList.toggle('hidden-container');
    document.querySelector('.footer').classList.toggle('hidden-container');
    window.scrollTo(0,0);
  })