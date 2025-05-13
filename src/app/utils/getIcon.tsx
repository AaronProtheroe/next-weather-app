import { Cloud, RainbowCloud, Snowflake, Sun } from "@phosphor-icons/react";

export const getIcon = (weather: string) => {
  if (weather.includes("cloud")) {
    return <Cloud size={40} color="#fff" weight="fill" />;
  } else if (weather.includes("rain")) {
    return <RainbowCloud size={40} color="#fff" weight="fill" />;
  } else if (weather.includes("clear")) {
    return <Sun size={40} color="#fff" weight="fill" />;
  } else if (weather.includes("snow")) {
    return <Snowflake size={40} color="#fff" weight="fill" />;
  }
};
