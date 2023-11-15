// Footer.js
import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default footer;