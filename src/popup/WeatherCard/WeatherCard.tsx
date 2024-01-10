import React, { useEffect } from "react";
import { fetchWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  useEffect(() => {
    fetchWeatherData("Bishkek")
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }, [city]);
  return <div>{city}</div>;
};
