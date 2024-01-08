import { useState } from 'react';

const useInput = validation => {
	const [input, setInput] = useState('');
	const [wasTouched, setTouched] = useState(false);

	const isValid = validation(input);
	const hasError = wasTouched && !isValid;

	const setInputHandler = evt => {
		setInput(evt.target.value);
	};

	const setTouchedHandler = () => {
		setTouched(true);
	};

	const reset = () => {
		setInput('');
		setTouched(false);
	};

	return {
		input,
		isValid,
		hasError,
		setInputHandler,
		setTouchedHandler,
		reset,
	};
};

export default useInput;
