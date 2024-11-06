import { NavLink } from 'react-router-dom'
import './menu.css'
const Menu = () => {
  const clickExperience = () => {
    window.scrollTo({
      top: 1069,
      behavior: 'smooth'
    });
  }
  const clickEducation = () => {
    window.scrollTo({
      top: 1660,
      behavior: 'smooth'
    });
  }
  const clickCompanies = () => {
    window.scrollTo({
      top: 2085,
      behavior: 'smooth'
    });
  }
  const clickSkills = () => {
    window.scrollTo({
      top: 2468,
      behavior: 'smooth'
    });
  }
  const clickContacts = () => {
    window.scrollTo({
      top: 2980,
      behavior: 'smooth'
    });
  }

  return (
    <div className='menu'>
      <h1 className='menu__name'>Gevorg Machkalyan</h1>
      <ul className='menu__links'>
        <li><NavLink className='menu__link' to="/" onClick={clickExperience}>EXPERIENCE</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickEducation}>EDUCATION</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickCompanies}>COMPANIES</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickSkills}>SKILLS</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickContacts}>CONTACTS</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu