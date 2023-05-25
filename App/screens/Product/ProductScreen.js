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
  //console.log(route.params.profile)
  return (
    <View style={styles.container}>
      <View style={styles.userSession}>
        <Image style={styles.userImage} source={{uri: route.params.profile.image}} />
        <View style={styles.userIfo}>
          <Text style={styles.userName}>{route.params.profile.name}</Text>
          <Text numberOfLines={1} style={styles.userLocation}>{route.params.profile.university} - {route.params.profile.city} </Text>
        </View>
        
      </View>

      <View style={[styles.productSession, styles.shadow]}>
        <Image source={{ uri: route.params.item.image }} style={styles.prodImage} />
        <View style={styles.prodInfo}>
          <View style={styles.topDesc}>
            <Text style={styles.prodTitle}>{route.params.item.title}</Text>
            <Text style={styles.prodPrice}>R${route.params.item.price_cents / 100}</Text>
          </View>
          <Text style={styles.prodDesc}>{route.params.item.description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttoncontactUser}><Text style={[styles.buttonLabel, styles.shadow]}>Contatar Vendedor</Text></TouchableOpacity>
      <Text style={styles.label}>Outros produtos desse vendedor</Text>
    </View>
  );
}
