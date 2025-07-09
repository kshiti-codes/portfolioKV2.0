import React from 'react';
import Layout from '../layout/Layout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import LiveTools from '../sections/LiveTools';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <LiveTools />
      {/* <Services /> */}
      <Skills />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default HomePage;