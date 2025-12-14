import {Server} from "socket.io";
import {Message} from "../models/Message.model.js";

export const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            credentials: true,
        }
    })

    const userSocket = new Map(); // Map to store userId to socketId mapping
    const userActivities = new Map(); // Map to store userId to activity status

    io.on("connection", (socket) => {
        socket.on("user_connected", (userId) => {
            userSocket.set(userId, socket.id);
            userActivities.set(userId, "idle");

            // Notify other users about the new connection
            io.emit("user_connected", userId);

            socket.emit("users_online", Array.from(userSocket.keys()));

            // Send current activities to the newly connected user
            io.emit("activities", Array.from(userActivities.entries()));
        })
    });
}