import { getIcon } from "@/app/utils/getIcon";

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
    <div className="bg-gray-500 p-10 rounded-xl flex flex-col items-center shadow-xl gap-4 w-1/3">
      {getIcon(description ?? "")}
      <h2 className="text-4xl text-gray-300 mb-4">{city}</h2>
      <p className="text-5xl text-gray-200">{temperature}°C</p>
      <p className="text-2xl text-gray-200">{weather}</p>
      <p className="text-2xl text-gray-200">{description}</p>
    </div>
  );
};

export default WeatherCard;
