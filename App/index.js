import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './screens'
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    headerNavigation: {
        headerStyle: {
            backgroundColor: '#00B0AE'
        }
    },
});

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={styles.headerNavigation}>
                {user ? (
                    <Stack.Screen name="Home">
                        {props => <HomeScreen {...props} extraData={user} />}
                    </Stack.Screen>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Registration" component={RegistrationScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}