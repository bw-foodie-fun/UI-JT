//checks if already activated dark mode
window.addEventListener('load', function(event) {
  var darkModeActivated = sessionStorage.getItem('darkModeActivated') || '';
  if (darkModeActivated === 'yes') {
    console.log('dark mode is already activated')
    darkMode();
  }
});


//nav bar shrinks on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
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

//dark mode
document.addEventListener("keydown", function (event) {
  if (event.key === 'D') {
    darkMode();
  }
})

function darkMode() {
        document.querySelector("body").style.background = 'black';
        document.querySelector("body").style.color = 'white';
        document.querySelector(".main-navigation").style.background = 'black';
        document.querySelector(".new-nav").style.background = 'black';
        document.querySelector(".logo-heading").style.color = 'red';
        let z = document.querySelectorAll('.nav-link')
        for (let j = 0; j < z.length; j++) {
          z[j].style.color = 'red';
        };
        let y = document.querySelectorAll('.hamburger')
        for (let j = 0; j < y.length; j++) {
          y[j].style.background = 'red';
        };
        let x = document.querySelectorAll(".nav-link")
        for (let i = 0; i < x.length; i++) {
          x[i].style.color = 'white';
        };
        console.log('success')
        sessionStorage.setItem('darkModeActivated','yes');

    }