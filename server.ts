import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as fs from "fs"
import * as path from "path"

import { resolvers } from './resolvers'
const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8").toString()

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        process.env.NODE_ENV === 'production' ? ApolloServerPluginLandingPageDisabled() : ApolloServerPluginLandingPageLocalDefault()
    ],
    nodeEnv: process.env.NODE_ENV
});

(async () => {
    await server.start();

    app.use(
        cors(),
        bodyParser.json(),
        expressMiddleware(server),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000`);
})();