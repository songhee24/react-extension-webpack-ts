import React from "react";
import { createRoot } from "react-dom/client";
import "./options.css";

const popup = <p>Hello World</p>;

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(popup);
