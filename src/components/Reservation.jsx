import React, { useState } from 'react'
import InputField from './InputField'
import SelectInput from './SelectInput'
import TextAreaField from './TextAreaField'
import BookingModal from './BookingModal'
const Reservation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        specialRequest: "",
        time: "",
        partySize: "",
        tableRef: "",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev)=> ({
            ...prev, [name]: value,
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsModalOpen(true);
        setFormData({
             fullName: "",
        phone: "",
        email: "",
        specialRequest: "",
        date: "",
        time: "",
        partySize: "",
        tableRef: "",

        });
    }

    const closeModal = ()=>{
        setIsModalOpen(false);
    }
  return (
    <div id='reservation' className='w-full bg-amber-500 py-20'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl text-black font-bold mb-4'>Make a Reservation</h1>
                <div className='w-20 h-1 bg-red-500 mb-4 mx-auto'></div>
                <p className='text-gray-600'>Book your table in advance to ensure the best dining experience and to avoid queue</p>

            </div>
            <div className='max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <InputField
                        label={"Date"}
                        name={"date"}
                        value={formData.date}
                        onChange={handleChange}
                        type='date'
                        />

                        <SelectInput
                        label={"Time"}
                        name={"time"}
                        value={formData.time}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "Select Time" },
    { value: "10:00", label: "10:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    {  value: "16:00", label: "4:00 PM"},
    {  value: "18:00", label: "6:00 PM"},
    {  value: "20:00", label: "8:00 PM"},
]}

                        
                        />

                        <SelectInput
                        label={"Party Size"}
                        name={"partySize"}
                        value={formData.partySize}
                        onChange={handleChange}
                        options={[
    { value: "", label: "Select Party Size" },
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 People" },
    { value: "3", label: "3 People" },
    { value: "4", label: "4 People" },
    { value: "5", label: "5 People" },
    { value: "6", label: "6 People" },
    { value: "7", label: "7 People" },
    { value: "8", label: "8 People" },
    { value: "9", label: "9 People" },
    { value: "10", label: "10 People" },
  ]}
                        
                        />


                        <SelectInput
                        label={"Table Preference"}
                        name={"tableRef"}
                        value={formData.tableRef}
                        onChange={handleChange}
                        options={[
    { value: "", label: "Select Table Type" },
    { value: "2-seater", label: "2 Seater Table" },
    { value: "4-seater", label: "4 Seater Table" },
    { value: "6-seater", label: "6 Seater Table" },
    { value: "8-seater", label: "8 Seater Table" },
  ]}
                        />

                        <InputField
                        label={"Full Name"}
                        name={"fullName"}
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={"Enter your full name"}
                        />

                         <InputField
                        label={"Phone Number"}
                        name={"phone"}
                        value={formData.phone}
                        type='tel'
                        onChange={handleChange}
                        placeholder={"Enter your phone number"}
                        />

                         <InputField
                        label={"Email Address"}
                        name={"email"}
                        value={formData.email}
                        type='email'
                        onChange={handleChange}
                        placeholder={"Enter your email"}
                        />


                        <TextAreaField
                        label={"Special Request"}
                        name={"specialRequest"}
                        value={formData.specialRequest}
                        onChange={handleChange}
                        placeholder={"Any special requests"}
                        />





                    </div>
                    <button type='submit' className='mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-900 cursor-pointer'>Confirm Reservation</button>

                </form>

                <BookingModal
                isOpen={isModalOpen}
                onClose={closeModal}
                />

            </div>

        </div>
      
    </div>
  )
}

export default Reservation
