import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import WeatherCard from "../components/WeatherCard";

import "./contentScript.css";
import { Card } from "@mui/material";
import { getStoredOptions, LocalStorageOptions } from "../utils/storage";
chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

const App: React.FC<{}> = () => {
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);

  useEffect(() => {
    getStoredOptions().then((options) => setOptions(options));
  }, []);

  if (!options) {
    return null;
  }

  return (
    <Card className="overlayCard">
      <WeatherCard city={options.homeCity} tempScale={options.tempScale} />;
    </Card>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
