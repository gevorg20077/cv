import './contact.css'
import imageLinkedin from '../../Images/6ea5b4a88f0b4f91945b40499aa0af00.webp'
import imageFacebook from '../../Images/0fdef751204647a3bbd7eaa2827ed4f9.webp'
import imageInstagram from '../../Images/01c3aff52f2a4dffa526d7a9843d46ea.webp'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  const [isContactActive, setIsContactActive] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
  // console.log(window.scrollY);
      
      setIsContactActive(newScrollPosition >= 2600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='contact'>
      <h1 className="contact__header">CONTACT ME</h1>
      <div className="contact__item">
        <form action="" className='contact__form'>
          <div className='contact__input_container'>
            <input type="text" className='contact__input_name' placeholder='Name' />
            <input type="text" className='contact__input_email' placeholder='Email' />
          </div>
          <input type="text" placeholder='Phone Number' />
          <input type="text" placeholder='Аdd a message' className='contact__input_massage' />
          <button className='contact__button'>Submit</button>
        </form>
        <div className="contact__line"></div>
        <div className={`contact__info ${isContactActive ? 'contact__info_active' : ''}`}>
          <div>
            <h1 className="contact__name">Gevorg Machkalyan</h1>
            <p className='contact__speciality'>Front - End Developer</p>
          </div>
          <div className="contact__phone">
            <h4>Phone</h4>
            <p>+37443311251</p>
          </div>
          <div className="contact__email">
            <h4>Email</h4>
            <p>gevorg.machkalyann@gmail.com</p>
          </div>
          <ul className="contact__icons">
            <li><NavLink to="https://www.linkedin.com/in/gevorgmachkalyan/"><img src={imageLinkedin} alt="" /></NavLink></li>
            <li><NavLink to="https://www.facebook.com/gevor.machkalyan.3/"><img src={imageFacebook} alt="" /></NavLink></li>
            <li><NavLink to="https://www.instagram.com/gev.machkalyan/"><img src={imageInstagram} alt="" /></NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact