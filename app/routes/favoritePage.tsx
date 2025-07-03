import { useLocation } from 'react-router-dom';
import FavoritesList from '~/components/FavoritesList';

export default function FavoritePage() {
  const location = useLocation();
  const favorites = location.state?.favorites || [];

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>My Favorite Quotes</h2>
      <FavoritesList favorites={favorites} onRemove={() => {}} />
    </div>
  );
}
