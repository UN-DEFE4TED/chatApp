import { Socket } from "socket.io";
import { io } from "../server";

const worldChat = (req, res)=>{
    io.on('connection', (Socket)=>{
        console.log(Socket.id);
    });
};

export { worldChat }