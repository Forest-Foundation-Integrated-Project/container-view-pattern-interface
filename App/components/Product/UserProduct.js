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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { UserProductStyles } from "./UserProductStyles";
import { ProductList } from "./ProductList";
import { Product } from "./Product";
import { ProdStyles } from "./styles";
import { Button } from "../Button";
import { BackButtom } from "../BackButton";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { CIANO } from "../../constants/colors";

export function UserProduct({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  function goToProfile() {
    navigation.navigate("Profile", {
      loadUser: true,
      key: route.params.profile.user_id + Date.now(),
      user: { id: route.params.profile.user_id },
      isLoggedUser: false,
    });
  }
  return (
    <>
      <View>
        <Pressable onPress={closeModal}>
          <TouchableWithoutFeedback onPress={goToProfile}>
            <View style={UserProductStyles.userSession}>
              <Image
                style={UserProductStyles.userImage}
                source={{ uri: route.params.profile.image }}
              />
              <View style={UserProductStyles.userIfo}>
                <Text style={UserProductStyles.userName}>
                  {route.params.profile.name}
                </Text>
                <Text numberOfLines={1} style={UserProductStyles.userLocation}>
                  {route.params.profile.university} -{" "}
                  {route.params.profile.city}{" "}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={[UserProductStyles.productSession, UserProductStyles.shadow]}
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
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={UserProductStyles.mcenteredView}>
              <View style={UserProductStyles.mmodalView}>
                <View style={UserProductStyles.muserSession}>
                  <Image
                    style={UserProductStyles.muserImage}
                    source={{ uri: route.params.profile.image }}
                  />
                  <View style={UserProductStyles.muserIfo}>
                    <Text style={UserProductStyles.muserName}>
                      {route.params.profile.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={UserProductStyles.muserLocation}
                    >
                      {route.params.profile.university} -{" "}
                      {route.params.profile.city}{" "}
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
  );
}
