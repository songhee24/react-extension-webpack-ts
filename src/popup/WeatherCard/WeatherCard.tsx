import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { fetchWeatherData, OpenWeatherData } from "../../utils/api";

const WeatherCardContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};
type WeatherCardState = "loading" | "error" | "ready";
const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);
  const [cardState, setCardState] = useState<WeatherCardState>("loading");

  useEffect(() => {
    fetchWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setCardState("ready");
      })
      .catch((err) => {
        console.log(err);
        setCardState("error");
      });
  }, [city]);

  if (!weatherData) {
    return <WeatherCardContainer>Loading...</WeatherCardContainer>;
  }

  return (
    <WeatherCardContainer>
      <Typography variant="h5">{weatherData.name}</Typography>
      <Typography variant="body1">
        {Math.round(weatherData.main.temp)}
      </Typography>
      <Typography variant="body1">
        Feels Like {Math.round(weatherData.main.feels_like)}
      </Typography>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
