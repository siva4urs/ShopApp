import React from 'react'
import { Product } from '@shopapp/shared'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{product.name}</h3>
      <p style={{ margin: 0 }}>${product.price.toFixed(2)}</p>
    </div>
  )
}
