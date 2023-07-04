import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { EditButtonFilled } from "../../../components/EditButtonFilled";
import { EditButton } from "../../../components/EditButton";
import { BackButtom } from "../../../components/BackButton";
import EditProfileForm from "./EditProfileForm";
import { StatusBar } from "expo-status-bar";

export default function EditProfileScreen({ navigation, route }) {
  const { user } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goToProfileScreen}>
          <BackButtom />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function goToProfileScreen() {
    navigation.goBack();
  }

  function uploadPicker() {
    //not implemented yet
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <View style={styles.container}>
        <View style={styles.profileAvatar}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: user.profileImage,
              }}
              style={styles.image}
            />
            <TouchableOpacity style={styles.imageEdit} onPress={uploadPicker}>
              <EditButtonFilled tintColor={"grey"} />
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          <EditProfileForm navigation={navigation} user={user} />
        </SafeAreaView>
      </View>
    </>
  );
}
