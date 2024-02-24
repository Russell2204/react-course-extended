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
// Этот код определяет функцию getWeatherData, которая используется для получения данных о погоде для указанного города и обновления состояния в Redux store.

// getWeatherData принимает в качестве аргумента название города city и выполняет асинхронную функцию с помощью ключевого слова async. Эта функция диспетчиреует (dispatch) действия с использованием Redux thunk middleware.

// Внутри getWeatherData вызывается функция fetchWeatherData(city) из модуля weatherApi, которая отправляет запрос на сервер для получения данных о погоде для указанного города. Полученные данные сохраняются в переменную data.

// Затем вызывается функция dispatch, которая отправляет действие setWeatherData(data) в Redux store. Действие setWeatherData обновляет состояние слайса weather с новыми данными о погоде.

// Если происходит ошибка при получении данных о погоде, то код в блоке catch перехватывает ошибку и выводит сообщение об ошибке в консоль.

// Этот код связан с предыдущим кодом, где мы создали слайс weatherSlice с редюсером для управления данными о погоде. Функция getWeatherData использует action-creator setWeatherData из этого слайса для обновления состояния с полученными данными о погоде. Таким образом, весь процесс получения и обновления данных о погоде в приложении управляется с помощью Redux и описанных выше функций и слайсов.