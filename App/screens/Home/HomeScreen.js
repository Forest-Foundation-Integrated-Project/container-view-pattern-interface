import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../store/auth-context'

export default function HomeScreen({ navigation }) {
    console.log("hiiii")
    const authCtx = useContext(AuthContext)
    const token = authCtx.token;
    console.log(token + "aaaa" + navigation)
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}