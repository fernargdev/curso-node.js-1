const net = require("node:net"); // NET

function finAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const port = server.address().port;
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        finAvailablePort(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { finAvailablePort };
