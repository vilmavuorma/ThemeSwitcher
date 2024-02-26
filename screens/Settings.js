import { View } from 'react-native'
import React from 'react'
import ThemeSwitchButton from '../components/ThemeSwitchButton'
import { useTheme } from '../context/useTheme'
import Style from '../Style'

export default function Settings() {
  const { isDarkMode } = useTheme()
  return(
    <View style={[Style.container, isDarkMode ? Style.dark : Style.light]}>
        <ThemeSwitchButton />
    </View>
  )
}