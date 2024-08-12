import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  if (articles.length === 0) {
    return <p>No articles found. Please try a different search.</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <h3><Link to={`/article/${index}`}>{article.title}</Link></h3>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <p>{article.description}</p>
          <p><small>{new Date(article.publishedAt).toLocaleDateString()}</small></p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;