import React, { useState, useContext, useEffect, Component } from "react";
import {
  SafeAreaView,
  FlatList,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Pressable,
} from "react-native";
import { UserProductStyles } from "./styles";

export function ProductImageRoller(images) {
  const imgObj = { ...images.images };
  console.log(imgObj.images)
  return (
    <FlatList 
    data={imgObj.images} 
    horizontal={true}
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => <ProdPic pic={item} />}/>
  );
}

function ProdPic(pic) {
  return (
    <Image
      source={{ uri: pic.pic }}
      style={UserProductStyles.prodImage}
    />
  );
}
