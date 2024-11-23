import { NavLink } from 'react-router-dom'
import './menu.css'
import { useEffect, useState } from 'react';
import IconMenu from '../IconMenu/IconMenu';
const Menu = () => {
  const [isMenu, setIsMenu] = useState(window.innerWidth < 750);
  console.log(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setIsMenu(window.innerWidth < 750);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMenu]);
  const clickExperience = () => {
    window.scrollTo({
      top: isMenu ? 873 : 1069,
      behavior: 'smooth'
    });
  }
  const clickEducation = () => {
    window.scrollTo({
      top: isMenu ? 1574 : 1660,
      behavior: 'smooth'
    });
  }
  const clickCompanies = () => {
    window.scrollTo({
      top: isMenu ? 2066 : 2085,
      behavior: 'smooth'
    });
  }
  const clickSkills = () => {
    window.scrollTo({
      top: isMenu ? 2300 : 2380,
      behavior: 'smooth'
    });
  }
  const clickContacts = () => {
    window.scrollTo({
      top: isMenu ? 3270 : 2985,
      behavior: 'smooth'
    });
  }

  const clickMiniMenu = () => {
    // Проверка, существует ли уже меню
    if (document.querySelector('.menu__new_active')) {
      return; // Если меню уже существует, выходим из функции
    }
  
    const newBackground = document.createElement('div');
    const newMenu = document.createElement('ul');
    const menuLinks = document.querySelector('.menu');
  
    newMenu.classList.add('menu__new_active');
    newBackground.classList.add('new_background');
  
    const createMenuItem = (text, onClickHandler) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'menu__link_new';
      link.textContent = text;
      link.addEventListener('click', onClickHandler);
      li.appendChild(link);
      return li;
    };
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('close_button');
    closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg>`;
  
    // Добавляем обработчик для закрытия меню
    closeButton.addEventListener('click', () => {
      newMenu.remove();
      newBackground.remove();
      document.body.style.overflow = 'auto';
    });
  
    newMenu.appendChild(closeButton);
    newMenu.appendChild(createMenuItem('EXPERIENCE', clickExperience));
    newMenu.appendChild(createMenuItem('EDUCATION', clickEducation));
    newMenu.appendChild(createMenuItem('COMPANIES', clickCompanies));
    newMenu.appendChild(createMenuItem('SKILLS', clickSkills));
    newMenu.appendChild(createMenuItem('CONTACTS', clickContacts));
  
    menuLinks.append(newMenu);
    menuLinks.append(newBackground);
    // document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
  };
  


  return (
    <div className='menu'>
      <h1 className='menu__name'>Gevorg Machkalyan</h1>
      {!isMenu ? <ul className='menu__links'>
        <li><NavLink className='menu__link' to="/" onClick={clickExperience}>EXPERIENCE</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickEducation}>EDUCATION</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickCompanies}>COMPANIES</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickSkills}>SKILLS</NavLink></li>
        <li><NavLink className='menu__link' to="/" onClick={clickContacts}>CONTACTS</NavLink></li>
      </ul> : <button onClick={clickMiniMenu} className='menu__mini'><IconMenu /></button>}
    </div>
  )
}

export default Menu