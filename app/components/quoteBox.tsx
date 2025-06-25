import {useState} from 'react';

const quotes = [
    "The journey of a thousand miles begins with one step.",
    "Life is what happens when you're busy making other plans.",
    "Do not watch the clock. Do what it does. Keep going.",
    "The purpose of our lives is to be happy.",
    "Believe you can and you're halfway there."
];

export default function QuotesBox() {
    const [quote, setQuote] = useState<string>(quotes[0]);

    const getNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ maxWidth: 600, margin: 'auto', padding: 20, backgroundColor: '#222', color: '#eee', borderRadius: 8, textAlign: 'center'}}>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>{quote}</p>

            <button onClick={getNewQuote} style={{marginTop: 20, padding: '10px 20px', fontSize: '1rem', cursor: 'pointer'}}>
                New Quote
            </button>
        </div>
    )
}