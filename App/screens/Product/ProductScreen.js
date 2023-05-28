import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { ProductList } from "../../components/Product/ProductList";
import { Product } from "./../../components/Product/Product";
import { ProdStyles } from "./../../components/Product/styles";
import { Button } from "./../../components/Button";
import { BackButtom } from "../../components/BackButton";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { CIANO } from "../../constants/colors";
import { HeaderProduct } from "./../../components/Product/HeaderProduct";

export default function ProductScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goBack}>
          <BackButtom />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const [profile, setProfiles] = useState({
    id: 1,
    name: "Beatrice Castro Goncalves",
    university: "IFSP",
    city: "Caraguatatuba",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
  });
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${profile.name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
    },
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${profile.name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
    },
  ]);

  function goBack() {
    navigation.goBack();
  }

  function openSellerProfile() {}

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <View style={styles.container}>
        <ProductList
          navigation={navigation}
          products={products}
          profile={profile}
          listHeaderComponent={() => (
            <HeaderProduct route={route} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
}
