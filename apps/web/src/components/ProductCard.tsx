import React from 'react'
import { Product } from '@shopapp/shared'
import styles from './ProductCard.module.scss'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </div>
  )
}
