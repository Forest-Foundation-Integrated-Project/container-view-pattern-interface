import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Product } from "./../../components/Product/Product";
import { ProdStyles } from "./../../components/Product/styles";
import { Button } from "./../../components/Button";
import { EditButtom } from "../../components/EditButton";
import { BackButtom } from "../../components/BackButton";
import { ProductList } from "../../components/Product/ProducList";

export default function ProductScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goHome}>
          <BackButtom />
        </TouchableOpacity>
      ),
      headerRight: null,
    });

    function goHome() {
      navigation.navigate("Home");
    }
  }, [navigation]);

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Beatrice Castro Goncalves",
      university: "IFSP",
      city: "Caraguatatuba",
      image:
        "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${route.params.profile.name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
    },
    
    {
      id: 1,
      title: "Bolinho",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: 1,
      price_cents: 599,
      tag_id: 1,
      subtitle: `${route.params.profile.name}`,
      image:
        "https://i0.wp.com/cooknenjoy.com/wp-content/uploads/2019/05/P1180804.jpg?w=1200&ssl=1",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.userSession}>
          <Image
            style={styles.userImage}
            source={{ uri: route.params.profile.image }}
          />
          <View style={styles.userIfo}>
            <Text style={styles.userName}>{route.params.profile.name}</Text>
            <Text numberOfLines={1} style={styles.userLocation}>
              {route.params.profile.university} - {route.params.profile.city}{" "}
            </Text>
          </View>
        </View>

        <View style={[styles.productSession, styles.shadow]}>
          <Image
            source={{ uri: route.params.item.image }}
            style={styles.prodImage}
          />
          <View style={styles.prodInfo}>
            <View style={styles.topDesc}>
              <Text style={styles.prodTitle}>{route.params.item.title}</Text>
              <Text style={styles.prodPrice}>
                R${route.params.item.price_cents / 100}
              </Text>
            </View>
            <Text style={styles.prodDesc}>{route.params.item.description}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buttoncontactUser, styles.shadow]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={[styles.buttonLabel, styles.shadow]}>
            Contatar Vendedor
          </Text>
        </TouchableOpacity>
        <Text style={styles.label}>Outros produtos desse vendedor</Text>

        <ProductList
          navigation={navigation}
          products={products}
          profiles={profiles}
        />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable style={styles.modalBackground} onPress={() => {setModalVisible(false)}}>
          <View style={styles.modal}>
            <View style={styles.modalUserInfo}>
              <Image
                style={styles.modalUserImage}
                source={{ uri: route.params.profile.image }}
              />
              <View style={styles.modalUserDesc}>
                <Text style={styles.modalUserName}>
                  {route.params.profile.name}
                </Text>
                <Text style={styles.modalUserSchool}>
                  {route.params.profile.university}
                </Text>
                <Text style={styles.modalUserStatus}>Vendedor</Text>
              </View>
              <View style={[styles.modalContactView, styles.shadow]}>
                <Text style={styles.contactInfo}>Meu contato: </Text>
                <Text style={styles.contactInfo}>
                  {route.params.profile.contactInformation}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
