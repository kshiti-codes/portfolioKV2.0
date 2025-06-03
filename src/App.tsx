import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </Layout>
  );
}

export default App;