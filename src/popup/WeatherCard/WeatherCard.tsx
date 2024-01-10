import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { fetchWeatherData, OpenWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData("Bishkek")
      .then((data) => setWeatherData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weatherData.name}</Typography>
        <Typography variant="body1">{weatherData.main.temp}</Typography>
        <Typography variant="body1">
          Feels Like {weatherData.main.feels_like}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
