import React from 'react'
import { foodMenu } from '../assets/assets'

const Menu = () => {
  return (
    <div id='menu' className='py-20 bg-amber-100'>
        <div className='container mx-auto px-6'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold font-serif'>Our Menu</h1>
                <div className='w-20 h-1 bg-red-400 mx-auto mb-4'></div>
                <p className='text-gray-700 mb-8'>Crafted with passion and finest ingredients</p>

            </div>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {
                  foodMenu.map((food, index)=>(
                    <div key={index} className='rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer'>
                      <img className='w-full h-96 object-cover' src={food.Image} alt="" />
                      <div className='p-4'>
                        <div className='flex items-center justify-between mb-4'>
                          <h1 className='text-xl text-black font-semibold'>{food.title}</h1>
                          <span className='text-sm text-red-500 font-semibold'>{food.price}</span>

                        </div>
                        <p className='text-sm text-gray-600'>{food.ingredients}</p>

                      </div>

                    </div>
                  )
                )
                }

              </div>

            </div>

        </div>
      
    </div>
  )
}

export default Menu
