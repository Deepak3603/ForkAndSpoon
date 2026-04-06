import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
  return (
    <div className='shadow-md sticky top-0 z-50 backdrop-blur-3xl'>
        <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-24'>
            <div className='flex justify-between items-center py-8'>
                <div className='flex items-center text-2xl font-bold'>
                    <img src="" alt="" />
                    <h1 className='text-purple-400'>ForK&
                        <span className='text-amber-800'>
                            SPOON
                        </span>
                    </h1>

                </div>
                <nav className='hidden md:flex items-center space-x-6 text-black'>
                    <a className='font-semibold hover:text-red-400 ' href="#home">Home</a>
                    <a  className='font-semibold hover:text-red-400'href="#about">About</a>
                    <a className='font-semibold hover:text-red-400' href="#menu">Menu</a>
                    <a className='font-semibold hover:text-red-400' href="#reservation">Reservation</a>
                    <a className='font-semibold hover:text-red-400' href="#contact">Contact</a>

                </nav>
                <div className='md:hidden'>
                    {

                    
                        showMenu ?
                        <FaXmark onClick={()=>setshowMenu(!showMenu)} className='text-xl cursor-pointer'/> :
                        <FaBars onClick={()=>setshowMenu(!showMenu)} className='text-xl cursor-pointer'/>

                    }

                    

                </div>

            </div>

        </div>

        {
            showMenu && (
                <div className='md:hidden flex flex-col items-center space-y-6 py-20 h-screen'>
                   <a onClick={()=>setshowMenu(!showMenu)} className='font-semibold hover:text-red-400 ' href="#home">Home</a>
                    <a onClick={()=>setshowMenu(!showMenu)}  className='font-semibold hover:text-red-400'href="#about">About</a>
                    <a onClick={()=>setshowMenu(!showMenu)} className='font-semibold hover:text-red-400' href="#menu">Menu</a>
                    <a onClick={()=>setshowMenu(!showMenu)} className='font-semibold hover:text-red-400' href="#reservation">Reservation</a>
                    <a onClick={()=>setshowMenu(!showMenu)} className='font-semibold hover:text-red-400' href="#contact">Contact</a>  
                </div>
            )
        }
      
    </div>
  )
}

export default Navbar
