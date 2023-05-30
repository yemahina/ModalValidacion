import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Boton from "./Boton";

import ModalValidacion from "./ModalValidacion";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Boton />
    <ModalValidacion />
  </StrictMode>
);
