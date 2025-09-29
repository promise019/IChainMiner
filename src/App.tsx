import { useState } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import Miner from "./component/layout/miner";
import Logs from "./component/layout/log";
import Settings from "./component/layout/setttings";
export default function App() {
  type Page = "Miner" | "Logs" | "Settings";
  const [page, setPage] = useState<Page>("Miner");
  const navigate = (e: Page) => {
    setPage(e);
  };
  return (
    <main className="bg-gray-950 w-screen min-h-screen">
      <Header navigate={navigate} Page={page} />
      <main className="p-2">
        {page === "Miner" && <Miner />}
        {page === "Logs" && <Logs />}
        {page === "Settings" && <Settings />}
      </main>
    </main>
  );
}
