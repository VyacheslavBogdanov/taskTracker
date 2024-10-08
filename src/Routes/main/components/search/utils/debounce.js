export const debounce = (fn, delay) => {
	let timerId;

	return (...value) => {
		clearTimeout(timerId);
		timerId = setTimeout(fn, delay, ...value);
	};
};
