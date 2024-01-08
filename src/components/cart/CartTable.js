import CartRow from './CartRow';

const CartTable = props => {
	const items = props.items;
	let content = <p>No items.</p>;
	if (items.length > 0) {
		content = (
			<table className="mb-3 text-center">
				<thead className="bg-light text-uppercase h5">
					<tr>
						<th className="p-2">Image</th>
						<th className="p-2">Product</th>
						<th className="p-2">Price</th>
						<th className="p-2">Quantity</th>
						<th className="p-2">Total</th>
						<th className="p-2">Remove</th>
					</tr>
				</thead>
				<tbody>
					{items.map(item => (
						<CartRow key={item.product._id.$oid} item={item} />
					))}
				</tbody>
			</table>
		);
	}

	return content;
};

export default CartTable;
