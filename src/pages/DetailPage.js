import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailSection from '../components/detail/DetailSection';
import Related from '../components/detail/Related';
import Layout from '../components/layout/Layout';
import useHttp from '../hooks/use-http';
import ChatPopup from '../components/ChatBox';

const DetailPage = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [related, setRelated] = useState([]);
	const { sendRequest: fetchProducts } = useHttp();

	useEffect(() => {
		const filterProductById = (productId, products) => {
			const filteredProduct = products.filter(
				product => product._id.$oid === productId
			)[0];
			const filteredRelated = products.filter(
				product =>
					product._id.$oid !== productId &&
					product.category === filteredProduct.category
			);
			setProduct(filteredProduct);
			setRelated(filteredRelated);
		};

		fetchProducts(
			'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
			filterProductById.bind(null, productId)
		);
	}, [fetchProducts, productId]);

	return (
		<Layout>
			<DetailSection product={product} />
			<Related products={related} />
			<ChatPopup />
		</Layout>
	)
};

export default DetailPage;
