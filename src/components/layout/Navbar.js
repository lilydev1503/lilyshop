import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getLoginUser, removeLoginUser } from '../../others/storage';
import { actions } from '../../store';

const Navbar = () => {
	const classNameHandler = ({ isActive }) =>
		isActive
			? 'link-primary text-decoration-none px-2'
			: 'link-dark text-decoration-none px-2';

	const loginUser = useSelector(state => state.loginUser);
	const dispatch = useDispatch();
	const { onLogout } = actions;

	useEffect(() => {
		const savedUser = getLoginUser();
		if (savedUser && !loginUser) {
			const { onLogin } = actions;
			// ON_LOGIN action
			dispatch(onLogin(savedUser));
		}
	}, [dispatch, loginUser]);

	const logoutHandler = () => {
		// ON_LOGOUT action
		dispatch(onLogout());
		removeLoginUser();
	};

	return (
		<header className="bg-white text-dark">
			<div className="container-lg d-flex justify-content-between align-items-center py-4">
				<div>
					<NavLink to="/" className={classNameHandler}>
						Home
					</NavLink>
					<NavLink to="/shop" className={classNameHandler}>
						Shop
					</NavLink>
				</div>
				<h2>BOUTIQUE</h2>
				<div>
					<NavLink to="/cart" className={classNameHandler}>
						Cart
					</NavLink>
					{!loginUser && (
						<NavLink to="/login" className={classNameHandler}>
							Login
						</NavLink>
					)}
					{loginUser && (
						<>
							<span className="px-2">{loginUser.name}</span>
							<span
								className="px-2"
								onClick={logoutHandler}
								style={{ cursor: 'pointer' }}
							>
								(Logout)
							</span>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
