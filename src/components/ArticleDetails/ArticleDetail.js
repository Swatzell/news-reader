import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} style={{ width: '400px' }} />
      <p>{article.content}</p>
      <p><strong>Source:</strong> {article.source.name}</p>
      <p><small>{new Date(article.publishedAt).toLocaleDateString()}</small></p>
    </div>
  );
}

export default ArticleDetail;