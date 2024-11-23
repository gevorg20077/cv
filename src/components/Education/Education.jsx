import { useEffect, useState } from 'react';
import './education.css'
const Education = () => {
  const [isAddActive1, setIsAddActive1] = useState(false);
  const [isAddActive2, setIsAddActive2] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;

      setIsAddActive1(newScrollPosition >= 1200);
      setIsAddActive2(newScrollPosition >= 1300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='education'>
      <div className="container">
        <h1 className='education__header'>Education</h1>
        <div className="education__works">
          {!isMobile ? <div className="education__dates">
            <div className={`education__date ${isAddActive1 ? 'education__date_active' : ''}`}>
              <h3>2022 September - 2025 May</h3>
            </div>
            <div className={`education__date ${isAddActive2 ? 'education__date_active' : ''}`}>
              <h3>2023 April - 2024 November</h3>
            </div>
          </div> : ''}
          <div className="education__abouts">
            <div className={`education__about ${isAddActive1 ? 'education__about_active' : ''}`}>
              <p className='education__about_header'>Polytech high school {isMobile ? '(2022 September - 2025 May)' : ''}</p>
              <p className='education__about_text'> I am currently studying at Politech High School in the economics department. This year, I plan to apply to the Armenian State University in the Faculty of Informatics and Applied Mathematics. Now, I am actively preparing for my English and math exams.</p>
            </div>
            <div className={`education__about ${isAddActive2 ? 'education__about_active' : ''}`}>
              <p className='education__about_header'>Smart Code {isMobile ? '(2023 April - 2024 November)' : ''}</p>
              <p className='education__about_text'>I completed an 8-month training program at SmartCode. Where we learned HTML, CSS, JavaScript, react.js, redux.</p>
            </div>
            {!isMobile && (
              <>
                <div className={`experience__circle education__circle_1 ${isAddActive1 ? 'education__circle_active1' : ''}`}></div>
                <div className={`experience__circle education__circle_2 ${isAddActive2 ? 'education__circle_active2' : ''}`}></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education