const { ApolloServer, gql } = require('apollo-server');
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
//Servidor
const server = new ApolloServer();

//arrancar el servidor
server.listen().then (({ url }) => {
  console.log('Servidor listo en  URL ${url}')
});
