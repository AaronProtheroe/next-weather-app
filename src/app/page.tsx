"use client";

import CustomInput from "@/components/Input";
import { useQuery } from "@tanstack/react-query";

async function getWeather(city: string) {
  const res = await fetch(`api/weather?city=${city}`);
  return res.json();
}

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather("London"),
  });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl text-gray-300 mb-8">Warp Weather App</h1>
      <CustomInput placeholder="Enter a city name" />
    </div>
  );
}
