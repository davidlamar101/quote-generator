import { useState, useEffect } from 'react';
import { fetchQuote } from './quoteApi';
import { containerStyle, titleStyle, quoteStyle, authorStyle, buttonBaseStyle,} from './quoteBoxStyles';
import { motion, AnimatePresence } from 'framer-motion';

export interface QuoteBoxProps {
  onFavorite?: (quote: string, author: string) => void;
}

export default function QuoteBox({ onFavorite }: { onFavorite: (quote: string, author: string) => void }) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getNewQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchQuote();
      setQuote(data?.quote || '');
      setAuthor(data?.author || '');
    } catch {
      setError('Could not fetch a new quote.');
      setQuote('');
      setAuthor('');
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = () => {
    onFavorite(quote, author);
  }

  useEffect(() => {
    getNewQuote();
  }, []);

  const buttonStyle = {
    ...buttonBaseStyle,
    backgroundColor: loading ? '#4a90e2' : '#4a90e2',
    cursor: loading ? 'not-allowed' : 'pointer',
    opacity: loading ? 0.7 : 1,
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      e.currentTarget.style.backgroundColor = '#357ABD';
      e.currentTarget.style.transform = 'scale(1.08)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)';
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      e.currentTarget.style.backgroundColor = '#4a90e2';
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.5)';
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>✨ Inspiration ✨</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: '#f87171' }}>{error}</p>
      ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={quote}  // key triggers animation on content change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
          >        
            <p style={quoteStyle}>"{quote}"</p>
            <p style={authorStyle}>— {author}</p>
        </motion.div>
        </AnimatePresence>
      )}

      <button
        onClick={getNewQuote}
        style={{ ...buttonStyle }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        New Quote
      </button>
            {!loading && !error && (
        <button
          onClick={handleFavorite}
          style={{ ...buttonStyle, marginLeft: '10px', backgroundColor: '#e29a4a' }}  
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          ❤️ Favorite
        </button>
      )}
    </div>
  );
}
