import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import QuotesBox from "~/components/quoteBox";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quote Generator App" },
    { name: "description", content: "Generate inspiring quotes!" },
  ];
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // Optional: persist theme in localStorage & sync with document class
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
      <Header onToggleTheme={toggleTheme} isDarkMode={isDark} />
      <main
        style={{
          padding: "40px",
          backgroundColor: isDark ? "#121212" : "#f9f9f9",
          color: isDark ? "#eeeeee" : "#222222",
          flex: 1,
        }}
      >
        <QuotesBox />
      </main>
    </div>
  );
}
