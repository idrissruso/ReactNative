import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { useState } from 'react'

export default function index() {
  const [sayac, setSayac] = useState(0)
  return (
    <View style={styles.container}>
      <Image
        src="https://avatars.githubusercontent.com/u/64365948?v=4"
        style={styles.image}
      />
      <Text>Idrissa RUSONGEKA</Text>
      <Text>Web & Mobile Full-Stack Developer</Text>
      <Button
        title="Learn More"
        onPress={() => {
          alert("I've been pressed")
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
    gap: 10,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
})
