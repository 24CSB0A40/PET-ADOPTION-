const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid=null;
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    slides[slideIndex].classList.add("displayslide");
    intervalid=setInterval(nextslide,5000);

}

function showslide(index) {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("displayslide");
    }

   
    slides[index].classList.add("displayslide");
}


function prevslide() {
    
    slideIndex--;  
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;  
    }
    showslide(slideIndex);
}

function nextslide() {
    
    slideIndex++; 
    if (slideIndex >= slides.length) {
        slideIndex = 0;  
    }
    showslide(slideIndex);
}
function addcart()
{
    alert(" ITEM ADDED TO CART SUCCESSFULLY");
    return;
}
