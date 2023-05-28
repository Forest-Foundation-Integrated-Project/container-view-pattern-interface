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
import { headerProductStyles } from "./headerProductStyles";
import { ProductList } from "../../components/Product/ProductList";
import { Product } from "./../../components/Product/Product";
import { ProdStyles } from "./../../components/Product/styles";
import { Button } from "./../../components/Button";
import { BackButtom } from "../../components/BackButton";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { CIANO } from "../../constants/colors";

export function HeaderProduct({ route }) {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View>
        <Pressable onPress={closeModal}>
          <View style={headerProductStyles.userSession}>
            <Image
              style={headerProductStyles.userImage}
              source={{ uri: route.params.profile.image }}
            />
            <View style={headerProductStyles.userIfo}>
              <Text style={headerProductStyles.userName}>
                {route.params.profile.name}
              </Text>
              <Text numberOfLines={1} style={headerProductStyles.userLocation}>
                {route.params.profile.university} - {route.params.profile.city}{" "}
              </Text>
            </View>
          </View>
          <View
            style={[
              headerProductStyles.productSession,
              headerProductStyles.shadow,
            ]}
          >
            <Image
              source={{ uri: route.params.item.image }}
              style={headerProductStyles.prodImage}
            />
            <View style={headerProductStyles.prodInfo}>
              <View style={headerProductStyles.topDesc}>
                <Text style={headerProductStyles.prodTitle}>
                  {route.params.item.title}
                </Text>
                <Text style={headerProductStyles.prodPrice}>
                  R${route.params.item.price_cents / 100}
                </Text>
              </View>
              <Text style={headerProductStyles.prodDesc}>
                {route.params.item.description}
              </Text>
            </View>
          </View>
          <View style={headerProductStyles.contactUserSection}>
            <TouchableOpacity
              style={headerProductStyles.buttoncontactUser}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={[
                  headerProductStyles.buttonLabel,
                  headerProductStyles.shadow,
                ]}
              >
                Contatar Vendedor
              </Text>
            </TouchableOpacity>
          </View>
          <View style={headerProductStyles.productList}>
            <Text style={headerProductStyles.label}>
              Outros produtos desse vendedor
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={headerProductStyles.mcenteredView}>
              <View style={headerProductStyles.mmodalView}>
                <View style={headerProductStyles.muserSession}>
                  <Image
                    style={headerProductStyles.muserImage}
                    source={{ uri: route.params.profile.image }}
                  />
                  <View style={headerProductStyles.muserIfo}>
                    <Text style={headerProductStyles.muserName}>
                      {route.params.profile.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={headerProductStyles.muserLocation}
                    >
                      {route.params.profile.university} -{" "}
                      {route.params.profile.city}{" "}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={headerProductStyles.mbutton}>
                  <Text style={headerProductStyles.mbuttonText}>
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
