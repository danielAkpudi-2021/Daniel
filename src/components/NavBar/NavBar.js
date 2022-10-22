import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constant';
import './NavBar.scss'

const NavBar = () => {
  const [click, setClick]= useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
       </div>
       <ul className='app__navbar-links'>
          {['header', 'about', 'works', 'skills', 'testimonials', 'contact',].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
             <a href={`#${item}`}>{item}</a>
            </li>
          ))} 
        </ul> 
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=> setClick(true)}/>
            {
              click &&
              <motion.div 
                whlleInView={{x:[300,0]}}
                transition={{duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={()=>setClick(false)}/>
                <ul className='app__navbar-links'>
                {['about', 'contact', 'skills', 'testimonials', 'works'].map((item) => (
                  <li className="app__flex p-text" key={`link-${item}`}>
                   <a href={`#${item}`}>{item}</a>
                  </li>
                ))} 
              </ul> 

              </motion.div>
            }
        </div>
    </nav>
  )
}

export default NavBar
