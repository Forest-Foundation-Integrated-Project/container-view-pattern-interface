import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Button, Image } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { EditButton } from "../../components/EditButton";
import { BackButtom } from "../../components/BackButton";
import { ProductList } from "../../components/Product/ProductList";
import getUser from "./../../services/users/getUser";
import { Alert } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  const [profile, setProfile] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { user, canEdit, key, loadUser } = route.params;

  async function fetchUser() {
    try {
      const res = await getUser(user.id);
      setProfile(res.data);
    } catch (error) {
      Alert.alert(`erro: ${error}`);
    }
  }

  function editProfile() {
    navigation.navigate("EditProfile", { user: profile });
  }

  useEffect(() => {
    if (loadUser) {
      fetchUser();
    }

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
    }
    console.log(successMessage);
  }, [navigation, key, profile, route.params]);

  function headerRight() {
    if (canEdit) {
      return (
        <TouchableOpacity onPress={editProfile}>
          <EditButton />
        </TouchableOpacity>
      );
    }
  }

  const [userProducts, setProducts] = useState([
    {
      id: 1,
      title: "Cupcake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      seller_id: "4b2ccf36-3742-45c3-80b6-2036a92d940f",
      price_cents: 1999,
      tag_id: 1,
      subtitle: `mocked profile name`,
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
    // {
    //   id: 2,
    //   title: "Aula de matemática",
    //   description: "Description for Product 2",
    //   seller_id: 2,
    //   price_cents: 2999,
    //   tag_id: 2,
    //   subtitle: `${profiles[0].name}`,
    //   image:
    //     "https://api.time.com/wp-content/uploads/2017/10/how-to-improve-math-class.jpg?quality=85&w=1200&h=628&crop=1",
    // },
  ]);

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
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Adcionar produto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Editar produtos</Text>
            </TouchableOpacity>
          </View>
          <ProductList
            navigation={navigation}
            products={userProducts}
            ListHeaderComponent={<></>}
          />
        </>
      )}
    </View>
  );
}
