import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";
import { fastifyCors } from "@fastify/cors";
import { onmessage } from "./websocket/onmessage.js";
import { configDotenv } from "dotenv";
configDotenv();

const PORT = process.env.PORT || 10000;

const app = fastify({ logger: true, disableRequestLogging: true });

app.register(fastifyCors);
app.register(fastifyWebsocket);

app.register(async function (fastify) {
  fastify.get("/ws", { websocket: true }, (connection, req) => {
    connection.socket.onopen = (event) => {
      console.log("onOpen", event);
    };
    connection.socket.onmessage = (event) => onmessage(connection, event);
    connection.socket.onclose = (event) => {
      console.log("onClose");
    };
  });
});

// port 10000 for rednder.com
// port 4003 for localhost
app.ready().then(() =>
  app.listen({ port: PORT }, (err) => {
    if (err) return;
    console.log(`started on http://localhost:${PORT}`);
  })
);
