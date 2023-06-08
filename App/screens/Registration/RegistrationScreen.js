import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <RegistrationForm navigation={navigation} />
      </SafeAreaView>
    </>
  );
}
