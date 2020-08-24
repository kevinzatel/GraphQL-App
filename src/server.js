import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema.js";
import mongoose from "mongoose";

const startServer = async () => {
  const app = express();
  const port = 4000;

  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost/graphApp", {
    useNewUrlParser: true,
  });

  app.listen(port, () => {
    console.log("listening port: %s", port);
  });
};

startServer();
