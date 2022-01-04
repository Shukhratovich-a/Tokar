const elHamburger = document.querySelector('.burger')
const elHeader = document.querySelector('.body')

elHamburger.addEventListener('click', () => {
    elHeader.classList.toggle('body--active')
})

$('.dorpdown-toggle').click(function () {
    $(this).parent().parent().toggleClass('nav__item--active');
});

$('.process__item').click(function () {
    $(this).toggleClass('process__item--active');
});

var rangeSlider = document.querySelector(".filter__slider");
var rangeSliderPrice = document.querySelector(".filter__slider--price");

var rangeBullet = document.querySelector(".filer__range__number");
var rangeBulletPrice = document.querySelector(".filer__range__number--price");

var fill = document.querySelector('.filter__range__fill')
var fillPrice = document.querySelector(".filter__range__fill--price")

rangeSlider.addEventListener("input", showSliderValue, false);
rangeSliderPrice.addEventListener("input", showSliderValue, false);

function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    rangeBulletPrice.innerHTML = rangeSliderPrice.value;

    var bulletPosition = (rangeSlider.value / rangeSlider.max);
    var bulletPositionPrice = (rangeSliderPrice.value / rangeSliderPrice.max);

    rangeBullet.style.left = (bulletPosition * 258) + "px";
    rangeBulletPrice.style.left = (bulletPositionPrice * 258) + "px";

    fill.style.width = (bulletPosition * 258 - 4) + "px";
    fillPrice.style.width = (bulletPositionPrice * 258 - 4) + "px";
}

const elFilter = document.querySelector('.filter__button')

elFilter.addEventListener('click', () => {
    elHeader.classList.toggle('body--filter')
})
