import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Product { id: ID! name: String! price: Float! }
  type Query { products: [Product!]! }
`

const products = [
  { id: '1', name: 'T-Shirt', price: 19.99 },
  { id: '2', name: 'Sneakers', price: 79.99 }
]

const resolvers = { Query: { products: () => products } }

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`GraphQL server ready at ${url}`)
})
