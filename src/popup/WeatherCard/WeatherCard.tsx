import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { fetchWeatherData, OpenWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData("Bishkek")
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }, [city]);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{city}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
