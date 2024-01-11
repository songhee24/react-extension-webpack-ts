import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { InputBase, IconButton, Paper } from "@mui/material";

import "fontsource-roboto";

import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC = () => {
  const [cities, setCities] = useState<string[]>(["Bishkek", "Osh", "Error"]);

  return (
    <div>
      <Paper>
        <InputBase />
        <IconButton>
          <AddBoxIcon />
        </IconButton>
      </Paper>
      {cities.map((city) => (
        <WeatherCard city={city} key={city} />
      ))}
    </div>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
