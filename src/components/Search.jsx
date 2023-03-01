import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

function Search() {
    return (
        <div className='w-100 h-10 relative mb-5 '>
            <div className='flex absolute right-5 h-10 '>
                <input type="text" name='txtSearch' placeholder='Producto' 
                className='border-0 outline-none rounded-3xl w-52 text-teal-700'/>
                <BiSearchAlt size={"25px"} className='absolute z-10 text-teal-700 right-2 flex bottom-2'/>
            </div>
        </div>
    )
}

export default Search

