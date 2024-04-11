import { View, Text, StatusBar, StyleSheet, Button, Alert } from 'react-native'

function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Hello World</Text>
      <Button
        title="click me"
        onPress={() => {
          Alert.alert('Hello', 'Welcome to our App', [
            {
              text: 'cancel',
              onPress: () => {
                console.log("I've been pressed")
              },
              style: 'cancel',
            },
          ])
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
