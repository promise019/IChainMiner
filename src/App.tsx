import { useState } from "react";
import "./App.css";
import Header from "./component/layout/Header";
export default function App() {
  type Page = "Miner" | "Logs" | "Settings";
  const [page, setPage] = useState<Page>("Miner");
  const navigate = (e: Page) => {
    setPage(e);
  };
  return (
    <main>
      <Header navigate={navigate} />
      <h1>{page}</h1>
    </main>
  );
}
