import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetail from '../ArticleDetails/ArticleDetail';
import SearchBar from '../SearchBar/SearchBar';



function App() {
  const [articles, setArticles] = useState([]);
  
  return (
    <main className="App">
      <h1>My App</h1>
    </main>
  );
}

export default App;
