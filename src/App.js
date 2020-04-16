import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navmenu from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navmenu />
        <div className="area">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
