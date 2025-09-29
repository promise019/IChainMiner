import { CpuIcon } from "lucide-react";
import Button from "../ui/button";

export default function Header({ navigate, Page }) {
  const style = "bg-green-500 text-white font-bold rounded-lg p-1 w-fit";
  return (
    <header className="w-screen h-fit px-2 py-4 flex justify-between bg-gray-900 shadow text-gray-300">
      <section className="flex space-x-1">
        <div className="relative flex">
          <span className="absolute font-extrabold text-xl top-1.5 left-1">ICR</span>
          <CpuIcon className={`w-10 h-10 text-green-700 font-extrabold`} />
        </div>
        <h1 className="font-bold text-xl text-gray-300 mt-1.5">IChainRig</h1>
      </section>
      <nav className="flex gap-2">
        <Button
          className={`${style} ${Page === "Miner" ? "bg-green-700" : ""}`}
          onClick={() => navigate("Miner")}
        >
          Miner
        </Button>
        <Button
          className={`${style} ${Page === "Settings" ? "bg-green-700" : ""}`}
          onClick={() => navigate("Settings")}
        >
          Settings
        </Button>
        <Button
          className={`${style} ${Page === "Logs" ? "bg-green-700" : ""}`}
          onClick={() => navigate("Logs")}
        >
          Logs
        </Button>
      </nav>
    </header>
  );
}
