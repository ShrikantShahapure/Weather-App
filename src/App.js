import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Info from './Info';


const App = () => {


  const [city, setCity] = useState("");
  const [data, setData] = useState({});


  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &units=metric&appid=847ca795c38ae63b3e1a15fdeb508c11`)
      .then((responce) => {
        setData({
          description: responce.data.weather[0].description,
          temp: responce.data.main.temp,
          temp_max: responce.data.main.temp_max,
          humidity: responce.data.main.humidity,
          feels_like: responce.data.main.feels_like,
          city_name: responce.data.main.city_name,
        })
      })
  }


  return (
    <div className='container'>
      <h1> Weather App </h1>
      <div className='sub-container'>
        <input type="text" placeholder="Search city or country"
          value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={handleClick}> Search </button>

      </div>

      <Info text={data} />
    </div>
  )
}

export default App