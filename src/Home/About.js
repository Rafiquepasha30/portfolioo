import React from 'react'
import './About.css'
import AboutImg from '../assets/Home/about1.jpg';



const About = () => {
  return (
     <section className='about section' id='about'>
      <div className='title'>
     <h5 className='section_title'>About Me</h5>
     <h2 className='section_subtitle'>My introduction</h2>
     </div>

     <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={AboutImg} alt='About Image' />

        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>

          <article className='about__card'>
            <h5>Projects</h5>
            <small>4+</small>
          </article>

          <article className='about__card'>
            <h5>Certificates</h5>
            <small>2+</small>
          </article>
        </div>
        <p>
          Detailed and highly skilled Full Stack Developer with strong skills in designing, developing and maintaining software applications.Skilled in collaborating with cross - functional teams to implement innovative and effective software solutions.To find a challenging
          role I will be able to apply my skills in full stack development, cloud computing and data analytics to contribute to the success of
            dynamic projects.
        </p>
        <a href='contact' className='btn highlighted-btn'>Let's Talk</a>

      </div>

     </div>

    

     </section>

  )
}

export default About
