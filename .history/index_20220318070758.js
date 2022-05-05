                         const { ApolloServer, gql } = require('apollo-server');
                         import 'cypress-plugin-tab'; 
//Servidor
const server = new ApolloServer();

//arrancar el servidor
server.listen().then (({ url }) => {
  console.log('Servidor listo en  URL ${url}')
});
