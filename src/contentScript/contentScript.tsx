import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import WeatherCard from "../components/WeatherCard";

import "./contentScript.css";
import { Card } from "@mui/material";
import { getStoredOptions, LocalStorageOptions } from "../utils/storage";
import { Messages } from "../utils/messages";
chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

const App: React.FC<{}> = () => {
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    getStoredOptions().then((options) => {
      setOptions(options);
      setIsActive(options.hasAutoOverlay);
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      console.log(message);
      if (message === Messages.TOGGLE_OVERLAY) {
        setIsActive(!isActive);
      }
    });
  }, [isActive]);

  if (!options) {
    return null;
  }

  return (
    <>
      {isActive && (
        <Card className="overlayCard">
          <WeatherCard
            city={options.homeCity}
            tempScale={options.tempScale}
            onDelete={() => setIsActive(false)}
          />
          ;
        </Card>
      )}
    </>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
