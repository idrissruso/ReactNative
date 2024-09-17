import { Text, View, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function index() {
  const [sayac, setSayac] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{sayac}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  division: {
    marginBottom: 5,
    backgroundColor: 'red',
    padding: 10,
  },
})
