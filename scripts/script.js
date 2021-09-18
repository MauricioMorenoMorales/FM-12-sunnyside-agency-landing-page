const $burger = document.querySelector('.hamburger');
const $linksMenu = document.querySelector('.header__navbar__links');

$burger.addEventListener('click', event => {
	$burger.classList.toggle('is-active');
	$linksMenu.classList.toggle('active');
});
