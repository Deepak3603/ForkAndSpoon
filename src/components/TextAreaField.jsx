import React from 'react'

const TextAreaField = ({label, name, value, onChange, placeholder}) => {
  return (
    <div className='mb-4'>
        <label htmlFor={name} className='block text-black font-semibold'>{label}</label>
        <textarea name={name} 
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        className='w-full px-4 py-2 border rounded placeholder:text-xs'
        
        >

        </textarea>
      
    </div>
  )
}

export default TextAreaField
