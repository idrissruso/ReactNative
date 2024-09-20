import { Text, View, StyleSheet, Button } from 'react-native'
import { useState } from 'react'

export default function index() {
  const [sayac, setSayac] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{sayac}</Text>
      <View style={styles.buttons}>
        <Button
          title="Increase"
          onPress={() => {
            setSayac((e) => e + 1)
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            setSayac((e) => e - 1)
          }}
          color={'green'}
        />
        <Button
          title="Reset"
          onPress={() => {
            setSayac(0)
          }}
          color={'purple'}
        />
      </View>
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
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
})
