import { io } from "socket.io-client";

const URL = process.env.LINGO_IP as string;

const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
