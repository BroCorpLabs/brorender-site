import io from "socket.io-client";
let socket;
export const initiateSocket = (jobId) => {
  socket = io("http://brorender.site:8083");
  console.log(`Connecting socket...`);
  if (socket && jobId) socket.emit("join", jobId);
};
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};
export const subscribeToJob = (cb) => {
  if (!socket) return true;
  socket.on("job", (msg) => {
    return cb(null, msg);
  });
};
