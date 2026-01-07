import './App.css'
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { useEffect } from 'react';
import { Nav } from './components/nav';
import { Accueil } from './components/accueil';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Realisations } from './components/realisations';
import { Contact } from './components/Contact';


function App() {
  
  useEffect( ()=>{
  AOS.init({duration:1000});
  }, []);

  return (
    <>
     <Nav/>
     <Accueil/>
     <About/>
     <Skills/>
     <Realisations/>
     <Contact/>
    </>
  )
}

export default App
