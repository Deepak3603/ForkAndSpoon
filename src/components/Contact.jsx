import React, { useState } from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import InputField from './InputField'

const Contact = () => {
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    subject: ""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev) =>({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormData({
      fullName:"",
      email:"",
      subject:"",
      message:""

    })
  }
  return (
    <div id='contact' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl text-dark font-bold mb-4'>Let's Talk</h1>
          <div className='w-20 h-1 bg-red-400 mx-auto mb-4'></div>
          <p className='text-gray-700'>We'd love to hear from you</p>

        </div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2'>
          <div className='w-full overflow-hidden p-8'>
            <h1 className='text-2xl mb-6 text-black font-bold'>Get in Touch</h1>
            <div className='flex items-center gap-6 mb-6'>
              <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                <FaLocationArrow/>
              </div>
              <div className='mt-4'>
                <p className='text-xl text-black font-semibold'>Address</p>
                <p className='w-60'>123 State Street, New Colony New Delhi, 112233</p>

              </div>
            </div>

          </div>
            <div className='flex items-center gap-6 mb-6'>
              <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                <FaPhoneAlt/>
              </div>
              <div className='mt-4'>
                <p className='text-xl text-black font-semibold'>Phone</p>
                <p className='w-60'>+915674532458</p>

              </div>
            </div>
              <div className='flex items-center gap-6 mb-6'>
              <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                <FaEnvelope/>
              </div>
              <div className='mt-4'>
                <p className='text-xl text-black font-semibold'>Email</p>
                <p className='w-60'>resturant@gmail.com</p>

              </div>
            </div>

          </div>

          <div className='md:w-1/2'>
          <div className='w-full rounded-xl shadow-xl overflow-hidden p-8'>
            <h1 className='mb-6 text-2xl text-black font-bold'>Send a Message</h1>
            <form onSubmit={handleSubmit}>
              <InputField
              name={"fullName"}
              lable={"Full Name"}
              value={FormData.fullName}
              onChange={handleChange}
              placeholder={"Enter your Full Name"}
              />
              <InputField
              name={"email"}
              lable={"Email Address"}
              value={FormData.email}
              onChange={handleChange}
              placeholder={"Enter your Email Address"}
              />

              <InputField
              name={"subject"}
              lable={"Subject"}
              value={FormData.subject}
              onChange={handleChange}
              placeholder={"Enter your Message"}
              />

              <button className='mt-6 px-8 py-3 bg-red-600 text-white cursor-pointer font-semibold rounded-full'>Send</button>
            </form>
          </div>

          </div>
            
        </div>

      </div>
      
    </div>
  )
}

export default Contact
