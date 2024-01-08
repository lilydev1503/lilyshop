import Layout from '../components/layout/Layout';
import Cart from '../components/cart/Cart';
import ChatPopup from '../components/ChatBox';

const CartPage = () => {
	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">Cart</h2>
			</section>
			<Cart />
			<ChatPopup />
		</Layout>
	);
};

export default CartPage;
