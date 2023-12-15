const slidesContainer = document.querySelector(".slider-wrapper");
const slide = document.querySelector(".slider-card");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

const slidesImg = document.querySelector(".slider-img-wrapper");
const slidesText = document.querySelector(".slider-text-wrapper");
const slideImg = document.querySelector(".slider-img");
const slideText = document.querySelector(".slider-text");
const nextButtonAdvantage = document.querySelector(".slider-next-advantage");
const prevButtonAdvantage = document.querySelector(".slider-prev-advantage");

const slidesImg2 = document.querySelector(".slider-img-wrapper2");
const slidesText2 = document.querySelector(".slider-text-wrapper2");
const slideImg2 = document.querySelector(".slider-img2");
const slideText2 = document.querySelector(".slider-text2");
const nextButtonAdvantage2 = document.querySelector(".slider-next-advantage2");
const prevButtonAdvantage2 = document.querySelector(".slider-prev-advantage2");

const switchBlock = document.querySelector(".switch-block");
const switchBtn = document.querySelectorAll(".switch-btn");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth + 24;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth + 24;
});

nextButtonAdvantage.addEventListener("click", () => {
    const slideImgWidth = slideImg.clientWidth;
    const slideTextWidth = slideText.clientWidth;
    slidesImg.scrollLeft -= slideImgWidth;
    slidesText.scrollLeft -= slideTextWidth;
});

prevButtonAdvantage.addEventListener("click", () => {
    const slideImgWidth = slideImg.clientWidth;
    const slideTextWidth = slideText.clientWidth;
    slidesImg.scrollLeft += slideImgWidth;
    slidesText.scrollLeft += slideTextWidth;
});

nextButtonAdvantage2.addEventListener("click", () => {
    const slideImgWidth = slideImg2.clientWidth;
    const slideTextWidth = slideText2.clientWidth;
    slidesImg2.scrollLeft -= slideImgWidth;
    slidesText2.scrollLeft -= slideTextWidth;
});

prevButtonAdvantage2.addEventListener("click", () => {
    const slideImgWidth = slideImg2.clientWidth;
    const slideTextWidth = slideText2.clientWidth;
    slidesImg2.scrollLeft += slideImgWidth;
    slidesText2.scrollLeft += slideTextWidth;
});

for (let i = 0; i < switchBtn.length; i++) {
    switchBtn[i].addEventListener("click", () => {
        switchBlock.classList.toggle('switch-block-right');
    });
};