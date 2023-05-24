import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { },
});

export default function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem("token");

            if (storedToken) {
                setAuthToken(storedToken)
            }
        }

        fetchToken()
    }, []);

    function handleAuthenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem("token", token);
    }

    function handleLogout() {
        setAuthToken(null);
        AsyncStorage.removeItem("token");
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: handleAuthenticate,
        logout: handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}