import { View, SafeAreaView, ScrollView } from 'react-native'

export default function Card({ color, text }: { color: string; text: string }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>Card</View>
      </ScrollView>
    </SafeAreaView>
  )
}
