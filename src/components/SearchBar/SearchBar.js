import React, { useState } from 'react';

function SearchBar({ setArticles }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=127a2543bc344198843e0f95b894ad67`);
    const data = await response.json();
    setArticles(data.articles);
  };
}