import CustomInput from "@/components/Input";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl text-gray-300 mb-8">Warp Weather App</h1>
      <CustomInput placeholder="Enter a city name" />
    </div>
  );
}
