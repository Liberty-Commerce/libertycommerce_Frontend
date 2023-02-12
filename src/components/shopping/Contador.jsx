import React from "react"

export const Contador = ({
    countProducts
}) 

  return (
  <>
    <div className="absolute top-2/4 right-0 bg-black color:#fff; w-6 h-6 flex justify-center items-center rounded-full">
        <span id="text-xs">{countProducts}</span>
    </div>
  </>
);

export default Contador;
