const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./graphql/schema");
const express = require("express");

const setupGQL = (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return { hello: "world" };
    },
  });

  server.applyMiddleware({ app, path: "/graphql" });
};
const setupExpress = (app) => {
  const port = 3333;

  app.use(express.urlencoded({ extended: true }));
  const server = app.listen(port, () => {
    console.log(`Listening at : http://localhost:${3333}`);
  });

  server.on("error", console.error);
};

(() => {
  const app = express();
  app.use(express.json());
  setupGQL(app);
  setupExpress(app);
})();
 