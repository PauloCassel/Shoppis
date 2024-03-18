import { SafeAreaView, StyleSheet, Text, Image, Button, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const {getUser, user, logout} = useContext(UserContext)

  useEffect(() => {
    getUser();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source = {{ uri: user?.image }} style = {styles.image}/>
      <Text style = {styles.username}>Nome: {user?.username}</Text>
      <Text style = {styles.username}>Email: {user?.email}</Text>
      <Text style = {styles.username}>Genero: {user?.gender}</Text>
      <Button title="Sair" onPress={logout} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold'
  }
});


export default User;