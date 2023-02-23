import React from 'react'
import ProfileType from '../components/ProfileType/ProfileType'
import SocialMedia from '../components/SocialMedia'
import Followers from '../components/Followers'
import NewProduct from '../components/NewProduct'

import {AiOutlineGlobal} from 'react-icons/ai';

const perfiles = [
    {
        id :1,
        urlImg : '../../public/assets/product/product-cam.jpg',
        textProduct : 'Camara',
        price : '$300'
    },
    {
        id:2,
        urlImg : '../../public/assets/product/product-deso.jpg',
        textProduct : 'Desodorante',
        price : '$50'
    },
    {
        id:3,
        urlImg : '../../public/assets/product/product-deso.jpg',
        textProduct : 'Desodorante',
        price : '$50'
    },
    
]

function Perfil() {
    return (
        <div>
            {/* Header */}
            <div className='w-100 h-100 relative flex justify-center mb-16 flex-wrap'>
                <div className='relative w-64 mt-10 '>
                    <img src="../../public/assets/sistema.jpg" className='object-cover w-64 h-64 rounded-full relative' alt="perfil"/>
                    <div className='w-24 h-24 flex items-center justify-center rounded-full z-10 absolute bg-teal-900 top-48'>
                        <h2 className=''>Perfil</h2>
                    </div>
                </div>

                <div className='ml-20 mt-10 flex flex-col '>
                    <div className='flex w-96 items-center'>
                        <h1 className='text-3xl font-bold text-center'>Profile User</h1>
                        <img className='w-14 ml-5' src="../../public/assets/colombia.png" alt="" />
                    </div>
                    <p className='text-xl'>Development</p>
                    <a href='#' className='hover:text-teal-500 cursor-pointer'>
                        <AiOutlineGlobal className='inline-block mr-1' size={'15px'}/>
                        <p className='text-sm inline-block'>Profile.com</p>
                    </a>
                    
                    <ProfileType />
                    <SocialMedia/>
                    <Followers/>
                </div>
            </div>
        
            
            <div className='w-full flex flex-wrap justify-center'>
                {/* Bio */}
            

                {/* news product */}
                <h2 className='text-3xl font-bold'>Productos</h2>
                <div className='flex items-center m-4 flex-wrap justify-center w-full sm:flex-row sm:justify-center'>
                    {perfiles.map(items =>(
                        <NewProduct key={items.id} imgProduct={items.urlImg} nameProduct={items.textProduct} priceProduct ={items.price} />
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Perfil

