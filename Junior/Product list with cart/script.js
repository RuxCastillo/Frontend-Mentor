import data from './data.js';
import {
	items,
	itemInCart,
	cartItem,
	cartVacio,
	carroConCosas,
	cartFinal,
} from './scripts/htmlTemplates.js';
import { debounce, sleeps } from './scripts/utilities.js';
const menu = document.querySelector('.menu');
const cart = document.querySelector('.cart');

function renderMenu() {
	let cantidadTotal = 0;
	menu.innerHTML = '';
	data.forEach((item, idx) => {
		const screenWidth = window.innerWidth;
		let image = item.image.mobile;
		if (screenWidth > 500) {
			image = item.image.tablet;
		}

		let comida = document.createElement('article');
		comida.classList.add('menu__item', 'u-mb-1-5r');
		const price = parseFloat(item.price).toFixed(2);
		cantidadTotal += item.cantidad;

		if (item.cantidad === 0) {
			comida.innerHTML = items(image, item, price);
			menu.appendChild(comida);
			const btnAdd = document.querySelectorAll('.image__container--cart');
			btnAdd[idx].addEventListener('click', () => {
				data[idx].cantidad++;
				renderMenu();
			});
		} else {
			comida.classList.add('in-cart');
			comida.innerHTML = itemInCart(image, item, price, item.cantidad);
			menu.appendChild(comida);
			const minus = document.querySelectorAll('.minus');
			const plus = document.querySelectorAll('.plus');
			minus[idx].addEventListener('click', () => {
				data[idx].cantidad--;
				renderMenu();
			});
			plus[idx].addEventListener('click', () => {
				data[idx].cantidad++;
				renderMenu();
			});
		}
	});
	if (cantidadTotal <= 0) {
		renderizarPastel0();
	} else {
		renderizarCarro(cantidadTotal);
	}
}

renderMenu();

const size = debounce(renderMenu, 250);

window.addEventListener('resize', () => {
	size();
});

window.cart = {};

function renderizarPastel0() {
	cart.innerHTML = '';
	let div = document.createElement('div');
	div.classList.add('cart');
	div.innerHTML = cartVacio();
	cart.appendChild(div);
}

function renderizarCarro(num) {
	cart.innerHTML = '';
	const div = document.createElement('div');
	div.classList.add('cart');
	div.innerHTML = carroConCosas(num);
	cart.appendChild(div);

	let totalDinero = 0;
	data.forEach((item, idx) => {
		if (item.cantidad > 0) {
			const price = parseFloat(item.price).toFixed(2);
			const total = parseFloat(item.price * item.cantidad).toFixed(2);
			let divCartItem = document.createElement('div');
			divCartItem.classList.add('cart__item');
			divCartItem.innerHTML = cartItem(item.name, item.cantidad, price, total);
			totalDinero += item.price * item.cantidad;
			cart.appendChild(divCartItem);
		}
	});

	const finalDiv = document.createElement('div');
	finalDiv.innerHTML = cartFinal(totalDinero.toFixed(2));
	cart.appendChild(finalDiv);
}
