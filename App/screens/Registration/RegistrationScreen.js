import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    Image,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from '@react-native-community/datetimepicker';
import { Formik } from "formik";
import * as yup from "yup";
import { validationSchema } from "./validation";
import { styles } from "./styles";
import { createUser } from "../../services/users/post";
import { touchProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const ErrorMessage = ({ errorValue }) => {
    return errorValue ? (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorValue}</Text>
        </View>
    ) : null;
};

export default function RegistrationScreen({ navigation }) {
    const [birthDate, setBirthDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [gender, setGender] = useState('Gender')

    function onSubmitHandler(userData) {
        console.log("hi?")
        userData.birthDate = formatDate(birthDate)
        userData.gender = gender
        console.log(userData.gender)
        response = createUser(userData)
        console.log(navigation);
        navigation.navigate("Home");
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }

    function brFormatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    return (

        <>
            <SafeAreaView style={styles.topSafeArea} />

            <StatusBar style="light" />

            <SafeAreaView style={styles.container}>
                {/* https://formik.org/docs/overview */}
                <Formik

                    initialValues={{
                        name: "",
                        email: "",
                        gender: "",
                        birthDate: "",
                        university: "",
                        password: "",
                        confirmPassword: "",
                        enroll: Math.random().toString(36).substring(2, 7),
                        birthDate: birthDate
                    }}
                    onSubmit={(values) => {
                        onSubmitHandler(values);
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
                        // https://github.com/APSL/react-native-keyboard-aware-scroll-view
                        <KeyboardAwareScrollView
                            style={styles.content}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.formGroup}>
                                <TextInput
                                    style={styles.input}
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                    placeholder="Nome"
                                />

                                <ErrorMessage errorValue={touched.name && errors.name} />
                            </View>
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
                            <View style={styles.dualFormGroup}>

                                <View>
                                    <View style={styles.inputPicker}>
                                        <Picker
                                            style={styles.picker}
                                            selectedValue={gender}
                                            value={gender}
                                            onBlur={handleBlur("gender")}
                                            onValueChange={(item, indexItem) => {
                                                setGender(item)
                                                setFieldValue('gender', item)

                                            }}>
                                            <Picker.Item style={styles.pickerText} key={0} label="Gênero" value="" />
                                            <Picker.Item style={styles.pickerSelect} key={1} label="Masculino" value="male" />
                                            <Picker.Item style={styles.pickerSelect} key={2} label="Feminino" value="fem" />
                                            <Picker.Item style={styles.pickerSelect} key={3} label="Outro" value="other" />
                                        </Picker>
                                    </View>
                                    <ErrorMessage errorValue={touched.gender && errors.gender} />
                                </View>

                                <View style={styles.formGroup}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setShowDatePicker(true);
                                        }}
                                    >
                                        <View style={styles.input}><Text id='a' style={styles.inputText}>{brFormatDate(birthDate)}</Text></View>
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
