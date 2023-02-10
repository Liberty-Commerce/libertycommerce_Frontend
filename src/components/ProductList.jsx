import { data } from "../data";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
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
    <div className="grid gap-2.5 grid-cols-3 bg-white">
      {data.map((product) => (
        <div className="rounded-xl " key={product.id}>
          <figure className="overflow-hidden">
            <img
              className="w-full h-72 object-cover rounded-t-xl rounded-t-xl rounded-none rounded-none transition"
              src={product.img}
              alt={product.nameProduct}
            />
          </figure>
          <div className="p-3.5 leading-loose flex flex-col gap-2.5">
            <h2 className="text-black">{product.nameProduct}</h2>
            <p className="text-xl font-black text-black">${product.price}</p>
            <button
              className="border-none bg-none bg-black #f8fafc p-4 p-2.5 cursor-pointer"
              onClick={() => onAddProduct(product)}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
