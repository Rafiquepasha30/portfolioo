import React from 'react'
import './Project.css'
import Img1 from '../assets/Home/amazon.png';
import Img2 from '../assets/Home/cafe1.png';
import Img3 from '../assets/Home/jobseeker1.png';

const Project = () => {
  return (
    <section id='project'>
       <h5>Projects</h5>
       <h2>My Recent Work</h2>

       <div className='container project__container'>
    
        <article className='project__item'>
            <div className='project__item-image'>
                <img src={Img1} alt='' />
            </div>
            <h3>Amazon Clone</h3>
            <div className='project__item-cta'>
            <a href='https://github.com/Rafiquepasha30' className='btn primary-btn' target='_blank'>Github</a>
            <a href='https://clone-fd795.web.app/' className='btn highlighted-btn' target='_blank'>Amazon Clone</a>
            </div>
        </article>
        
        <article className='project__item'>
            <div className='project__item-image'>
                <img src={Img2} alt='' />
            </div>
            <h3>Cafe Shop</h3>
            < div className = 'project__item-cta' >
            <a href='https://github.com/Rafiquepasha30' className='btn primary-btn' target='_blank'>Github</a>
            <a href='https://caffe-shop.vercel.app/' className='btn highlighted-btn' target='_blank'>Cafe Shop</a>
            </div>
        </article>

        <article className='project__item'>
            <div className='project__item-image'>
                <img src={Img3} alt='' />
            </div>
            <h3>Job Seeker</h3>
            < div className = 'project__item-cta' >
            <a href='https://github.com/Rafiquepasha30' className='btn primary-btn' target='_blank'>Github</a>
            <a href='https://job-seeker-theta.vercel.app/' className='btn highlighted-btn' target='_blank'>Job Seeker</a>
            </div>
        </article>

        
       </div>

    </section>
  )
}

export default Project
