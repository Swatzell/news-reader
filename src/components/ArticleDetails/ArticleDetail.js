import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css';
import BackToResultsButton from '../BackToResultsButton/BackToResultsButton';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
        <BackToResultsButton />
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} style={{ width: '400px' }} />
      <p>{article.content}</p>
      <p><strong>Source:</strong> {article.source.name}</p>
      <p><small>{new Date(article.publishedAt).toLocaleDateString()}</small></p>
    </div>
  );
}

export default ArticleDetail;