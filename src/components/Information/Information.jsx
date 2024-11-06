import { NavLink } from 'react-router-dom'
import './information.css'
import { useEffect, useState } from 'react';
import imageLinkedin from '../../Images/7528824071724d12a3e6c31eee0b40d4.webp'
import imageFacebook from '../../Images/23fd2a2be53141ed810f4d3dcdcd01fa.webp'
import imageInstagram from '../../Images/81af6121f84c41a5b4391d7d37fce12a.webp'
import myPhoto from '../../Images/IMG_3160.jpg'
const Information = () => {
  const [isClassActive, setIsClassActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClassActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="information">
      <div className="information__background"><div className="information__background_filter"></div></div>
      <div className="information__item">
        <img className={`information__image ${isClassActive ? 'information__image_active' : ''}`} src={myPhoto} alt="" />
        <div className={`information__text ${isClassActive ? 'information__text_active' : ''}`}>
          <div>
            <h1 className="information__name">Gevorg Machkalyan</h1>
            <h3 className='information__profession'>Front - End Developer</h3>
          </div>
          <div className="information__telephone">
            <h3>Phone:</h3>
            <p>+37443311251</p>
          </div>
          <div className="information__email">
            <h3>Email:</h3>
            <p>gevorg.machkalyann@gmail.com</p>
          </div>
          <div className="information__address">
            <h3>Address:</h3>
            <p>Armenia, Yerevan</p>
          </div>
          <div className="information__date">
            <h3>Date of birth:</h3>
            <p>May 19, 2007</p>
          </div>
        </div>
      </div>
      <ul className={`information__contact ${isClassActive ? 'information__contact_active' : ''}`}>
        <li><NavLink to="https://www.linkedin.com/in/gevorgmachkalyan/"><img className='information__contact_image' src={imageLinkedin} alt="" /></NavLink></li>
        <li><NavLink to="https://www.facebook.com/gevor.machkalyan.3/"><img className='information__contact_image' src={imageFacebook} alt="" /></NavLink></li>
        <li><NavLink to="https://www.instagram.com/gev.machkalyan/"><img className='information__contact_image' src={imageInstagram} alt="" /></NavLink></li>
      </ul>
    </div>
  )
}

export default Information