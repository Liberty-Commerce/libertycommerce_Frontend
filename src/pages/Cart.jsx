import React from "react";

function Cart() {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center items-center p-5 gap-5 bg-black">
          <h3>Total:</h3>
        </div>

        <button className="border-none bg-black #f8fafc p-4 block w-6/12  my-2.5 rounded-b-xl cursor-pointer text-xs transition p-0 hover:bg-black scale-120 rounded-none right-full">
          Vaciar Carrito
        </button>
      </div>
    </>
  );
}
export default Cart;
