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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Product } from "./../../components/Product/Product";
import { ProdStyles } from "./../../components/Product/styles";
import { Button } from "./../../components/Button"

export default function ProductScreen({ navigation, route }) {
  //console.log(route.params)
  return (
    <View style={styles.container}>
      <View style={styles.userSession}>
        <Text>container do Vendedor</Text>
      </View>

      <View style={[styles.productSession, styles.shadow]}>
        <Image source={{ uri: route.params.image }} style={styles.prodImage} />
        <View style={styles.prodInfo}>
          <View style={styles.topDesc}>
            <Text style={styles.prodTitle}>{route.params.title}</Text>
            <Text style={styles.prodPrice}>R${route.params.price_cents / 100}</Text>
          </View>
          <Text style={styles.prodDesc}>{route.params.description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttoncontactUser}><Text style={styles.buttonLabel}>Contatar Vendedor</Text></TouchableOpacity>
      <Text style={styles.label}>Outros produtos desse vendedor</Text>

      

    </View>
  );
}
