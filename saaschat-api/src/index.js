import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";
import { fastifyCors } from "@fastify/cors";
import { onmessage } from "./websocket/onmessage.js";

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

app.ready().then(() => app.listen({ port: 4003 }));
