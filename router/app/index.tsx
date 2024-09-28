import { View, Text, Button } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router'

export default function index() {
  const router = useRouter()
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="check the user"
        onPress={() => {
          router.push({
            //@ts-ignore
            pathname: '/user/[id]',
            params: { id: 2 },
          })
        }}
      />
    </View>
  )
}
