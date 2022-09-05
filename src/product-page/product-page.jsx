import React from "react";
import Title from "/src/title/title";
import Article from "/src/article/article";
import Gallery from "/src/gallery/gallery";
import FullPrice from "/src/full-price/full-price";
import Count from "/src/count/count";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";

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