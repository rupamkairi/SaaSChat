import { configDotenv } from "dotenv";
configDotenv();

import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";
import { fastifyCors } from "@fastify/cors";
import { onopen } from "./websocket/onopen.js";
import { onclose } from "./websocket/onclose.js";
import { onmessage } from "./websocket/onmessage.js";
import apiRouter from "./router/index.js";

const PORT = process.env.PORT || 10000;

const app = fastify({ logger: true });

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
  app.listen({ port: PORT }, (err) => {
    if (err) return;
    console.log(`⚡️ Fastify is running at http://localhost:${PORT}`);
  })
);
