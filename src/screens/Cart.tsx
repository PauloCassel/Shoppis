import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { cart, getCart } = useContext(CartContext);
  const navigation = useNavigation<any>();

  useEffect(() => {
    getCart()
  }, [])
  return (
    <SafeAreaView><FlatList
      data={cart}
      renderItem={({ item }) => <CartCard item={item} />}
      keyExtractor={(item) => item.product.id.toString()} />
      
      <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Pagar</Text>
      </TouchableOpacity></SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  checkoutButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: "#4CAF50"
  },
  checkoutText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
});