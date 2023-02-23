import React from 'react'


function NewProduct({imgProduct,nameProduct,priceProduct}) {
    return (
        <div className='w-full h-52 relative mx-3 my-6 rounded-2xl hover:bg-teal-800/70 sm:w-72'>
            <img className=" absolute w-full h-52 object-cover rounded-2xl -z-10 "
             src={imgProduct} alt="img-bg " />
{/* Hacer responsive imagen */}
            <div className='relative w-full h-52 opacity-0 hover:opacity-100 ease-in-out duration-700 hover:h-64'>
                <div className='w-full h-16 absolute bottom-0 bg-teal-800 rounded-b-2xl flex justify-between px-5 items-center mb-4'>
                    <p>{nameProduct}</p>
                    <span>{priceProduct}</span>
                </div>
            </div>
            
            
        </div>
    )
}

export default NewProduct

