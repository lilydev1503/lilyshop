const ErrorAlert = props => {
	return (
		<>
			{props.emailHasError && (
				<p className="m-0 text-danger">Invalid email.</p>
			)}
			{props.passwordHasError && (
				<p className="m-0 text-danger">
					Password must have more than 8 characters.
				</p>
			)}
			{props.nameHasError && (
				<p className="m-0 text-danger">Name is required.</p>
			)}
			{props.phoneHasError && (
				<p className="m-0 text-danger">Phone is required.</p>
			)}
		</>
	);
};

export default ErrorAlert;
