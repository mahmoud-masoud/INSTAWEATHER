import HourForecastInstance from './HourForecastInstance';
import styles from './WeatherForecast.module.css';
import { useState } from 'react';
import useWeatherContext from '../hooks/useWeatherContext';
import DayForecastInstance from './DayForecastInstance';
const WeatherForecast = () => {
  const { days, hours, loading } = useWeatherContext();
  const [isActive, setIsActive] = useState('hourly');

  const onHourly = () => {
    setIsActive('hourly');
  };
  const onDaily = () => {
    setIsActive('daily');
  };

  if (loading) return <h1>loading ...</h1>;

  return (
    <section className={styles['forecast-section']}>
      <div className={styles['btns-wrapper']}>
        <button
          onClick={onHourly}
          className={`${styles['hourly-btn']} ${
            isActive === 'hourly' && styles.active
          }`}
        >
          Hourly
        </button>
        <button
          onClick={onDaily}
          className={`${styles['daily-btn']} ${
            isActive === 'daily' && styles.active
          }`}
        >
          Daily
        </button>
      </div>
      <div className={styles['weather-instances-wrapper']} id='scroll-bar'>
        {isActive === 'hourly'
          ? hours?.map((item, idx) => (
              <HourForecastInstance
                key={item?.time}
                index={idx}
                time={item?.time}
                temp={item?.temp}
                icon={item?.icon}
              />
            ))
          : days?.map((item, idx) => (
              <DayForecastInstance
                key={item?.date}
                index={idx}
                date={item?.date}
                icon={item?.icon}
                temp={item?.temp}
              />
            ))}
      </div>
      <div className={styles.line}></div>
    </section>
  );
};
export default WeatherForecast;
