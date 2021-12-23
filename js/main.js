const elHamburger = document.querySelector('.burger')
const elHeader = document.querySelector('.body')

elHamburger.addEventListener('click', () => {
    elHeader.classList.toggle('body--active')
})

$('.nav__left__link').click(function(){
    $(this).parent().toggleClass('nav__item--active');
});
