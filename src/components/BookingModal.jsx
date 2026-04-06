import React from 'react'
import { FaCheck } from 'react-icons/fa';

const BookingModal = ({isOpen, onClose}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50'>
        <div className='bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-lg'>
            <div className='text-center'>
                <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4' >
                    <FaCheck/>

                </div>
                <h3 className='text-2xl font-bold text-gray-500 mb-2'>Booking Confirmed!!!</h3>
                <p className='text-gray-800 mb-6'>Your Table has been successfully reserved. We look forward to serve you!!.. Have a Nice Day Ahead</p>
                 <button onClick={onClose} className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition'>Continue</button>
            </div>

        </div>
      
    </div>
  )
}

export default BookingModal
