import React from 'react';
import celebrate from '../assets/Images/celebrate.jpg';
import facebook from '../assets/Images/facebook.png';
import whatsapp from '../assets/Images/whatsapp.png';
import instagram from '../assets/Images/instagram.png';
import linkedin from '../assets/Images/linkedin.png';
import call from '../assets/Images/call.png';
import location from '../assets/Images/location.png';
import '../Style/contact.css';
import { Footer } from './Footer';

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <main>
        <section className="hero-section">
          <img src={celebrate} alt="Team celebrating" className="hero-image" />
          <h1 className="hero-title">Hire your Dream Team</h1>
          <h2 className="hero-subtitle">Call Us</h2>
        </section>
        <section className="contact-section">
          <div className="left-container">
            <div className="contact-form">
              <h3 className='message'>We are here to help you</h3>
              <center className='text-gray'><p>Send us a message and we'll get back to you as soon as we can</p></center>
              <form>
                <div className="form-row">
                  <label className="form-label">
                    Name
                    <input type="text" name="name" />
                  </label>
                  <label className="form-label">
                    E-mail
                    <input type="email" name="email" />
                  </label>
                </div>
                <div className="form-number">
                  <label className="form-label">
                    Mobile Number
                    <input type="text" name="number" />
                  </label>
                </div>
                <div className="form-message">
                  <label className="form-label">
                    Message
                    <textarea name="message"></textarea>
                  </label>
                </div>
                <div className="button-container">
                  <button type="submit" className="submit-button">Submit Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="right-container">
            <div className="contact-details1">
              <h3 className='contact-title'>Get in touch</h3>
              <p className='text-center'>Looking for opportunities or seeking talent? We're here to help.<br/>
                Contact us for any inquiries or assistance you need.</p>
              <div className='location'>
                <b className='text-start'>ADDRESS</b><br/>
                <div className='d-flex justify-content-around p-2'>
                <img className='location-icon' src={location} alt="Location" />
                <p className='text-black'>33, Anna Main Rd, MGR Nagar, K. K. Nagar,<br /> Chennai, Tamil Nadu 600078</p>
                </div>
              </div>
              <div className="contact-numbers">
                <p><b>Call Us</b></p>
                <div className='call'>
                  <img className='call-icon' src={call} alt="Call" />+91 98845 21114
                </div>
                <div className='call'>
                  <img className='call-icon' src={call} alt="Call" />+91 9943179437
                </div>
              </div>
              <div className='p-2'>
              <p><b>Connect With Us</b></p>
              <div className="social-media">
                <div className='icon-back'>
                <a href="https://www.facebook.com/skylarkhrsolutions" target="_blank" rel="noopener noreferrer"><img className='social-icons' src={facebook} alt="Facebook"/></a>
                </div>
                <div className='icon-back'>
                <a href="https://wa.me/8610010780?text=Hello%20there!Its%20Skylark%20Job%20Portal%20Feel%20free%20to%20contact" target="_blank" rel="noopener noreferrer">  <img className='social-icons' src={whatsapp} alt="WhatsApp"/></a>
                </div>
                <div className='icon-back'>
                <a href="https://www.instagram.com/skylark_fun_at_work/" target="_blank" rel="noopener noreferrer"><img className='social-icons' src={instagram} alt="Instagram"/></a>
                </div>
                <div className='icon-back'>
                <a href="https://www.linkedin.com/company/skylark-hr-solutions/" target="_blank" rel="noopener noreferrer"><img className='social-icons' src={linkedin} alt="LinkedIn"/></a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
    <Footer/>
    </>
  );
};

export default Contact;


