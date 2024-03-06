import { FlatList, StyleSheet, Text, View, Image} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../types/Products";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../components/ItemCard";
import { showError } from "../components/Toast";
import { useRoute } from "@react-navigation/native";


const Details = () => {
  const route = useRoute()
  const {title, description, price, images} = route.params as ProductDTO
  const { getCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await getCart();
        const url = "https://dummyjson.com/products";

        const response = await axios.get<{ products: ProductDTO[] }>(url);
        setProducts(response.data.products);
      } catch (error) {
        showError("Não foi possível recuperar os produtos");
      }
    };
    getData();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Image style={{width: `50%`, height: 100}} source={{uri: images[0]}}/>
      <Text style={styles.informacoes}>
        {title}
        {description}
        {price}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#606060",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    color: "#252525",
    fontSize: 26,
    fontWeight: "bold",
  },
  informacoes: {
    display: "flex",
  }
});

export default Details;