import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { ProductScreen } from "../Product/ProductListScreen";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { ProductList } from "./../../components/Product/ProductList";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const profile = useSelector((state) => state.authentication.user);
  // const products = useSelector((state) => state.product.products);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `test`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
    },
    {
      id: 2,
      title: "Aula de matemática",
      description: "Description for Product 2",
      seller_id: 2,
      price_cents: 2999,
      tag_id: 2,
      subtitle: `Test Name`,
      image:
        "https://api.time.com/wp-content/uploads/2017/10/how-to-improve-math-class.jpg?quality=85&w=1200&h=628&crop=1",
    },
    {
      id: 3,
      title: "Te ensinarei python do zero",
      description: "Description for Product 3",
      seller_id: 1,
      price_cents: 3999,
      tag_id: 3,
      subtitle: `Test Name`,
      image: "https://www.digicad.com.br/wp-content/uploads/2022/08/python.jpg",
    },
    {
      id: 4,
      title: "Cookies",
      description: "Description for Product 4",
      seller_id: 3,
      price_cents: 4999,
      tag_id: 2,
      subtitle: `Test Name`,
      image:
        "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-mediumThreeByTwo440.jpg",
    },
  ]);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View style={styles.bannerArea}>
          <View style={[styles.banner, styles.shadow]}>
            <Image
              style={styles.bannerImage}
              source={require("../../assets/images/banner.png")}
            />
          </View>
        </View>

        <View style={styles.orderOptions}>
          <TouchableOpacity
            style={[
              styles.toggleOption,
              styles.toggleOptionActive,
              styles.shadow,
            ]}
          >
            <Text style={[styles.orderOption, styles.orderOptionActive]}>
              Novidades
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.toggleOption, styles.shadow]}>
            <Text style={styles.orderOption}>Ordenar por</Text>
          </TouchableOpacity>
        </View>

        <ProductList
          products={products}
          profile={profile}
          navigation={navigation}
          ListHeaderComponent={<></>}
        ></ProductList>
      </SafeAreaView>
    </>
  );
}
