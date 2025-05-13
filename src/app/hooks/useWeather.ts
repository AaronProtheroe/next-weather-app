import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

async function getWeather(city: string) {
  const res = await fetch(`api/weather?city=${city}`);
  return res.json();
}

export const useWeather = (city: string) => {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(city),
  });

  const weatherData = useMemo(() => {
    if (data && data.weather) {
      return {
        temperature: data.main.temp,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        city: data.name,
      };
    }
    return null;
  }, [data]);

  return { weatherData, isFetching, error, refetch, data };
};
