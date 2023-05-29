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
import { ProductScreen } from "../Product/ProductScreen";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Product } from "./../../components/Product/Product";
import { ProductList } from "../../components/Product/ProducList";

export default function HomeScreen({ navigation }) {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Beatrice Castro Goncalves",
      university: "IFSP",
      city: "Caraguatatuba",
      contactInformation: "beatrice@gmail.com",
      image:
        "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
      id: 2,
      name: "Danilo Almeida Cavalcanti",
      university: "Módulo",
      city: "Caraguatatuba",
      contactInformation: "(12) 12312-3123",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Pedro Rodrigo",
      university: "Anhanguera",
      city: "Caraguatatuba",
      contactInformation: "pedro.rod@hotmail.com",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Julieta Melo Azevedo",
      university: "IFSP",
      city: "Caraguatatuba",
      contactInformation: "(12) 32132-1321",
      image:
        "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${profiles[0].name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
    },
    {
      id: 1,
      title: "Bolinho",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 599,
      tag_id: 1,
      subtitle: `${profiles[0].name}`,
      image:
        "https://i0.wp.com/cooknenjoy.com/wp-content/uploads/2019/05/P1180804.jpg?w=1200&ssl=1",
    },
    {
      id: 2,
      title: "Aula de matemática",
      description: "Description for Product 2",
      seller_id: 2,
      price_cents: 2999,
      tag_id: 2,
      subtitle: `${profiles[1].name}`,
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
      subtitle: `${profiles[2].name}`,
      image: "https://www.digicad.com.br/wp-content/uploads/2022/08/python.jpg",
    },
    {
      id: 4,
      title: "Cookies",
      description: "Description for Product 4",
      seller_id: 3,
      price_cents: 4999,
      tag_id: 2,
      subtitle: `${profiles[3].name}`,
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

        <ProductList navigation={navigation} products={products} profiles={profiles}></ProductList>
      </SafeAreaView>
    </>
  );
}
