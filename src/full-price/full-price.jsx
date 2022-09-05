import React from "react";
import Price from "/src/price/price";
import OldPrice from "/src/old-price/old-price";

function FullPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <React.Fragment>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <Price value={price} />
    </React.Fragment>
  );
}

export default FullPrice;
