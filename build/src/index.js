"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = require("./routes/index.routes");
const socket_io_1 = __importDefault(require("socket.io"));
const app = express_1.default();
app.set('port', 3025);
app.use(express_1.default.json());
app.use('/', index_routes_1.indexRoutes.router);
const server = app.listen(app.get('port'), () => {
    console.log(`servidor levantado en http://localhost:${app.get('port')}`);
});
let io = new socket_io_1.default.Server(server);
io.on("connection", (socket) => {
    console.log('User created');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
        socket.emit('message', msg);
    });
});
