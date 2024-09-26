import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack screenOptions={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout
