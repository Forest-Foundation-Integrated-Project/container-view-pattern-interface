import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from "./styles"

const productPress = () =>{
    navigation.navigate('ProductScreen')
}

export function Product({ image, title, subtitle, token }) {
    return (
        <TouchableOpacity onPress= {productPress}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}