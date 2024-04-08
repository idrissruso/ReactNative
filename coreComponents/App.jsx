import { View, Text, ImageBackground, Pressable, Modal } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/1000' }}
      style={{ backgroundColor: 'plum', flex: 1, padding: 20 }}
    >
      <View style={{ backgroundColor: 'lightblue', width: 100, height: 100 }}>
        <Pressable
          onPress={() => {
            setModalVisible(true)
            console.log('pressed the btn')
          }}
        >
          <Text>Press me</Text>
        </Pressable>
        <Modal
          visible={modalVisible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setModalVisible(false)}
        >
          <View>
            <Text>Modal content</Text>
            <Pressable
              onPress={() => {
                setModalVisible(false)
              }}
            >
              <Text>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  )
}
