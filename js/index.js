//checks if already activated dark mode
// window.addEventListener('load', function(event) {
  var darkModeActivated = sessionStorage.getItem('darkModeActivated') || '';
  if (darkModeActivated === 'yes') {
    document.querySelector('.checkbox').checked = true;
    darkMode();
    console.log('dark mode is already activated')
  }
// });

//prevents non dark mode styles from flashing on page load when dark mode is activated
window.addEventListener('load', function(event) {
  document.body.style.visibility = 'visible';
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
document.querySelector('.switch').addEventListener("change", function (event) {
  var darkModeActivated = sessionStorage.getItem('darkModeActivated') || '';
  if (darkModeActivated != 'yes') {
      darkMode();
  }
  else if (darkModeActivated === 'yes') {
      sessionStorage.removeItem('darkModeActivated','yes');
      document.location.reload()
  }
})

function darkMode() {
  document.querySelector("body").style.background = '#1b1d1e';
  document.querySelector("body").style.color = 'white';
  document.querySelector(".main-navigation").style.background = '#1b1d1e';
  document.querySelector(".new-nav").style.background = '#1b1d1e';
  document.querySelector(".logo-heading").style.color = 'red';
  let y = document.querySelectorAll('.hamburger')
  Array.from(y).forEach(function(y){
    y.style.background = 'red';
  });
  let x = document.querySelectorAll(".nav-link")
  Array.from(x).forEach(function(x){
    x.style.color = 'red';
  })
  sessionStorage.setItem('darkModeActivated','yes');
  document.querySelector('.checkbox').checked = true;
}