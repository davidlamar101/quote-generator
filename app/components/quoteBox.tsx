import { useState } from 'react';

const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Life is what happens when you’re busy making other plans.",
  "Do not watch the clock. Do what it does. Keep going.",
  "The purpose of our lives is to be happy.",
  "Believe you can and you're halfway there."
];

export default function QuoteBox() {
  const [quote, setQuote] = useState<string>(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gray-800 text-gray-100 rounded-2xl shadow-2xl text-center space-y-6">
      <h2 className="text-3xl font-bold">Inspiration</h2>
      <p className="text-xl italic leading-relaxed">"{quote}"</p>
      <button
        onClick={getNewQuote}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
      >
        New Quote
      </button>
    </div>
  );
}
