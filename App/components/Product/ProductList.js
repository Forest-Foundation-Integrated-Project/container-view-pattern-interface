import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Product } from "./Product";

export function ProductList({ navigation, products, listHeaderComponent }) {
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
          price={(item.priceCents/100).toFixed()}
          onPress={() => productPressed(navigation, item)}
        />
      </View>
    );
  };

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
});
