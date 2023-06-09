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
  ResetPasswordScreen,
  EditProfileScreen,
} from "./screens";
import { decode, encode } from "base-64";
import { styles } from "./generalStyles";
import { BackButtom } from "./components/BackButton";
import { EditButtom } from "./components/EditButton";
import { LogoTitle } from "./components/LogoTitle";
import { MenuIcon } from "./components/MenuIcon";
import { store } from "./store/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { headerNavigationOptions } from "./headerNavigationOptions";
import "react-native-gesture-handler";
import { Provider, useSelector } from "react-redux";
import { handleAuthenticate, handleLogout } from "./store/redux/authentication";

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

<Stack.Screen 
      name="ResetPasswordScreen"
      options={options}
      component={ResetPasswordScreen}
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
        name="EditProfile"
        options={options}
        component={EditProfileScreen}
      />
      <Drawer.Screen
        name="ProductScreen"
        options={options}
        component={ProductScreen}
      />
    </Drawer.Navigator>
  );
}

function Navigation({ authentication }) {
  return (
    <NavigationContainer>
      {!authentication.isAuthenticated && <AuthStack />}
      {authentication.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authentication = useSelector((state) => state.authentication);

  useEffect(() => {
    async function fetchToken() {
      const token = await AsyncStorage.getItem("token");
      var user = await AsyncStorage.getItem("user");

      user = JSON.parse(user);
      if (token && user) {
        store.dispatch(handleAuthenticate({ token, user }));
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  return <Navigation authentication={authentication} />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}
