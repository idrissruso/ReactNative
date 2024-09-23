import { View, Text } from 'react-native'

export default function Card({ color, text }: { color: string; text: string }) {
  return (
    <View
      style={{
        height: 120,
        width: 120,
        backgroundColor: color,
        marginRight: 15,
        borderRadius: 2,
      }}
    >
      <Text>ScrollViewList</Text>
    </View>
  )
}
