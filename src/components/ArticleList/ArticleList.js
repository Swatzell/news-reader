import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h3><Link to={`/article/${index}`}>{article.title}</Link></h3>
          <img src={article.urlToImage} alt={article.title} style={{ width: '200px' }} />
          <p>{article.description}</p>
          <p><small>{new Date(article.publishedAt).toLocaleDateString()}</small></p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;