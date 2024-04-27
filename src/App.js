import './App.css';
import Hero from './conponents/hero/Hero';
import Navbar from './conponents/navbar/Navbar';
import Parallax from './conponents/parallax/Parallax';
import Skills from "./conponents/skills/Skills"
import Portfolio from "./conponents/portfolio/Portfolio"
import Contacts from './conponents/contacts/Contacts';
import Cursor from './conponents/cursor/Cursor';

function App() {
  return (
    <div className="App">
     {/* <Cursor /> */}
    <section className='home'>
    <Navbar />
    <Hero />
    </section>
    <section className='section services'><Parallax type="services"/></section>
    <Portfolio />
    <section className='section portfolio'><Parallax type="portfolio"/></section>
    <section className='skillsSection'><Skills /></section>
    <section className='contactSection'><Contacts /></section>
   
    </div>
  );
}

export default App;
