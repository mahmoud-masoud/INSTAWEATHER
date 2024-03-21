import './App.css';
import Header from './Components/Header';
// import TodayWeather from './Components/TodayWeather';
import Container from './Components/UI/Container';
import WeatherInfoSummary from './Components/WeatherInfoSummary';
import WeatherForecast from './Components/WeatherForecast';
import WeatherContextProvider from './Context/weatherContext';

function App() {
  return (
    <WeatherContextProvider>
      <div className='app'>
        <Container>
          <Header />
          <main>
            <WeatherInfoSummary />
            <WeatherForecast />
          </main>
        </Container>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
