import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ListView from '../components/ListView'
import ProductCard from '../components/ProductCard'

const PRODUCTS_QUERY = gql`query Products { products { id name price } }`

export default function Dashboard() {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div style={{ padding: 16 }}>
      <h2>Products</h2>
      <ListView>
        {data.products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ListView>
    </div>
  )
}
