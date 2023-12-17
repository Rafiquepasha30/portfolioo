import React from 'react'
import './Profile.css'
import Resume from './Rafiquepasha.pdf'
import Typed from 'react-typed';
import { BrowserRouter } from 'react-router-dom'
import About from './About'



const Profile = () => {
  return (
    
   <div>
    <BrowserRouter>
    </BrowserRouter>
   <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    < a href = 'https://www.facebook.com/profile.php?id=100021923858163&mibextid=gik2fB' >
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    < a href = 'https://www.linkedin.com/in/rafique-pasha-578975198' >
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    < a href = 'https://www.instagram.com/r.k_pasha?igshid=NzZlODBkYWE4Ng==' >
                        <i className='fa fa-instagram'></i>
                    </a>
                    < a href = 'https://www.linkedin.com/in/rafique-pasha-578975198' >
                        <i className='fa fa-linkedin'></i>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}Hello, I'M <span className='highlight-text'>Rafique Pasha</span>

                    </span>

                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                       <h1>
                        <Typed strings={["Web Developer🔴", "Front End Developer", "React Developer😎"]} typeSpeed={40} backSpeed={50} loop />
                       </h1>
                        <span className='profile-role-tagline'>Building an web sites with Front end and back end</span>

                    </span>
                </div>
                <div className='profile-option'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me{""}
                    </button>
                    <a href={Resume} download>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>
                     

                </div>

            </div>
        </div>
      </div>
      <BrowserRouter>
      <About/>
      </BrowserRouter>
    </div>
  )
}

export default Profile
