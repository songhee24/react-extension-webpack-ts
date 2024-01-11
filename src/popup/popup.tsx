import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { InputBase, IconButton, Paper, Box } from "@mui/material";

import "fontsource-roboto";

import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC = () => {
  const [cities, setCities] = useState<string[]>(["Bishkek", "Osh", "Error"]);

  return (
    <Box mx="8px" my="16px">
      <Paper>
        <InputBase />
        <IconButton>
          <AddBoxIcon />
        </IconButton>
      </Paper>
      {cities.map((city) => (
        <WeatherCard city={city} key={city} />
      ))}
    </Box>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
