import React from 'react'
import { TextInput } from 'react-native'

export default function TextField({ value = '', onChange, placeholder = '', secure = false }: any) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={secure}
      style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, width: '100%' }}
    />
  )
}
