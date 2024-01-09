const OPEN_WEATHER_API_KEY = "396f40c68c5687dfeeda306c4d8280ab";

export async function fetchWeatherData(city: string): Promise<any> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  }
}
