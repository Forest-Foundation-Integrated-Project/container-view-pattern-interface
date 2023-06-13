import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { styles } from "./styles";
import { Alert } from "react-native";
import { brFormatDate, formatDate } from "../../../utils/date";
import updateUser from "../../../services/users/updateUser";
import ErrorMessage from "../../../components/ErrorMessage";
import { useNavigation } from "@react-navigation/native";

export default function EditProfileForm({ user, route }) {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState("Gender");

  const onSubmitHandler = async (userData) => {
    try {
      userData.birthDate = formatDate(birthDate);
      userData.gender = gender;
      const res = await updateUser(user.user_id, userData);
      navigation.navigate("Profile", {
        loadUser: true,
        user: { id: user.user_id },
        key: user.id + Date.now(),
        canEdit: true,
      });

      navigation.setParams({
        successMessage: "Dados atualizados com sucesso!",
      });
    } catch (error) {
      Alert.alert(`erro: ${error}`);
    }
  };

  return (
    <Formik
      initialValues={{
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthDate: user.birthDate,
        university: user.university,
        enroll: Math.floor(Math.random() * 90000) + 10000,
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
            <Text style={styles.label}>Name</Text>
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
            <Text style={styles.label}>Email</Text>
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
              <Text style={styles.label}>Gênero</Text>
              <View style={styles.inputPicker}>
                <Picker
                  style={styles.picker}
                  selectedValue={gender}
                  value={gender}
                  onBlur={handleBlur("gender")}
                  onValueChange={(item, indexItem) => {
                    setGender(item);
                    setFieldValue("gender", item);
                  }}
                >
                  <Picker.Item
                    style={styles.pickerText}
                    key={0}
                    label="Gênero"
                    value=""
                  />
                  <Picker.Item
                    style={styles.pickerSelect}
                    key={1}
                    label="Masculino"
                    value="male"
                  />
                  <Picker.Item
                    style={styles.pickerSelect}
                    key={2}
                    label="Feminino"
                    value="female"
                  />
                  <Picker.Item
                    style={styles.pickerSelect}
                    key={3}
                    label="Outro"
                    value="other"
                  />
                </Picker>
                <TextInput
                  style={styles.inputText}
                  value={gender === "" ? "Gênero" : gender} // Display "Gênero" if no value is selected
                  editable={false} // Disable editing of the input
                />
              </View>
              <ErrorMessage errorValue={touched.gender && errors.gender} />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Data de Nascimento</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowDatePicker(true);
                }}
              >
                <View style={styles.input}>
                  <Text id="a" style={styles.inputText}>
                    {brFormatDate(birthDate)}
                  </Text>
                </View>
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
            <Text style={styles.label}>Universidade - Campus</Text>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => onSubmitHandler(values)}
          >
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
}
