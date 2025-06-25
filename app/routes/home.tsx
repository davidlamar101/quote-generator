import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import QuotesBox from "~/components/quoteBox";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <>
  <Welcome />
  <main style={{ padding: 40, backgroundColor: '#111', minHeight: '100hv', color: '#eee'}}>
    <h1 style={{ textAlign: 'center'}}>Quote Generator</h1>
    <QuotesBox />
  </main>
  </>
  );
}
