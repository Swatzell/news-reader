import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetail from '../ArticleDetails/ArticleDetail';
import Home from '../Home/Home';



function App() {
  const [articles, setArticles] = useState([]);

  return (
    <Router>
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home setArticles={setArticles} />} />
          <Route path="/articles" element={<ArticleList articles={articles} />} />
          <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;