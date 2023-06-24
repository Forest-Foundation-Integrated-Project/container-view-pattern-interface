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
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  async function fetchUser() {
    console.log("AQUI")
    try {
      console.log(route.params.item.sellerId)
      const res = await getUser(route.params.item.sellerId);
      console.log('user' + JSON.stringfy(res))
      setProfile(res.data);
    } catch (error) {
      console.log(`erro: ${error}`);
    }
  }

  function goToProfile() {
    navigation.navigate("Profile", {
      loadUser: true,
      user: { id: route.params.item.sellerId },
      key: route.params.item.sellerId + Date.now(),
      isLoggedUser: false,
    });
  }

  useEffect(() => {
    fetchUser();
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goBack}>
          <BackButtom />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function goBack() {
    navigation.goBack();
  }


  return (
    <>
      <SafeAreaView style={UserProductStyles.topSafeArea} />

      <StatusBar style="light" />

      <View style={UserProductStyles.container}>
        <ProductList
          navigation={navigation}
          products={products}
          listHeaderComponent={(profile) => (
            <>
              <View>
                <Pressable onPress={closeModal}>
                  <View style={UserProductStyles.tags}>
                    <Text style={UserProductStyles.tagLabel}>Alumnus /</Text>
                    <Text style={UserProductStyles.tagLabel}>Produtos /</Text>
                    <Text style={UserProductStyles.tagLabel}>{route.params.item.seller.name} /</Text>
                    <Text style={UserProductStyles.tagLabel}>{route.params.item.title}</Text>
                  </View>

                  <TouchableWithoutFeedback onPress={goToProfile}>
                    <View style={UserProductStyles.userSession}>
                      <Image
                        style={UserProductStyles.userImage}
                        source={{ uri: "https://placehold.co/600x400" }}
                      />
                      <View style={UserProductStyles.userIfo}>
                        <Text style={UserProductStyles.userName}>
                          {profile.name}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={UserProductStyles.userLocation}
                        >
                          {profile.university} -{" "}
                          {profile.city}{" "}
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
                          R${(route.params.item.priceCents/10000).toFixed(2)}
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
