import React ,{useState , useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from './pages/Top.js'
import About from './pages/About.js'
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Members from './pages/Members';
import * as contentful from "contentful";
import ApiKey from "./constants/contentful";

const App =()=>{
  const client = contentful.createClient(ApiKey)
  const [blog, setBlog] = useState([])
  useEffect(() => {
    client
      .getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'blog'
      })
      .then((res) => setBlog(res.items))
  },[])
  return(
    <BrowserRouter> 
      <Navbar/>
      <Switch>
        <Route exact
          path="/"
          render={() => <Top data={blog}/>}></Route>
        <Route exact
          path="/about"
          render={() => <About />}></Route>
        <Route exact
          path="/contact"
          render={() => <Contact />}></Route>
        <Route exact
          path="/members"
          render={() => <Members />}></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
