const OPEN_WEATHER_API_KEY = "396f40c68c5687dfeeda306c4d8280ab";

export interface OpenWeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export type OpenWeatherTempScale = "metric" | "imperial";

export async function fetchWeatherData(city: string): Promise<OpenWeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  }

  const data: OpenWeatherData = await res.json();
  return data;
}
