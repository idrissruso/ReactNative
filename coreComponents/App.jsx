import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { useState } from 'react'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [statusBarVisible, setStatusBarVisible] = useState(true)
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/1000' }}
      style={{ backgroundColor: 'plum', flex: 1, padding: 20 }}
    >
      <StatusBar backgroundColor="red" translucent hidden={!statusBarVisible} />
      <View style={{ backgroundColor: 'lightblue', width: 100, height: 100 }}>
        <Pressable
          onPress={() => {
            setModalVisible(true)
            setStatusBarVisible(!statusBarVisible)
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
                Alert.alert(
                  'Attention',
                  'Are you sure you want to close the modal?, this action is irreversible',
                  [
                    {
                      text: 'Yes',
                      onPress: () => {
                        setModalVisible(false)
                        setStatusBarVisible(!statusBarVisible)
                      },
                    },
                    { text: 'No', onPress: () => console.log('No') },
                  ]
                )
              }}
            >
              <Text>Close</Text>
            </Pressable>
            <ActivityIndicator size="large" color="red" animating={true} />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  )
}
