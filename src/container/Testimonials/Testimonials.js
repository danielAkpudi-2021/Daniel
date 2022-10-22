import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {client, urlFor} from '../../lib/sanityClient'

import './Testimonial.scss'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [index, setIndex] = useState(0)

  const userClick = (i) => {
    setIndex(i);
  }

  useEffect(()=>{
    const query= '*[_type=="testimonials"]'

    client.fetch(query).then((data)=>{
      setTestimonials(data) 
      console.log(data)
    })

  }, [])


  const testimonial=testimonials[index]

  return (
    <div id='testimonials'>
      <div id='section-margins'>
        <h2 className='head-text'> <span>Testimonial</span> Section</h2>
        <motion.div>
          {testimonials.length &&(
            <div>
              <div className='app__testimonial-item app__flex'>
                <div className='client-img'>
                  <img src={urlFor(testimonial.imgurl)} alt={testimonial.name} />
                  <div>
                    <h4 className='bold-text'>{testimonial.name}</h4>
                    <h5 className='p-text'>{testimonial.company}</h5>
                  </div>
                </div>
                <div className='app__testimonial-content'>
                  <p className='p-text'>{testimonial.feedback}</p>
                </div>
              </div>
              <div className='app__testimonial-btns app__flex'>
                <div className='app__flex' onClick = {(i) => userClick(index === 0 ? testimonials.length - 1 : index -1 )}>
                <HiChevronLeft />
                </div>
                <div className='app__flex' onClick = {(i) => userClick(index === testimonials.length - 1 ? 0 : index + 1 )}>
                <HiChevronRight />
                </div>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  )
}

export default Testimonials
