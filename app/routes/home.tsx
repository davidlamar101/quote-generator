import type { Route } from "./+types/home";
import QuotesBox from "~/components/quoteBox";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quote Generator App" },
    { name: "description", content: "Generate inspiring quotes!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main style={{
        padding: '40px',
        backgroundColor: '#121212',
        color: '#eeeeee',
        flex: 1
      }}>
        <QuotesBox />
      </main>
    </div>
  );
}
