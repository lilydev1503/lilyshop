import { NavLink } from 'react-router-dom';

const AuthNav = props => {
	let navContent = (
		<>
			Create an account?
			<NavLink to="/register" className="text-decoration-none ms-2">
				Sign up
			</NavLink>
		</>
	);

	if (props.isRegister) {
		navContent = (
			<>
				Login?
				<NavLink to="/login" className="text-decoration-none ms-2">
					Click
				</NavLink>
			</>
		);
	}

	return <p className="py-4 text-center font-italic">{navContent}</p>;
};

export default AuthNav;
