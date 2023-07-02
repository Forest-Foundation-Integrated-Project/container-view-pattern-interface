import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { Product } from "./Product";
import { useListProductsMutation } from "../../services/products";

export function ProductList({ navigation, listHeaderComponent }) {
  const [listProducts, { isLoading, data, reset }] = useListProductsMutation()
  const [lastKey, setLastKey] = useState(null);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    await listProducts({ limit: 5, lastKey }).unwrap()
      .catch(err => console.log('deu ruim ', JSON.stringify(err)))
  }

  const handleLoadNextProducts = async () => {
    if (!lastKey) return

    loadProducts()
  }

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (data?.data) {
      setLastKey(data?.lastKey ? JSON.stringify(data.lastKey) : null)
      setProducts([...products, ...data.data])
      reset()
    }
  }, [isLoading])

  const productPressed = (navigation, item) => {
    navigation.navigate("ProductScreen", { item });
  };

  const renderItem = ({ item }) => {
    const isSingleItem = products.length === 1;
    const itemStyle = isSingleItem ? styles.singleItem : styles.item;
    const columnWrapperStyle = isSingleItem
      ? styles.singleItemColumn
      : styles.row;
    return (
      <View style={itemStyle}>
        <Product
          image={"https://placehold.co/600x400.png"}
          title={item.title}
          subtitle={item.seller.name}
          price={(item.priceCents / 100).toFixed()}
          onPress={() => productPressed(navigation, item)}
        />
      </View>
    );
  };

  const FooterActivityIndicator = () => isLoading ? <ActivityIndicator style={styles.activityIndicator} size="large" /> : null

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={listHeaderComponent}
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.productId}
      numColumns={2}
      columWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      onEndReached={handleLoadNextProducts}
      onEndReachedThreshold={0.1}
      ListFooterComponent={FooterActivityIndicator}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 0.5,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  singleItem: {
    flex: 0.5,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  singleItemColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  activityIndicator: {
    marginTop: 20,
    marginBottom: 10,
  },
});
