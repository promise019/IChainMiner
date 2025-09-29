import { CpuIcon } from "lucide-react";
import Button from "../ui/button";

export default function Header({ navigate }) {
  const style = "";
  return (
    <header className="w-screen h-fit p-2 flex justify-between">
      <section className="flex">
        <div className="relative">
          <span>ICR</span>
          <CpuIcon />
        </div>
        <h1>IChainRig</h1>
      </section>
      <nav className="grid grid-cols-3 gap-1">
        <Button className={style} onClick={() => navigate("Miner")}>
          Miner
        </Button>
        <Button className={style} onClick={() => navigate("Settings")}>
          Settings
        </Button>
        <Button className={style} onClick={() => navigate("Logs")}>
          Logs
        </Button>
      </nav>
    </header>
  );
}
