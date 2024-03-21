import { useContext } from 'react';
import { WeatherContext } from '../Context/weatherContext';
const useWeatherContext = () => {
  const {
    loading,
    tempUnit,
    setCelsiusTemp,
    setFahrenheitTemp,
    city,
    condition,
    textSummary,
    days,
    date,
    hours,
    currentTemp,
    maxTemp,
    minTemp,
  } = useContext(WeatherContext);

  return {
    loading,
    tempUnit,
    setCelsiusTemp,
    setFahrenheitTemp,
    city,
    condition,
    textSummary,
    days,
    date,
    hours,
    currentTemp,
    maxTemp,
    minTemp,
  };
};

export default useWeatherContext;
