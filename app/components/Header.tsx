import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            backgroundColor: '#1e1e2f',
            color: '#f0f0f0',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.4)'
        }}>
            <h1 style={{
                fontSize: '2rem',
                margin: 0
            }}>
                ✨ Quote Generator
            </h1>
        <ThemeToggle />
        </header>
    );
}