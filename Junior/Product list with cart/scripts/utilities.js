export function debounce(func, wait) {
	let timeout;
	return function (...args) {
		const context = this;
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(context, args), wait);
	};
}

export function sleeps(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
