import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../store/redux/authentication";
import { useSelector } from "react-redux";

export default function MenuScreen({ navigation, props }) {
  const user = useSelector((state) => state.authentication.user);
  console.log('user ', user)
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";

  const dispatch = useDispatch();
  function logout() {
    dispatch(handleLogout());
  }

  function goToProfile() {
    console.log(user);
    navigation.navigate("Profile", {
      user: { id: user.user_id },
      loadUser: true,
      key: user.user_id,
    });
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      {user && (
        <>
          <DrawerContentScrollView {...props}>
            <View style={styles.body}>
              <View style={styles.profileContainer}>
                <TouchableOpacity onPress={goToProfile}>
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8La2nwie8i1L3Asva1zyiKRaiWkVzujCP9ixCPH7OzYsLOPwBGfJ8VNzV67jehFLz2s&usqp=CAU",
                      }}
                      style={styles.sideMenuProfileIcon}
                    />
                  </View>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userRole}>{user.role}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menuItemsView}>
                <DrawerItem
                  style={styles.menuItem}
                  label={() => (
                    <Text style={styles.menuItemText}>Categorias</Text>
                  )}
                  icon={() => (
                    <Ionicons
                      color="white"
                      size={28}
                      name="list-outline"
                    ></Ionicons>
                  )}
                  onPress={() => navigation.navigate("CategoriesScreen")}
                />
                <DrawerItem
                  style={styles.menuItem}
                  label={() => (
                    <Text style={styles.menuItemText}>Configurações</Text>
                  )}
                  icon={() => (
                    <Ionicons
                      color="white"
                      size={28}
                      name="settings-outline"
                    ></Ionicons>
                  )}
                  onPress={() => navigation.navigate("SettingsScreen")}
                />
                <DrawerItem
                  style={styles.menuItem}
                  label={() => <Text style={styles.menuItemText}>Ajuda</Text>}
                  icon={() => (
                    <Ionicons
                      color="white"
                      size={28}
                      name="help-circle-outline"
                    ></Ionicons>
                  )}
                  onPress={() => navigation.navigate("HelpScreen")}
                />
              </View>
            </View>
            <View styles={styles.footer}>
              <TouchableOpacity
                style={styles.menuLogoutButton}
                onPress={logout}
              >
                <Text style={styles.menuLogoutText}>Desconectar</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
