import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function IconButton({ label, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 8 }}>
      <Text>{label || '⋯'}</Text>
    </TouchableOpacity>
  )
}
