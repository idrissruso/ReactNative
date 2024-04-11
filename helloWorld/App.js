import { View, Text, StatusBar, StyleSheet, Button, Alert } from 'react-native'

function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Btn
        title={'Say hello'}
        onPress={() => {
          Alert.alert('Hello')
        }}
      />
      <Btn
        title={'Say welcome'}
        onPress={() => {
          Alert.alert('Welcome')
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
  btn: {
    backgroundColor: 'orange',
  },
})

function Btn({ title, onPress }) {
  return <Button title={title} onPress={onPress} style={styles} />
}

export default App
