const input = document.querySelector('.section__label--input');
const btn = document.querySelector('.section__label--div');
const section = document.querySelector('.section');

btn.addEventListener('click', () => {
	let text = input.value;
	if (text.includes('@')) {
		section.classList.remove('error');
	} else {
		section.classList.add('error');
	}
});
