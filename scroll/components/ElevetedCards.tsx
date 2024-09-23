import { ScrollView } from 'react-native'
import React from 'react'
import Card from '@/components/Card'

const ElevatedCards = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}
    >
      <Card color="#e4e3e3" text="Card 1" />
      <Card color="#e4e3e3" text="Card 2" />
      <Card color="#e4e3e3" text="Card 3" />
      <Card color="#e4e3e3" text="Card 4" />
      <Card color="#e4e3e3" text="Card 5" />
      <Card color="#e4e3e3" text="Card 6" />
    </ScrollView>
  )
}

export default ElevatedCards
