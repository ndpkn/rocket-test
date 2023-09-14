const burgerButton = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__menu')

burgerButton.onclick = function () {
	burgerButton.classList.toggle('active')
	burgerMenu.classList.toggle('show')
}

const modal = document.querySelector('.modal')
const openModalButton = document.querySelectorAll('[data-openModal]')
const closeModalButton = document.querySelector('.modal__close')


closeModalButton.onclick = function() {
	modal.classList.toggle('showModal')
}

openModalButton.forEach((item) => {
	item.onclick = function() {
		modal.classList.toggle('showModal')
	}
})
