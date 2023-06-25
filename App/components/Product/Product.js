import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Product({ image, title, subtitle, price, onPress }) {
  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{uri:image}} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text numberOfLines={1} style={styles.subtitle}>
              {subtitle}
            </Text>
            <Text numberOfLines={1} style={styles.price}>
              R${price/100}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
