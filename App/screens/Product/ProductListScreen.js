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
import { ProductImageRoller } from "./ProductImageRoller";
import { ProductList } from "../../components/Product/ProductList";
import { BackButtom } from "../../components/BackButton";
import getUser from "../../services/users/getUser";
import { userProductsApi } from "../Home/hooks/userProductsApi";

export default function ProductListScreen({ navigation, route }) {
  const [profile, setProfile] = useState("");
  const [loadProducts, setLoadProducts] = useState("");
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  async function fetchUser() {
    try {
      console.log(route.params.item.sellerId);
      const res = await getUser(route.params.item.sellerId);
      setProfile(res.data);
    } catch (error) {
      console.log(`erro: ${error}`);
    }
  }

  async function fetchProducts() {
    try {
      const { requestProducts } = userProductsApi({
        setLoad: setLoadProducts,
        onSuccess: setProducts,
        sellerId: route.params.item.sellerId,
      });
      requestProducts();
      console.log(products);
    } catch (error) {
      console.log(error);
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
    fetchProducts();
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
          listHeaderComponent={() => (
            <>
              <View>
                <Pressable onPress={closeModal}>
                  <View style={UserProductStyles.tags}>
                    <Text style={UserProductStyles.tagLabel}>Alumnus /</Text>
                    <Text style={UserProductStyles.tagLabel} numberOfLines={1}>
                      Produtos /
                    </Text>
                    <Text style={UserProductStyles.tagLabel} numberOfLines={1}>
                      {route.params.item.seller.name} /
                    </Text>
                    <Text style={UserProductStyles.tagLabel} numberOfLines={1}>
                      {route.params.item.title}
                    </Text>
                  </View>

                  <TouchableWithoutFeedback onPress={goToProfile}>
                    <View style={UserProductStyles.userSession}>
                      <Image
                        style={UserProductStyles.userImage}
                        source={{ uri: profile.profileImage }}
                      />
                      <View style={UserProductStyles.userIfo}>
                        <Text style={UserProductStyles.userName}>
                          {profile.name}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={UserProductStyles.userLocation}
                        >
                          {profile.university} - {profile.city}{" "}
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
                    <ProductImageRoller images={route.params.item} />

                    <View style={UserProductStyles.prodInfo}>
                      <View style={UserProductStyles.topDesc}>
                        <Text style={UserProductStyles.prodTitle}>
                          {route.params.item.title}
                        </Text>
                        <Text style={UserProductStyles.prodPrice}>
                          R${(route.params.item.priceCents / 10000).toFixed(2)}
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
                            source={{ uri: profile.profileImage }}
                          />
                          <View style={UserProductStyles.muserInfo}>
                            <Text style={UserProductStyles.muserName}>
                              {profile.name}
                            </Text>
                            <Text
                              numberOfLines={1}
                              style={UserProductStyles.muserLocation}
                            >
                              {profile.university} -{profile.city}
                            </Text>
                            <Text
                              numberOfLines={1}
                              style={UserProductStyles.muserRole}
                            >
                              {profile.role}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity style={UserProductStyles.mbutton}>
                          <Text style={UserProductStyles.mbuttonText}>
                            {profile.contact_info}
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
