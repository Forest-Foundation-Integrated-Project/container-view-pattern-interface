import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './screens'
import { decode, encode } from 'base-64'
import { styles } from './generalStyles'
import { BackButtom } from './components/BackButton';
import { LogoTitle } from './components/LogoTitle';
import AuthContextProvider, { AuthContext } from './store/auth-context'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLoading } from 'expo-app-loading'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={styles.headerNavigation}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}
            />
            <Stack.Screen name="Registration" options={{ headerShown: false }} component={RegistrationScreen} />
        </Stack.Navigator >
    );
};

function AuthenticatedStack() {
    return (
        <Stack.Navigator screenOptions={styles.headerNavigation}>
            <Stack.Screen name="Home" options={{}} component={HomeScreen} />
        </Stack.Navigator>
    );
};

function Navigation() {
    const authCtx = useContext(AuthContext);
    console.log(authCtx.isAuthenticated)
    return (

        <NavigationContainer>
            {!authCtx.isAuthenticated && <AuthStack />}
            {authCtx.isAuthenticated && <AuthenticatedStack />}
        </NavigationContainer >

    )
}

function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem('token');

            if (storedToken) {
                authCtx.authenticate(storedToken);
            }

            setIsTryingLogin(false);
        }

        fetchToken();
    }, []);

    if (isTryingLogin) {
        // return <AppLoading />;
    }

    return <Navigation />;
}

export default function App() {
    // const [loading, setLoading] = useState(true)
    // const [user, setUser] = useState(null)


    return (
        <>
            <StatusBar style="light" />
            <AuthContextProvider>
                <Root />
            </AuthContextProvider >
        </>
    );
}


