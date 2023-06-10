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



  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <View style={styles.container}>
        <View style={styles.informationalText}>
          <Text style={styles.headline}>Digite sua nova senha de login.</Text>
          <Text style={[styles.headline, styles.subtext]}>Shh... Não contaremos a ninguém!</Text>
        </View>
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
              style={{ width: "100%"}}
              keyboardShouldPersistTaps="always"
            >
              
              <View style={styles.formGroup}>
              <TextInput
                  style={styles.input}
                  value={values.newPassword}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Nova senha"
                />
                <ErrorMessage errorValue={touched.newPassword && errors.newPassword} />
              </View>

              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Confirmar nova senha"
                />

                <ErrorMessage
                  errorValue={touched.confirmPassword && errors.confirmPassword}
                />
              </View>
              
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Alterar senha e fazer login</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
}
