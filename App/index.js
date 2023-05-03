import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './screens'
import { decode, encode } from 'base-64'
import { styles } from './generalStyles'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator()

function LogoTitle() {
    return (
      <Image
        style={{ maxWidth: 110, maxHeight: 30 }}
        source={require('./assets/images/logo.png')}
      />
    );
}

function BackButtom() {
    return (
        <View>
            <Image
                style={{ maxWidth: 30, maxHeight: 30 }}
                source={require('./assets/images/voltar.png')}
            />
        </View>

    );
}

export default function App() {
    console.log(process.env.REACT_APP_BLA_BLA)
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
                {user ? (
                    <Stack.Screen name="Home" component={HomeScreen}>
                        {props => <HomeScreen {...props} extraData={user} />}
                    </Stack.Screen>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}
                        />
                        <Stack.Screen name="Registration" component={RegistrationScreen} options={{
                            headerTitle: (props) => <LogoTitle {...props} />,
                            headerBackImage: (props) => <BackButtom {...props} />,
                        }} />
                    </>
                )}
            </Stack.Navigator>

        </NavigationContainer>
    );
}

