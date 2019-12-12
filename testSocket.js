const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/testSocket.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

var myObject = {
    message: 'Hello TEST!',
    conditions : "rainy",
    temp: 104.3,
    roads: "bad"
};

io.on('connection', function (socket) {

  socket.on('test', function (fn) 
  {
    stringToSend = JSON.stringify(myObject);
    //console.log(stringToSend);
    fn(stringToSend);
  });
});