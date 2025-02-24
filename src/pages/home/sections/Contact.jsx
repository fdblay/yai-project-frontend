import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../../../styles/Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = ('click', event => {
    event.preventDefault();
    setSubmitted(true);
  });

  return (
    <div className='contact-container'>

      <div className='contact-intro'>
        <h1>Contact Us</h1>
        <p>Have questions or want to connect? We’d love to hear from you! Reach out to us using the form below or through our contact details.</p>
      </div>

      <div className='contact-details'>
        <div className='socials'>
          <h3>Follow Us</h3>
          <ul>
            <li><a href=""><FaInstagram /> <span>Instagram</span></a></li>
            <li><a href=""><FaFacebook /> <span>Facebook</span></a></li>
            <li><a href=""><FaXTwitter /> <span>Twitter</span></a></li>
            <li><a href=""><FaTiktok /> <span>TikTok</span> </a></li>
          </ul>
        </div>
        <div className='address'>
          <h3>Get in Touch</h3>
          <ul>
            <li><strong>Email:</strong> contact@mail.com</li>
            <li><strong>Phone:</strong>+233 00 000 0000</li>
            <li><strong>Address:</strong>123 Mushroom Ln, Nature City, Gh</li>
          </ul>
        </div>
        <div className='contact-form'>
          {submitted ? (
            <div className='feedback'>
              <h3>Thank You!</h3>
              <p>Your message has been received. we will get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='input-name'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className='input-email'>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Your Email" required />
              </div>
              <div className='input-message'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
};

export default Contact;
