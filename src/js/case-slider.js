const caseSliderInput = document.querySelector(".case-slider__input");
const caseSliderImgs = document.querySelectorAll(".case-slider__img-container");

export const startCaseSlider = () => {
    updateImgs();
    caseSliderInput.addEventListener("input", updateImgs);
}
const updateImgs = () => {
    const value = caseSliderInput.value;
    caseSliderImgs[0].style.width = `${100 - value}%`;
    caseSliderImgs[1].style.width = `${value}%`;
}