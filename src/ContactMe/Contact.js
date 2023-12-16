import React from 'react'
import './Contact.css'
import {
    MdOutlineMail
} from "react-icons/md";
import {
    FaLinkedin
} from "react-icons/fa";
import {
    FaWhatsapp
} from "react-icons/fa";
import {
    useRef
} from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oxyqhyb', 'template_l3cto1g', form.current, 'DptLonWJKBtpXlob4')
            
        e.target.reset()
    };
  
    return (
    <section>
        <h5>Contact</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineMail className='contact__option-icons'/>
                    <h5>Email</h5>
                    <h5>rafiquepasha30@gmail.com</h5>
                    <a href='mailto:rafiquepasha30@gmail.com'>Send a message</a>
                </article>

                <article className='contact__option'>
                    <FaLinkedin  className='contact__option-icons' />
                    <h5>LinkedIn</h5>
                    <h5>rafique-pasha</h5>
                    <a href='http://www.linkedin.com/in/rafique-pasha'>Send a message</a>
                </article>

                <article className='contact__option'>
                    <FaWhatsapp className='contact__option-icons' />
                    <h5>what's app</h5>
                    <h5>+918856031682</h5>
                    <a href='https://api.whatsapp.com/send?phone+918856031682'>Send a message</a>
                </article>
            </div>
            {/* end of option section */}
            <form ref={form} onSubmit ={sendEmail}className='form__act'>
                <input type='text' name='name' placeholder='Your Full Name' required />
                <input type='email' name='email' placeholder='Your Email' required />
               <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
               <button type='submit' className='btn  highlighted-btn'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
