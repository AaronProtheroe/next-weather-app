"use client";

import CustomInput from "@/components/Input";
import WeatherCard from "@/components/WeatherCard";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

async function getWeather(city: string) {
  const res = await fetch(`api/weather?city=${city}`);
  return res.json();
}

export default function Home() {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(city),
  });

  const [city, setCity] = useState("");

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

  console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl text-gray-300 mb-8">Warp Weather App</h1>
      <div className="flex justify-center items-center gap-4 mb-8">
        <CustomInput
          placeholder="Enter a city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer hover:bg-gray-600"
          onClick={() => refetch()}
        >
          Search
        </button>
      </div>
      {weatherData === null && !isFetching && (
        <h1 className="text-gray-300">No data found</h1>
      )}
      {isFetching && <h1 className="text-gray-300">Loading...</h1>}
      {!isFetching && weatherData !== null && (
        <WeatherCard
          temperature={weatherData.temperature}
          weather={weatherData.weather}
          description={weatherData.description}
          city={weatherData.city}
        />
      )}
    </div>
  );
}
