interface Current {
  temp_c: number;
  temp_f: number;
  condition: Condition;
}

interface Condition {
  text: string;
  icon: string;
}

interface Hour {
  time: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
}
interface Day {
  date: string;
  mintemp_c: number;
  maxtemp_c: number;
  mintemp_f: number;
  maxtemp_f: number;
  condition: Condition;
}

interface ForecastDay {
  date: string;
  day: Day;
  hour: Hour[];
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface Location {
  name: string;
  localtime_epoch: number;
}

interface HourC {
  time: string;
  temp: number;
  icon: string;
}
interface DayC {
  date: string;
  temp: number;
  icon: string;
}

interface WeatherData {
  current: Current;
  forecast: Forecast;
  location: Location;
}
export interface WeatherContextData {
  loading: boolean;
  tempUnit: 'F' | 'C';
  city: string;
  date: number;
  currentTemp: number;
  condition: Condition;
  maxTemp: number;
  minTemp: number;
  textSummary: string;
  hours: HourC[];
  days: DayC[];
  setCelsiusTemp: () => void;
  setFahrenheitTemp: () => void;
}

export default WeatherData;
