import React, { useState, useEffect } from 'react';
import Header from '~/components/Header';
import FavoritesList from '~/components/FavoritesList';
import { useLocation } from 'react-router-dom';

interface LocationState {
  favorites?: { quote: string; author: string }[];
}

const location = useLocation() as { state: LocationState };

export default function FavoritePage() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [favorites, setFavorites] = useState<{ quote: string; author: string }[]>([]);

  // Load favorites from navigation state if available
  useEffect(() => {
    if (location.state?.favorites) {
      setFavorites(location.state.favorites);
    }
  }, [location.state]);

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleRemoveFavorite = (index: number) => {
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onToggleTheme={toggleTheme} 
        isDarkMode={isDark} 
        favorites={favorites} 
      />
      <main
        style={{
          padding: "40px",
          backgroundColor: isDark ? "#121212" : "#f9f9f9",
          color: isDark ? "#eeeeee" : "#222222",
          flex: 1,
        }}
      >
        <FavoritesList favorites={favorites} onRemove={handleRemoveFavorite} />
      </main>
    </div>
  );
}
