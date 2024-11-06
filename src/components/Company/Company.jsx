import { useEffect, useState } from 'react'
import './company.css'
import logo1 from '../../Images/Smart-Code.png'
import logo2 from '../../Images/c7bfcc2a-d37c-4f66-8d38-ac627a848ebe-small.png'
import logo3 from '../../Images/268274704_112787021249917_4858696226403130286_n.png'
const Company = () => {
  const [isLogosActive, setIsLogosActive] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;

      setIsLogosActive(newScrollPosition >= 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  
  return (
    <div className='company'>
      <h1 className='company__header'>Companies</h1>
      <div className="company__logos">
        <img src={logo1} alt="" className={`company__logo ${isLogosActive ? 'company__logo_active' : ''}`} />
        <img src={logo2} alt="" className={`company__logo ${isLogosActive ? 'company__logo_active' : ''}`} />
        <img src={logo3} alt="" className={`company__logo ${isLogosActive ? 'company__logo_active' : ''}`} />
      </div>
    </div>
  )
}

export default Company