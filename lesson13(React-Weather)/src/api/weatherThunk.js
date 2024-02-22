import { fetchWeatherData } from './weatherApi';
import { setWeatherData } from './weatherSlice';

export const getWeatherData = (city) => async (dispatch) => {
  try {
    const data = await fetchWeatherData(city);
    dispatch(setWeatherData(data));
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};