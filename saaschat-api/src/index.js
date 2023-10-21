import { config } from "dotenv";
config();

import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";
import { fastifyCors } from "@fastify/cors";
import { onopen } from "./websocket/onopen.js";
import { onclose } from "./websocket/onclose.js";
import { onmessage } from "./websocket/onmessage.js";
import apiRouter from "./router/index.js";

const app = fastify({ logger: false });

app.register(apiRouter);
app.register(fastifyCors);
app.register(fastifyWebsocket);
app.register(async function (fastify) {
  fastify.get("/ws", { websocket: true }, (connection, req) => {
    connection.socket.onopen = (event) => onopen(event);
    connection.socket.onclose = (event) => onclose(event);
    connection.socket.onmessage = (event) => onmessage(connection, event);
  });
});

// port 10000 for render.com
// port 4003 for localhost
app.ready().then(() =>
  app.listen({ host: process.env.HOST, port: process.env.PORT }, (err) => {
    if (err) return;
    console.log(`⚡️Fastify is running on`, process.env.PORT);
  })
);
