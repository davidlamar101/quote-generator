import React, { createContext, useContext, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

interface FavoritesContextType {
  favorites: Quote[];
  addFavorite: (quote: string, author: string) => void;
  removeFavorite: (index: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Quote[]>([]);

  const addFavorite = (quote: string, author: string) => {
    setFavorites((prev) => [...prev, { quote, author }]);
  };

  const removeFavorite = (index: number) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
