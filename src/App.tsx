import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import Miner from "./component/layout/miner";
import Logs from "./component/layout/log";
import Settings from "./component/layout/setttings";

type Page = "Miner" | "Logs" | "Settings";
interface minigData {
  token: string;
  receiverAddress: string;
  senderAddress: "0x000000000000000000000000000001";
  uniqueID: string | number;
  timestamp: string;
}
export default function App() {
  const ws = new WebSocket("ws://localhost:3000");
  const worker = new Worker(new URL("./worker.js", import.meta.url));

  const [page, setPage] = useState<Page>("Miner"); //page for navigation
  const [logs, setLogs] = useState<unknown>([]); //logs to be displayed
  const [sessionData, setSessionData] = useState<minigData>({
    //session data mined and sent to the blockchain for validation
    token: "",
    receiverAddress: "",
    senderAddress: "0x000000000000000000000000000001",
    uniqueID: "",
    timestamp: "",
  });
  const [mining, setMining] = useState(false);

  useEffect(() => {
    ws.onopen = (e) => {
      console.log("server connected");
      setLogs([...logs, "Miner initialized"]);
    };

    worker.postMessage("worker");
  }, []);

  const navigate = (e: Page): void => {
    setPage(e);
  };

  function startMiner(): void {
    if (!mining) {
      ws.send("start mining");
    } else {
      setLogs([...logs, "Miner Stoped"]);
    }
  }
  return (
    <main className="bg-gray-950 w-screen min-h-screen">
      <Header navigate={navigate} Page={page} />
      <main className="p-2">
        {page === "Miner" && (
          <Miner
            startMiner={startMiner}
            mining={mining}
            setMining={setMining}
          />
        )}
        {page === "Logs" && <Logs log={logs} />}
        {page === "Settings" && (
          <Settings minerSetting={sessionData} setMiner={setSessionData} />
        )}
      </main>
    </main>
  );
}
