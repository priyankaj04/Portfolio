import { React, Fragment } from 'react';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Fragment>
    <BrowserRouter>
        <div className='Background'>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
