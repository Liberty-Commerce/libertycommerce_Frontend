import { data } from '../data';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='grid gap-2.5 grid-cols-3'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img className="max-w-full" src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='p-3.5 leading-loose flex flex-col gap-2.5'>
						<h2>{product.nameProduct}</h2>
						<p className='text-xl font-black'>${product.price}</p>
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};