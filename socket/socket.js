var callApi = require("./../libraries/api");
var logData = require("./../libraries/log");
const consant = require("./../libraries/constants");
module.exports = (io) => {
  io.on("connection", (socket) => {
      console.log("connected")
    // when the user disconnects.. perform this
    socket.on("disconnect", () => {
        console.log("disconnect")
    });
  });
};
