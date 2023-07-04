import { React, useEffect } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function EmailConfirmScreen({ navigation }) {

  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };

  return (
    <>
        <SafeAreaView style={styles.topSafeArea} />
        <View style={styles.container}>  
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />

        <View style={styles.messageBox}>
          <Text style={styles.message}>
            Olá, ... . Precisamos que você confirme seu e-mail de autenticação.
          </Text>
        </View>

        <View style={styles.emailBox}>
          <Text style={styles.emailLabel}>
            Cheque a caixa de entrada de:
          </Text>
          <Text style={styles.emailUser}>
            ...
          </Text>
        </View>

      <View style={styles.authenticationMessageBox} >
        <View>
          <Text style={styles.authenticationMessage}>
            A autenticação do e-mail é uma medida em comprometimento a segurança de todos os nossos usuários.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, styles.shadow]} onPress={goToLoginScreen}>
        <Text style={styles.buttonText}>
          Voltar a tela de Login
        </Text>
      </TouchableOpacity>
      
      </View>
    </>
  );
}
