import React from 'react'
import { motion } from 'framer-motion'

import {images} from '../../constant'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div id='header' className='app__header app__flex'> 
      <motion.div 
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'>
        <div className='badge-Hi app__flex'>
          <span className='wave'>👋</span>
          <span className='text'>am Dan</span>
        </div>
        <div className='specialize__skills'>
          <p className='p-text'>Web developer</p>
          <p className='p-text'>Graphic designs</p>
          <p className='p-text'>Digital marketing</p>
        </div> 
      </motion.div>
      <motion.div className='app__header-image'>
        <img src={images.dan3} />
      </motion.div>
      <motion.div 
        className='app__header-circles'
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}  
       >
         {[images.js, images.react, images.css].map((circle, index)=>(
           <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="dan3_bg" />
           </div>
         ))}
      </motion.div>
    </div>
  )
}

export default Header
