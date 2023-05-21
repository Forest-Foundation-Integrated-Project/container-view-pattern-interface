import "react-native-gesture-handler";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  MenuScreen,
  ProductScreen,
} from "./screens";
import { decode, encode } from "base-64";
import { styles } from "./generalStyles";
import { BackButtom } from "./components/BackButton";
import { LogoTitle } from "./components/LogoTitle";
import { SearchIcon } from "./components/SearchIcon";
import { MenuIcon } from "./components/MenuIcon";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

function AuthStack() {
  const options = {
    headerShown: true,
    headerTitle: LogoTitle,
    headerBackImage: BackButtom,
  };

  return (
    <Stack.Navigator screenOptions={styles.headerNavigation}>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Registration"
        options={options}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
}


function AuthenticatedStack() {
  const Drawer = createDrawerNavigator();
  const options = {
    headerShown: true,
    headerTitle: LogoTitle,
    drawerPosition: "right",
  };
  console.log(Drawer);

  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator screenOptions={styles.headerNavigation}>
        <Drawer.Screen name="Home" options={options} component={HomeScreen} />
        <Drawer.Screen name="Menu" options={options} component={MenuScreen} />
        <Stack.Screen name="ProductScreen" options={options} component={ProductScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>

  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  const options = {
    headerShown: true,
    headerTitle: LogoTitle,
    headerBackImage: BackButtom,
  };
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}
/*
function ProductScreen({ navigation }) {
    const authCtx = useContext(AuthContext);
    return (
        <Stack.Navigator screenOptions={styles.headerNavigation}>
            <Stack.Screen name="Product Screen" options={{ headerShown: false }} component={productScreen}/>
        </Stack.Navigator >
    );
}
*/
function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

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
      </AuthContextProvider>
    </>
  );
}
