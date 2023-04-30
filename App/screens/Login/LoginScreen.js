import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from "formik";
import { validationSchema } from "./validation";
import styles from './styles';


const ErrorMessage = ({ errorValue }) => {
    return errorValue ? (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorValue}</Text>
        </View>
    ) : null;
};

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
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
                    onSubmit={(values, actions) => {
                        onSubmitHandler(values, actions);
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
                            style={{width: '100%' }}
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
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <View style={styles.footerView}>
                                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                            </View>
                        </KeyboardAwareScrollView>
                    )
                    }
                </Formik>
            </View>
        </>
    )
}