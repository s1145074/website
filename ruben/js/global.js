//animatie en geluid voor Titel hoofdmenu
var i = 0;
var txt = "Welkom op Ruben's website!";
var speed = 50;

function typeWriter() {
  var audio = new Audio('sound/typ_geluid.mp3'); 

  if (i < txt.length) {
    document.getElementById("typ_titel").innerHTML += txt.charAt(i);
    i++;
    audio.play();
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
});

//klikbare tijdlijn
document.addEventListener("DOMContentLoaded", function() {
  var punten = document.querySelectorAll('.punt');

  punten.forEach(function(punt) {
    punt.addEventListener('click', function() {
      this.classList.toggle('uitgeklapt');
    });
  });
});

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile_nav");

console.log(hamburger)
console.log(menu)

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// Sluit het menu wanneer een link in het menu wordt aangeklikt
document.querySelectorAll("nav li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    });
});
