import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mainpage from './component/mainpage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />}/>
      </Routes>

    </div>
  );
}

export default App;
