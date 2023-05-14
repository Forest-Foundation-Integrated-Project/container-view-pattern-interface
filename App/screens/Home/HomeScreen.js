import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AuthContext } from '../../store/auth-context'
import { styles } from "./styles"

export default function HomeScreen({ navigation }) {
    // const authCtx = useContext(AuthContext)
    // const token = authCtx.fetchToken();
    // console.log(authCtx);
    const [products, setProducts] = useState([
        {
            "id": 1,
            "title": "Product 1",
            "description": "Description for Product 1",
            "seller_id": 1,
            "price_cents": 1999,
            "tag_id": 1,
            "subtitle": "subtitle here"
        },
        {
            "id": 2,
            "title": "Product 2",
            "description": "Description for Product 2",
            "seller_id": 2,
            "price_cents": 2999,
            "tag_id": 2,
            "subtitle": "subtitle here"
        },
        {
            "id": 3,
            "title": "Product 3",
            "description": "Description for Product 3",
            "seller_id": 1,
            "price_cents": 3999,
            "tag_id": 3,
            "subtitle": "subtitle here"
        },
        {
            "id": 4,
            "title": "Product 4",
            "description": "Description for Product 4",
            "seller_id": 3,
            "price_cents": 4999,
            "tag_id": 2,
            "subtitle": "subtitle here"
        }
    ]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

