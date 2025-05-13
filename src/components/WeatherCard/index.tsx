type WeatherCardProps = {
  city: string | null;
  temperature: number | null;
  weather: string | null;
  description: string | null;
};

const WeatherCard = ({
  city,
  temperature,
  weather,
  description,
}: WeatherCardProps) => {
  return (
    <div className="bg-gray-500 p-10">
      <h2 className="text-2xl text-gray-300 mb-4">Weather in {city}</h2>
      <p className="text-xl text-gray-200">Temperature: {temperature}°C</p>
      <p className="text-xl text-gray-200">Weather: {weather}</p>
      <p className="text-xl text-gray-200">Description: {description}</p>
    </div>
  );
};

export default WeatherCard;
