"use client";

import CustomInput from "@/components/Input";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/weather");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl text-gray-300 mb-8">Warp Weather App</h1>
      <CustomInput placeholder="Enter a city name" />
    </div>
  );
}
