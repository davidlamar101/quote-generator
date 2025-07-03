import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import QuotesBox from "~/components/quoteBox";
import Header from "~/components/Header";
import FavoritesList from "~/components/FavoritesList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quote Generator App" },
    { name: "description", content: "Generate inspiring quotes!" },
  ];
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [favorites, setFavorites] = useState<{ quote: string; author: string }[]>([]);

  // Remove favorite by index
  const handleRemoveFavorite = (index: number) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  // Load theme preference from local storage
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

  // Toggle dark/light mode
  function toggleTheme() {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  // Add new favorite
  const addFavorite = (quote: string, author: string) => {
    setFavorites((prev) => [...prev, { quote, author }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleTheme={toggleTheme} isDarkMode={isDark} favorites={favorites} />
      <main
        style={{
          padding: "40px",
          backgroundColor: isDark ? "#121212" : "#f9f9f9",
          color: isDark ? "#eeeeee" : "#222222",
          flex: 1,
        }}
      >
        <QuotesBox onFavorite={addFavorite} />

        {/* Favorites List Display */}
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>❤️ Favorite Quotes</h3>
          <FavoritesList favorites={favorites} onRemove={handleRemoveFavorite} />
        </div>
      </main>
    </div>
  );
}
