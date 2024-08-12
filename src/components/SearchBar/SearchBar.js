import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ setArticles }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=127a2543bc344198843e0f95b894ad67`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setArticles(data.articles);

      navigate('/articles');
    } catch (error) {
      console.error('Error fetching the articles:', error);
      alert('There was an error fetching the articles. Please try again.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyDown={handleKeyDown}
        placeholder="Search for news..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;