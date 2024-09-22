import { View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.screen}>
          <Text>Hi!</Text>
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
  screen: {},
})

export default index
