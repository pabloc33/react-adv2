import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductCard as ProductCardHOC } from "./ProductCard";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

// eslint-disable-next-line import/first
import { ProductButtons } from "./ProductButtons";
// eslint-disable-next-line import/first
import { ProductImage } from "./ProductImage";
// eslint-disable-next-line import/first
import { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
