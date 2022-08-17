import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Friends from './components/Friends';
import Search from './components/Search';
import Card from './components/Card';


function App() {
  return (

    <Router>
  <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/search" element={<Search />} />
      <Route path="/card/:user" element={<Card />} />

    </Routes>
  </div>
</Router>

  );
}

export default App;
