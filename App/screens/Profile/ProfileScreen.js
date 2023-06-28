import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Button, Image } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { EditButton } from "../../components/EditButton";
import { BackButtom } from "../../components/BackButton";
import { ProductList } from "../../components/Product/ProductList";
import getUser from "./../../services/users/getUser";
import { userProductsApi } from "../Home/hooks/userProductsApi"
import { Alert } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  const [profile, setProfile] = useState("");
  const [loadProducts, setLoadProducts] = useState('')
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const { user, isLoggedUser, key, loadUser } = route.params;

  async function fetchUser() {
    if (loadUser && profile.user_id !== user.id) {
      try {
        const res = await getUser(user.id);
        setProfile(res.data);
      } catch (error) {
        Alert.alert(`erro: ${error}`);
      }
    }
  }

  async function fetchProducts() {
    try {
      const {requestProducts} = userProductsApi({setLoad: setLoadProducts, onSuccess: setProducts, sellerId: user.id })
      requestProducts()
      console.log(products)
    } catch (error) {
      console.log(error)
    }
  }

  function editProfile() {
    navigation.navigate("EditProfile", { user: profile });
  }

  useEffect(() => {
    fetchUser()
    fetchProducts()

    console.log("IS LOGGED USER?" + isLoggedUser);
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goHome}>
          <BackButtom />
        </TouchableOpacity>
      ),
      headerRight: headerRight,
    });

    const message = route.params?.successMessage;
    if (message) {
      setSuccessMessage(message);
      console.log("success message:" + successMessage);
    }
  }, [navigation, key, profile, route.params]);

  function headerRight() {
    if (isLoggedUser) {
      return (
        <TouchableOpacity onPress={editProfile}>
          <EditButton />
        </TouchableOpacity>
      );
    }
  }

  function goHome() {
    navigation.navigate("Home");
  }


  return (
    <View key={key} style={styles.container}>
      {profile && (
        <>
          <View style={styles.profileAvatar}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8La2nwie8i1L3Asva1zyiKRaiWkVzujCP9ixCPH7OzYsLOPwBGfJ8VNzV67jehFLz2s&usqp=CAU",
                }}
                style={styles.image}
              />
            </View>
            <Text style={styles.userName}>{profile.name}</Text>
            <Text style={styles.userUniversity}>{profile.university}</Text>
            <Text style={styles.userRole}>{profile.role}</Text>
          </View>
          <View style={styles.bio}>
            <Text style={styles.bioDescription}>{profile.user_bio}</Text>
          </View>
          {successMessage && (
            <View style={styles.successMessage}>
              <Text style={styles.successText}>{successMessage}</Text>
            </View>
          )}
          {isLoggedUser && (
            <>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Adcionar produto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Editar produtos</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          <ProductList
            navigation={navigation}
            products={products}
            ListHeaderComponent={<></>}
          />
        </>
      )}
    </View>
  );
}
