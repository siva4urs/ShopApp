import React from 'react'
import { FlatList } from 'react-native'

export default function ProductList({ data, renderItem }: any) {
  return <FlatList data={data} renderItem={renderItem} keyExtractor={(i: any) => i.id} contentContainerStyle={{ padding: 12 }} />
}
