import AuthForm from '../components/auth/AuthForm';
import { getUsersFromStorage, saveUsersToStorage } from '../others/storage';

const RegisterPage = () => {
	const registerHandler = user => {
		const userArr = getUsersFromStorage();
		const foundUserId = userArr.findIndex(
			savedUser => savedUser.email === user.email
		);
		if (foundUserId !== -1) {
			return false;
		}
		userArr.push(user);
		saveUsersToStorage(userArr);
		return true;
	};

	return <AuthForm isRegister={true} onSubmit={registerHandler} />;
};

export default RegisterPage;
