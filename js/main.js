const elHamburger = document.querySelector('.burger')
const elHeader = document.querySelector('.body')

elHamburger.addEventListener('click', () => {
    elHeader.classList.toggle('body--active')
})

$('.dorpdown-toggle').click(function(){
    $(this).parent().parent().toggleClass('nav__item--active');
});
