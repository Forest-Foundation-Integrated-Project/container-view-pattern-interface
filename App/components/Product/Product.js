import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { styles } from "./styles"

export function Product({ image, title, subtitle }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}