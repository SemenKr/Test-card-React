import React from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styled";

function Tabs({ tabs, activeTab = 1 }) {
  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton
                  active
                  key={item.title}
                  onClick={() => console.log("переключение вкладки")}
                >
                  <TitleText small active as="h2">
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton
                key={item.title}
                onClick={() => console.log("переключение вкладки")}
              >
                <TitleText small as="h2">
                  {item.title}
                </TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
}

export default Tabs;