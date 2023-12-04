import app from "./app.js";
import mongoose from 'mongoose'
import { Server } from 'socket.io';

const port = process.env.PORT;

const server = app.listen(port, ()=>{
    console.log(`listing on http://localhost:${port}`);
});

const db = process.env.DB_CONN_STR || 'mongodb://localhost:27017/chatapp';
mongoose.connect(db).then(()=>{
    console.log('db connected successfully ');
});

const io = new Server(server, {
    pingTimeout: 10000,
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', (Socket)=>{
    console.log(Socket.id);
    Socket.on('send', (msg)=>{
        Socket.broadcast.emit('recive', msg);
    });
});

export { io };