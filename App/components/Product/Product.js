import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from "./styles"


export function Product({ image, title, subtitle, onPress }) {
    //console.log(navigation)
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </View>

    )
}


