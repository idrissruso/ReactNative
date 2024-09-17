import { Text, View, StyleSheet, Button } from 'react-native'
import { useState } from 'react'

export default function index() {
  const [sayac, setSayac] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{sayac}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setSayac((e) => e + 1)
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
  division: {
    marginBottom: 5,
    backgroundColor: 'red',
    padding: 10,
  },
})
