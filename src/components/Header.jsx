import { useState } from 'react';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
		<>
		<header className='bg-white flex  justify-between p-8 p-0 p-10 p-0'>
			<h1 className='text-black'>Tienda</h1>

			<div className='relative'>
				<div
					className='bg-current container-cart-icon '
					onClick={() => setActive(!active)}
					>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-10 h-10 stroke-black hover:cursor-pointer hover:animate-bounce'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='absolute top-2/4 right-0 bg-black color:#fff; w-6 h-6 flex justify-center items-center rounded-full'>
						<span id='text-xs'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`absolute top-12 right-0 color:#f8fafc; bg-black w-96 z-40 shadow-xl rounded-xl   ${
						active ? '' : 'hidden'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className=' row-product bg-black w-12'>
								{allProducts.map(product => (
									<div className='flex items-center justify-between p-8 rounded-r-sm' key={product.id}>
										<div className='flex justify-between flex-[0.8]'>
											<span className='font-normal text-xl'>
												{product.quantity}
											</span>
											<p className='text-xl'>
												{product.nameProduct}
											</p>
											<span className='font-bold text-xl ml-2.5'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='stroke-red-600 cursor-pointer'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='flex justify-center items-center p-5 gap-5 bg-black'>
								<h3>Total:</h3>
								<span className='text-xl font-black'>${total}</span>
							</div>

							<button className='border-none bg-black #f8fafc p-4 block w-6/12  my-2.5 rounded-b-xl cursor-pointer text-xs transition p-0 hover:bg-black scale-150 rounded-none right-full' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
							<button className='border-none bg-black #f8fafc p-4 block w-3/12 my-2.5 rounded-b-xl cursor-pointer text-xs transition p-0 hover:bg-black scale-150 rounded-none'>
							 	<a href="/pay">
										Pagar
								</a>
							</button>
						</>
					) : (
						<p className='p-5 text-center text-black bg-white'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
		</>
	);
};