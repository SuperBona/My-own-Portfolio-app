import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'
/* import { toast } from 'react-toastify' */

/* validateMail () {
    let errors = {}
    let formIsValid = true
    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "I'd love it if your name was at least 3 characters long..."
      toast.error(`${errors.name}`, {
        position: toast.POSITION.TOP_LEFT      });
      formIsValid = false
    }if (!this.state.feedback || this.state.feedback.length < 10) {
      errors.feedback = `C'mon, the body of your message should say SOMEthing!`
      toast.error(`${errors.feedback}`);
      formIsValid = false
    }if (!this.state.email || this.state.email.length < 3) {
      errors.email_1 = 'Your email address has got to have at least 3 characters.'
      toast.error(`${errors.email_1}`);
      formIsValid = false
    }let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/if (!pattern.test(this.state.email)) {
      errors.email_2 = 'Email addresses need an @ and a .com'
      toast.error(`${errors.email_2}`);
      formIsValid = false
    }this.setState({
      errors: errors
    })
}
 */

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
              target='_blank'
              className='contact_social-link'
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href='https://www.linkedin.com/in/silvia-fioroni-2423aa202/'
              target='_blank'
              className='contact_social-link'
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <form
          /* action='https://formsubmit.co/s.fioroni99@gmail.com' */
          action='https://formsubmit.co/s.fioroni99@gmail.com'
          method='post'
          /* enctype='text/plain' */
          className='contact_form'
        >
          <div className='form_input-group'>
            <label htmlFor='name' className='form_input-div'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='form_control'
                required
              />
            </label>
            <label htmlFor='email' className='form_input-div'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='form_control'
                required
              />
            </label>
            <label htmlFor='subject' className='form_input-div'>
              <input
                type='text'
                name='subject'
                placeholder='Your Subject'
                className='form_control'
                required
              />
            </label>
          </div>
          <div htmlFor='message' className='form_input-div'>
            <textarea
              className='form_control textarea'
              placeholder='Your Message'
              required
              name='message'
            ></textarea>
          </div>
          {/* <input type='submit' id='send' value='Send Message' /> */}
          <button type='submit' id='send' value='send' className='button'>
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

/* value - for user; autocomplete - browser; it doesn't affect the value, it's like the browser fill it not the user.
Is it autofill or autocomplete?
Autocomplete is a browser feature that suggests possible values for a form field based on the user's previous input or the field's name. Autofill is a browser feature that automatically fills out form fields with the user's stored data, such as name, address, email, or credit card number
autocomplete try to set everything on one click; values are stored on the back end side. so it can be problematic. fill form, save it, it will be fired the action on the backend side, but sometimes actions are called from input side and it became problematic */
