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
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { ProductList } from "./../../components/Product/ProductList";
import { useSelector } from "react-redux";
import {
  handleAuthenticate,
  handleLogout,
} from "../../store/redux/authentication";
import { userProductsApi } from "./hooks/userProductsApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const profile = useSelector((state) => state.authentication.user);
  const [products, setProducts] = useState([]);

  const [loadProducts, setLoadProducts] = useState("");

  const { requestProducts } = userProductsApi({
    setLoad: setLoadProducts,
    onSuccess: setProducts,
  });

  useEffect(() => {
    requestProducts();
  }, []);

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
