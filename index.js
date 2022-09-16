const slides = document.getElementsByClassName('carousel-item')
const prevBtn = document.getElementById("carousel-button-prev")
const nextBtn = document.getElementById("carousel-button-next")
const dotBtn = document.getElementById("dot1")
const dotBtn2 = document.getElementById("dot2")
const dotBtn3 = document.getElementById("dot3")
let slidePosition = 0
const totalSlides = slides.length
dotBtn.style.backgroundColor = "orange"
nextBtn.style.backgroundColor = "orange"
prevBtn.style.backgroundColor = "orange"

// function to change the color of the prev and next button bg color 
// to add at the end of each function interacting with images positions
function changeArrowColors(){
	if(slidePosition === 0){
        nextBtn.style.backgroundColor = "orange"
		prevBtn.style.backgroundColor = "orange"
    } else if (slidePosition === 1) {
		nextBtn.style.backgroundColor = "pink"
		prevBtn.style.backgroundColor = "pink"
    } else {
        nextBtn.style.backgroundColor = "lightblue"
		prevBtn.style.backgroundColor = "lightblue"
    }
}

// function to change the color of the dots 
// to add at the end of each function interacting with images positions
function changeDotColor(){
	dotBtn.style.backgroundColor = "white"
    dotBtn2.style.backgroundColor = "white"
    dotBtn3.style.backgroundColor = "white"
	if(slidePosition === 0){
        dotBtn.style.backgroundColor = "orange"
    } else if (slidePosition === 1) {
        dotBtn2.style.backgroundColor = "pink"
    } else {
        dotBtn3.style.backgroundColor = "lightblue"
    }
}

//function to combine the 2 previous functions
function dotAndArrow() {
	changeArrowColors()
	changeDotColor()
}
 
// buttons for the dots

dotBtn.addEventListener("click", function(){
    if (slidePosition !== 0){
        hideAllSlides();
        slidePosition = 0
        slides[slidePosition].classList.add("carousel-item-visible");
    } 
	dotAndArrow()
})

dotBtn2.addEventListener("click", function(){
     if (slidePosition !== 1){
        hideAllSlides();
        slidePosition = 1
        slides[slidePosition].classList.add("carousel-item-visible");
    }
	dotAndArrow()
    })
    
   dotBtn3.addEventListener("click", function(){
       if (slidePosition !== 2) {
        hideAllSlides();
        slidePosition = 2
        slides[slidePosition].classList.add("carousel-item-visible");
    }
	dotAndArrow()
   }) 

//function to hide all slides, put it at the beginning of other function so only the slide at the end of the function appear

function hideAllSlides() {
	for (const slide of slides) {
		slide.classList.remove("carousel-item-visible")
		slide.classList.add("carousel-item-hidden")
	}
}


// setInterval(nextSlide, 5000)


//next button

nextBtn.addEventListener('click', nextSlide)

function nextSlide() {
	hideAllSlides()
	if(slidePosition === totalSlides - 1) {
		slidePosition = 0
	} else {
		slidePosition ++
	}
	slides[slidePosition].classList.add("carousel-item-visible")
	dotAndArrow()
}

//prev button

prevBtn.addEventListener('click', prevSlide)

function prevSlide() {
	hideAllSlides()
	if(slidePosition === 0) {
		slidePosition = totalSlides - 1
	} else {
		slidePosition --
	}
	slides[slidePosition].classList.add("carousel-item-visible")
	dotAndArrow()
}






