import { View, Text } from 'react-native'

export default function Card({ color, text }: { color: string; text: string }) {
  return (
    <View
      style={{
        height: 115,
        width: 115,
        backgroundColor: color,
        marginRight: 25,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ScrollViewList</Text>
    </View>
  )
}
