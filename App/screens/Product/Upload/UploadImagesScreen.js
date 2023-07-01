import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { BackButtom } from "./../../../components/BackButton";
import upload from "./../../../services/upload/upload";
import getPresignedUrl from "./../../../services/upload/getPresignedUrl";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";
import { CIANO } from "./../../../constants/colors";

export default function UploadImagesScreen({ navigation, route }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState(null);
  const [presignedUrl, setPresignedUrl] = useState("");

  async function uploadImage() {
    try {
      await upload(presignedUrl, selectedImage);
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

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  }

  async function fetchPresignedUrl() {
    const params = {
      sellerId: route.params.product.sellerId,
      productId: route.params.product.productId,
    };

    try {
      const res = await getPresignedUrl(params);
      setPresignedUrl(res.data.url);
    } catch (error) {
      console.log("error on trying to fetch presignedUrl: ", error);
    }
  }

  function buildImagesList(images) {
    console.log("IMAGESSSS", images);
    const buildedImages = [...images, "", "", ""].slice(0, 3);

    return buildedImages;
  }

  useEffect(() => {
    setProduct(route.params.product);

    if (product) {
      const updatedImages = buildImagesList(product.images);
      setImages(updatedImages);
    }

    fetchPresignedUrl();

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goBack}>
          <BackButtom />
        </TouchableOpacity>
      ),
    });
  }, []);

  function goBack() {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Adcione ou exclua imagens</Text>
        </View>
        {product && (
          <View style={styles.productContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={images}
              keyExtractor={(item, index) => `image_${index}`}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: item ? item : "https://placehold.co/600x400.png",
                    }}
                  />
                  <TouchableOpacity
                    style={[
                      styles.uploadButton,
                      { backgroundColor: item ? "lightgrey" : CIANO },
                    ]}
                    onPress={handleImagePicker}
                  >
                    <Text style={styles.uploadButtonText}>
                      {item ? "Excluir" : "Adicionar"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
