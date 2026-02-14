import dotenv from "dotenv";

dotenv.config();

export const env = {
  openWeatherKey: process.env.OPENWEATHER_API_KEY as string
};