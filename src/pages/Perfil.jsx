import React from 'react'
import ProfileType from '../components/ProfileType/ProfileType'
import SocialMedia from '../components/SocialMedia'
import Followers from '../components/Followers'

function Perfil() {
    return (
        <div>
            {/* Header */}
            <div className='w-100 h-96 p-5 relative flex justify-center py-14'>
                <div className='relative w-64 '>
                    <img src="../../public/assets/sistema.jpg" className='object-cover w-64 h-64 rounded-full absolute' alt="perfil"/>
                    <div className='w-24 h-24 flex items-center justify-center rounded-full z-10 absolute bg-teal-900 top-48'>
                        <h2 className=''>Perfil</h2>
                    </div>
                </div>

                <div className='ml-14 mt-10 flex flex-col '>
                    <h1 className='text-5xl font-bold '>Profile User</h1>
                    <p className='text-xl'>Development</p>
                    <ProfileType />
                    <SocialMedia/>
                    <Followers/>
                </div>
            </div>
        
            {/* Bio */}
            
            <div className='py-10 px-20 w-100'>
                <h2 className='text-xl font-bold mb-3 '>Descripcion Personal</h2>
                <div className='flex'>
                <p className='w-96 bg-stone-800 p-4 text-xs rounded-lg hover:text-sm hover:bg-white hover:text-black ease-in-out duration-500 hover:shadow-lg hover:shadow-cyan-500/50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis nulla voluptatem esse cumque laudantium. Facere, sequi molestias! Ab molestiae laborum similique nemo aliquid explicabo molestias, accusamus dolore nihil fugit omnis sunt. Aliquam iure accusantium est sunt. Vitae ducimus voluptas eligendi modi magni incidunt, corrupti asperiores tempore omnis. </p>
                </div>
                
            </div>

        </div>
        
    )
}

export default Perfil

