import {useState, useEffect} from 'react';
import MainContainer from './components/MainContainer';
import DetailsContainer from './components/DetailsContainer';
import {MainContext} from './context/MainContext';
import useGps from './hooks/useGps';
import moment from 'moment';
import useWeather from './hooks/useWeather';
import useLocation from './hooks/useLocation';
import './scss/app.scss';

const App = () => {

  const [state, setState] =  useState({
    city:{
      name:'',
      cityState:''
    },
    weather:{
      current:{},
      daily:[],
    },
    location:{
      lat:0,
      long:0,
    },
    date:'',
    time:'',
    dayOrNight: moment().format('LTS').slice(8),
    loading: false,
    ready: false
  });

  const hookGps = useGps();
  const hookWeather = useWeather();
  const hookLocation = useLocation();

  const getCoords = ()=>{
    let geolocation = hookGps.getLocation();
    geolocation.getCurrentPosition((data)=>{
      if(data.coords){    
        getCityAndWeather(data.coords.latitude, data.coords.longitude);        
      }
    });
  };

  const getCityAndWeather = async (lat, long)=>{
    let city = await hookLocation.getCurrentCity(lat,long);
    let weather = await  hookWeather.getWeather(lat,long);
    setState({
      ...state,
      city:{
        name:city[0].name,
        cityState:city[0].state,
      },
      weather:{
        current: weather.current,
        daily: weather.daily,
      },   
      ready: true,  
    })
  }
  
  useEffect(()=>{
    getCoords();
  },[]);

  return (
    <MainContext.Provider value={{...state, set:setState}}>
      {state.ready ? (
        <div className='App'>
          <MainContainer></MainContainer>
          <DetailsContainer></DetailsContainer>
        </div>
      ): (
        <div className='mainLoader'>
          <img src="http://openweathermap.org/img/wn/02d@4x.png"></img>             
          <h4>Loading Weather</h4>
          <div className='spinner'></div>
        </div>
      )}
    </MainContext.Provider>    
  );
}

export default App;