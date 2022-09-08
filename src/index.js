import ReactDOM from "react-dom";
import { product } from "./moke";
import ProductPage from "/src/product-page/product-page";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";

const rootElement = document.querySelector("#root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ProductPage product={product} />
  </ThemeProvider>,
  rootElement
);
