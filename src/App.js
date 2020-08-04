import React ,{useState , useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from './pages/Top.js'
import Footer from './components/Footer'
import * as contentful from "contentful";
import ApiKey from "./constants/contentful";
import Blogs from './pages/Blogs';
import Article from './pages/Article'
import ReactGA from 'react-ga';


const App =()=>{
  const client = contentful.createClient(ApiKey)
  const [blog, setBlog] = useState([])
  const [members, setMembers] = useState([])
  
  //Google Analytics
  ReactGA.initialize('UA-173647357-1');
  const history = createBrowserHistory();
  history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
  });

  useEffect(() => {
    client
      .getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'blog'
      })
      .then((res) => setBlog(res.items))
    client
      .getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'members'
      })
      .then((res) => setMembers(res.items))
  },[])

  return(
    <BrowserRouter history={history}> 
      <Switch>
        <Route exact
          path="/"
          render={() => <Top data={blog} data2={members}/>}></Route>
        <Route exact
          path="/blogs"
          render={() => <Blogs data={blog}/>}></Route>
        <Route
          exact
          path="/blogs/:id"
          render={() => <Article data={blog}/>}
          />
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
