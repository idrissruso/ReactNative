import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack screenOptions={{ headerShown: false }} initialRouteName="user" />
    </Stack>
  )
}

export default _layout
