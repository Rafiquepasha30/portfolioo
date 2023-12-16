import React from 'react'
import './Skill.css'
import {
  BsFillPatchCheckFill
} from "react-icons/bs";


const Skill = () => {
  return (

    <section className='skill section' id='skills'>
        <h5 className='section_title'>Skills</h5>
        <h2 className='section_subtitle'>What Technical Skills I Have </h2>

        <div className='container skills__container'>
          <div className='skill__frontend'>
            <h3>Frontend Development</h3>
            <div className='skill__content'>
              <article className='skill
              details__'>
                < BsFillPatchCheckFill className='skill__details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>

              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>

              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>

              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>
            </div>
          </div>
          <div className='skill__backend'>
         <h3>Backend Development</h3>
            <div className='skill__content'>
              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>Nodejs</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>

              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>ExpressJs</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>

              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>

              <article className='skill
              details__'>
                < BsFillPatchCheckFill  className='skill__details-icon'/>
                  <div>
                  <h4>Postman</h4>
                  <small className='text-light'>Inetrmediate</small>
                  </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skill
