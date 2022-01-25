let slideshow = {
    pictures: document.querySelectorAll(".slideshow .picture"),
    currentPicture: 0,
    totalPicures: document.querySelectorAll(".slideshow .picture").length,
    controls: {
        prevButton: document.querySelector(".slideshow .controls-left"),
        nextButton: document.querySelector(".slideshow .controls-right"),
    },
};
let int = setInterval(slideshowNext, 5000);

slideshow.controls.prevButton.addEventListener("click", slideshowPrev);
slideshow.controls.nextButton.addEventListener("click", slideshowNext);

function slideshowPrev() {
    slideshow.pictures[slideshow.currentPicture].classList.remove("active");
    slideshow.currentPicture--;
    if (slideshow.currentPicture < 0) slideshow.currentPicture = slideshow.totalPicures + slideshow.currentPicture;
    slideshow.pictures[slideshow.currentPicture].classList.add("active");
    resetInterval();
}
function slideshowNext() {
    slideshow.pictures[slideshow.currentPicture].classList.remove("active");
    slideshow.currentPicture = ++slideshow.currentPicture % slideshow.totalPicures;
    slideshow.pictures[slideshow.currentPicture].classList.add("active");
    resetInterval();
}
function resetInterval() {
    clearInterval(int);
    int = setInterval(slideshowNext, 5000);
}