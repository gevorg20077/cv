import { useEffect, useState } from 'react'
import './skills.css'
const Skills = () => {
  const [isSkillActive1, setIsSkillActive1] = useState(false)
  const [isSkillActive2, setIsSkillActive2] = useState(false)
  const [isSkillActive3, setIsSkillActive3] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;

      setIsSkillActive1(newScrollPosition >= 2100);
      setIsSkillActive2(newScrollPosition >= 2200);
      setIsSkillActive3(newScrollPosition >= 2300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="skills">
      <h1 className="skills__header">Skills</h1>
      <div className="skills__items">
        <div className="skills__background">
          <div className="skills__background_filter"></div>
        </div>
        <div className="skills__items_container">
          <div className={`skills__item ${isSkillActive1 ? 'skills__item_active' : ''}`}>
            <p>HTML - Advanced</p>
          </div>
          <div className={`skills__item ${isSkillActive1 ? 'skills__item_active' : ''}`}>
            <p>CSS - Advanced</p>
          </div>
          <div className={`skills__item ${isSkillActive2 ? 'skills__item_active' : ''}`}>
            <p>JavaScript - Intermediate</p>
          </div>
          <div className={`skills__item ${isSkillActive2 ? 'skills__item_active' : ''}`}>
            <p>React.js - Intermediate</p>
          </div>
          <div className={`skills__item ${isSkillActive3 ? 'skills__item_active' : ''}`}>
            <p>Russian - Fluent</p>
          </div>
          <div className={`skills__item ${isSkillActive3 ? 'skills__item_active' : ''}`}>
            <p>English - Pre-intermediate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills