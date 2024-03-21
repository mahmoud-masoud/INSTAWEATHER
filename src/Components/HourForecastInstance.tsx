import { useMemo } from 'react';
import styles from './WeatherForecast.module.css';

type Props = {
  time: string;
  icon: string;
  temp: number;
  index: number;
};

const WeatherInstance = ({ time, icon, temp, index }: Props) => {
  const hour = useMemo(() => {
    return time?.slice(-5);
  }, [time]);

  return (
    <div className={styles['forecast-instance']}>
      <span className={styles['forecast-time']}>
        {index === 0 ? 'Now' : hour}
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
export default WeatherInstance;
