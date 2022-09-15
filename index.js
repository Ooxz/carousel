const slides = document.getElementsByClassName('carousel-item')
const prevBtn = document.getElementById("carousel-button-prev")
const nextBtn = document.getElementById("carousel-button-next")
let slidePosition = 0
const totalSlides = slides.length


function hideAllSlides() {
	for (const slide of slides) {
		slide.classList.remove("carousel-item-visible")
		slide.classList.add("carousel-item-hidden")
	}
}


setInterval(nextSlide, 5000)


nextBtn.addEventListener('click', nextSlide)
function nextSlide() {
	hideAllSlides()
	if(slidePosition === totalSlides - 1) {
		slidePosition = 0
	} else {
		slidePosition ++
	}
	slides[slidePosition].classList.add("carousel-item-visible")
	

}


prevBtn.addEventListener('click', prevSlide)
function prevSlide() {
	hideAllSlides()
	if(slidePosition === 0) {
		slidePosition = totalSlides - 1
	} else {
		slidePosition --
	}
	slides[slidePosition].classList.add("carousel-item-visible")
}






