import React from 'react'

function Followers() {
    return (
        <div className='w-96 flex border-1 mt-4 '>
            <div className='w-24 border'>
                <p className='text-lg text-center'>405</p>
                <p className='text-sm text-center'>Seguidores</p>
            </div>
            <div className='w-24 border'>
                <p className='text-lg text-center'>25</p>
                <p className='text-sm text-center'>Siguiendo</p>
            </div>
            <div className='w-48 border bg-teal-800 hover:bg-teal-600'>
                <button className='w-full mt-3' type='submit'>Seguir</button>
            </div>
        </div>
    )
}

export default Followers

