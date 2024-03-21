import { useEffect, useMemo, useState } from 'react';
import WeatherData from '../Components/Types/Weather';
import useCurrentUserLocation from './useCurrentUserLocation';

const KEY = import.meta.env.VITE_API_KEY;

const useWeatherData = () => {
  const { coords } = useCurrentUserLocation();
  const [data, setData] = useState<WeatherData | undefined>();
  const [loading, setLoading] = useState(true);
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');

  useEffect(() => {
    if (!coords) return;
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${coords?.lat},${coords?.long}&days=14`;

    const getData = async () => {
      try {
        const res = await fetch(URL);
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. refresh the page');
        setLoading(false);
      }
    };

    getData();
  }, [coords]);

  const next24hours = useMemo(() => {
    if (!data) return [];

    /*Retrieve the next 24 hours by summing the remaining hours of today
     with the necessary hours from tomorrow to achieve a total of 24 hours. */

    const currentHour = new Date().getHours();
    const todayHours = data?.forecast?.forecastday[0]?.hour;
    const tomorrowHours = data?.forecast?.forecastday[1]?.hour;
    const remainingToday = todayHours.slice(currentHour);
    const fromTomorrow = tomorrowHours.slice(0, currentHour);
    return remainingToday.concat(...fromTomorrow);
  }, [data]);

  /*
Retrieve the necessary data from the API and verify its availability.
If not present, assign a default value.
  Then, toggle the temperature value based on the 'tempUnit' state.
  */

  const weatherData = {
    loading,
    tempUnit,
    city: data?.location?.name ?? '',
    date: data?.location?.localtime_epoch ?? 0,
    currentTemp:
      tempUnit === 'C' ? data?.current?.temp_c ?? 0 : data?.current.temp_f ?? 0,
    condition: data?.current?.condition ?? { icon: '', text: '' },
    maxTemp:
      tempUnit === 'C'
        ? data?.forecast?.forecastday[0]?.day?.maxtemp_c ?? 0
        : data?.forecast?.forecastday[0]?.day?.maxtemp_f ?? 0,
    minTemp:
      tempUnit === 'C'
        ? data?.forecast?.forecastday[0]?.day?.mintemp_c ?? 0
        : data?.forecast?.forecastday[0]?.day?.mintemp_f ?? 0,
    textSummary: data?.forecast?.forecastday[0]?.day?.condition?.text ?? '',
    hours:
      next24hours?.map((item) => ({
        time: item.time ?? '',
        icon: item.condition.icon ?? '',
        temp: tempUnit === 'C' ? item.temp_c ?? 0 : item.temp_f ?? 0,
      })) || [],
    days:
      data?.forecast.forecastday.map((item) => ({
        date: item?.date ?? '',
        icon: item?.day?.condition?.icon ?? '',
        temp: tempUnit === 'C' ? item.day.maxtemp_c : item.day.maxtemp_f ?? 0,
      })) || [],
    setCelsiusTemp: () => {
      setTempUnit('C');
    },
    setFahrenheitTemp: () => {
      setTempUnit('F');
    },
  };

  return weatherData;
};
export default useWeatherData;
