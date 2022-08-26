import React from "react";
import Title from "./title";
import Article from "./article";
import Gallery from "./gallery";
import FullPrice from "./full-price";
import Count from "./count";
import Description from "./description";
import Comments from "./comments";
import Popularity from "./popularity";

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
            <FullPrice oldPrice={product.oldPrice} price={product.price} />
          </p>
          <div>
            Количество:
            <Count />
          </div>
          <p>
            <span>Доставка:</span> {product.delivery}
          </p>
          <button type="button">Купить</button>
          <Popularity count={product.comments.length} />
        </div>
      </div>
      <Description>{product.description}</Description>
      <Comments comments={product.comments} />
    </section>
  );
}

export default ProductPage;
