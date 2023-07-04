import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { Formik } from "formik";
import Lottie from "lottie-react-native";
import { useDispatch } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validationSchema } from "./validation";
import { login } from "../../services/users/login";
import getUser from "../../services/users/getUser";
import { Loading } from "./../../components/Loading";
import ErrorMessage from "./../../components/ErrorMessage";
import StudentAnimation from "../../assets/lottie/student.json";
import { handleAuthenticate } from "../../store/redux/authentication";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };
  const forgotPassPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, user_id } = await login(email, password, navigation);
      const res = await getUser(user_id, token);
      const user = res.data;
      dispatch(handleAuthenticate({ token, user }));
    } catch (error) {
      setErrorMessage("Usuário ou senha invalidos. Tente novamente");
      setIsAuthenticating(false);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <View style={styles.container}>
        {!isAuthenticating ? (
          <Formik
            style={styles.content}
            initialValues={{
              email: email,
              password: "",
            }}
            onSubmit={(values) => {
              setEmail(values.email);
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
                <Image
                  style={styles.logo}
                  source={require("../../assets/images/logotipo.png")}
                />
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    autoCapitalize="none"
                    placeholder="E-mail"
                  />

                  <ErrorMessage errorValue={touched.email && errors.email} />
                </View>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.input}
                    value={values.password}
                    onChangeText={(value) => {
                      setErrorMessage("");
                      setFieldValue("password", value);
                    }}
                    onBlur={handleBlur("password")}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="Senha"
                  />

                  <ErrorMessage
                    errorValue={touched.password && errors.password}
                  />
                  <ErrorMessage errorValue={errorMessage && errorMessage} />
                </View>

                <Text style={styles.forgotPass} onPress={forgotPassPressed}>
                  Esqueceu sua senha?
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                  <Text style={styles.footerText}>
                    Ainda não é registrado?{" "}
                    <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                      REGISTRE-SE AQUI!
                    </Text>
                  </Text>
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
        ) : (
          <Lottie source={StudentAnimation} autoPlay loop />
        )}
      </View>
    </>
  );
}
