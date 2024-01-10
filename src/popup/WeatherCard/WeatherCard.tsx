import React, { useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { fetchWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
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
