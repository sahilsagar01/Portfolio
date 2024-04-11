import './App.css';
import Hero from './conponents/hero/Hero';
import Navbar from './conponents/navbar/Navbar';
import Parallax from './conponents/parallax/Parallax';

function App() {
  return (
    <div className="App">
    <section className='home'>
    <Navbar />
    <Hero />
    </section>
    <section><Parallax  type="services"/></section>
    <section>services</section>
    <section><Parallax  type="portfolio"/></section>
    <section>portfolio1</section>
    <section>portfolio1</section>
    <section>portfolio1</section>
    <section>contacts</section>
    </div>
  );
}

export default App;
