import { useEffect, useState } from 'react';
import './experience.css'
const Experience = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [isAddActive1, setIsAddActive1] = useState(false);
  const [isAddActive2, setIsAddActive2] = useState(false);
  const [isAddActive3, setIsAddActive3] = useState(false);

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
      console.log(window.scrollY);

      setIsAddActive1(newScrollPosition >= 600);
      setIsAddActive2(newScrollPosition >= 800);
      setIsAddActive3(newScrollPosition >= 900);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='experience'>
      <div className="container">
        <h1 className='experience__header'>Experience</h1>
        <div className="experience__works">
          {!isMobile ? <div className="experience__dates">
            <div className={`experience__date ${isAddActive1 ? 'experience__date_active' : ''}`}>
              <h3>2023 December - 2024 February</h3>
              <p>Front - End Developer</p>
            </div>
            <div className={`experience__date ${isAddActive2 ? 'experience__date_active' : ''}`}>
              <h3>2024 August - 2024 October</h3>
              <p>Front - End Developer</p>
            </div>
            <div className={`experience__date ${isAddActive3 ? 'experience__date_active' : ''}`}>
              <h3>2024 November - Now</h3>
              <p>Front - End Developer</p>
            </div>
          </div> : ''}
          <div className="experience__abouts">
            <div className={`experience__about ${isAddActive1 ? 'experience__about_active' : ''}`}>
              <p className='experience__about_header'>Smart Code {isMobile ? '(2023 December - 2024 February)' : ''}</p>
              <p className='experience__about_text'>During my internship, I had the opportunity to work collaboratively with a team on developing an online store project. This experience allowed me to demonstrate my ability to contribute effectively in a group setting, communicate ideas clearly, and tackle challenges alongside others to achieve our common goals.</p>
            </div>
            <div className={`experience__about ${isAddActive2 ? 'experience__about_active' : ''}`}>
              <p className='experience__about_header'>Full Learning {isMobile ? '(2024 August - 2024 October)' : ''}</p>
              <p className='experience__about_text'>During my internship, I worked on various projects, which allowed me to not only improve my technical skills but also learn time management, teamwork, and participate in the decision-making process. These projects were diverse in complexity and theme, giving me valuable experience in real-world development scenarios.</p>
            </div>
            <div className={`experience__about ${isAddActive3 ? 'experience__about_active' : ''}`}>
              <p className='experience__about_header'>HH TT Hamaynq {isMobile ? '(2024 November - Now)' : ''}</p>
            </div>
            {!isMobile && (
              <>
                <div className={`experience__circle experience__circle_1 ${isAddActive1 ? 'experience__circle_active1' : ''}`}></div>
                <div className={`experience__circle experience__circle_2 ${isAddActive2 ? 'experience__circle_active2' : ''}`}></div>
                <div className={`experience__circle experience__circle_3 ${isAddActive3 ? 'experience__circle_active3' : ''}`}></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience