const express = require('express'); // Express contains some boilerplate to for routing and such
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http); // Here's where we include socket.io as a node module

let port = process.env.port || 3000;
http.listen(port, (error) => {
    if (error) return console.error(`Error: ${error}`);
    console.dir(`Server is listening on port ${port}`)
})

let url = "/";
app.get(url, function (request, response) {
    response.sendFile(__dirname + '/agario.html');
});
app.use(express.static(__dirname + '/public'));



let players = [];

io.on('connection', function(socket){
    console.log("New client has connected with id:",socket.id);

    socket.on('new-player-position', player_data => {         // Слушаем событие new-player в этом клиенте
        //console.log("New player has state: \n",player_data);
            player_data['id'] = socket.id;

            socket.broadcast.emit('create-new-player',player_data);
    });

})
