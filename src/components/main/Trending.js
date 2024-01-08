import { useEffect, useState } from 'react';

import TrendingList from './TrendingList';
import useHttp from '../../hooks/use-http';
import './trending.css';

const Trending = () => {
	const [products, setProducts] = useState([]);
	const { sendRequest: fetchProducts } = useHttp();

	useEffect(() => {
		fetchProducts(
			'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
			products => setProducts(products)
		);
	}, [fetchProducts]);

	return (
		<section id="trending" className="container-lg">
			<h6 className="text-secondary text-uppercase">Make the hard way</h6>
			<h5 className="text-uppercase">Top trending products</h5>
			<TrendingList products={products} onFetch={fetchProducts} />
		</section>
	);
};

export default Trending;
