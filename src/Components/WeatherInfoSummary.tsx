import { useMemo } from 'react';
import useWeatherContext from '../hooks/useWeatherContext';
import styles from './WeatherInfoSummary.module.css';

import formateDate from '../utils/formateDate';
const WeatherInfoSummary = () => {
  const { city, date, condition, textSummary, currentTemp, maxTemp, minTemp } =
    useWeatherContext();

  const todayDate = useMemo(() => {
    if (date) {
      return formateDate(date);
    }
  }, [date]);

  return (
    <section className={styles['current-summary-section']}>
      <div className={styles['current-summary-container']}>
        <div className={styles['current-summary-conditions']}>
          <div className={styles['city-date-row']}>
            <h2 className={`${styles['city-name']}`}>{city}</h2>
            <p className={`${styles.date} `}>{todayDate}</p>
          </div>
          <div className={styles['icon-weather-state-row']}>
            <img
              className={`${styles['weather-icon']}`}
              src={condition?.icon}
              alt='current weather condition icon'
            />
            <span className={`${styles.weather}`}>{condition?.text}</span>
          </div>
        </div>

        <div className={`${styles['today-forecast']} `}>
          <div className={styles['temps-row']}>
            <span className={`${styles.temp}`}>
              {currentTemp}
              <sup>°</sup>
            </span>

            <div className={`${styles['temps-box']} `}>
              <span className={styles['high-temp']}>{maxTemp}°</span> /
              <span className={styles['low-temp']}>{minTemp}°</span>
            </div>
          </div>
          <p className={styles.forecast}>{textSummary}</p>
        </div>
      </div>
    </section>
  );
};
export default WeatherInfoSummary;
