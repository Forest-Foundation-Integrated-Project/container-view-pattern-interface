import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from '@react-native-community/datetimepicker';
import { Formik } from "formik";
import * as yup from "yup";
import { validationSchema } from "./validation";
import { styles } from "./styles";
import { touchProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const ErrorMessage = ({ errorValue }) => {
    return errorValue ? (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorValue}</Text>
        </View>
    ) : null;
};


export default function RegisterForm() {
    const [birthDate, setBirthDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false);

    function onSubmitHandler(userData) {
        userData.birthDate = formatDate(birthDate)
        console.log(userData.birthDate)
        saveUser(userData)
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }

    return (
        
        <>
            <SafeAreaView style={styles.topSafeArea} />

            <StatusBar style="light" />

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nav}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/logo.png')}
                        />
                        <TouchableOpacity style={styles.back} onPress={console.log("a")}>
                            <Image
                                style={styles.back}
                                source={require('../../assets/images/voltar.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* https://formik.org/docs/overview */}
                <Formik
                
                    initialValues={{
                        firstName: "",
                        email: "",
                        gender: "",
                        birthDate: "",
                        university: "",
                        password: "",
                        confirmPassword: "",
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
                    }) => (
                        // https://github.com/APSL/react-native-keyboard-aware-scroll-view
                        <KeyboardAwareScrollView
                            style={styles.content}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.formGroup}>
                                <TextInput
                                    style={styles.input}
                                    value={values.firstName}
                                    onChangeText={handleChange("firstName")}
                                    onBlur={handleBlur("firstName")}
                                    placeholder="Nome"
                                />

                                <ErrorMessage
                                    errorValue={touched.firstName && errors.firstName}
                                />
                            </View>

                            <View style={styles.formGroup}>
                                <TextInput
                                    style={styles.input}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    autoCapitalize="none"
                                    placeholder="Email"
                                />

                                <ErrorMessage errorValue={touched.email && errors.email} />
                            </View>
                            <View style={styles.dualFormGroup}>

                                <View style={styles.formGroup}>
                                    <TextInput
                                        style={styles.input}
                                        value={values.gender}
                                        onChangeText={handleChange("gender")}
                                        onBlur={handleBlur("gender")}
                                        autoCapitalize="none"
                                        placeholder="Gênero"
                                    />
                                <ErrorMessage errorValue={touched.gender && errors.gender} />
                                </View>

                                <View style={styles.formGroup}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setShowDatePicker(true);
                                        }}
                                    >
                                        <View style={styles.input}><Text style={styles.inputText}>{formatDate(birthDate)}</Text></View>
                                    </TouchableOpacity>
                                    {showDatePicker && (
                                        <DatePicker
                                            testID="datePicker"
                                            value={birthDate}
                                            mode="date"
                                            display="default"
                                            onChange={(event, selectedDate) => {
                                                const currentDate = selectedDate || birthDate;
                                                setShowDatePicker(false);
                                                setBirthDate(currentDate);
                                            }}
                                        />
                                    )}
                                    <ErrorMessage
                                        errorValue={touched.birthDate && errors.birthDate}
                                    />
                            </View>
                            </View>
                            
                            <View style={styles.formGroup}>
                                <TextInput
                                    style={styles.input}
                                    value={values.university}
                                    onChangeText={handleChange("university")}
                                    onBlur={handleBlur("university")}
                                    placeholder="Universidade"
                                />

                                <ErrorMessage
                                    errorValue={touched.university && errors.university}
                                />
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

                            <View style={styles.formGroup}>
                                <TextInput
                                    class="confirmPassword"
                                    style={styles.input}
                                    value={values.confirmPassword}
                                    onChangeText={handleChange("confirmPassword")}
                                    onBlur={handleBlur("confirmPassword")}
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    placeholder="Confirmar senha"
                                />

                                <ErrorMessage
                                    errorValue={touched.confirmPassword && errors.confirmPassword}
                                />
                            </View>

                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>CRIAR CONTA</Text>
                            </TouchableOpacity>
                        </KeyboardAwareScrollView>
                    )}
                </Formik>
            </SafeAreaView>
        </>
    );
}
