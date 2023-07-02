import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { ProductList } from "./../../components/Product/ProductList"
import { useSelector } from "react-redux";
import { useListProductsMutation } from "../../services/products";
import { styles } from "./styles";

export default function HomeScreen({ navigation }) {
  const profile = useSelector((state) => state.authentication.user);
  const [listProducts, { isLoading, data }] = useListProductsMutation()
  const [products, setProducts] = useState([]);


  const load = async () => await listProducts({ limit: 5 }).unwrap()
    .catch(err => console.log('deu ruim ', JSON.stringify(err)))

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (data?.data.length) {
      setProducts(data.data)
    }
  }, [isLoading])

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
