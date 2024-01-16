import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";

import { InputBase, IconButton, Paper, Box, Grid } from "@mui/material";

import "fontsource-roboto";

import "./popup.css";
import WeatherCard from "../components/WeatherCard";
import {
  getStoredCities,
  getStoredOptions,
  LocalStorageOptions,
  setStoredCities,
  setStoredOptions,
} from "../utils/storage";

const App: React.FC = () => {
  const [cities, setCities] = useState<string[]>([]);

  const [cityInput, setCityInput] = useState<string>("");
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);

  useEffect(() => {
    getStoredCities().then((cities) => setCities(cities));
    getStoredOptions().then((options) => setOptions(options));
  }, []);

  const handleCityButtonClick = async () => {
    if (cityInput === "") {
      return;
    }
    const updatedCities = [...cities, cityInput];
    await setStoredCities(updatedCities);
    setCities(updatedCities);
    setCityInput("");
  };

  const handleCityDeleteButtonClick = async (index: number) => {
    cities.splice(index, 1);
    const updatedCities = [...cities];
    await setStoredCities(updatedCities);
    setCities(updatedCities);
  };

  const handleTempScaleButtonClick = () => {
    const updateOptions: LocalStorageOptions = {
      ...options,
      tempScale: options.tempScale === "metric" ? "imperial" : "metric",
    };
    setStoredOptions(updateOptions).then(() => {
      setOptions(updateOptions);
    });
  };

  const handleOverlayButtonClick = () => {};

  if (!options) {
    return null;
  }

  return (
    <Box sx={{ overflow: "hidden", overflowY: "scroll" }} mx="8px" my="16px">
      <Grid container justifyContent={"space-evenly"}>
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
        <Grid item>
          <Paper sx={{ height: "100%" }}>
            <Box py="2px" px={"3px"}>
              <IconButton onClick={handleTempScaleButtonClick}>
                {options.tempScale === "metric" ? "\u2103" : "\u2109"}
              </IconButton>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ height: "100%" }}>
            <Box py="2px" px={"3px"}>
              <IconButton onClick={handleOverlayButtonClick}>
                <PictureInPictureAltIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {options.homeCity != "" && (
        <WeatherCard city={options.homeCity} tempScale={options.tempScale} />
      )}
      {cities.map((city, index) => (
        <WeatherCard
          tempScale={options.tempScale}
          city={city}
          key={index}
          onDelete={() => handleCityDeleteButtonClick(index)}
        />
      ))}
      <Box height="16px" />
    </Box>
  );
};

const root = document.createElement("div");
document.body.append(root);
const container = createRoot(root);
container.render(<App />);
