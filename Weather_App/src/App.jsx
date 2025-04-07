
import React, { useState } from 'react'
import Weather from './Components/Weather'
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  function handleCity(event) {
    setCity(event.target.value);
  }
  const apiKey = import.meta.env.VITE_APIKEY;
  async function handleWeather() {
    try {
      const [citi, country] = city.split(" ");
      const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${citi}&country=${country}`, {
        headers: {
          'X-Api-Key': apiKey
        }
      });

      // API returns an array of results, take the first one
      if (response.data && response.data.length > 0) {
        const { latitude, longitude } = response.data[0];
        const apikey2 = import.meta.env.VITE_APIKEY2;
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey2}`
        );

        setWeather(weatherResponse.data);
      } else {
        console.error('No location data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <input type="text" placeholder='Enter City' value={city} onChange={handleCity} />
      <button onClick={handleWeather}>Get Weather</button>
      {weather && <h1>{weather.name}</h1>}
      {weather && <p>Temp is {Math.round(weather.main.temp-273.15)}</p>}
      {weather && <p>The Weather is {weather.weather[0].description}</p>}
    </>
  )
}

export default App