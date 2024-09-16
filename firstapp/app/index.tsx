import { Text, View, StyleSheet } from 'react-native'

export default function index() {
  return <Text>index</Text>
}

function Container() {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
