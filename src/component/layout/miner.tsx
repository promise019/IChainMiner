export default function Miner({ startMiner, mining, setMining }) {
  return (
    <section className="pt-20">
      <div className="flex flex-col items-center justify-center h-72 space-y-4">
        <div className="text-6xl animate-bounce">⛏️</div>
        <div className="text-lg font-medium tracking-wide text-gray-200">
          Mining Simulation Running
        </div>
        <div className="mt-2 text-gray-400">Hashrate: 0.00 H/s</div>
        <div className="text-gray-400">Accepted Shares: 0</div>
        <div className="text-gray-400">Rejected Shares: 0</div>
        <button
          className="mt-6 px-5 py-2 bg-green-700 hover:bg-green-600 rounded font-medium tracking-wide shadow-lg"
          onClick={() => (setMining(!mining), startMiner())}
        >
          {mining ? "Stop" : "Start"}
        </button>
      </div>
    </section>
  );
}
