import { useState } from 'react';

const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Life is what happens when you’re busy making other plans.",
  "Do not watch the clock. Do what it does. Keep going.",
  "The purpose of our lives is to be happy.",
  "Believe you can and you're halfway there."
];

export default function QuoteBox() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '40px 30px',
      background: 'linear-gradient(135deg, rgba(30,30,60,0.85), rgba(50,50,80,0.85))',
      color: '#f0f0f0',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
      border: '2px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'all 0.3s ease-in-out',
    }}>
      <h2 style={{
        fontSize: '2.2rem',
        marginBottom: '25px',
        textShadow: '1px 1px 5px rgba(0,0,0,0.5)'
      }}>
        ✨ Inspiration ✨
      </h2>

      <p style={{
        fontSize: '1.8rem',
        fontStyle: 'italic',
        lineHeight: 1.8,
        marginBottom: '30px',
        animation: 'fadeIn 0.5s ease',
        textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
      }}>
        "{quote}"
      </p>

      <button
        onClick={getNewQuote}
        style={{
          backgroundColor: '#4a90e2',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          padding: '14px 28px',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#357ABD';
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#4a90e2';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.5)';
        }}
      >
        New Quote
      </button>
    </div>
  );
}
