import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BackButtom } from "../../components/BackButton";
import upload from "../../services/upload/upload";
import getPresignedUrl from "./../../services/upload/getPresignedUrl";
import * as ImagePicker from "expo-image-picker";
import getProduct from "../../services/products/getProduct";

export default function CreateProductScreen({ navigation, route }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [presignedUrl, setPresignedUrl] = useState("");

  async function uploadImage() {
    try {
      await upload(presignedUrl, selectedImage);
      const res = await getProduct("27a077ab-de88-437b-a64b-f9a1d0f67be2");
      item = res.data;
      navigation.navigate("ProductScreen", { item });
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  }

  async function handleImagePicker() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }

  async function fetchPresignedUrl() {
    params = {
      sellerId: route.params.user.user_id,
      productId: "27a077ab-de88-437b-a64b-f9a1d0f67be2", //mocked for now because we cant filter on products yet;
    };

    try {
      const res = await getPresignedUrl(params);
      setPresignedUrl(res.data.url);
    } catch (error) {
      console.log("error on trying to fetch presignedUrl: ", error);
    }
  }

  useEffect(() => {
    fetchPresignedUrl();

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goBack}>
          <BackButtom />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function goBack() {
    navigation.goBack();
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }} />

      <StatusBar style="light" />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={handleImagePicker}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <TouchableOpacity onPress={uploadImage} disabled={!selectedImage}>
          <Text>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
