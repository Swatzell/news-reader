import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <button onClick={handleBackToHome} className="back-to-home-button">
      Back to Home
    </button>
  );
};

export default BackToHomeButton;