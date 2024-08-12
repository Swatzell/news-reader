import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToResultsButton = () => {
  const navigate = useNavigate();

  const handleBackToResults = () => {
    navigate('/articles');
  };

  return (
    <button onClick={handleBackToResults} className="back-to-results-button">
      Back to Results
    </button>
  );
};

export default BackToResultsButton;