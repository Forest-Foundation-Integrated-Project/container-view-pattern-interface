import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { userProductsApi } from "./../Home/hooks/userProductsApi";
import { StyleSheet, FlatList } from "react-native";

export default function EditProductsScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);

  const [loadProducts, setLoadProducts] = useState("");

  const { requestProducts } = userProductsApi({
    setLoad: setLoadProducts,
    onSuccess: setProducts,
    sellerId: route.params.userId,
  });

  function handleEditProduct(item) {
    navigation.navigate("EditProduct", { product: item });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      requestProducts();
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Editar Produtos</Text>
          <Text style={styles.subtitle}>Escolha um produto para editar</Text>
        </View>
        {products && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.productId} // Replace "id" with the actual unique identifier of your product object
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleEditProduct(item)}>
                <View style={styles.productContainer}>
                  <Image
                    style={styles.productImage}
                    source={{ uri: item.images[0] }}
                  />
                  <View style={styles.productSession}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.seller}>{item.seller.name}</Text>
                    <Text style={styles.price}>
                      {`R$ ${(item.priceCents / 100).toFixed()}`}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 10,
    elevation: 1, // For Android
  },
  productImage: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  productSession: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
  },
  productTitle: {
    marginVertical: 10,
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 700,
    alignSelf: "center",
  },
  subtitle: {
    marginVertical: 20,
    fontSize: 15,
    fontWeight: 700,
    paddingLeft: 10,
  },
  description: {
    color: "grey",
  },
  seller: {
    marginTop: 10,
    color: "grey",
    fontSize: 12,
    fontWeight: 700,
  },
  price: {
    fontSize: 16,
    fontWeight: 700,
  },
});
