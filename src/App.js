import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <hr/>
      <About />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
