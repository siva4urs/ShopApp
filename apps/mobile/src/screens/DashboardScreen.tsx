import React from 'react'
import { View, Text } from 'react-native'
import ProductList from '../components/ProductList'
import ProductCard from '../components/ProductCard'

const sample = [
  { id: '1', name: 'T-Shirt', price: 19.99 },
  { id: '2', name: 'Sneakers', price: 79.99 }
]

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, margin: 12 }}>Products</Text>
      <ProductList
        data={sample}
        renderItem={({ item }: any) => <ProductCard product={item} />}
      />
    </View>
  )
}
