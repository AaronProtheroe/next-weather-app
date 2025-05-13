"use client";

import CustomInput from "@/app/components/Input";
import WeatherCard from "@/app/components/WeatherCard";
import { FormEvent, useState } from "react";
import Spinner from "./components/Spinner";
import { useWeather } from "./hooks/useWeather";

export default function Home() {
  const [city, setCity] = useState("");
  const { refetch, weatherData, isFetching, data, error } = useWeather(city);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      refetch();
    }
  };

  const renderContent = () => {
    if (isFetching) return <Spinner />;
    if (error)
      return (
        <h1 className="text-gray-300">An error occurred: {error.message}</h1>
      );
    if (data?.message === "Nothing to geocode")
      return (
        <h1 className="text-gray-300">Please enter a city name to begin</h1>
      );
    if (weatherData === null && data?.message !== "Nothing to geocode")
      return (
        <h1 className="text-gray-300">
          No data found. Did you enter a valid city?
        </h1>
      );
    if (weatherData) {
      return (
        <WeatherCard
          temperature={weatherData.temperature}
          weather={weatherData.weather}
          description={weatherData.description}
          city={weatherData.city}
        />
      );
    }
    return null;
  };

  return (
    <main className="w-full h-screen flex flex-col items-center bg-gray-800 pt-40">
      <h1 className="text-5xl text-gray-300 mb-8">Warp Weather App</h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4 mb-8"
      >
        <CustomInput
          placeholder="Enter a city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City name"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer hover:bg-gray-600 transition-colors"
          disabled={isFetching}
        >
          {isFetching ? "Searching..." : "Search"}
        </button>
      </form>

      {renderContent()}
    </main>
  );
}
