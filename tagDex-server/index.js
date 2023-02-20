import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import cors from 'cors';
import { typeDefs } from './typedefs.js';
import { resolvers } from './resolvers.js';

// Using middleware implementation because unsure of auth scheme currently
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

async function init() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    plugins: [
      ApolloServerPluginDrainHttpServer({ typeDefs, resolvers, httpServer }),
    ],
  });

  await server.start();

  // leaving middleware empty for now till auth scheme decision
  app.options(
    '/api/gql',
    cors(),
    json(),
    expressMiddleware(server, {
      context: async (c) => {
        return;
      },
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`Server running at port 4000`);
}

init();
