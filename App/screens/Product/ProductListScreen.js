import React, { useState, useContext, useEffect } from "react";
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
import { StatusBar } from "expo-status-bar";
import { UserProductStyles } from "./styles";
import { ProductList } from "../../components/Product/ProductList";
import { BackButtom } from "../../components/BackButton";
import { StyleSheet } from "react-native";
import getUser from "../../services/users/getUser";
import { CIANO, PRETO, CINZA, CNZACL, BRANCO } from "../../constants/colors";

export default function ProductListScreen({ navigation, route }) {
  const [profile, setProfile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  async function fetchUser() {
    try {
      console.log("user_id: " + route.params.item.seller_id);
      const res = await getUser(route.params.item.seller_id);
      setProfile(res.data);
    } catch (error) {
      console.log(`erro: ${error}`);
    }
  }

  useEffect(() => {
    console.log("user_id: ")
    if (typeof profile == "undefined") {
      fetchUser();
    }
  }, []);

  function goToProfile() {
    navigation.navigate("Profile", {
      loadUser: true,
      user: { id: route.params.item.seller_id },
      key: route.params.item.seller_id + Date.now(),
      isLoggedUser: false,
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goBack}>
          <BackButtom />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const seller_name = "mocked but will be over soon";

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: "4b2ccf36-3742-45c3-80b6-2036a92d940f",
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${seller_name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      seller: {
        id: "4b2ccf36-3742-45c3-80b6-2036a92d940f",
        userId: "d32b8356-f81f-4823-bf77-9a967bbb630a",
        name: "Outra Pessoaaa",
        university: "IFSP",
        phone: "(12) 99999-9999",
        city: "Caraguatatuba",
        image:
          "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      },
    },
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: "4b2ccf36-3742-45c3-80b6-2036a92d940f",
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${seller_name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      seller: {
        id: "4b2ccf36-3742-45c3-80b6-2036a92d940f",
        userId: "d32b8356-f81f-4823-bf77-9a967bbb630a",
        name: "Outra Pessoaaa",
        university: "IFSP",
        phone: "(12) 99999-9999",
        city: "Caraguatatuba",
        image:
          "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      },
    },
  ]);

  function goBack() {
    navigation.goBack();
  }

  console.log(route.params.item);

  return (
    <>
      <SafeAreaView style={UserProductStyles.topSafeArea} />

      <StatusBar style="light" />

      <View style={UserProductStyles.container}>
        <ProductList
          navigation={navigation}
          products={products}
          listHeaderComponent={() => (
            <>
              <View>
                <Pressable onPress={closeModal}>
                  <View style={UserProductStyles.tags}>
                    <Text style={UserProductStyles.tagLabel}>Alumnus /</Text>
                    <Text style={UserProductStyles.tagLabel}>Categoria /</Text>
                    <Text style={UserProductStyles.tagLabel}>Usuario /</Text>
                    <Text style={UserProductStyles.tagLabel}>Produto </Text>
                  </View>

                  <TouchableWithoutFeedback onPress={goToProfile}>
                    <View style={UserProductStyles.userSession}>
                      <Image
                        style={UserProductStyles.userImage}
                        source={{ uri: route.params.item.seller.image }}
                      />
                      <View style={UserProductStyles.userIfo}>
                        <Text style={UserProductStyles.userName}>
                          {route.params.item.seller.name}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={UserProductStyles.userLocation}
                        >
                          {route.params.item.seller.university} -{" "}
                          {route.params.item.seller.city}{" "}
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                  <View
                    style={[
                      UserProductStyles.productSession,
                      UserProductStyles.shadow,
                    ]}
                  >
                    <Image
                      source={{ uri: route.params.item.image }}
                      style={UserProductStyles.prodImage}
                    />
                    <View style={UserProductStyles.prodInfo}>
                      <View style={UserProductStyles.topDesc}>
                        <Text style={UserProductStyles.prodTitle}>
                          {route.params.item.title}
                        </Text>
                        <Text style={UserProductStyles.prodPrice}>
                          R${route.params.item.price_cents / 100}
                        </Text>
                      </View>
                      <Text style={UserProductStyles.prodDesc}>
                        {route.params.item.description}
                      </Text>
                    </View>
                  </View>
                  <View style={UserProductStyles.contactUserSection}>
                    <TouchableOpacity
                      style={[
                        UserProductStyles.buttoncontactUser,
                        UserProductStyles.shadow,
                      ]}
                      onPress={() => setModalVisible(true)}
                    >
                      <Text
                        style={[
                          UserProductStyles.buttonLabel,
                          UserProductStyles.shadow,
                        ]}
                      >
                        Contatar Vendedor
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={UserProductStyles.productList}>
                    <Text style={UserProductStyles.label}>
                      Outros produtos desse vendedor
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                >
                  <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={UserProductStyles.mcenteredView}>
                      <View style={UserProductStyles.mmodalView}>
                        <View style={UserProductStyles.muserSession}>
                          <Image
                            style={UserProductStyles.muserImage}
                            source={{ uri: route.params.item.seller.image }}
                          />
                          <View style={UserProductStyles.muserIfo}>
                            <Text style={UserProductStyles.muserName}>
                              {route.params.item.seller.name}
                            </Text>
                            <Text
                              numberOfLines={1}
                              style={UserProductStyles.muserLocation}
                            >
                              {route.params.item.seller.university} -{" "}
                              {route.params.item.seller.city}{" "}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity style={UserProductStyles.mbutton}>
                          <Text style={UserProductStyles.mbuttonText}>
                            Meu Whatsapp: 12 99999-9999
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
              </View>
            </>
          )}
        />
      </View>
    </>
  );
}
