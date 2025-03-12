import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../../../styles/Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Add fonts to the document head
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Madimi+One&family=Montserrat:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Here you would typically send the formData to your backend
  };

  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-intro' data-aos="fade-down">
          <h1><span className='highlight-span'>Contact</span> Us</h1>
          <p>Have questions or want to connect? We'd love to hear from you! Reach out to us using the form below or through our contact details.</p>
        </div>

        <div className='contact-details'>
          <div className='socials' data-aos="fade-right">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/fatimush_natural_spices?igsh=Y28yeHh1YmV3cTB2&utm_source=qr" target='_blank' rel="noopener noreferrer">
                  <FaInstagram /> <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1Dd2zVMjJR/?mibextid=wwXIfr" target='_blank' rel="noopener noreferrer">
                  <FaFacebook /> <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@fatimush.natural.spices?_t=ZM-8ucY43jL6kp&_r=1" target='_blank' rel="noopener noreferrer">
                  <FaTiktok /> <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='address' data-aos="fade-up">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <FaEnvelope />
                <div id='email-address' >
                  <strong>Email:</strong>
                  <span>fatimushnaturalspices@gmail.com</span>
                </div>
              </li>
              <li>
                <FaPhone />
                <div>
                  <strong>Phone:</strong>
                  <span>+233 59 149 0144</span>
                </div>
              </li>
              <li>
                <FaMapMarkerAlt />
                <div>
                  <strong>Address:</strong>
                  <span>Offinso, Ashanti-Region, Ghana</span>
                </div>
              </li>
            </ul>
          </div>

          <div className='contact-form' data-aos="fade-left">
            {submitted ? (
              <div className='feedback'>
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                  </div>
                </div>
                <h3>Thank You!</h3>
                <p>Your message has been received. We will get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className='input-name'>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className='input-email'>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='input-message'>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit">
                  <span>Send Message</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
