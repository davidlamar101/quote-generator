// quoteBoxStyles.ts
export const containerStyle = {
  maxWidth: '600px',
  margin: '50px auto',
  padding: '40px 30px',
  background: 'linear-gradient(135deg, rgba(30,30,60,0.85), rgba(50,50,80,0.85))',
  color: '#f0f0f0',
  borderRadius: '20px',
  textAlign: 'center' as const,
  boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
  border: '2px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  transition: 'all 0.3s ease-in-out',
};

export const titleStyle = {
  fontSize: '2.2rem',
  marginBottom: '25px',
  textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
};

export const quoteStyle = {
  fontSize: '1.8rem',
  fontStyle: 'italic',
  lineHeight: 1.8,
  marginBottom: '10px',
  animation: 'fadeIn 0.5s ease',
  textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
};

export const authorStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  opacity: 0.8,
};

export const buttonBaseStyle = {
  border: 'none',
  borderRadius: '10px',
  padding: '14px 28px',
  fontSize: '1rem',
  boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
  transition: 'all 0.3s ease',
  marginTop: '30px',
  color: '#fff',
};


export const buttonStyle = {
  backgroundColor: '#4a90e2',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  padding: '14px 28px',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
  transition: 'all 0.3s ease',
  marginTop: '30px',
};
