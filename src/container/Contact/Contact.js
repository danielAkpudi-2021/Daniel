import React, { useState } from 'react'
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { RiSendPlaneLine  } from 'react-icons/ri';
import toast, { Toaster } from "react-hot-toast";

import { client } from '../../lib/sanityClient';
import "./Contact.scss"

const initialState = {name: '', email: '', telephone: '', address: '', message: ''}

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, telephone, address, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      telephone: telephone,
      address: address,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setFormData(initialState)
        toast.success('Form successfully submitted')
      })
      .catch((err) => console.log(err));
  };


  return (
    <div id='contact'>
      <h2 className='head-text'>Contact <span>Us</span></h2>
      <div className='contact__form-container'>
        <div className='admin-contact'>
          <div className='admin-contact-card'>
            <AiOutlineMobile />
            <a className='p-text' href='tel:08118633710'>08118633710</a>
          </div>
          <div className='admin-contact-card'>
            <AiOutlineMail />
            <a className='p-text' href='mailto:akpudi.daniel109@gmail.com'>akpudi.daniel109@gmail.com</a>
          </div>
        </div>
        <div className='client__contact-details'>
          <div className='line'>
            <input className='p-text' placeholder='Your Name' autoComplete='off' name='name' value={name} onChange={handleChange} />
            <input className='p-text' placeholder='Your Email' autoComplete='off' name='email' value={email} onChange={handleChange} />
          </div>

          <div className='line'>
            <input className='p-text' placeholder='Telephone' autoComplete='off' name='telephone' value={telephone} onChange={handleChange} />
            <input className='p-text' placeholder='Address' autoComplete='off' name='address' value={address} onChange={handleChange} />
          </div>

          <textarea className='p-text' placeholder='Message' name='message' value={message} onChange={handleChange} /> 
          <div className='send-button'>
            <button type='button' onClick={handleSubmit} >
              {loading ? 'sending...' :
              <>
                <RiSendPlaneLine />
                Send
              </>               
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
