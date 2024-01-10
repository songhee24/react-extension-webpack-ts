import React from "react";
import { createRoot } from "react-dom/client";
import "fontsource-roboto";

import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC = () => {
  return (
    <div>
      <WeatherCard city={"Bishkek"} />
      <WeatherCard city={"Osh"} />
    </div>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
