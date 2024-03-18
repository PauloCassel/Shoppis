import { Image, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";

const Details = ({ route }: any) => {
  const product: ProductDTO = route.params
  const { addProduct } = useContext(CartContext)
  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode="stretch" style={styles.image} source={{uri: product.images[0] }}/>
      <Text style={styles.title}> {product.title}</Text>
      <Text style={styles.descricao}> {product.description} </Text>
      <Text style={styles.preco}> $: {product.price},00 </Text>
      <Text style={styles.estoque}> Estoque: {product.stock}</Text>
      <TouchableOpacity onPress={() => addProduct(product) }>
        <MaterialIcons style={{ marginTop: 5 }} name="shopping-bag" size={50} color="#0000FF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 60,
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 60
},
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  title: {
    color: "#252525",
    fontSize: 26,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  preco: {
    fontSize: 16,
    fontWeight: "600",
    color: "#006400"
  },
  estoque: {
    marginTop: 5,
    fontSize: 17,
  }
});

export default Details;