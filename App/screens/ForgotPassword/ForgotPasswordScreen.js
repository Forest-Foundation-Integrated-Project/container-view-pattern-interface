import React, { useContext, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from "formik";
import { validationSchema } from "./validation";
import styles from './styles';
import { login } from '../../services/users/login';
import { AuthContext } from './../../store/auth-context';
import { Loading } from './../../components/Loading';
import { Alert } from 'react-native';
import ErrorMessage from './../../components/ErrorMessage'

export default function ForgotPasswordScreen({ navigation }) {

    async function emailHandler({ email }) {
        //setIsAuthenticating(true);
        try {
            Alert.alert(`Sucesso .Por favor, cheque a caixa de entrada de ${email}.`);
        } catch (error) {
            console.log(error)
            Alert.alert(
                "Falha na autenticação",
                "Não foi possível realizar o login, confira seu email e senha"
            );

            //setIsAuthenticating(false);
        }
    }

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <View style={styles.container}>
                <Formik style={styles.content}

                    initialValues={{
                        email: ""
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
                    }) =>
                    (
                        <KeyboardAwareScrollView
                            style={{ width: '100%' }}
                            keyboardShouldPersistTaps="always">
                            <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>Não se preocupe, nós daremos um jeito!</Text>
                            <Text style={styles.textInform}>Será enviado um e-mail de requisição para a alteração da sua senha.</Text>
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
                    )
                    }
                </Formik>
            </View>
        </>
    )

}