import './App.css';
import Hero from './conponents/hero/Hero';
import Navbar from './conponents/navbar/Navbar';
import Parallax from './conponents/parallax/Parallax';
import Skills from "./conponents/skills/Skills"

function App() {
  return (
    <div className="App">
    <section className='home'>
    <Navbar />
    <Hero />
    </section>
    <section className='section services'><Parallax type="services"/></section>
    <section className='skillsSection'><Skills /></section>
    <section className='section portfolio'><Parallax type="portfolio"/></section>
    <section className='section'>portfolio1</section>
    <section className='section'>portfolio1</section>
    <section className='section'>portfolio1</section>
    <section className='section'>contacts</section>
    </div>
  );
}

export default App;
