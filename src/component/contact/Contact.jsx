import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ayush010@gmail.com</h5>
            <a href="mailto:ayush010@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>coding.ayush</h5>
            <a href="https://m.me/ayush9033" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Aayush Pathak</h5>
            <a href="https://api.whatsapp.com/send?phone=+919054245433" target="_blank">Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Enter Full Name' />
          <input type="email" name='email' placeholder='Enter your Email' />
          <textarea name="message" id="" placeholder='Your Message' rows="7"></textarea>
          <button type='submit' className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact