import { View, Text} from 'react-native'
import { useTheme } from '../context/useTheme'
import Style from '../Style'
import React from 'react'

export default function Home() {
    const {isDarkMode}= useTheme()
    
    return(
        <View style={[Style.container,isDarkMode ? Style.dark : Style.light]}>
            <Text style={isDarkMode ? Style.dark : Style.light}>Home</Text>
        </View>
    )
    
}