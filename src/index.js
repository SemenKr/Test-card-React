import ReactDOM from "react-dom/client";
import { product } from "./moke";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import ProductPage from "./product-page/product-page";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <ThemeProvider theme={theme}>
    <ProductPage product={product} showInfoInAccordion />
  </ThemeProvider>
);
