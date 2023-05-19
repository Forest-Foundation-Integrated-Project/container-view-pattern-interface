import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./styles"

function bt(navigation){
    //console.log(navigation)
    //navigation.navigate('ProductScreen')
 //console.log('oi')
}
export function Product({ image, title, subtitle, navigation }) {
    //console.log(navigation)
    return (

        <View style={styles.container}>
            <TouchableWithoutFeedback style={{ backgroundColor: 'red' }} onPress={bt(navigation)}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </View>

    )
}


