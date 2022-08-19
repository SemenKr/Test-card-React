import React from "react";
import Title from "./title";
import Article from "./article";
import Gallery from "./gallery";
import OldPrice from "./old-price";
import Price from "./price";
import Count from "./count";
import Description from "./description";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Article>{product.article}</Article>
      <div style={{ display: "flex" }}>
        <Gallery src={product.src} alt={product.alt} />
        <div>
          <p>
            Цена:
            <OldPrice value={product.oldPrice} />{" "}
            <Price value={product.price} />
          </p>
          <div>
            Количество:
            <Count />
          </div>
          <p>
            <span>Доставка:</span> {product.delivery}
          </p>
          <button type="button">Купить</button>
        </div>
      </div>
      <Description>{product.description}</Description>
    </section>
  );
}

export default ProductPage;
