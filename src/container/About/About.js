import React, { useEffect, useState } from 'react'
import{motion} from 'framer-motion'

import './About.scss'
import { urlFor, client } from '../../lib/sanityClient';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div id='about'>
      <div id='section-margins' className='About'>
        <h2 className='head-text'>
        <span>about</span> us section below
        </h2>
        <div className="app__profiles">
          {
          abouts.map((about, index)=>(
            <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)}  alt='Web Design img'/>
              <div className='margin'>
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title }</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
              </div>
            </motion.div>
          )) 
          }
        </div>
      </div>
    </div>
  )
}

export default About
