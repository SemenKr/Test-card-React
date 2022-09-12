import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text }) {
  return (
    <div>
      {text}
      <DescriptionButton
        onClick={() => console.log("скрытие/открытие всего текста.")}
      >
        Подробнее
      </DescriptionButton>
    </div>
  );
}

export default Description;
