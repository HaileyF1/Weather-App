import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function WeatherApp() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c92cd7c9edb9a6faec3aea126dcd32bf`
  const handleClick = async(event) => {
    const response = await axios.get(url)
      setData(response.data)
      console.log('button was clicked')
      console.log(response.data)
      console.log(data.weather)
      setLocation('')
    }

  return (
    <>
      <div className="container-all">_
        
        <div className="video-container">
            <video autoPlay muted loop playsInline className="sunset-video">
              <source src="./media/sunset.mp4" type="video/mp4" />
            </video>
        </div>
      
        <div className="overlay-content">
          <h1 className="text-6xl text-center">Current Weather</h1> {/* The header was imported from the const funtion. */}
          <div className="flex flex-col justify-center items-center h-screen space-y-4 w-full">
            <div className="text-center mx-auto w-3/4 p-4 " id="information-holder">
              <div className = "text-2xl">
                <p>{data.name}</p>

              </div >
              <div className = "temperature">
                {data.main ? <p>{data.main.temp}°F - Current temp</p> : null}
              </div>
              <div className = "temp-min">
                {data.main ? <p>{data.main.temp_min}°F - Minimum temp</p> : null}
              </div>
              <div className = "temp-max">
                {data.main ? <p>{data.main.temp_max}°F - Maximum temp</p> : null}
              </div>

              <div className = "clouds-or-nah">
                {data.weather ? <p>{data.weather.main}</p> : null}
              </div>
                  <input 
                  className="hover:bg-gray-400 w-full sm:w-80"
                  placeholder="Please enter a city, state(only US), or country" 
                  type="text"
                  value={location}
                  onChange={event => setLocation(event.target.value)}></input> 
                  <br/>
                  <Button variant="outline-light" onClick={handleClick}>Submit</Button>{' '}
              </div>
          </div>
          </div>
      </div>
    </>
  )
}
export default WeatherApp



