import { StyleSheet, Platform, SafeAreaView } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
})
