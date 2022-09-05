import React from "react";
import Button from "/src/button/button";
import { StyledCounter, Value } from "./styled";

function Count() {
  return (
    <StyledCounter>
      <Button size="small">-</Button>
      <Value>1</Value>
      <Button size="small">+</Button>
    </StyledCounter>
  );
}

export default Count;
