import React from "react";
import { createRoot } from "react-dom/client";
import WeatherCard from "../components/WeatherCard";

chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

const App: React.FC<{}> = () => {
  return <WeatherCard city={"Osh"} tempScale={"metric"} />;
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
