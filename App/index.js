import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  MenuScreen,
  ProductScreen,
  SettingsScreen,
  CategoriesScreen,
  ProfileScreen,
  ForgotPasswordScreen,
} from "./screens";
import { decode, encode } from "base-64";
import { styles } from "./generalStyles";
import { BackButtom } from "./components/BackButton";
import { EditButtom } from "./components/EditButton";
import { LogoTitle } from "./components/LogoTitle";
import { MenuIcon } from "./components/MenuIcon";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { headerNavigationOptions } from "./headerNavigationOptions";
import "react-native-gesture-handler";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

function AuthStack() {
  const Stack = createStackNavigator();
  const options = {
    headerShown: true,
    headerTitle: LogoTitle,
    headerBackImage: BackButtom,
  };

  return (
    <Stack.Navigator screenOptions={headerNavigationOptions}>
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

      <Stack.Screen 
      name="ForgotPasswordScreen"
      options={options}
      component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const Drawer = createDrawerNavigator();
  const options = {
    headerShown: true,
    headerTitle: LogoTitle,
    headerNavigationOptions,
  };

  return (
    // <NavigationContainer independent={true}></NavigationContainer>
    <Drawer.Navigator
      screenOptions={headerNavigationOptions}
      drawerContent={({ navigation, props }) => (
        <MenuScreen navigation={navigation} props={props} />
      )}
    >
      <Drawer.Screen name="Home" options={options} component={HomeScreen} />
      <Drawer.Screen
        name="Profile"
        options={options}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="ProductScreen"
        options={options}
        component={ProductScreen}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthStack />}
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

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
