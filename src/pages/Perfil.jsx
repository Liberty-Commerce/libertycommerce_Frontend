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
            <div className='w-100 h-100  relative flex justify-center mb-16 '>
                <div className='relative w-64 mt-10 '>
                    <img src="../../public/assets/sistema.jpg" className='object-cover w-64 h-64 rounded-full absolute' alt="perfil"/>
                    <div className='w-24 h-24 flex items-center justify-center rounded-full z-10 absolute bg-teal-900 top-48'>
                        <h2 className=''>Perfil</h2>
                    </div>
                </div>

                <div className='ml-14 mt-10 flex flex-col '>
                    <div className='flex w-96'>
                        <h1 className='text-5xl font-bold '>Profile User</h1>
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
        
            
            <div className='w-full flex'>
                {/* Bio */}
            
                <div className='ml-5 w-96'>
                    <h2 className='text-xl font-bold mb-3 text-center'>Descripcion Personal</h2>
                    <div className='flex'>
                    <p className='w-96 bg-stone-800 p-4 text-xs rounded-lg hover:text-sm hover:bg-white hover:text-black ease-in-out duration-500 hover:shadow-lg hover:shadow-cyan-500/50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis nulla voluptatem esse cumque laudantium. Facere, sequi molestias! Ab molestiae laborum similique nemo aliquid explicabo molestias, accusamus dolore nihil fugit omnis sunt. Aliquam iure accusantium est sunt. Vitae ducimus voluptas eligendi modi magni incidunt, corrupti asperiores tempore omnis. </p>
                    </div>
                </div>
                {/* news product */}
                <div className='flex items-center ml-5 flex-wrap'>
                    {perfiles.map(items =>(
                        <NewProduct key={items.id} imgProduct={items.urlImg} nameProduct={items.textProduct} priceProduct ={items.price} />
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Perfil

