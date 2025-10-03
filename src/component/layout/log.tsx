export default function Logs({ log }) {
  return (
    <div className="bg-black/40 p-3 rounded h-130 overflow-auto text-xs font-mono border border-gray-800">
      {log.map((data: unknown, index: number) => (
        <div className="text-green-500" key={index}>
          [00:00] {data}
        </div>
      ))}
    </div>
  );
}
