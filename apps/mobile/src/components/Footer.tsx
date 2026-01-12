import React from 'react'
import { View, Text } from 'react-native'

export default function Footer() {
  return (
    <View style={{ padding: 12, borderTopWidth: 1, borderTopColor: '#eee' }}>
      <Text>© {new Date().getFullYear()} ShopApp</Text>
    </View>
  )
}
