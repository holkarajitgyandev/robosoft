import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/About/About';
import Work from './components/work/Work';
import Services from './components/services/Services';
import Expertise from './components/expertise/Expertise';

import TestCarousel from './components/gallery/Gallery';
import Contact from './components/contact/Contact';

import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      
       <Header/>
       <Navbar/>
      
      <main className='content'>
      <Routes>
        
      
       <Route path='/' element={<Home/>}/>
       <Route path='/work' element={<Work/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/carousel' element={<TestCarousel/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/expertise' element={<Expertise/>}/>
       <Route path='/contact' element={<Contact/>}/>
       
       
       </Routes>
       </main>
       
       <Footer/>


      
    </div>
    </BrowserRouter>
  );
}

export default App;
