import {
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.app}>
      <FlatList
        data={[
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
          { key: 'red', color: 'red' },
          { key: 'blue', color: 'blue' },
          { key: 'green', color: 'green' },
        ]}
        renderItem={({ item }) => <Box text={item.key} color={item.color} />}
      />

      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
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
