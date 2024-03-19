import { ReactNode, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICartItem, ProductDTO } from "../types/Products";

type CartContextProps = {
  cart: ICartItem[];
  getCart: () => void;
  addProduct: (product: ProductDTO) => void;
  removeProduct: (id: number) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const storeCart = async (value: ICartItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@cart", jsonValue);
    } catch (error) {
    }
  };

  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cart");
      const cartData = jsonValue !== null ? JSON.parse(jsonValue) : [];
      setCart(cartData);
    } catch (error) {

    }
  };

  const addProduct = (value: ProductDTO) => {
    const existingProduct = cart.find(({ product }) => value.id === product.id);

    if (existingProduct) {
      const newcart = cart.map((item) =>
        item.product.id === existingProduct.product.id
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
          : item
      );

      setCart(newcart);
      storeCart(newcart);
    } else {
      const newCart = [...cart];
      const data: ICartItem = { product: value, quantity: 1 };
      newCart.push(data);
      setCart(newCart);
      storeCart(newCart);
    }
  };

  const removeProduct = (id: number) => {
    const index = cart.findIndex(c => c.product.id === id)
    if (cart[index].quantity === 1) {
      const clone = [...cart];
      const filter = clone.filter(c => c.product.id !== id);
      storeCart(filter)
      setCart(filter)
    } else {
      const clone = [...cart];
      clone[index].quantity -= 1
      storeCart(clone)
      setCart(clone)
    }
  };

  return (
    <CartContext.Provider value={{ cart, getCart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
