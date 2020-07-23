import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from './pages/Top.js'
import About from './pages/About.js'
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Member from './pages/Member';

const App =()=>{
  return(
    <BrowserRouter> 
      <Navbar/>
      <Switch>
        <Route exact
          path="/"
          render={() => <Top />}></Route>
        <Route exact
          path="/about"
          render={() => <About />}></Route>
        <Route exact
          path="/contact"
          render={() => <Contact />}></Route>
        <Route exact
          path="/member"
          render={() => <Member />}></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
