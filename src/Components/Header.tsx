import styles from './Header.module.css';
import useWeatherContext from '../hooks/useWeatherContext';

const Header = () => {
  const { tempUnit, setCelsiusTemp, setFahrenheitTemp } = useWeatherContext();

  return (
    <header>
      <nav>
        <h1 className={`${styles['app-name']}`}>INSTAWEATHER</h1>
        <div>
          <button
            onClick={setCelsiusTemp}
            className={`${styles['celsius-btn']} ${
              tempUnit === 'C' && styles.active
            }`}
          >
            C
          </button>
          <button
            onClick={setFahrenheitTemp}
            className={`${styles['fahrenheit-btn']} ${
              tempUnit === 'F' && styles.active
            }`}
          >
            F
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
