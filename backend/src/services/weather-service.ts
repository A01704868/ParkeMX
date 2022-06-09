import { NotImplementedError } from "@shared/errors";
import axios from "axios";

// Retrieve the Api Key from OS env
const apiKey = process.env.OPEN_WEATHER_KEY ?? "100b0c6b01aa6013056da0f7e9ca023c"

export interface IWeatherError {
    error: string
    debug: any
}

/**
 * Interface to describe the weather response from OpenWeatherMap's API
 */
interface IWeatherSummary {
    coord: { lon: number, lat: number },
    weather: [
      { id: number, main: string, description: string, icon: string }
    ],
    base: number,
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
      sea_level: number,
      grnd_level: number
    },
    visibility: number,
    wind: { speed: number, deg: number, gust: number },
    clouds: { all: number },
    dt: number,
    sys: { country: string, sunrise: number, sunset: number },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface IWeatherForecast {
    temp: number
    humidity: number
    pressure: number
    description: string
    weathercode: number
    rain: string
}

export default class WeatherService {

    private static readonly BASE_URL = "http://api.openweathermap.org/data/2.5/";
    private static readonly GEOCODING_URL = "http://api.openweathermap.org/geo/1.0/direct?q={city},{state},{country}";
    private static readonly WEATHER_ENDPOINT = "weather";

    private static readonly WEATHER_UNITS = "metric";
    private static readonly WEATHER_LANG = "es";

    public static async getWeatherByCoordinates(latitude: number, longitude: number) {
        throw new NotImplementedError();
    }

    /**
     * Returns the weather summary of a given city after doing an initial coordinate lookup
     * @return {@type IWeatherSummary | IWeatherError} Returns a summary of the weather for the requested location or an error with debug info
     */
    public static async getWeatherByCity(city: string, state: string = "", country: string = "MX") {
        if (!city) {
            return <IWeatherError>{
                debug: { city, state, country },
                error: "Unable to retrieve forecast, missing city"
            }
        }

        try {
            const geoCodingUrl = this.GEOCODING_URL
                .replace("{city}", city)
                .replace("{state}", state)
                .replace("{country}", country);

            const locations = await axios.get(geoCodingUrl, {
                params: {
                    limit: 10,
                    appid: apiKey
                }
            })

            const cityGeoLocation = locations.data?.filter(location => location.country === country);
            const { lat, lon } = cityGeoLocation[0] || {};

            if (!lat || !lon) {
                return <IWeatherError>{
                    debug: { lat, lon, city, state, country },
                    error: `Unable to retrieve forecast for city: ${city}, missing either ${lat} or ${lon}`
                }
            }

            const forecast = await axios.request({
                baseURL: this.BASE_URL,
                url: this.WEATHER_ENDPOINT,
                method: 'get',
                params: {
                    lang: this.WEATHER_LANG,
                    units: this.WEATHER_UNITS,
                    appid: apiKey,
                    lat: lat,
                    lon: lon
                }
            })
            
            return forecast.data as IWeatherSummary;

        } catch (error) {
            return <IWeatherError>{
                debug: error,
                error: `Unable to retrieve forecast for city: ${city}`
            }
        }
    }
}