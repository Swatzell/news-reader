import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetail from '../ArticleDetails/ArticleDetail';
import SearchBar from '../SearchBar/SearchBar';



function App() {
  const [articles, setArticles] = useState([]);
  
  return (
    <Router>
    <div>
      <SearchBar setArticles={setArticles} />
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
        <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
