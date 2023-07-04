import { React, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { handleAuthenticate } from "./../../store/redux/authentication";
import sendToken from "./../../services/users/sendToken";

export default function EmailConfirmScreen({ route, navigation }) {
  const [user, setUser] = useState(null);
  const [token, onChangeToken] = useState("");
  const [authToken, setAuthToken] = useState("");
  const dispatch = useDispatch();

  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };

  async function handleToken() {
    try {
      success = await sendToken(user.email, token, authToken);
      if (success) {
        dispatch(handleAuthenticate({ token, user }));
      } else {
        throw new Error("Token inválido. Tente novamente.");
      }
    } catch (error) {
      Alert.alert("Erro: ", JSON.stringfy(error));
    }
  }

  useEffect(() => {
    if (route.params) {
      setUser(route.params.user);
      setAuthToken(route.params.authToken);
    }
  }, [navigation, route.params]);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      {user && (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />

          <View style={styles.messageBox}>
            <Text style={styles.message}>
              Olá, {user.name}. Precisamos que você confirme seu e-mail.
            </Text>
          </View>

          <View style={styles.emailBox}>
            <Text style={styles.emailLabel}>Cheque a caixa de entrada de:</Text>
            <Text style={styles.emailUser}>{user.email}</Text>
          </View>

          <View style={styles.authenticationMessageBox}>
            <View>
              <Text style={styles.authenticationMessage}>
                A autenticação do e-mail é uma medida em comprometimento a
                segurança de todos os nossos usuários.
              </Text>
            </View>
          </View>
          <View style={styles.tokenBox}>
            <TextInput
              style={styles.tokenInput}
              onChangeText={onChangeToken}
              value={token}
              placeholder="TOKEN1"
              maxLength={6}
              placeholderTextColor="#fff"
            ></TextInput>
            <TouchableOpacity
              onPress={handleToken}
              style={[styles.button, styles.buttonWhite, styles.shadow]}
            >
              <Text style={styles.sendTokenText}>Enviar token</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={goToLoginScreen}
          >
            <Text style={styles.buttonText}>Voltar a tela de Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
