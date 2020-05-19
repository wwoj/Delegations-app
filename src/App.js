import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Home from './Views/home'
import Game from './Views/miniGame'
import About from './Views/aboutMe'
import Calculate from './Views/calculate'
import Cash from './Views/cashValue'
import Footer from './Components/footer'


import {BrowserRouter,HashRouter, Route} from 'react-router-dom'
function App() {
  return (


        <HashRouter>
          <Header/>
 
        <Route path exact="/" component={Home} />
        <Route path ="/calculate" component={Calculate} />
        <Route path ="/info" component={Cash} />
        <Route path ="/aboutMe" component={About} />
        <Route path ="/miniGame" component={Game} />
   
        {/* <Footer/> */}
        </HashRouter>

    


  );
}

export default App;
