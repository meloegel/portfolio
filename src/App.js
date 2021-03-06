import React from 'react';
import './styles/sass/index.scss';

import Header from './components/header'
import Projects from './components/projects'
import Footer from './components/footer'
import About from './components/about'
import Skills from './components/skills'
import Qualifications from './components/qualifications'
import Contact from './components/contact'
import ProExp from './components/proExp'

function App() {

  return (
    <div className='body'>
      <Header />
      <About />
      <ProExp />
      <Projects />
      <Skills />
      <Qualifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
