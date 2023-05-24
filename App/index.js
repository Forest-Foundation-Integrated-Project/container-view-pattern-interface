import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { headerNavigationOptions } from './headerNavigationOptions';
import { LoginScreen, HomeScreen, RegistrationScreen, MenuScreen, SettingsScreen, CategoriesScreen, ProfileScreen } from './screens';
import { decode, encode } from 'base-64'
import { styles } from './generalStyles';
import { BackButtom } from './components/BackButton';
import { LogoTitle } from './components/LogoTitle';
import AuthContextProvider, { AuthContext } from './store/auth-context'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator()

const options = {
    headerShown: true,
    headerTitle: LogoTitle,
    headerBackImage: BackButtom
}

function AuthStack() {

    return (
        <Stack.Navigator screenOptions={headerNavigationOptions}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}
            />
            <Stack.Screen name="Registration" options={options} component={RegistrationScreen} />
        </Stack.Navigator >
    );
};

const Drawer = createDrawerNavigator();
function AuthenticatedStack() {
    const drawer_options = {
        ...options,
        headerNavigationOptions
    }
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuScreen {...props} />}
            screenOptions={headerNavigationOptions}>
            <Drawer.Screen name="Home" options={drawer_options} component={HomeScreen} />
        </Drawer.Navigator>
    );
};

function Navigation() {
    const authCtx = useContext(AuthContext);
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

    // if (isTryingLogin) {
    //     // return <AppLoading />;
    // }

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
