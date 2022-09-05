import React from "react";
import Title from "/src/title/title";
import Article from "/src/article/article";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import { Image } from "/src/elements";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue
} from "./styled";

function ProductPage({ product }) {
  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Article>{product.article}</Article>
      </Header>
      <ProductWrapper>
        <Image
          width="200"
          height="257"
          maxWidth="200"
          src={product.src}
          alt={product.name}
        />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <PageFullPrice oldPrice={product.oldPrice} price={product.price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество: Количество: <PageCounter />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large">Купить</BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <Description text={product.description} />
      <Comments comments={product.comments} />
    </StyledProductPage>
  );
}

export default ProductPage;
