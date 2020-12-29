$('.owl-carousel').owlCarousel({
    loop: true,
    nav:true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
//---
var mybutton = document.querySelector(".myBtn");
window.onscroll = function() {
    matrixFunction()
};
function matrixFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


//----- sticky header
window.onscroll = function() {
    navStick()
};
var header = document.querySelector(".myHeader");
var sticky = header.offsetTop;

function navStick() {
    if (window.pageYOffset > 200 ) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

//bar 

jQuery('.main-bar').click(function(e) {
    jQuery(this).toggleClass('activefile');
    e.preventDefault();
    jQuery('#myHeader').slideToggle();
});


/// disable inspect

// window.oncontextmenu = function(){
//     return false;
// }


// chat box
/*
function openForm() {
       document.getElementById("chatbox").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("chatbox").style.display = "none";
  }
  

  // Drag content

  //Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}  */