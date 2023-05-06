import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './screens'
import { decode, encode } from 'base-64'
import { styles } from './generalStyles'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { BackButtom } from './components/BackButton';
import { LogoTitle } from './components/LogoTitle';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator()

export default function App() {
    const styles = StyleSheet.create({
        headerNavigation: {
            headerStyle: {
                backgroundColor: '#00B0AE'
            }
        },
    });

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={styles.headerNavigation}>
                <Stack.Screen name="Login" options={{ headerShown: false }}
                >
                    {props => <LoginScreen {...props} navigator={props.navigation} />}
                </Stack.Screen>
                <Stack.Screen name="Home" options={{}} >
                    {props => <HomeScreen {...props} extraData={user} navigator={props.navigation} />}
                </Stack.Screen>
                <Stack.Screen name="Registration" options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerBackImage: (props) => <BackButtom {...props} />,
                }}>
                    {props => <RegistrationScreen {...props} navigator={props.navigation} />}
                </Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer >
    );
}

