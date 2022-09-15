import React, { useState } from "react";
import { Content, TitleButton, Wrapper, ContentWrapper } from "./styled";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {items &&
        items.length &&
        items.map((item, index) => (
          <Wrapper>
            <TitleButton>{item.title}</TitleButton>
            <ContentWrapper>
              <Content>{item.content}</Content>
            </ContentWrapper>
          </Wrapper>
        ))}
    </div>
  );
}

export default Accordion;
