import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const PRODUCTS_QUERY = gql`
  query Products { products { id name price } }
`

function Products() {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <ul>
      {data.products.map((p: any) => (
        <li key={p.id}>{p.name} — ${p.price}</li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: 20 }}>
        <h1>ShopApp</h1>
        <Products />
      </div>
    </ApolloProvider>
  )
}
