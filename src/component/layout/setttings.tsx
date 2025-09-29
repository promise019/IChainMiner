export default function Settings() {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Wallet Address
        </label>
        <input
          type="text"
          placeholder="0x..."
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Mining Intensity
        </label>
        <select className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Algorithmic (Auto)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Consensus Algorithm
        </label>
        <select className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500">
          <option>Proof of Work</option>
          <option>Proof of Stake</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Token
        </label>
        <select className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500">
          <option>ETH</option>
          <option>BTC</option>
          <option>Custom</option>
        </select>
      </div>
    </div>
  );
}
