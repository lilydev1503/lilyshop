import { useDispatch } from 'react-redux';

import AuthForm from '../components/auth/AuthForm';
import { getUsersFromStorage, saveLoginUser } from '../others/storage';
import { actions } from '../store';

const LoginPage = () => {
	const dispatch = useDispatch();

	const loginHandler = data => {
		const userArr = getUsersFromStorage();
		const foundUserId = userArr.findIndex(
			savedUser =>
				savedUser.email === data.email &&
				savedUser.password === data.password
		);

		if (foundUserId === -1) {
			return false;
		}
		const foundUser = userArr[foundUserId];
		const { onLogin } = actions;
		dispatch(onLogin(foundUser));
		saveLoginUser(foundUser);
		return true;
	};

	return <AuthForm onSubmit={loginHandler} />;
};

export default LoginPage;
