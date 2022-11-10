import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPages = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bd-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increseBy(-2)}>-2</button>
            {/* Si no llega al isMaxCount, ocultar */}
            {!isMaxCountReached && (
              <button onClick={() => increseBy(+2)}>+2</button>
            )}

            <span>count: {count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
