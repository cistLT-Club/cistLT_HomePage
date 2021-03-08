import React ,{useState , useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from './pages/Top.js'
import Calendar from './pages/Calendar.js'
import Footer from './components/Footer'
import * as contentful from "contentful";
import ApiKey from "./constants/contentful";
import Blogs from './pages/Blogs';
import Article from './pages/Article'
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';


const App =()=>{
  const client = contentful.createClient(ApiKey)
  const [blog, setBlog] = useState([])
  const [members, setMembers] = useState([])
  const [profile, setProfile] = useState([])
  
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
    client
      .getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'individual'
      })
      .then((res) => setProfile(res.items))
  },[])

  return(
    <BrowserRouter history={history}> 
      <Switch>
        <Route exact
          path="/"
          render={() => <Top data={blog} data2={profile}/>}></Route>
        <Route exact
          path="/blogs"
          render={() => <Blogs data={blog}/>}></Route>
        <Route
          exact
          path="/blogs/:id"
          render={() => <Article data={blog}/>}
          />
        <Route
          exact
          path="/profile/:id"
          render={() => <Profile data={profile}/>}
          />
        <Route
          exact
          path="/calendar"
          render={() => <Calendar />}
          />
        <Route exact
          path="*"
          render={() => <NotFound />}>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
