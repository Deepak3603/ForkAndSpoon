import React from 'react'
import { assets } from '../assets/assets'
import { FaUtensils, FaWineBottle } from 'react-icons/fa6'

const About = () => {
  return (
    <div id='about' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl sm:text-4xl mb-4 font-bold text-black'>Our Story</h1>
                <div className='w-20 h-1 bg-red-500 mx-auto'></div>

            </div>

            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='md:w-1/2'>
                <img className='w-full h-full object-cover rounded-xl' src={assets.aboutImg} alt="About" />

                </div>

                <div className='md:w-1/2'>
                <h3 className=' font-semibold text-gray-800 mb-6'>

Every great meal has a story—and ours begins with a passion for bringing people together over delicious food.

What started as a small dream in a humble kitchen has grown into a place where flavors, traditions, and memories come alive. Our journey began with a simple idea: to serve food that not only satisfies hunger but also warms the heart. Inspired by authentic recipes and a love for cooking, we set out to create an experience that feels like home.

At our restaurant, every dish is crafted with care using fresh ingredients, rich spices, and time-honored techniques. We believe food is more than just a meal—it's a way to connect, celebrate, and create lasting memories with family and friends.

From our kitchen to your table, we are committed to quality, taste, and hospitality. Whether you’re here for a quick bite or a special occasion, we strive to make every visit unforgettable.

This is not just our story—it’s a story we share with every guest who walks through our doors.
</h3>
<div className='flex items-center space-x-4'>
    <div flex items-center gap-16>
        <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center'>
            <FaUtensils className='text-white text-xl'/>
        </div>
        <span className='text-black font-semibold font-serif'>Fine Dining</span>
    </div>
     <div flex items-center gap-2>
        <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center'>
            <FaWineBottle className='text-white text-xl'/>
        </div>
        <span className='text-black font-semibold font-serif flex'>Wine Pairing</span>
    </div>
</div>



                </div>

            </div>

        </div>
      
    </div>
  )
}

export default About
