const user = document.querySelector('.user');
const flecha = document.querySelector('.user__icon');

flecha.addEventListener('click', (e) => {
	user.classList.toggle('active');
	e.stopPropagation();
});

document.addEventListener('click', (e) => {
	if (!user.contains(e.target)) {
		user.classList.remove('active');
	}
});
