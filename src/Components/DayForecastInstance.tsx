import { useMemo } from 'react';
import styles from './WeatherForecast.module.css';
import getDayName from '../utils/getDayName';

type Props = {
  date: string;
  icon: string;
  temp: number;
  index: number;
};

const DayForecastInstance = ({ date, icon, temp, index }: Props) => {
  const day = useMemo(() => {
    return getDayName(date);
  }, [date]);

  return (
    <div className={styles['forecast-instance']}>
      <span className={styles['forecast-time']}>
        {index === 0 ? 'Today' : day}
      </span>
      <div>
        <img className={styles['forecast-condition-icon']} src={icon} alt='' />
      </div>
      <span className={styles['forecast-temp']}>
        {temp}
        <sup>°</sup>
      </span>
    </div>
  );
};
export default DayForecastInstance;
