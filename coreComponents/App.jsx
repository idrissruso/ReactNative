import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{ backgroundColor: 'plum', flex: 1, padding: 20 }}>
      <View style={{ backgroundColor: 'lightblue', width: 100, height: 100 }}>
        <Text>hello world</Text>
      </View>
    </View>
  )
}
