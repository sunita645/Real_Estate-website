import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>

            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

            {/* for mobile screen */}
            <img src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            {/* mobile menu */}
            <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img src={AuthenticatorAssertionResponse.cross_icon} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
