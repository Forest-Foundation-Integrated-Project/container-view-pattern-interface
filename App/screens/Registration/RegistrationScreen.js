import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import RegistrationForm from "./RegistrationForm";
import { AuthContext } from "../../store/auth-context"
import { BackButtom } from "../../components/BackButton";

export default function RegistrationScreen({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity onPress={goBack}>
              <BackButtom />
            </TouchableOpacity>
          ),
          headerRight: null,
        });
    
        function goBack() {
          navigation.navigate("Login");
        }
      }, [navigation]);
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
