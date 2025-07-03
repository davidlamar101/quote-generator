import React from 'react';

interface FavoritesListProps {
  favorites: { quote: string; author: string }[];
  onRemove: (index: number) => void;
}

export default function FavoritesList({ favorites, onRemove }: FavoritesListProps) {
  if (!favorites || favorites.length === 0) {
    return <p style={{ textAlign: 'center' }}>No favorites yet.</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '20px' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>⭐ Favorite Quotes</h3>
      {favorites.map((fav, index) => (
        <div
          key={index}
          style={{
            background: '#333',
            color: '#eee',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '15px',
            position: 'relative'
          }}
        >
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>"{fav.quote}"</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>— {fav.author}</p>
          <button
            onClick={() => onRemove(index)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: '#e63946',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
