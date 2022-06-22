import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import '../scss/CurrentTime.scss';

export default function(){
    const mainContext = useContext(MainContext);
    const {weather} = mainContext;

    return(
        weather ?
        <div className="currentTime">
            <div className='current'>
                <div className='icon'>  
                    <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}/>                                               
                </div>
                <div className='description'>
                    <h1 className="font-weight-bold">{weather.current.weather[0].main}</h1>  
                    <h1>{Math.trunc(weather.current.temp)}°C</h1>
                </div>
            </div> 
            <div className='items pl-4 mt-2'>                
                <p className='item font-weight-bold'>
                    Humidity
                    <span className='item font-weight-normal'>{weather.current.humidity}</span>
                </p>
                <p className='item font-weight-bold'>
                    Feels Like
                    <span className='item font-weight-normal'>{weather.current.feels_like}°C</span>
                </p>
                <p className='item font-weight-bold'>
                    Wind speed
                    <span className='item font-weight-normal'>{weather.current.wind_speed} km</span>
                </p>                        
            </div>                                  
            </div> : null
    );
}
