import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { fetchWeatherData, OpenWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData(city)
      .then((data) => setWeatherData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>
          <Typography variant="h5">{weatherData.name}</Typography>
          <Typography variant="body1">
            {Math.round(weatherData.main.temp)}
          </Typography>
          <Typography variant="body1">
            Feels Like {Math.round(weatherData.main.feels_like)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
