import { View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScrollViewList from '@/components/ScrollViewList'

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.title}>Flat Cards</Text>
          <View>
            <ScrollViewList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#28282B',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dddd',
  },
  screen: {},
})

export default index
