import { Text, View, StyleSheet } from 'react-native'

export default function index() {
  return (
    <Text>
      <Div style={styles.division} text="My Name is idrissa"></Div>
      <Div style={styles.division} text="I am 24 yeas old"></Div>
      <Div style={styles.division} text="My Name is idrissa"></Div>
      <Div style={styles.division} text="Here is my X Handle X"></Div>
      <Div style={styles.division} text="I love react"></Div>
    </Text>
  )
}

function Div({ text, style }: { text: string; style?: object }) {
  return <View style={style}>{text}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  division: {
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 2,
    shadowRadius: 3,
  },
})
