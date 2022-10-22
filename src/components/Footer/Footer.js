import React from 'react'
import { AiOutlineTwitter, AiFillGithub, AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp
} from 'react-icons/ai';

import './Footer.scss'

const today= new Date()
const year= today. getFullYear()

const Footer = () => {
  return (
      <div className='footer'>
        <p>Copyright &copy; {year} </p>
        <div className='social'>
            <a href=''><span><AiOutlineTwitter /></span></a>
           <a href='https://github.com/danielAkpudi-2021' target='_blank'><span><AiFillGithub /></span></a>
            <a href=''><span><AiOutlineInstagram /></span></a>
            <a href=''><span><AiOutlineFacebook /></span></a>
            <a href=''><span><AiOutlineWhatsApp /></span></a>
        </div>
    </div>
  )
}

export default Footer
