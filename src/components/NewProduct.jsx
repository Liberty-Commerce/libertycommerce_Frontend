import React from 'react'




function NewProduct(props) {

    const {imgProduct,nameProduct,priceProduct, modal, setModal, setDataModal, descripProduct, priceOriginal} = props

    const handleClick = () =>{
        setModal(!modal)
        setDataModal({
            imgProduct : imgProduct,
            nameProduct : nameProduct,
            priceProduct : priceProduct,
            priceOriginal : priceOriginal,
            descripProduct : descripProduct,
        })
    }

    return (
        <div className='w-52 h-52 relative mx-3 my-6 rounded-2xl hover:bg-teal-800/70' onClick={handleClick}>
            <img className=" absolute w-52 h-52 object-cover rounded-2xl -z-10 "
             src={imgProduct} alt="img-bg " />

            <div className='relative w-52 h-52 opacity-0 hover:opacity-100 ease-in-out duration-700 hover:h-58'>
                <div className='w-52 h-16 absolute bottom-0 bg-teal-800 rounded-b-2xl flex justify-between px-5 items-center'>
                    <p>{nameProduct}</p>
                    <span>{priceProduct}</span>
                </div>
            </div>
            
        </div>
    )
}

export default NewProduct

