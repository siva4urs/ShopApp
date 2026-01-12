import React from 'react'
import { View, Text } from 'react-native'
import { Product } from '@shopapp/shared'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <View style={{ padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 8 }}>
      <Text style={{ fontWeight: '600' }}>{product.name}</Text>
      <Text>${product.price.toFixed(2)}</Text>
    </View>
  )
}
