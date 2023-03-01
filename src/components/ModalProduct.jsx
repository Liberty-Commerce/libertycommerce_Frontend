import React from 'react'
import { createPortal } from 'react-dom'
import { AiFillCloseCircle } from 'react-icons/ai'


function ModalProduct(props) {

    const { imgProduct, nameProduct, priceProduct, descripProduct , priceOriginal} = props

    const handleButton = () =>{
        props.setModal(false);
    }
    return (
        <>
            {createPortal(<div className='w-full h-full  bg-teal-700/80 absolute z-20 flex justify-center items-center overflow-hidden'>
                <div className='flex w-100 h-80 p-5 bg-slate-900 rounded-lg '>
                    {/* imagen product */}
                    <div className='w-1/2 flex items-center relative'>
                        <div className='rounded-lg w-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10'>
                            <img src={imgProduct} className=' object-cover rounded-lg h-96' alt="cam" />
                        </div>
                    </div>
                    {/* informations product */}
                    <div className='w-1/2 flex flex-col justify-center items-center relative '>
                        <button onClick={handleButton} className='absolute top-0 right-0 hover:text-teal-500'><AiFillCloseCircle size={'40px'}/></button>

                        <div>
                            <h2 className='text-5xl font-bold'>{nameProduct}</h2>  
                            <p className='text-teal-500 text-3xl  font-bold inline-block'>{priceProduct}</p>
                            <span className=' ml-2  line-through text-xl'>{priceOriginal}</span>

                            <div className='mt-2'>
                                <p>{descripProduct}</p>
                            </div>

                            <button className=' mt-5 p-3 border-2 border-indigo-50 hover:border-0 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-2xl ease-in-out duration-200'>Ver Producto!</button>
                        </div>
                        
                    </div>
                </div>
            </div>,document.getElementById('modal'))}
        </>
    )
}

export default ModalProduct

