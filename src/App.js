import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navmenu from './components/Nav'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navmenu />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
