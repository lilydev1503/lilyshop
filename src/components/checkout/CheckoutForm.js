const CheckoutForm = () => {
	return (
		<form>
			<label className="text-uppercase mb-2">Full Name:</label>
			<input
				type="text"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Full Name Here!"
			/>
			<label className="text-uppercase mb-2">Email:</label>
			<input
				type="email"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Email Here!"
			/>
			<label className="text-uppercase mb-2">Phone Number:</label>
			<input
				type="tel"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Phone Number Here!"
			/>
			<label className="text-uppercase mb-2">Address:</label>
			<input
				type="text"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Address Here!"
			/>
			<button className="btn btn-secondary rounded-0 px-3 py-2">
				Place order
			</button>
		</form>
	);
};

export default CheckoutForm;
