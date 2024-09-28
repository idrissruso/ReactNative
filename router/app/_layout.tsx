import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="user/[id]" />
      </Stack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default _layout
