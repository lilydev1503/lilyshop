import { useEffect, useState } from 'react';

import Layout from '../components/layout/Layout';
import CategoriesList from '../components/shop/CategoriesList';
import ProductList from '../components/shop/ProductList';
import useHttp from '../hooks/use-http';
import ChatPopup from '../components/ChatBox';


const ShopPage = () => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('all');
	const { sendRequest: fetchProducts } = useHttp();

	useEffect(() => {
		fetchProducts(
			'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
			products => setProducts(products)
		);
	}, [fetchProducts]);

	const filterHandler = category => setCategory(category);

	let filterProducts = products;
	if (category !== 'all') {
		filterProducts = products.filter(
			product => product.category === category
		);
	}

	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">Shop</h2>
			</section>
			<section className="container-lg bg-white py-5">
				<div className="row">
					<CategoriesList onFilter={filterHandler} />
					<ProductList products={filterProducts} />
				</div>
			</section>
			<ChatPopup />
		</Layout>
	);
};

export default ShopPage;
