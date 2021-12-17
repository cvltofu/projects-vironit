import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const __dirname = path.resolve();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index.html');
});

app.use(express.static(__dirname + '\\assets'));

io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
        io.emit('chat message', {
            message: data.message,
            name: data.name,
        });
    });
});

server.listen(3000, () => {
    console.log('Server started');
});
