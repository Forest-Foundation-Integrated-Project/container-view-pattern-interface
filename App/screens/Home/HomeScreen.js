import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles"
import { Product } from './../../components/Product/Product'

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "title": "Cupcake",
            "description": "Description for Product 1",
            "seller_id": 1,
            "price_cents": 1999,
            "tag_id": 1,
            "subtitle": "subtitle here",
            "image": "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg"
        },
        {
            "id": 2,
            "title": "Aula de matemática",
            "description": "Description for Product 2",
            "seller_id": 2,
            "price_cents": 2999,
            "tag_id": 2,
            "subtitle": "subtitle here",
            "image": "https://api.time.com/wp-content/uploads/2017/10/how-to-improve-math-class.jpg?quality=85&w=1200&h=628&crop=1"
        },
        {
            "id": 3,
            "title": "Te ensino python",
            "description": "Description for Product 3",
            "seller_id": 1,
            "price_cents": 3999,
            "tag_id": 3,
            "subtitle": "subtitle here",
            "image": "https://www.digicad.com.br/wp-content/uploads/2022/08/python.jpg"
        },
        {
            "id": 4,
            "title": "Cookies",
            "description": "Description for Product 4",
            "seller_id": 3,
            "price_cents": 4999,
            "tag_id": 2,
            "subtitle": "subtitle here",
            "image": "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-mediumThreeByTwo440.jpg"
        }
    ]);

    const renderItem = ({ item }) => {
        return (
            <Product image={item.image} title={item.title} subtitle={item.subtitle} />
        );
    };

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />

            <StatusBar style="light" />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                />
            </SafeAreaView>
        </>

    );
};

