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
import { styles } from "./styles";
import { ProductList } from "../../components/Product/ProductList";
import { BackButtom } from "../../components/BackButton";
import { StyleSheet } from "react-native";
import getUser from "../../services/users/getUser";
import { CIANO, PRETO, CINZA, CNZACL, BRANCO } from "../../constants/colors";

export default function ProductListScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  async function fetchUser() {
    try {
      const res = await getUser(user.userId);
      console.log(res);
      setProfile(res.user);
    } catch (error) {
      console.log(`erro: ${error}`);
    }
  }

  useEffect(() => {
    fetchUser();
  });

  // profile = {
  //   id: 1,
  //   userId: "d32b8356-f81f-4823-bf77-9a967bbb630a",
  //   name: "Outra Pessoaaa",
  //   university: "IFSP",
  //   phone: "(12) 99999-9999",
  //   city: "Caraguatatuba",
  //   image:
  //     "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
  // };

  function goToProfile() {
    navigation.navigate("Profile", { loadUser: true, user: { id: seller_id } });
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
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${seller_name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      seller: {
        id: 1,
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
      seller_id: 1,
      price_cents: 1999,
      tag_id: 1,
      subtitle: `${seller_name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      seller: {
        id: 1,
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
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <View style={styles.container}>
        <ProductList
          navigation={navigation}
          products={products}
          listHeaderComponent={() => (
            <>
              <View>
                <Pressable onPress={closeModal}>
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
                      style={UserProductStyles.buttoncontactUser}
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

export const UserProductStyles = StyleSheet.create({
  topSafeArea: {},

  topSafeArea: {},
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  userSession: {
    maxWidth: "100%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  userIfo: {
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userLocation: {
    fontSize: 14,
    color: CINZA,
  },
  productSession: {
    maxWidth: 350,
    maxHeight: 500,
    backgroundColor: BRANCO,
    borderRadius: 15,
  },
  contactUserSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  productList: {
    width: "100%",
  },
  prodImage: {
    width: 400,
    height: 300,
    // height: 250,
    // width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  prodInfo: {
    marginHorizontal: 10,
    //alignItems: 'flex-start',
    flexWrap: "wrap",
  },
  topDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prodTitle: {
    fontWeight: "bold",
    fontSize: 20,
    maxWidth: 170,
  },
  prodPrice: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  prodDesc: {
    fontSize: 16,
    color: CINZA,
    flexWrap: "wrap",
    maxWidth: 290,
  },
  buttoncontactUser: {
    margin: 20,
    backgroundColor: CIANO,
    borderRadius: 15,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: BRANCO,
    marginHorizontal: 50,
    marginVertical: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  //prefix m is related to seller modal
  mcenteredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  mmodalView: {
    height: "65%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
  },
  mbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 100,
    backgroundColor: CIANO,
    justifyContent: "center",
    alignItems: "center",
  },
  mbuttonText: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    fontWeight: 700,
  },
  mbuttonOpen: {
    backgroundColor: "#F194FF",
  },
  mbuttonClose: {
    backgroundColor: "#2196F3",
  },
  mtextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  mmodalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  muserSession: {
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    alignContent: "center",
  },
  muserImage: {
    height: 150,
    width: 150,
    borderRadius: 150,
    alignSelf: "center",
  },
  muserName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  muserLocation: {
    fontSize: 18,
    color: "grey",
    alignSelf: "center",
  },
  muserIfo: {},
});
