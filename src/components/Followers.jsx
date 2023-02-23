import React from 'react'

function Followers() {
    return (
        <div className='w-80 flex border-1 mt-4 items-center justify-start'>
            <div className='flex flex-row'>
                <div className='w-24 border'>
                    <p className='text-lg text-center'>405</p>
                    <p className='text-sm text-center'>Seguidores</p>
                </div>
                <div className='w-24 border'>
                    <p className='text-lg text-center'>25</p>
                    <p className='text-sm text-center'>Siguiendo</p>
                </div>
            </div>
            <div className='w-20 h-full border bg-teal-800 hover:bg-teal-600'>
                <button className='w-20 h-full text-center' type='submit'>Seguir</button>
            </div>
        </div>
    )
}

export default Followers

