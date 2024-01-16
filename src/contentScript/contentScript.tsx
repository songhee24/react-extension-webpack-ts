import React from "react";
import { createRoot } from "react-dom/client";
import WeatherCard from "../components/WeatherCard";

import "./contentScript.css";
import { Card } from "@mui/material";
chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

const App: React.FC<{}> = () => {
  return (
    <Card className="overlayCard">
      <WeatherCard city={"Osh"} tempScale={"metric"} />;
    </Card>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
