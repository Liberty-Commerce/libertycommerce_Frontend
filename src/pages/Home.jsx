import React from "react";

import { useState } from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";

//comentario:develop-barera

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      {/*border*/}
      <div className="bg-white box-content	 h-50 w-100 p-6 border-3">
        {/*Galeria y pasarela de pagos */}
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />

        <br />

        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </div>
    </>
  );
}
export default Home;
