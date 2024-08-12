import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

const Home = ({ setArticles }) => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>News Reader</h1>
        <p>Search for news stories</p>
      </header>
      <div className="main-content container">
        <SearchBar setArticles={setArticles} />
      </div>
    </div>
  );
};

export default Home;