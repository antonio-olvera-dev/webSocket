import express from "express"
import  {indexRoutes}  from "./routes/index.routes";
import socketio from "socket.io"

const app = express();
app.set('port', 3025);

app.use(express.json());
app.use('/', indexRoutes.router);

const server = app.listen(app.get('port'), () => {

    console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});



let io = new socketio.Server(server);

io.on("connection", (socket: any) => {

    console.log('User created');
    socket.on('message', (msg: any) => {
        
        socket.broadcast.emit('message', msg); 
        socket.emit('message', msg);
    });

});

