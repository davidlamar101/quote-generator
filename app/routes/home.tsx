import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import QuotesBox from "~/components/quoteBox";
import Header from "~/components/Header";
import FavoritesList from "~/components/FavoritesList";
import MuiAlert from '@mui/material/Alert';
import type { AlertProps } from '@mui/material/Alert';
import { Snackbar } from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quote Generator App" },
    { name: "description", content: "Generate inspiring quotes!" },
  ];
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
};

interface HeaderProps {
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
  onSearch?: (query: string) => void;
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [favorites, setFavorites] = useState<{ quote: string; author: string }[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRemoveFavorite = (index: number) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  const addFavorite = (quote: string, author: string) => {
    setFavorites((prev) => [...prev, { quote, author }]);
    setSnackbarMessage("Quote added to favorites!");
    setSnackbarOpen(true);
};

  const handleSearch = (query: string) => {
    setSearchTerm(query);
};

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onToggleTheme={toggleTheme} 
        isDarkMode={isDark} 
        />
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
          <FavoritesList 
            favorites={favorites} 
            onRemove={handleRemoveFavorite} />
        </div>
      </main>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
