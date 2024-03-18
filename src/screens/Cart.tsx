import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { cart, getCart } = useContext(CartContext);
  const navigation = useNavigation<any>();
  console.log(cart)

  useEffect(() => {
    getCart()
  }, [])
  return (
    <><FlatList
      data={cart}
      renderItem={({ item }) => <CartCard item={item} />}
      keyExtractor={(item) => item.product.id.toString()} /><TouchableOpacity onPress={() => navigation.navigate("Payment")} style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Pagar </Text>
      </TouchableOpacity></>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    padding: 12,
    flex: 1
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: 'center'
  },
  checkoutButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});