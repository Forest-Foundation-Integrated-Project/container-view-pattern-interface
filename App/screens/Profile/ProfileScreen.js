import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Button, Image } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { EditButton } from "../../components/EditButton";
import { BackButtom } from "../../components/BackButton";
import { ProductList } from "../../components/Product/ProductList";

export default function ProfileScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goHome}>
          <BackButtom />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={editProfile}>
          <EditButton />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const user = {
    name: "Lais Gonçalves",
    university: "Anhanguera - Caraguatatuba",
    phone: "(12) 99999-9999",
    role: "Ven) dedor",
    description:
      "Lorem impsu fdsad lorem impsum core. Corem ipsum dsad lorem impsum core. Corem ipsum fdsad lorem impsum core. Corem ipsum ",
  };

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Beatrice Castro Goncalves",
      university: "IFSP",
      city: "Caraguatatuba",
      phone: "(12) 99999-9999",
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
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
      subtitle: `${profiles[0].name}`,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
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
  function editProfile() {
    navigation.navigate("EditProfile");
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileAvatar}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8La2nwie8i1L3Asva1zyiKRaiWkVzujCP9ixCPH7OzYsLOPwBGfJ8VNzV67jehFLz2s&usqp=CAU",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userUniversity}>{user.university}</Text>
        <Text style={styles.userRole}>{user.role}</Text>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioDescription}>{user.description}</Text>
      </View>
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
        products={products}
        profiles={profiles}
        ListHeaderComponent={<></>}
      />
    </View>
  );
}
