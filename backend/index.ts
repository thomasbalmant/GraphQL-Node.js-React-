import "reflect-metadata";

import { UserResolver } from './src/resolvers/UserResolver';
import path from 'path'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

async function main() {
  const schema = await buildSchema({
    resolvers: [
        UserResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
      schema
  })

  const { url } = await server.listen()

  console.log(`Server is running on port:${url}`);
  
}

main()
