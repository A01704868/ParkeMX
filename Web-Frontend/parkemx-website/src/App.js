import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end="true">Here goes the logo</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export const Home = () => {
  return (
    <div className="hero-park">
      <img src={require('./assets/header-placeholder.jpeg')}/>
      <h1 className="h1"> NOMBRE DEL PARQUE</h1>
    </div>
    <div>
    </div>
  );
}

export const ParqueVista = () => {
  return <div>You are in Parque View</div>
}

export default App;
