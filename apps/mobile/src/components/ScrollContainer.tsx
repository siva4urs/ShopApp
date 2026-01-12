import React from 'react'
import { ScrollView } from 'react-native'

export default function ScrollContainer({ children }: any) {
  return <ScrollView contentContainerStyle={{ padding: 12 }}>{children}</ScrollView>
}
