/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export async function apiRouter(fastify, options) {
  fastify.get("/api", async (request, reply) => {
    return reply.status(200).send("OK");
  });
}

export default apiRouter;
