const questions = document.querySelectorAll('.question');

let active = 0;

questions.forEach((question, idx) => {
	question.addEventListener('click', () => {
		openQuestion(idx);
	});
});

function openQuestion(num) {
	closeAll();
	questions[num].classList.add('active');
}

function closeAll() {
	questions.forEach((question) => {
		question.classList.remove('active');
	});
}
