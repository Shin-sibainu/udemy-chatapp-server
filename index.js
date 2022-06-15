const { Socket } = require("dgram");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const PORT = 5000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("サーバー");
});

httpServer.listen(PORT, () => {
  console.log(`server running on ${PORT}`);

  //socket({io})
});
