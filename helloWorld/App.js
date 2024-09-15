import {
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
  Alert,
} from 'react-native'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  return (
    <View style={styles.app}>
      <Text style={styles.text}>What is your Name ?</Text>
      <TextInput
        style={styles.input}
        placeholder="idriss"
        onChangeText={setText}
        value={text}
      />
      <Button
        title="Say Hello"
        onPress={() => {
          Alert.alert(`Hello ${text}`)
        }}
      />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
})

function Box({ text, color }) {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      <Text>{text}</Text>
    </View>
  )
}

export default App
