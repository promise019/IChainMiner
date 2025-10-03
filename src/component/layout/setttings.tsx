// import { useEffect } from "react";

export default function Settings({ minerSetting, setMiner }) {
  // useEffect(() => {
  //   console.log(minerSetting.token);
  // }, [minerSetting]);

  return (
    <div className="space-y-5 text-white lg:grid lg:grid-cols-2 gap-3 p-4">
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Wallet Address
        </label>
        <input
          type="text"
          placeholder="0x..."
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
          value={minerSetting.receiverAddress}
          onChange={(e) =>
            setMiner({ ...minerSetting, receiverAddress: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Mining Intensity
        </label>
        <select className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500">
          {/* <option>Low</option>
          <option>Medium</option>
          <option>High</option> */}
          <option>Algorithmic (Auto)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Consensus Algorithm
        </label>
        <section className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500">
          <h1>Proof of Work</h1>
        </section>
      </div>
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide">
          Token
        </label>
        <select
          value={minerSetting.token}
          onChange={(e) => setMiner({ ...minerSetting, token: e.target.value })}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-green-500"
        >
          <option value="">select token</option>
          <option value="ICN">ICN</option>
          {/* {/* <option>BTC</option> */}
        </select>
      </div>
    </div>
  );
}
