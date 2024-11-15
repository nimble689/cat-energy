const mobileMenuButton = document.querySelector(".main-header__open-button");
const mobileMenu = document.querySelector(".main-header__list");

export const startMobileMenu = () => {
    mobileMenuButton.addEventListener('click',() => {
        mobileMenu.classList.toggle("open");
        mobileMenuButton.classList.toggle("active");
    })
    
}