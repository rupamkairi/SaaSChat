import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";
import { fastifyCors } from "@fastify/cors";

const app = fastify({ logger: true });

app.register(fastifyCors);
app.register(fastifyWebsocket);

app.register(async function (fastify) {
  fastify.get("/ws", { websocket: true }, (connection, req) => {
    connection.socket.on("message", (message) => {
      connection.socket.send("hi from server");
    });
  });
});

app.ready().then(() => app.listen({ port: 4003 }));
