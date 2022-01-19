let slideshow = {
    pictures: document.querySelectorAll(".slideshow .picture"),
    currentPicture: 0,
    totalPicures: document.querySelectorAll(".slideshow .picture").length,
    controls: {
        prevButton: document.querySelector(".slideshow .controls-left"),
        nextButton: document.querySelector(".slideshow .controls-right"),
    },
};

slideshow.controls.prevButton.addEventListener("click", () => {
    slideshow.pictures[slideshow.currentPicture].classList.remove("active");
    slideshow.currentPicture--;
    if (slideshow.currentPicture < 0) slideshow.currentPicture = slideshow.totalPicures + slideshow.currentPicture;
    slideshow.pictures[slideshow.currentPicture].classList.add("active");
});

slideshow.controls.nextButton.addEventListener("click", () => {
    slideshow.pictures[slideshow.currentPicture].classList.remove("active");
    slideshow.currentPicture = ++slideshow.currentPicture % slideshow.totalPicures;
    slideshow.pictures[slideshow.currentPicture].classList.add("active");
});
