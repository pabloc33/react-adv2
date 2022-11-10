import { useState } from "react";
import { products } from "../data/products";
import { Product, ProductInCard } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log("onProductCountChange", count, product);
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCard = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      // console.log({ toDelete });
      return { ...rest };

      // if (count === 0) {
      // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      // // console.log({ toDelete });
      // return { ...rest };
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    //Properties
    products,
    shoppingCart,
    //Methods
    onProductCountChange,
  };
};
