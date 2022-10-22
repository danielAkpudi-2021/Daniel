import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import {motion} from 'framer-motion'
import {client, urlFor} from '../../lib/sanityClient'

import './skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(()=>{
    const query= '*[_type=="skills"]'
    const experienceQuery= '*[_type=="experiences"]'

    client.fetch(query).then((data)=>{
      setSkills(data)
    })
    client.fetch(experienceQuery).then((data)=>{
      setExperiences(data) 
    }) 
  },[])
  return (
    <div id='skills'>
      <div id='section-margins'>
        <h2 className='head-text'><span>Skills &</span> Experience</h2>

        <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            {skills?.map((skill)=>(
              <motion.div 
                className='app__skills-item app__flex'
                key={skill._id}
              >
                <div style={{backgroundColor: skill.bgColor}} className='app__flex'>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className='app__skills-experience'>
              {experiences?.map((experience)=>(
                <motion.div className='app__skills-exp-item'
                key={experience.year}>
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{experience.year}</p>
                  </div>

                  <div className='app__skills-exp-works'>
                    
                    {experience?.works?.map((work)=>(
                      <>
                        <motion.div
                          className='app__skills-exp-work'
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          data-tip
                          data-for={work.position}
                          key={work.position}
                        >
                          <h4 className='bold-text'>{work.position}</h4>
                          <p className='p-text'>{work.company}</p>
                        </motion.div>
                        <ReactTooltip
                            id={work.position}
                            effect="solid"
                            arrowColor="#fff"
                            className="skills-tooltip"
                          >
                            <p style={{color: work.color}}>{work.desc}</p>
                          </ReactTooltip>
                      </>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>

        </div>
       
      </div>
    </div>
    )
}

export default Skills
