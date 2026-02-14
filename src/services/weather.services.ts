import axios from "axios";
import { env } from "../config/env";
import { WeatherResponseDTO } from "../dtos/weather-response.dto";

export class WeatherService {

  async getWeather(city: string, date: string): Promise<WeatherResponseDTO> {

    const response = await axios.get(
        
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city,
          appid: env.openWeatherKey,
          units: "metric",
          lang: "pt_br"
        }
      }
    );

    const forecastList = response.data.list;

    // Filtra previsões do dia solicitado
    const forecast = forecastList.find((item: any) =>
      item.dt_txt.startsWith(date)
    );

    if (!forecast) {
      throw new Error("Previsão não encontrada para a data informada");
    }

   return {
      city: response.data.city.name,
      date: forecast.dt_txt,
      temperature: forecast.main.temp,
      description: forecast.weather[0].description,
      humidity: forecast.main.humidity
    };
  }
}
