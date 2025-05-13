"use client";

import CustomInput from "@/app/components/Input";
import WeatherCard from "@/app/components/WeatherCard";
import { useState } from "react";
import Spinner from "./components/Spinner";
import { useWeather } from "./hooks/useWeather";

export default function Home() {
  const [city, setCity] = useState("");

  const { refetch, weatherData, isFetching, data } = useWeather(city);

  const states = {
    empty: data?.message === "Nothing to geocode" && !isFetching,
    invalid:
      weatherData === null &&
      !isFetching &&
      data.message !== "Nothing to geocode",
    loading: isFetching,
  };

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-800 pt-40">
      <h1 className="text-5xl text-gray-300 mb-8">Warp Weather App</h1>
      <div className="flex justify-center items-center gap-4 mb-8">
        <CustomInput
          placeholder="Enter a city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer hover:bg-gray-600"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {states.empty && (
        <h1 className="text-gray-300">Please enter a city name to begin</h1>
      )}
      {states.invalid && (
        <h1 className="text-gray-300">
          No data found. Did you enter a valid city?
        </h1>
      )}
      {states.loading && <Spinner />}
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
