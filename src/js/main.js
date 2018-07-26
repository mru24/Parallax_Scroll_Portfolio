window.addEventListener('DOMContentLoaded', scrollLoop, false);

var header = document.querySelector('header');
var nav = document.querySelector('nav');
var arrowUp = document.querySelector('.arrowUp');
var footer = document.querySelector('footer');
var navLink = document.querySelectorAll('nav a');

var xScrollPosition;
var yScrollPosition;

// Parallax effect
function scrollLoop(e) {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * - 0.5, header);

// navbar transform
  if(yScrollPosition > 20) {
    addClass(nav, 'scrolled');
  } else {
    removeClass(nav, 'scrolled');
  }

// arrowUp show/hide
  if(yScrollPosition > 250) {
    addClass(arrowUp, 'open');
  } else {
    removeClass(arrowUp, 'open');
  }

  requestAnimationFrame(scrollLoop);
}

// Scroll window to position (posX, posY, element clicked)
scrollWindow(0, 0, arrowUp);


function setTranslate(xPos, yPos, el) {
  el.style.transform = 'translate3d(' + xPos + ', ' + yPos + 'px, 0)';
}

function addClass(el, className) {
  el.classList.add(className);
}
function removeClass(el, className) {
  el.classList.remove(className);
}

function scrollWindow(posX, posY, el) {
  el.addEventListener('click', function() {
    window.scrollTo({
      top: posY,
      left: posX,
      behavior: 'smooth'
    });
  })
}

var btn = document.querySelectorAll('.btn');
var dBox = document.querySelector('#displayBox');

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    var style = this.getAttribute('data-group');
    var groupAll = ['.group1', '.group2', '.group3'];
    var group1 = document.querySelectorAll('.group1');
    var group2 = document.querySelectorAll('.group2');
    var group3 = document.querySelectorAll('.group3');

    switch (style) {
      case 'style1':
        for (var i = 0; i < groupAll.length; i++) {
          groupAll[i].style.display = "block";
        }
        break;
      case 'style2':
      for (var i = 0; i < group1.length; i++) {
        group1[i].style.display = "none";
      }
        break;
      case 'style3':
        dBox.style.gridTemplateAreas = '"box1 box2 box4 box6" "box8"';
        break;
      case 'style4':
        dBox.style.gridTemplateAreas = '"box2 box4 box5 box7"';
        break;
      default:
        dBox.style.gridTemplateAreas = '"box1 box2 box3 box4" "box5 box6 box7 box8"';
    }
  })
}
