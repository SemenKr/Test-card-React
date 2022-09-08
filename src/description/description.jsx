import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text }) {
  return (
    <div>
      {text}
      <DescriptionButton>Подробнее</DescriptionButton>
    </div>
  );
}

export default Description;
