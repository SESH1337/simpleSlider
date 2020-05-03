let dom = document;

let buttonElmLeft = dom.getElementById("button-left");
let buttonElmRight = dom.getElementById("button-right");

let sliderBox = dom.querySelectorAll(".boxSlider");

let secSlide = dom.getElementById('secSlide')

let index = 0;


let array = [
        "firstSlide",
        "secSlide",
        "thirdSlide",
]

let firstSlide = dom.getElementById('firstSlide');
let thirdSlide = dom.getElementById('thirdSlide');

buttonElmRight.addEventListener("click", function() {
  if (firstSlide.style.display === "block" || !firstSlide.style.display) {
    firstSlide.style.display = "none";
    secSlide.style.display = "block";

//  firstSlide.setAttribute("style", "display:none")
// secSlide.setAttribute("style", "display:none;");
//     secSlide.setAttribute("style", "display: none")

    //  secSlide.setAttribute("style", "position: absolute; left:-600px");
    //  secSlide.setAttribute("style", "left:-600px;"); 
    //  secSlide.setAttribute("style", "background-color:yellow"); 

      
 
    
  } else {
    secSlide.style.display = "none";
     thirdSlide.style.display = "block";
  

  }

});

buttonElmLeft.addEventListener("click", function() {
  if (thirdSlide.style.display === "block" || !firstSlide.style.display) {
    thirdSlide.style.display = "none";
    secSlide.style.display = "block";
  }else{
    secSlide.style.display = "none";
     firstSlide.style.display = "block";
  }
});


// old version


// buttonElmRight.addEventListener("click", function() {
//     if (sliderBox.value.length === 0 || sliderBox.value.length > 10) {
//       secSlideBox.classList.add("visible");
//     } else {
//       firstChild.classList.add("hidden");
//     }