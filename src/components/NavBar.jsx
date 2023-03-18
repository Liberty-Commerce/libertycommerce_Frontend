import React from 'react'
import {AiFillLock} from 'react-icons/ai';

function NavBar() {
    return (
        <div className='flex items-center justify-around mr-52 mt-2'>
            {/* Company Logo */}
            <div>
                <img className='object-cover w-52 ' src="../../public/assets/logo.png" alt="libertycommerce"/>
            </div>

            {/* Page Navigator */}
            <div>
                <ul className='flex'>
                    <a className='ml-3 p-5 hover:bg-teal-500 rounded-lg' href="#"><li>Home</li></a> 
                    <a className='ml-3 p-5 hover:bg-teal-500 rounded-lg' href="#"><li>Shop</li></a>
                    <a className='ml-3 p-5 hover:bg-teal-500 rounded-lg' href="#"><li>About Us</li></a>
                    <a className='ml-3 p-5 hover:bg-teal-500 rounded-lg' href="#"><li>Contact Us</li></a>
                </ul>
            </div>

            {/* sing in / sing up */}
            <div className='flex'>
                <AiFillLock size={"20px"}/><a href="#">Login / Register</a>
            </div>
        </div>
    )
}

export default NavBar
