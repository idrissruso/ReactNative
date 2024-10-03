import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps {
  title: string
  type: 'num' | 'op'
  onPress: (value?: any) => void
}

const Button = ({ title, type, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={(value) => onPress(value)}>
      <Text>{title}</Text>
    </Pressable>
  )
}

export default Button
