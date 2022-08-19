import ReactDOM from "react-dom";
import { product } from "./moke";

import ProductPage from "./product-page";

const rootElement = document.querySelector("#root");
ReactDOM.render(<ProductPage product={product} />, rootElement);
