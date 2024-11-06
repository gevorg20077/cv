import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Company from './components/Company/Company';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Information from './components/Information/Information';
import Menu from './components/Menu/Menu';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Menu />
      <Information />
      <AboutMe />
      <Experience />
      <Education />
      <Company />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
