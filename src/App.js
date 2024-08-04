import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
