import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndOther from './components/TempAndOther'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherServices'
import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Suggestions from './components/Suggestions'

const App = () => {

  const [query, setQuery] = useState({ q: 'bengaluru' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {

    const nameOfCity = query.q ? query.q : 'current location'
    toast.info(`Here's Your Weather Conditions of ${nameOfCity.charAt(0).toUpperCase() + nameOfCity.slice(1)}`);
    const data = await getFormattedWeatherData({ ...query, units }).then(data => {
      toast.success(`Yay! You got it.`);
      setWeather(data);

    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700'
    return "from-navy-600 to-black-900"
  }

  return (
    <div className={`mx-auto max-w-screen-lg mt-1
    bg-gradient-to-br shadow-xl shadow-gray-400
   from-cyan-600 to-blue-700 ${formatBackground()}`}>
        <div className="glassCard" >
          <Suggestions setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndOther weather={weather} units={units} />
            </>
          )}
        </div>

      {weather && (
        <>
          <Forecast title='Hourly Forecast' data={weather.hourly} />
          <Forecast title='Daily Forecast' data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={1500} hideProgressBar={true} theme="coloured" toastStyle={{background: "green"}}/>

    </div>

  );
};

export default App
