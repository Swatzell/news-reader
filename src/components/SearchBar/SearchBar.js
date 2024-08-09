import React, { useState } from 'react';

function SearchBar({ setArticles }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=127a2543bc344198843e0f95b894ad67`);
    const data = await response.json();
    setArticles(data.articles);
  };
  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for news..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;