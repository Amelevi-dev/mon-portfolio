
import './App.css'
import { About } from './components/about'
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { useEffect } from 'react';
import { Accueil } from './components/accueil'
import { Contact } from './components/Contact'
import { Nav } from './components/nav'
import { Realisations } from './components/realisations'
import { Skills } from './components/skills'

function App() {

  useEffect( ()=>{
  AOS.init({duration:1000});
  }, []);
  return (
    <>
      <Nav/>
      <Accueil/> <br />
      <About/>
      <Skills/>
      <Realisations/>
      <Contact/>
    </>
  )
}

export default App
