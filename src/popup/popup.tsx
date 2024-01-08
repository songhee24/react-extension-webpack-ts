import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const popup = (
  <div>
    <p>Hello World</p>
    <img src="icon.png" />
  </div>
);

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(popup);
