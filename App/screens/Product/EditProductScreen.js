import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import ErrorMessage from "./../../components/ErrorMessage";
import { Formik } from "formik";
import { CIANO, CONTENT_BACKGROUND } from "./../../constants/colors";
import updateProduct from "../../services/products/updateProduct";

export default function EditProductScreen({ navigation, route }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (route.params && route.params.product) {
      setProduct(route.params.product);
    }
  }, []);

  function handleUploadImages() {
    navigation.navigate("UploadImage", { product: product });
  }

  function transformPriceCents(priceCents) {
    const priceToString = priceCents ? (priceCents / 100).toFixed(2) : "";
    return `R$ ${priceToString}`;
  }

  async function onSubmitHandler(productData) {
    productData.priceCents =
      productData.priceCents.replace(/[^\d.,]/g, "") * 100;

    productData.sellerId = product.sellerId;
    productData.productId = product.productId;

    try {
      const res = await updateProduct(productData);
      navigation.navigate("EditProducts", {
        userId: product.sellerId,
        key: `${Date.now()}`,
      });
    } catch (error) {
      console.log(`EditProductScreen::Erro: ${error}`);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        {product && (
          <View style={styles.productContainer}>
            <View style={styles.uploadContainer}>
              <TouchableOpacity onPress={handleUploadImages}>
                <Image
                  style={styles.productImage}
                  source={{ uri: product.images[0] }}
                />
                <Text style={styles.uploadTitle}>
                  Adicione até três imagens para seu produto.
                </Text>
              </TouchableOpacity>
            </View>

            <Formik
              initialValues={{
                title: product.title,
                priceCents: (product.priceCents / 100).toFixed(2),
                description: product.description,
                category: "Alimentos",
              }}
              onSubmit={(values) => {
                onSubmitHandler(values);
              }}
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
                  style={styles.content}
                  showsVerticalScrollIndicator={false}
                >
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Título</Text>
                    <TextInput
                      style={styles.input}
                      value={values.title}
                      onChangeText={handleChange("title")}
                      onBlur={handleBlur("title")}
                      placeholder="Cupcake"
                    />

                    <ErrorMessage errorValue={touched.title && errors.title} />
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Preço</Text>
                    <TextInput
                      style={styles.input}
                      value={values.priceCents}
                      onChangeText={handleChange("priceCents")}
                      onBlur={handleBlur("priceCents")}
                      autoCapitalize="none"
                      placeholder="R$ 5,00"
                    />

                    <ErrorMessage
                      errorValue={touched.priceCents && errors.priceCents}
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>Categoria</Text>
                    <View style={styles.inputPicker}>
                      <Picker
                        style={styles.picker}
                        selectedValue={values.category}
                        onBlur={handleBlur("category")}
                        onValueChange={(item) => {
                          setFieldValue("category", item);
                        }}
                      >
                        <Picker.Item
                          style={styles.pickerText}
                          label="Alimentos"
                          value="Alimentos"
                        />
                      </Picker>
                      <TextInput value="Alimentos"></TextInput>
                    </View>
                    <ErrorMessage
                      errorValue={touched.category && errors.category}
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                      style={{
                        ...styles.input,
                        height: 100,
                        alignItems: "flex-start",
                      }}
                      value={values.description}
                      multiline={true}
                      numberOfLines={5}
                      onChangeText={handleChange("description")}
                      onBlur={handleBlur("description")}
                      placeholder="ex: Cupcake de morango, chocolate belga e cobertura de brigadeiro..."
                    />

                    <ErrorMessage
                      errorValue={touched.description && errors.description}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>Editar produto</Text>
                  </TouchableOpacity>
                </KeyboardAwareScrollView>
              )}
            </Formik>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topSafeArea: {},
  content: {
    paddingHorizontal: 30,
    backgroundColor: CONTENT_BACKGROUND,
    paddingTop: 30,
  },
  input: {
    minWidth: 165,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  label: {
    color: "#383838",
    paddingLeft: 15,
    fontSize: 14,
    fontWeight: 700,
    paddingVertical: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    height: 50,
    width: "60%",
    backgroundColor: CIANO,
    borderRadius: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
  },
  inputPicker: {
    minWidth: 165,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },
  picker: {
    width: 30,
    height: 30,
    paddingRight: 10,
  },
  pickerText: {
    color: "cccccc",
    fontSize: 14,
  },
  uploadContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  uploadTitle: {
    fontSize: 16,
    textAlign: "center", // Added textAlign
    marginTop: 10, // Added marginTop
  },
});
