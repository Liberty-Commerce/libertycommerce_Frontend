import { useState } from "react";

// imagen cart:
import cart from "../assets/img/cart.jpg";

//components:
import Tienda from "../components/shopping/Tienda";

export const Header = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  return (
    <>
      <header className="bg-white flex  justify-between p-8 p-0 p-10 p-0">
        <Tienda />
        <div className="relative">
          <div
            className="bg-current container-cart-icon "
            onClick={() => setActive(!active)}
          >
            <img
              src={cart}
              alt="cart"
              className="w-10 h-10 stroke-black hover:cursor-pointer hover:animate-bounce"
            />
            <br />
            <div className="bg-black absolute top-2/4 right-0 left-8 color:#fff; w-6 h-6 flex justify-center items-center rounded-full">
              <span id="text-xs">{countProducts}</span>
            </div>
          </div>

          <div
            className={`bg-white absolute top-12 right-0  w-96 z-40 shadow-xl rounded-xl   ${
              active ? "" : "hidden"
            }`}
          >
            {allProducts.length ? (
              <>
                <div className=" row-product bg-black w-12">
                  {allProducts.map((product) => (
                    <div
                      className="flex items-center justify-between p-8 rounded-r-sm"
                      key={product.id}
                    >
                      {/*Detalles Productos*/}
                      <div className="bg-white flex justify-between flex-[0.8]">
                        <span className="text-black	font-normal text-xl">
                          {product.quantity}
                        </span>
                        {/*espacio*/}
                        <div className="space-y-2">&nbsp;</div>
                        <p className="text-xl text-black	">{product.nameProduct}</p>
                        <span className="font-bold text-black	 text-xl ml-2.5">
                          ${product.price}
                        </span>
                      </div>
                      {/*Final Detalles Productos*/}

                    {/*Vaciar productos*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="stroke-red-600 cursor-pointer"
                        onClick={() => onDeleteProduct(product)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                <button className="border-solid bg-black #f8fafc p-4 block w-3/12 my-2.5 rounded-b-xl cursor-pointer text-xs transition p-0 hover:bg-black scale-100 rounded-none">
                  <a href="/cart">
                    Ver carro de compras
                    </a>
                </button>
              </>
            ) : (
              <p className="p-5 text-center text-black bg-white">
                El carrito está vacío
              </p>
            )}
          </div>
        </div>
      </header>
    </>
  );
};