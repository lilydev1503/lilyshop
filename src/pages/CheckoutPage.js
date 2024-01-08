import Layout from '../components/layout/Layout';
import Checkout from '../components/checkout/Checkout';
import ChatPopup from '../components/ChatBox';

const CheckoutPage = () => {
	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">Checkout</h2>
			</section>
			<Checkout />
			<ChatPopup />
		</Layout>
	);
};

export default CheckoutPage;
