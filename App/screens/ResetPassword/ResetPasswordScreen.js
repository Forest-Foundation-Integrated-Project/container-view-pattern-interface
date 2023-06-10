import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import styles from "./styles";
import { login } from "../../services/users/login";
import { Loading } from "./../../components/Loading";
import { Alert } from "react-native";
import ErrorMessage from "./../../components/ErrorMessage";
import { BackButtom } from "../../components/BackButton";

export default function ResetPasswordScreen({ navigation }) {
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

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password, navigation);
      const res = await getUser("ded6f05a-ec8d-4ebb-ba6c-eb10fe8a2b0c", token);
      const user = res.data;
      dispatch(handleAuthenticate({ token, user }));
    } catch (error) {
      console.log("Error: " + error);
      Alert.alert(
        "Falha na autenticação",
        "Não foi possível realizar o login, confira seu email e senha"
      );

      setIsAuthenticating(false);
    }

    if (isAuthenticating) {
      return <Loading message="Logging you in..." />;
    }

    return <></>;
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <View style={styles.container}>
        <Formik
          style={styles.content}
          initialValues={{
            newPassword: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            loginHandler(values);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            setFieldValue,
          }) => (
            <KeyboardAwareScrollView
              style={{ width: "100%" }}
              keyboardShouldPersistTaps="always"
            >
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.password}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Nova senha"
                />

                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.password}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Confirmar nova senha"
                />

                <ErrorMessage
                  errorValue={touched.password && errors.password}
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                  Alterar senha e fazer login
                </Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
}
