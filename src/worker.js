let running = false;

self.addEventListener("message", (e) => {
  console.log(e.data);
  if (e.data.type === "mine") {
    running = true;
    console.log(running);
    mine(e.data);
  } else if (e.data.type === "stop") {
    running = false;
    console.log(running);
  }
});

async function sha256(buffer) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  return new Uint8Array(hashBuffer);
}

async function hashHex(data) {
  const buf = new TextEncoder().encode(data);
  const first = await sha256(buf);
  const second = await sha256(first.buffer);
  return Array.from(second)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function sumBytes(hexStr) {
  let sum = 0;
  for (let i = 0; i < hexStr.length; i += 2) {
    sum += parseInt(hexStr.substr(i, 2), 16);
  }
  return sum;
}

let difficulty = 3;
async function mine({ type, prevHash, receiverAddress, senderAddress, token }) {
  let nonce = Math.floor(Math.random() * 1e9);
  let bestHash = null;
  let checked = 0;
  let lastReport = performance.now();

  while (running) {
    console.log("running");
    const input = `${prevHash}:${receiverAddress}:${nonce}`;
    const hash = await hashHex(input);

    if (!bestHash || hash < bestHash) {
      bestHash = hash;
    }

    console.log("hash:"+hash);

    checked++;

    // Puzzle check
    if (
      hash.startsWith("0".repeat(difficulty)) /*&& sumBytes(hash) % 100 === 0*/
    ) {
      console.log({
        token,
        type: "found",
        senderAddress,
        receiverAddress,
        prevHash,
        nonce,
        hash,
        timeStamp: new Date().toISOString(),
      });
      self.postMessage({
        token,
        type: "found",
        senderAddress,
        receiverAddress,
        prevHash,
        nonce,
        hash,
        timeStamp: new Date().toISOString(),
      });
    }

    const now = performance.now();
    if (now - lastReport > 500) {
      lastReport = now;
      console.log({ lastReport, checked, bestHash });
      // self.postMessage({
      //   type: "progress",
      //   payload: { checked, bestHash },
      // });
    }

    nonce++;
  }
}
