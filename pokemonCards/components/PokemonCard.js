import { View, Text, Platform, StyleSheet } from 'react-native'

function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text>Pokemon card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
  },
  ...Platform.select({
    android: {
      elevation: 5,
    },
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  }),
})

export default PokemonCard
