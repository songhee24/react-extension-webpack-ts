import React from "react";
import { createRoot } from "react-dom/client";

chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<h1>Hello World</h1>);
