const $burger = document.querySelector('.hamburger');
const $linksMenu = document.querySelector('.header__navbar__links');

document.addEventListener('click', event => {
	if (
		event.target.matches('.hamburger') ||
		event.target.matches('.hamburger *')
	) {
		$burger.classList.toggle('is-active');
		$linksMenu.classList.toggle('active');
	}
	if (event.target.matches('.header__navbar__links__item')) {
		$burger.classList.remove('is-active');
		$linksMenu.classList.remove('active');
	}
});
