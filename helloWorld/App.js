import { View, Button, Text, StyleSheet, StatusBar } from 'react-native'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>You Pressed the Button {count} times</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})

export default App
