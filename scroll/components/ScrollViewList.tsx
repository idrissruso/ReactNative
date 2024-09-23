import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from '@/components/Card'

const ScrollViewList = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}
      // adding gap between cards
    >
      <Card color="red" text="Card 1" />
      <Card color="green" text="Card 2" />
      <Card color="blue" text="Card 3" />
    </ScrollView>
  )
}

export default ScrollViewList
