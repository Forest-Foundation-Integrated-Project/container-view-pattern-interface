import React, { useContext, useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { CodeValidation } from "./CodeValidation";
import { login } from "../../services/users/login";
import { Alert } from "react-native";
import ErrorMessage from "./../../components/ErrorMessage";
import { BackButtom } from "../../components/BackButton";
import styles from "./styles";

export default function ForgotPasswordScreen({ navigation }) {
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

  async function emailHandler({ email }) {
    try {
      setModalVisible(true);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Falha na autenticação",
        "Não foi possível realizar o login, confira seu email e senha"
      );
    }
  }


  async function codeHandler(code) {
    if(code != null) {
      setModalVisible(false);
      goToResetPasswordPage()
    }
  }

  const [modalVisible, setModalVisible] = useState(false);

  const goToResetPasswordPage = () => {
    navigation.navigate("ResetPasswordScreen");
  };


  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <View style={styles.container}>
        <Formik
          style={styles.content}
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            emailHandler(values);
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
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                  Não se preocupe, nós daremos um jeito!
                </Text>
                <Text style={styles.textInform}>
                  Será enviado um e-mail de requisição para a alteração da sua
                  senha.
                </Text>
              </View>

              <View style={styles.formGroup}>
                <TextInput
                  style={styles.input}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                  placeholder="Insira seu e-mail de login"
                />

                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Requisitar nova senha</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Formik

              initialValues={{
                code: ""

              }}
              onSubmit={(values) => {
                codeHandler(values);
              }}

              validationSchema={CodeValidation}
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
                <View keyboardShouldPersistTaps="always">
                  <Text style={styles.modalText}>
                    Enviamos um código de confirmação para seu e-mail
                  </Text>

                  <View style={styles.modalInput}>
                    <TextInput
                      style={styles.modalNumberInput}

                      value={values.code}
                      autoCapitalize="none"
                      onChangeText={handleChange("code")}
                      onBlur={handleBlur("code")}
                      secureTextEntry={true}
                      maxLength={6}
                      placeholder=""
                    />

                    <ErrorMessage errorValue={touched.code && errors.code} />

                  </View> 

                  
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>Inserir código</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </>
  );
}
