import { View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScrollViewList from '@/components/ScrollViewList'
import ElevatedCards from '@/components/ElevetedCards'

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.title}>Flat Cards</Text>
          <View>
            <ScrollViewList />
          </View>
          <Text
            style={[
              styles.title,
              {
                marginTop: 20,
              },
            ]}
          >
            Elevated Cards
          </Text>
          <ElevatedCards />
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
