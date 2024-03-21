import { ReactNode, createContext } from 'react';

import { WeatherContextData } from '../Components/Types/Weather';
import useWeatherData from '../hooks/useWeatherData';

export const WeatherContext = createContext<WeatherContextData>({
  loading: true,
  tempUnit: 'C',
  city: '',
  date: 0,
  currentTemp: 2,
  maxTemp: 1,
  minTemp: 0,
  condition: {
    icon: 'url',
    text: 'text',
  },
  textSummary: '',
  hours: [],
  days: [],
  setCelsiusTemp: () => {},
  setFahrenheitTemp: () => {},
});

const WeatherContextProvider = ({ children }: { children: ReactNode }) => {
  const weatherData = useWeatherData();
  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
