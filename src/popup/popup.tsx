import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { fetchWeatherData } from "../utils/api";
import "./popup.css";

const App: React.FC = () => {
  useEffect(() => {
    fetchWeatherData("Bishkek")
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p>Hello World</p>
      <img src="icon.png" />
    </div>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
