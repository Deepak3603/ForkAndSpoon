import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-20 bg-amber-50'>
        <div className='container mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <h1 className='text-xl font-semibold mb-4'>ForK & <span className='text-red-700'>SPOON</span></h1>
                    <p>Experience the finest culinary journey in the heart of the city.</p>
                </div>
                <div>
                    <h1 className='text-xl text-dark font-semibold'>Quick Links</h1>
                    <ul className='space-y-2'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#reservation">Reservation</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl text-black font-semibold mb-4'>Contact Info</h1>
                    <ul className='space-y-5'>
                        <li>123 State Street, New Delhi, 112233</li>
                        <li>(123) 456-7890</li>
                        <li>info@forkandspoon.com</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-black mb-4'>Follow us on</h1>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full'>
                            <FaFacebook className='text-2xl'/>

                        </div>
                         <div className='w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full'>
                            <FaLinkedin className='text-2xl'/>

                        </div>
                         <div className='w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full'>
                            <FaInstagram className='text-2xl'/>

                        </div>

                    </div>
                </div>

            </div>

        

        </div>
      
    </div>
  )
}

export default Footer

