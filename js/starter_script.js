$(window).scroll(function(){
  if ($(this).scrollTop() > 50) { 
      $('.navbar').addClass('scrolled');
      $('.navbar').removeClass('scrolled-2');

  }
  else { 
    $('.navbar').removeClass('scrolled');
    $('.navbar').addClass('scrolled-2');
  }
});

$(".navbar-toggler").click(function(){
    $('.navbar').css('background', '#fff');
    $('.navbar').css('color', '#111111!important');
    $('.navbar').removeClass('scrolled');
    $('.navbar').removeClass('scrolled-2');


});

// GO TOP BUTTON
//Get the button
var mybutton = document.getElementById("GoTopbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Menu Effects
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3){
      current = section.getAttribute('id');
    }
  })
$("#Features").hover();
  navLi.forEach( li => {
    li.classList.remove("headerActive");
    if(li.classList.contains(current)){
      li.classList.add("headerActive");

    }
  })
});
$('#Home').click({
})