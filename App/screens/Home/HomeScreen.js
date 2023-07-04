import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { ProductList } from "./../../components/Product/ProductList"
import { styles } from "./styles";

export default function HomeScreen({ navigation }) {
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
          navigation={navigation}
          ListHeaderComponent={<></>}
        />
      </SafeAreaView>
    </>
  );
}
