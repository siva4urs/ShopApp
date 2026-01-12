import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function Button({ children, onPress, variant = 'primary' }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: variant === 'primary' ? '#2563eb' : '#e5e7eb', padding: 12, borderRadius: 8, alignItems: 'center' }}
    >
      <Text style={{ color: variant === 'primary' ? '#fff' : '#111' }}>{children}</Text>
    </TouchableOpacity>
  )
}
