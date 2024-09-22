import { View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.title}>Flat Cards</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#28282B',
  },
  title: {
    fontSize: 40,
    fontFamily: 'bold',
  },
  screen: {},
})

export default index
