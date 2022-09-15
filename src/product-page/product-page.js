import React, { useState } from "react";
import Title from "/src/title/title";
import Article from "/src/article/article";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import { Image } from "/src/elements";
import Tabs from "/src/tabs/tabs";
import PopUp from "/src/popup/popup";
import Order from "/src/order/order";
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
  const [productCount, setProductCount] = useState(1);
  const [isShowPopup, setIsShowPopup] = useState(false);

  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={product.comments} />
    }
  ];

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
            <PageFullPrice
              oldPrice={product.oldPrice * productCount}
              price={product.price * productCount}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <PageCounter
              onChange={setProductCount}
              value={productCount}
              minValue={1}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setIsShowPopup(true)}>
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <Tabs tabs={tabs} tabIndex={1} />
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Заказ"
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  );
}

export default ProductPage;
