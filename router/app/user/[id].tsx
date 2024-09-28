import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function index() {
  const { id } = useLocalSearchParams<{ id: string }>()
  console.log(id)
  return (
    <View>
      <Text>User</Text>
    </View>
  )
}
