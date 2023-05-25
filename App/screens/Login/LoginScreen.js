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

export default function LoginScreen({ navigation }) {
    const authCtx = useContext(AuthContext)
    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            token = await login(email, password, navigation);
            authCtx.authenticate(token);
        } catch (error) {
            console.log(error)
            Alert.alert(
                "Falha na autenticação",
                "Não foi possível realizar o login, confira seu email e senha"
            );

            setIsAuthenticating(false);
        }

        if (isAuthenticating) {
            return <Loading message="Logging you in..." />;
        }

        return <AuthContext />;
    }

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <View style={styles.container}>
                <Formik style={styles.content}

                    initialValues={{
                        email: "",
                        password: ""
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
                    }) =>
                    (
                        <KeyboardAwareScrollView
                            style={{ width: '100%' }}
                            keyboardShouldPersistTaps="always">
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/logotipo.png')}
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
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    placeholder="Senha"
                                />

                                <ErrorMessage
                                    errorValue={touched.password && errors.password}
                                />
                            </View>
                            <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <View style={styles.footerView}>
                                <Text style={styles.footerText}>Ainda não é registrado? <Text onPress={onFooterLinkPress} style={styles.footerLink}>REGISTRE-SE AQUI!</Text></Text>
                            </View>
                        </KeyboardAwareScrollView>
                    )
                    }
                </Formik>
            </View>
        </>
    )
}