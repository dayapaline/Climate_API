import { Router, Request, Response } from "express";
import { WeatherService } from "../services/weather.services";
import { WeatherRequestDTO } from "../dtos/weather-request.dto";

const router = Router();
const service = new WeatherService();

/**
 * @swagger
 * /forecast/{city}/{date}:
 *   get:
 *     summary: Retorna previsão do tempo por cidade
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 * *       name: date
 *         required: true
 *         schema:
 *         type: string
 *         description: Nome da cidade
 *     responses:
 *       200:
 *         description: Dados da previsão do tempo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: string
 *                 temperature:
 *                   type: number
 *                 description:
 *                   type: string
 *                 humidity:
 *                   type: number
 *                 
 */

router.get("/:city/:date", async (req, res) => {
  try {

    const { city, date } = req.params;

    const weather = await service.getWeather(city, date);

    res.json(weather);

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
