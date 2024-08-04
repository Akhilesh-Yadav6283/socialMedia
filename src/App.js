// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={<Home />} />
        <Route path="/item/:id" Component={<PostDetail />} />  
      </Routes>
    </Router>
  );
};

export default App;
