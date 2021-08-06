let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('#slider-next').addEventListener('click', function(){
    offset += 390;
    if (offset > 1180){
      offset = 0;
    };
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('#slider-prev').addEventListener('click', function(){
  offset -= 390;
  if (offset < 0){
    offset = 1180;
  };
  sliderLine.style.left = -offset + 'px';
});


//---------------------------------------------------------------------------------------------------//


document.querySelectorAll('.modal-show').forEach(function(element){
  element.onclick = showModal;
});

document.querySelectorAll('.close-button').forEach(function(element){
  element.onclick = closeModal;
});

function showModal(){
  document.querySelector('.pop-up').parentElement.classList.remove('hide');
  document.querySelector('.pop-up').classList.remove('hide');
}

function closeModal(){
  console.log(document.querySelector('.pop-up').parentElement.classList.add('hide'));
  document.querySelector('.pop-up').classList.add('hide');
}


//---------------------------------------------------------------------------------------------------//


function init(e){
  let tabBody = document.querySelectorAll('.activity-content');
  let tabKey = document.querySelectorAll('.dot');
  for(let i = (e); i < tabBody.length; i++){
      tabBody[i].style.display = "none";
      tabKey[i].classList.remove("active");

  }
}
init(1); 

let tab = document.querySelectorAll('.dot');
tab.forEach(function(element){
  element.onclick = showTabs;
});

function showTabs(){
  let data = this.getAttribute('data');
  init(0); 
  document.querySelector(`.activity-content[data ="${data}"]`).style.display = 'block';
  document.querySelector(`.dot[data ="${data}"]`).classList.add("active");
  makeTimer();
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("activity-content");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let timer = 0;
makeTimer();
function makeTimer(){
 clearInterval(timer) 
 timer = setInterval(function(){
      showSlides(slideIndex);
  },5000);
} 


//---------------------------------------------------------------------------------------------------//

window.onscroll=showSlider;

function showSlider(){
  document.querySelector('.hide-slider').classList.add('visibility');
  document.querySelector('.hide-dot').classList.add('visibility');
}