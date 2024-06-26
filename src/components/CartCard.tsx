import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ICartItem } from "../types/Products";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";


interface Props {
    item: ICartItem;
}

const CartCard = ({ item }: Props) => {
    const { removeProduct } = useContext(CartContext);

    return (
        <View style={styles.produto}>
            <Text style={styles.quantity}>x{item.quantity}</Text>
            <Image resizeMode="cover" style={styles.imagem} source={{ uri: item.product.thumbnail }}/>
            <View>
                <Text style={styles.title}>{item.product.title}</Text>
                <Text style={styles.description}>{item.product.description}</Text>
                <Text style={styles.price}>$: {item.product.price}</Text>
                    <TouchableOpacity onPress={() => removeProduct(item.product.id)} style={styles.remover}>
                        <MaterialIcons name="delete" size={40} color="red" />
                    </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({
    produto: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
        padding: 12,
        flex: 1
    },
    imagem: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20
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
    quantity: {
        alignSelf: "flex-end"
    },
    remover: {
        marginTop: 20,
        alignSelf: "center"
    }
});

