import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>R.</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skill</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#contact'>ContactMe</a></li>
        </ul>
        <div className='footer__social'>
            < a href = 'https://www.facebook.com/profile.php?id=100021923858163&mibextid=gik2fB' >
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    < a href = '' >
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    < a href = 'https://www.instagram.com/r.k_pasha?igshid=NzZlODBkYWE4Ng==' >
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/rafique-pasha-57897519'>
                        <i className='fa fa-linkedin'></i>
                    </a>
        </div>
        <div className='footer__copy'>
            <small>&copy; Rafique Pasha. All rights reserved</small>

        </div>
    </footer>
  )
}

export default Footer
