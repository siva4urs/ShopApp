import React from 'react'
import { View, Text } from 'react-native'

export default function Header() {
  return (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>ShopApp</Text>
    </View>
  )
}
