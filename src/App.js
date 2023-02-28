import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from './components/Menu/Menu';
import Home from './pages/HomePage/HomePage';
import About from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/ContactPage';
import Jokes from './pages/JokesPage/JokesPage';
import Register from './pages/RegisterPage/RegisterPage';
import Footer from './components/Menu/Footer/Footer';



export default function App(){
  return (
    <Router>
      <Menu/>
      <Routes>
         <Route path='/Home' element={<Home/>}/>
         <Route exact path='/About' element={<About/>}/>
         <Route exact path='/Contact' element={<Contact/>}/>
         <Route exact path='/Jokes' element={<Jokes/>}/>
         <Route exact path='/Register' element={<Register/>}/>
      </Routes>
     <Footer/>
    </Router>
  )
}