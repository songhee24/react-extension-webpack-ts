import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { InputBase, IconButton, Paper, Box, Grid } from "@mui/material";

import "fontsource-roboto";

import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC = () => {
  const [cities, setCities] = useState<string[]>(["Bishkek", "Osh", "Error"]);

  const [cityInput, setCityInput] = useState<string>("");

  const handleCityButtonClick = () => {
    if (cityInput === "") {
      return;
    }
    setCities([...cities, cityInput]);
    setCityInput("");
  };

  return (
    <Box sx={{ overflow: "hidden", overflowY: "scroll" }} mx="8px" my="16px">
      <Grid container>
        <Grid item>
          <Paper>
            <Box px={"15px"} py={"5px"}>
              <InputBase
                value={cityInput}
                onChange={(event) => setCityInput(event.target.value)}
                placeholder="Add a city name"
              />
              <IconButton onClick={handleCityButtonClick}>
                <AddBoxIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city) => (
        <WeatherCard city={city} key={city} />
      ))}
      <Box height="16px" />
    </Box>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
