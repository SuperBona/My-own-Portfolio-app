import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section_title'>
        Get In <span>touch</span>
      </h2>
      <div className='contact_container container grid'>
        <div className='contact_data'>
          <h3 className='contact_title'>Contact Me!</h3>
          <p className='contact_description'>
            Feel free to get in touch with me.
          </p>
          <div className='contact_info'>
            <div className='info_item'>
              <FaEnvelopeOpen className='info__icon'></FaEnvelopeOpen>
              <div>
                <span className='info_title'>Mail me</span>
                <h4 className='info_desc'>s.fioroni99@gmail.com</h4>
              </div>
            </div>
            <div className='info_item'>
              <FaPhoneSquareAlt className='info__icon'></FaPhoneSquareAlt>
              <div>
                <span className='info_title'>Call me</span>
                <h4 className='info_desc'>+39 3772595314</h4>
              </div>
            </div>
          </div>
          <div className='contact_socials'>
            <a
              href='https://github.com/SuperBona'
              className='contact_social-link'
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href='https://www.linkedin.com/in/silvia-fioroni-2423aa202/'
              className='contact_social-link'
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <form
          action='mailto:s.fioroni99@gmail.com'
          method='post'
          enctype='text/plain'
          className='contact_form'
        >
          <div className='form_input-group'>
            <div className='form_input-div'>
              <input
                type='text'
                placeholder='Your Name'
                className='form_control'
              />
            </div>
            <div className='form_input-div'>
              <input
                type='email'
                placeholder='Your Email'
                className='form_control'
              />
            </div>
            <div className='form_input-div'>
              <input
                type='text'
                placeholder='Your Subject'
                className='form_control'
              />
            </div>
          </div>
          <div className='form_input-div'>
            <textarea
              className='form_control textarea'
              placeholder='Your Message'
            ></textarea>
          </div>
          <button className='button'>
            Send Message
            <span className='button__icon contact_button-icon'>
              <FiSend></FiSend>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact
