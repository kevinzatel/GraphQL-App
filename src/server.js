import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema.js'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/graphApp');
const connnection = mongoose.connection;
connnection.once('open', () => {
    console.log('Connection to DB was successful');
})
    ;
const app = express();
const port = 4000;

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen(port, () => {
    console.log('listening port: %s', port);
});