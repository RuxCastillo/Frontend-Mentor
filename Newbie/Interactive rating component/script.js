const stars = document.querySelectorAll('.rating__buttons button');
let estrellaSeleccionada = 0;

console.log(stars);
stars.forEach((star, idx) => {
	star.addEventListener('click', () => {
		todasColorNormal();
		star.classList.remove('normal');
		star.classList.add('seleccionado');
		estrellaSeleccionada = idx + 1;
	});
});

function todasColorNormal() {
	stars.forEach((star) => {
		star.classList.add('normal');
		star.classList.remove('seleccionado');
	});
}

const submitBtn = document.querySelector('.submit');
const rating = document.querySelector('.rating');
const thank = document.querySelector('.thank');
const numeroSeleccionado = document.querySelector('.numeroSeleccionado');

submitBtn.addEventListener('click', () => {
	rating.style.display = 'none';
	thank.style.display = 'block';
	numeroSeleccionado.innerText = estrellaSeleccionada;
});
