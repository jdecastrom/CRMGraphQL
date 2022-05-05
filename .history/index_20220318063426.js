const { ApolloServer, gql } = requiere(apollo - server);

//Servidor
const server = new ApolloServer();

//arrancar el servidor
server.listen().then (({ url }) => {
  console.log('Servidor listo en la URL ${url}')
});
