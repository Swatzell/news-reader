import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetail from '../ArticleDetails/ArticleDetail';
import Home from '../Home/Home';
import BackToHomeButton from '../BackHomeButton/BackHomeButton';



function App() {
  const [articles, setArticles] = useState([]);
  
  const RenderWithBackButton = ({ children }) => {
    const location = useLocation();

    return (
      <>
        {location.pathname !== '/' && <BackToHomeButton />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home setArticles={setArticles} />} />
          <Route 
            path="/articles" 
            element={
              <RenderWithBackButton>
                <ArticleList articles={articles} />
              </RenderWithBackButton>
            } 
          />
          <Route 
            path="/article/:id" 
            element={
              <RenderWithBackButton>
                <ArticleDetail articles={articles} />
              </RenderWithBackButton>
            } 
          />
        </Routes>
      </main>
    </Router>
  );
}
export default App;