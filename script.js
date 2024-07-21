window.onscroll = function() {myFunction(),myFunction1()};

var header = document.getElementById("nav12");
var menu = document.getElementById("helpmenu");

var sticky = header.offsetTop;
var sticky1 = menu.offsetTop;


function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function myFunction1() {
    if (window.scrollY + 160 > sticky1) {
      menu.classList.add("sticky1");
    } else {
      menu.classList.remove("sticky1");
    }
  }