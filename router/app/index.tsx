import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()
  console.log('I am at home')
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Check the user"
        onPress={() => {
          router.push({
            pathname: '/user/[id]',
            params: { id: 2 },
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
