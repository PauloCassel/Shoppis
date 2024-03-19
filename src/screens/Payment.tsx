import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from "react-native";

const Payment = () => {
  const handleConfirmPayment = () => {
    showToast("Pagamento Realizado");
  };

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pagamento</Text>
      <TextInput style={styles.input} placeholder="Titular do Cartão"/>
    
      <TextInput style={styles.input} placeholder="Número do Cartão" keyboardType="numeric"/>
      <TextInput style={styles.input} placeholder="Data de Expiração (MM/AA)" keyboardType="numeric"/>
      <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Seu Endereço"/>

      <TouchableOpacity style={styles.botao} onPress={handleConfirmPayment}>
        <Text style={styles.botaoTexto}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});