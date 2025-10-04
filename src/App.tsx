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
  // uniqueID: string | number;
  timestamp: string;
}
export default function App() {
  const ws = new WebSocket("ws://localhost:3000");
  const worker = new Worker(new URL("./worker.js", import.meta.url));
  const date = new Date();

  const [page, setPage] = useState<Page>("Miner"); //page for navigation
  const [logs, setLogs] = useState<unknown>([{ time: "00.00", info: "" }]); //logs to be displayed
  const [sessionData, setSessionData] = useState<minigData>({
    //session data mined and sent to the blockchain for validation
    token: "",
    receiverAddress: "",
    senderAddress: "0x000000000000000000000000000001",
    // uniqueID: "",
    timestamp: "",
  });
  const [mining, setMining] = useState(false);

  useEffect(() => {
    ws.onopen = (e) => {
      setLogs([...logs, { time: "00.01", info: "Miner initialized" }]);
      console.log("Connection Established");
    };

    // worker.postMessage("worker");
  }, []);

  ws.onmessage = (e) => {
    let data = JSON.parse(e.data);
    switch (data?.type) {
      case "mine":
        const { receiverAddress, senderAddress, token } = sessionData;
        worker.postMessage({ ...data, receiverAddress, senderAddress, token });
        break;

      default:
        break;
    }
  };

  worker.onmessage = (e) => {
    console.log(e.data);
    ws.send(JSON.stringify(e.data));
  };

  const navigate = (e: Page): void => {
    setPage(e);
  };

  function startMiner(): void {
    if (!mining) {
      ws.send(JSON.stringify({ type: "start" }));
      setLogs([
        ...logs,
        {
          time: `${date.getMinutes() + ":" + date.getSeconds()}`,
          info: "Finding Block...",
        },
      ]);
    } else {
      worker.postMessage({ type: "stop" });
      setLogs([
        ...logs,
        {
          time: `${date.getMinutes() + ":" + date.getSeconds()}`,
          info: "Miner Stoped",
        },
      ]);
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
            sessionData={sessionData}
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
