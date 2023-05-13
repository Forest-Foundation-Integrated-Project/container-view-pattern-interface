import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../store/auth-context'

export default function HomeScreen({ navigation }) {
    const authCtx = useContext(AuthContext)
    const token = authCtx.token;
    console.log(token)
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}