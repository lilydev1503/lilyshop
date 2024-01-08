import { useNavigate } from 'react-router-dom';

import useInput from '../../hooks/use-input';
import './auth.css';
import AuthNav from './AuthNav';
import ErrorAlert from './ErrorAlert';

// This form is used for both Login and Register page
const AuthForm = props => {
	const navigate = useNavigate();

	const {
		input: emailInput,
		isValid: emailIsValid,
		hasError: emailHasError,
		setInputHandler: setEmailHandler,
		setTouchedHandler: setEmailTouchedHandler,
		reset: resetEmail,
	} = useInput(input => input.includes('@'));

	const {
		input: passwordInput,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		setInputHandler: setPasswordHandler,
		setTouchedHandler: setPasswordTouchedHandler,
		reset: resetPassword,
	} = useInput(input => input.length > 8);

	const {
		input: nameInput,
		isValid: nameIsValid,
		hasError: nameHasError,
		setInputHandler: setNameHandler,
		setTouchedHandler: setNameTouchedHandler,
	} = useInput(input => input.length > 0);

	const {
		input: phoneInput,
		isValid: phoneIsValid,
		hasError: phoneHasError,
		setInputHandler: setPhoneHandler,
		setTouchedHandler: setPhoneTouchedHandler,
	} = useInput(input => input.length > 0);

	let formIsValid = emailIsValid && passwordIsValid;
	if (props.isRegister) {
		formIsValid =
			emailIsValid && passwordIsValid && nameIsValid && phoneIsValid;
	}

	const submitHandler = evt => {
		evt.preventDefault();

		// handle register request
		if (props.isRegister) {
			const user = {
				email: emailInput,
				password: passwordInput,
				name: nameInput,
				phone: phoneInput,
			};
			const result = props.onSubmit(user);
			if (result) {
				return navigate('/login');
			}
			alert('This email has exist.');
			return resetEmail();
		}

		// handle login request
		const data = {
			email: emailInput,
			password: passwordInput,
		};
		const result = props.onSubmit(data);
		if (result) {
			return navigate('/');
		}
		alert('Non-existed email or wrong password.');
		resetPassword();
	};

	return (
		<div
			id="background"
			className="d-flex justify-content-center align-items-center"
			style={{ backgroundImage: 'url(/images/banner1.jpg)' }}
		>
			<div className="auth-form bg-white p-5 rounded-4">
				<div className="display-6 py-4 text-center">
					{props.isRegister ? 'Sign Up' : 'Sign In'}
				</div>
				<form className="py-2" onSubmit={submitHandler}>
					{props.isRegister && (
						<input
							className="w-100 p-2"
							type="text"
							placeholder="Full Name"
							value={nameInput}
							onChange={setNameHandler}
							onBlur={setNameTouchedHandler}
						/>
					)}
					<input
						className="w-100 p-2"
						type="email"
						placeholder="Email"
						value={emailInput}
						onChange={setEmailHandler}
						onBlur={setEmailTouchedHandler}
					/>
					<input
						className="w-100 p-2"
						type="password"
						placeholder="Password"
						value={passwordInput}
						onChange={setPasswordHandler}
						onBlur={setPasswordTouchedHandler}
					/>
					{props.isRegister && (
						<input
							className="w-100 p-2"
							type="tel"
							placeholder="Phone"
							value={phoneInput}
							onChange={setPhoneHandler}
							onBlur={setPhoneTouchedHandler}
						/>
					)}
					<button
						className="w-100 btn btn-secondary p-2 mt-2 text-center text-uppercase rounded-0"
						type="submit"
						disabled={!formIsValid}
					>
						{props.isRegister ? 'Sign Up' : 'Sign In'}
					</button>
				</form>
				<ErrorAlert
					emailHasError={emailHasError}
					passwordHasError={passwordHasError}
					nameHasError={nameHasError}
					phoneHasError={phoneHasError}
				/>
				<AuthNav isRegister={props.isRegister} />
			</div>
		</div>
	);
};

export default AuthForm;
