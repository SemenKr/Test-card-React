import React from "react";
import { StyledArticle } from "./styled";

function Article({ children }) {
  return <StyledArticle>Артикул: {children}</StyledArticle>;
}

export default Article;
